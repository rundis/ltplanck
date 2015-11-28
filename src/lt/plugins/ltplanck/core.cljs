(ns lt.plugins.ltplanck.core
  (:require [lt.plugins.ltplanck.form :as form]
            [lt.plugins.ltplanck.project :as proj]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.objs.clients :as clients]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.proc :as proc]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.eval :as eval]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.popup :as popup]
            [lt.objs.sidebar.clients :as scl])
  (:require-macros [lt.macros :refer [behavior]]))


(def ltplanck-plugin-dir (plugins/find-plugin "ltplanck"))
(def ltplanck-cilent-path (files/join ltplanck-plugin-dir "node" "ltplanck.js"))



(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (if (> (.indexOf out "connected") -1)
                          (do
                            (notifos/done-working)
                            (object/merge! this {:connected true}))
                          (do
                            (println out))))))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (if-not (:connected @this)
                          (object/update! this [:buffer] str data)
                          (console/error out)))))


(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (when (and (not (:connected @this)) (seq (:buffer @this)))
                        (notifos/done-working)
                        ;; hm seems to enter here even when we exit using the disconnect button in the side connect bar
                        (popup/popup! {:header "We couldn't connect."
                                       :body [:span "Looks like there was an issue trying to connect
                                              to the project. Here's what we got:" [:pre (:buffer @this)]]
                                       :buttons [{:label "close"}]})
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))



(defn start-planck-client[{:keys [path proj-path client] :as props}]
  (let [obj (object/create ::connecting-notifier client)
        client-id (clients/->id client)
        cfg (proj/project-args proj-path)]

    (notifos/working "Connecting..")
    (object/merge! client {:dir proj-path})
    (proc/exec {:command js/process.execPath
                :args [ltplanck-cilent-path tcp/port client-id proj-path (:name cfg) (:cp cfg)]
                :cwd ltplanck-plugin-dir
                :env {"ATOM_SHELL_INTERNAL_RUN_AS_NODE" 1}
                :obj obj})))


(defn try-connect [{:keys [info] :as props}]
  (let [path (:path info)
        proj-path (proj/project-path path)
        client (clients/client! :elm-client)]

    (start-planck-client {:path path
                          :proj-path proj-path
                          :client client})
    client))


(defn get-eval-code [ed]
  (if (editor/selection? ed)
    {:form-str (editor/selection ed)
     :start    (editor/->cursor ed "start")
     :end      (editor/->cursor ed "end")}
    (form/get-top-level-form ed)))

(behavior ::on-eval.one
          :desc "Planck: Eval current selection"
          :triggers #{:eval.one.planck}
          :reaction (fn [ed]
                      (when-let [form (get-eval-code ed)]
                        (let [info (conj (:info @ed)
                                         {:code (:form-str form) :meta {:start (-> form :start :line)
                                                                        :end (-> form :end :line)}})]
                          (object/raise planck :eval! {:origin ed :info info})))))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (notifos/working "Evaluating clojurscript in planck...")
                        (clients/send (eval/get-client! {:command :editor.eval.planck
                                                         :origin origin
                                                         :info info
                                                         :create try-connect})
                                      :editor.eval.planck info
                                      :only origin))))

(behavior ::eval-result
          :desc "Planck: Eval result"
          :triggers #{:editor.planck.eval.res}
          :reaction (fn [ed res]
                      (notifos/done-working "Planck cljs evaluated")
                      (object/raise ed
                                    :editor.result
                                    (:result res)
                                    {:line (-> res :meta :start)})))


(behavior ::eval-err
          :desc "Planck: Eval error"
          :triggers #{:editor.planck.eval.err}
          :reaction (fn [ed res]
                      (notifos/done-working)
                      (notifos/set-msg! "Planck cljs reported errors." {:class "error"})
                      (object/raise ed
                                    :editor.exception
                                    (:result res)
                                    {:line (-> res :meta :start)})))


(behavior ::connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (try-connect {:info {:path path}})))

(object/object* ::planck-plugin
                :tags #{:planck.plugin})

(def planck (object/create ::planck-plugin))

(scl/add-connector {:name "Planck"
                    :desc "Select a directory to serve as the root of your planck project."
                    :connect (fn []
                               (dialogs/dir planck :connect))})

(cmd/command {:command :planck.eval-one
              :desc "Planck: Eval selected cljs using planck"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :eval.one.planck)))})
