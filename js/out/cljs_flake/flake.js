// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_flake.flake');
goog.require('cljs.core');
cljs_flake.flake.base_angle = (60);
cljs_flake.flake.there_and_back = (function cljs_flake$flake$there_and_back(len){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fwd","fwd",-1500039010),len,new cljs.core.Keyword(null,"left","left",-399115937),(180),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),len], null);
});
cljs_flake.flake.arrow_start = (function cljs_flake$flake$arrow_start(len){
var fifth = (len / (5));
var tenth = (len / (10));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fwd","fwd",-1500039010),len,new cljs.core.Keyword(null,"left","left",-399115937),(180),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),fifth,new cljs.core.Keyword(null,"left","left",-399115937),(140)], null),cljs_flake.flake.there_and_back.call(null,fifth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),(100)], null),cljs_flake.flake.there_and_back.call(null,fifth),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),(40),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),tenth,new cljs.core.Keyword(null,"left","left",-399115937),(140)], null),cljs_flake.flake.there_and_back.call(null,fifth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),(100)], null),cljs_flake.flake.there_and_back.call(null,fifth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),(40)], null));
});
cljs_flake.flake.cos = (function cljs_flake$flake$cos(deg){
var rad = ((deg / 180.0) * (Math["PI"]));
return Math.cos(rad);
});
cljs_flake.flake.sector = (function cljs_flake$flake$sector(angle,len){
var angle_b = (cljs_flake.flake.base_angle - angle);
var angle_c = ((120) - (2.0 * angle));
var angle_d = ((180) - angle);
var sector_len = ((len / 2.0) / cljs_flake.flake.cos.call(null,angle_b));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),angle,new cljs.core.Keyword(null,"fwd","fwd",-1500039010),sector_len,new cljs.core.Keyword(null,"left","left",-399115937),angle_c,new cljs.core.Keyword(null,"fwd","fwd",-1500039010),sector_len,new cljs.core.Keyword(null,"right","right",-452581833),angle_d,new cljs.core.Keyword(null,"fwd","fwd",-1500039010),len], null);
});
cljs_flake.flake.arrow = (function cljs_flake$flake$arrow(len){
return cljs.core.concat.call(null,cljs_flake.flake.arrow_start.call(null,len),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fwd","fwd",-1500039010),((len * (7)) / (10)),new cljs.core.Keyword(null,"right","right",-452581833),((2) * cljs_flake.flake.base_angle)], null));
});
cljs_flake.flake.simple_flake = (function cljs_flake$flake$simple_flake(len){
var single_arrow = cljs_flake.flake.arrow.call(null,len);
var cycle_len = ((6) * cljs.core.count.call(null,single_arrow));
return cljs.core.take.call(null,cycle_len,cljs.core.cycle.call(null,single_arrow));
});
cljs_flake.flake.flake = (function cljs_flake$flake$flake(len,star_len,angle){
var star_gap = ((len - star_len) - ((len * (3)) / (10)));
var single_part = cljs.core.concat.call(null,cljs_flake.flake.arrow_start.call(null,len),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fwd","fwd",-1500039010),star_gap], null),cljs_flake.flake.sector.call(null,angle,star_len),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),cljs_flake.flake.base_angle], null));
var cycle_len = ((6) * cljs.core.count.call(null,single_part));
return cljs.core.take.call(null,cycle_len,cljs.core.cycle.call(null,single_part));
});
cljs_flake.flake.complex_flake = (function cljs_flake$flake$complex_flake(len,star_len,angle){
var flake = cljs_flake.flake.flake.call(null,len,star_len,angle);
var small_arrow = cljs_flake.flake.arrow.call(null,((len * (2)) / (3)));
var cycle_len = ((6) * cljs.core.count.call(null,small_arrow));
var extra_arrows = cljs.core.take.call(null,cycle_len,cljs.core.cycle.call(null,small_arrow));
return cljs.core.concat.call(null,flake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),(cljs_flake.flake.base_angle / (2))], null),extra_arrows);
});

//# sourceMappingURL=flake.js.map