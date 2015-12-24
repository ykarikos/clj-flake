(defproject cljs-flake "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [rm-hull/turtle "0.1.8"]]
  :plugins [[lein-cljsbuild "1.1.2"]]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:output-to "js/app.js"
                                   :output-dir "js/out/"
                                   :source-map true
                                   :optimizations :none
                                   :main "cljs-flake.core"
                                   :pretty-print true }}]})
