(ns lt.plugins.ltplanck.project
  (:require [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [cljs.reader :as reader]
            [clojure.string :as s]))

(def ltplanck-plugin-dir (plugins/find-plugin "ltplanck"))

(defn project-path
  "Find project path based on given path"
  [path]
  (if-not path
    (files/join ltplanck-plugin-dir "scratchdir")
    (let [prj (files/walk-up-find path "planck-project.clj")]
      (cond
       prj (files/parent prj)
       (files/dir? path) path
       :else (files/parent path)))))

(defn parse-project [project-path]
  (let [prj (files/join project-path "planck-project.clj")]
    (if-not (files/exists? prj)
      nil
      (-> (files/open-sync prj)
          :content
          reader/read-string))))


(defn project-args [project-path]
  (if-let [cfg (parse-project project-path)]
    {:name (or (:name cfg) (files/basename project-path))
     :cp (->> (concat (:dependencies cfg) (:src cfg))
              (s/join ":"))}
    {:name (files/basename project-path)}))


