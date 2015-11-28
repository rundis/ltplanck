(ns simple
  (:require planck.core))

(def test-file "/tmp/PLANCK_TEST.txt")

(defn test-spit-slurp [content]
  (planck.core/spit test-file content)
  (println content)
  (= content
      (planck.core/slurp test-file)))

(test-spit-slurp "dilldall")

(planck.core/slurp "simple.cljs")
