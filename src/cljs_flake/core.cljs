(ns cljs-flake.core
  (:use [turtle.core :only [draw!]]
        [turtle.renderer.canvas :only [->canvas]])
  (:require [cljs-flake.flake :as flake]))

(def max-width 8000)
(def max-height 6000)

(defn- rand-range
  [min max]
  (+ min (rand-int (- max min))))

(defn rand-flake
  [flake]
  (let [len (rand-range 100 600)
        star-len (+ (/ len 3) (rand-range 30 (/ len 3)))]
   (flake len star-len (rand-range 20 45))))

(defn goto-random
  []
  (let [x (rand-int max-width)
        y (rand-int max-height)]
    [:origin
     :pen :up
     :fwd y
     :right 90
     :fwd x
     :pen :down]))

(defn combo1
  []
  (concat
   [:right (rand-int 360)]
   (rand-flake flake/flake)
   (goto-random)
   (flake/simple-flake (rand-range 50 200))
   (goto-random)
   (rand-flake flake/complex-flake)
   (goto-random)))

(defn simple-flakes
  []
  (concat
   (flake/simple-flake (rand-range 50 150))
   (goto-random 800 3000)))

(defn combo2
  []
  (concat
   (repeatedly 4 simple-flakes)
   (combo1)
   (simple-flakes)
   (goto-random 2500 4000)))

(defn scenery
  []
  (concat
   [:color :blue]
   (->> combo2
        (repeatedly 15)
        (apply concat))))

(def canvas (js/document.getElementById "canvas"))

(def ctx (.getContext canvas "2d"))

(set! (.-width canvas) max-width)
(set! (.-height canvas) max-height)

(draw! (->canvas ctx) (scenery))
