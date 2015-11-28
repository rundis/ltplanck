(ns hello.greeter
  [:require [planck.core :as core]])

(defn greet [a]
  (str "Hello " a "!"))

(defn print-args []
  (println core/*command-line-args*))

;(println core/*command-line-args*)

;(println (greet "hello"))

(defn -main [n]
  (println (greet n)))
