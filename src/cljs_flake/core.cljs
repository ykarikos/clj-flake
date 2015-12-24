(ns cljs-flake.core
  (:use [turtle.core :only [draw!]]
        [turtle.renderer.canvas :only [->canvas]])
  (:require [cljs-flake.flake :as flake]))

(defn- rand-range
  [min max]
  (+ min (rand-int (- max min))))

(defn rand-flake
  [flake]
  (let [len (rand-range 300 600)
        star-len (+ (/ len 2) (rand-range 30 (/ len 3)))]
   (flake len star-len (rand-range 20 45))))

(defn goto-random
  [min-distance max-distance]
  (let [distance (rand-range min-distance max-distance)
        angle (rand-int 360)]
    [:pen :up
     :right angle
     :fwd distance
     :pen :down]))

(defn combo1
  []
  (concat
   [:right (rand-int 360)]
   (rand-flake flake/flake)
   (goto-random 1000 2500)
   (flake/simple-flake (rand-range 100 200))
   (goto-random 1200 2000)
   (rand-flake flake/complex-flake)
   (goto-random 2200 3500)))

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
        (repeatedly 13)
        (apply concat))))

(def canvas (js/document.getElementById "canvas"))

(def ctx (.getContext canvas "2d"))

(set! (.-width canvas) 3000)
(set! (.-height canvas) 2000)

(draw! (->canvas ctx) (flake/simple-flake 100))
