(ns clj-turtle.core
  (:require [turtle.core :refer [draw!]]
            [turtle.renderer.vector :refer [->svg]]))

(defn- there-and-back
  [len]
  [:fwd len :left 180 :fwd len])

(defn- arrow
  [len]
  (let [fifth (/ len 5)
        tenth (/ len 10)]
    (concat 
     [:fwd len :left 180 :fwd fifth :left 140]
     (there-and-back fifth)
     [:right 100]
     (there-and-back fifth)
     [:right 40 :fwd tenth :left 140]
     (there-and-back fifth)
     [:right 100]
     (there-and-back fifth)
     [:right 40])))

(defn- sector
  [angle len]
  (let [angle-b (- 60 angle)
        angle-c (- 120 (* 2 angle))
        angle-d (- 180 angle)
        sector-len (/ (/ len 2) (Math/cos (Math/toRadians angle-b)))]
    [:left angle :fwd sector-len
     :left angle-c :fwd sector-len
     :right angle-d :fwd len]))

(defn draw-flake [filename len star-len angle]
  (let [star-gap (- len star-len (* (/ len 10) 3))
        single-part (concat
                     (arrow len)
                     [:fwd star-gap]
                     (sector angle star-len)
                     [:right 60])
        cycle-len (* 6 (count single-part))
        flake (take cycle-len (cycle single-part))]
    (spit filename (draw! ->svg flake [800 600]))))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
