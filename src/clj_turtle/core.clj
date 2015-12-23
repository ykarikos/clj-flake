(ns clj-turtle.core
  (:require [turtle.core :refer [draw!]]
            [turtle.renderer.vector :refer [->svg]]))

(def base-angle 60)

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
  (let [angle-b (- base-angle angle)
        angle-c (- 120 (* 2 angle))
        angle-d (- 180 angle)
        sector-len (/ (/ len 2) (Math/cos (Math/toRadians angle-b)))]
    [:left angle :fwd sector-len
     :left angle-c :fwd sector-len
     :right angle-d :fwd len]))

(defn simple-flake
  [len]
  (let [single-arrow (concat
                      (arrow len)
                      [:fwd (* len 7/10)
                       :right (* 2 base-angle)])
        cycle-len (* 6 (count single-arrow))]
    (take cycle-len (cycle single-arrow))))

(defn flake
  [len star-len angle]
  (let [star-gap (- len star-len (* len 3/10))
        single-part (concat
                     (arrow len)
                     [:fwd star-gap]
                     (sector angle star-len)
                     [:right base-angle])
        cycle-len (* 6 (count single-part))]
    (take cycle-len (cycle single-part))))

(defn draw-svg [filename commands]
  (spit filename (draw! ->svg commands [200 200])))

