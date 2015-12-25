// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_flake.core');
goog.require('cljs.core');
goog.require('turtle.core');
goog.require('turtle.renderer.canvas');
goog.require('cljs_flake.flake');
cljs_flake.core.max_width = (8000);
cljs_flake.core.max_height = (6000);
cljs_flake.core.rand_range = (function cljs_flake$core$rand_range(min,max){
return (min + cljs.core.rand_int.call(null,(max - min)));
});
cljs_flake.core.rand_flake = (function cljs_flake$core$rand_flake(flake){
var len = cljs_flake.core.rand_range.call(null,(100),(600));
var star_len = ((len / (3)) + cljs_flake.core.rand_range.call(null,(30),(len / (3))));
return flake.call(null,len,star_len,cljs_flake.core.rand_range.call(null,(20),(45)));
});
cljs_flake.core.goto_random = (function cljs_flake$core$goto_random(){
var x = cljs.core.rand_int.call(null,cljs_flake.core.max_width);
var y = cljs.core.rand_int.call(null,cljs_flake.core.max_height);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),y,new cljs.core.Keyword(null,"right","right",-452581833),(90),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),x,new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"down","down",1565245570)], null);
});
cljs_flake.core.combo1 = (function cljs_flake$core$combo1(){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.rand_int.call(null,(360))], null),cljs_flake.core.rand_flake.call(null,cljs_flake.flake.flake),cljs_flake.core.goto_random.call(null),cljs_flake.flake.simple_flake.call(null,cljs_flake.core.rand_range.call(null,(50),(200))),cljs_flake.core.goto_random.call(null),cljs_flake.core.rand_flake.call(null,cljs_flake.flake.complex_flake),cljs_flake.core.goto_random.call(null));
});
cljs_flake.core.simple_flakes = (function cljs_flake$core$simple_flakes(){
return cljs.core.concat.call(null,cljs_flake.flake.simple_flake.call(null,cljs_flake.core.rand_range.call(null,(50),(150))),cljs_flake.core.goto_random.call(null,(800),(3000)));
});
cljs_flake.core.combo2 = (function cljs_flake$core$combo2(){
return cljs.core.concat.call(null,cljs.core.repeatedly.call(null,(4),cljs_flake.core.simple_flakes),cljs_flake.core.combo1.call(null),cljs_flake.core.simple_flakes.call(null),cljs_flake.core.goto_random.call(null,(2500),(4000)));
});
cljs_flake.core.scenery = (function cljs_flake$core$scenery(){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeatedly.call(null,(15),cljs_flake.core.combo2)));
});
cljs_flake.core.canvas = document.getElementById("canvas");
cljs_flake.core.ctx = cljs_flake.core.canvas.getContext("2d");
cljs_flake.core.canvas.width = cljs_flake.core.max_width;
cljs_flake.core.canvas.height = cljs_flake.core.max_height;
turtle.core.draw_BANG_.call(null,turtle.renderer.canvas.__GT_canvas.call(null,cljs_flake.core.ctx),cljs_flake.core.scenery.call(null));

//# sourceMappingURL=core.js.map