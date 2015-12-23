(ns clj-flake.core
  (:require [turtle.core :refer [draw!]]
            [turtle.renderer.vector :refer [->svg]]
            [clj-flake.flake :refer :all]))

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
   (rand-flake flake)
   (goto-random 1000 2500)
   (simple-flake (rand-range 100 200))
   (goto-random 1200 2000)
   (rand-flake complex-flake)
   (goto-random 2200 3500)))

(defn simple-flakes
  []
  (concat
   (simple-flake (rand-range 50 150))
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

(defn draw-svg [filename commands]
  (spit filename (draw! ->svg commands [1200 800])))

