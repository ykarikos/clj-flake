// Compiled by ClojureScript 1.7.170 {}
goog.provide('turtle.renderer.canvas');
goog.require('cljs.core');
goog.require('monet.canvas');
turtle.renderer.canvas.draw_op = (function turtle$renderer$canvas$draw_op(state){
if(cljs.core.truth_((function (){var or__4671__auto__ = new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return monet.canvas.move_to;
} else {
return monet.canvas.line_to;
}
});
turtle.renderer.canvas.draw_path_segments_BANG_ = (function turtle$renderer$canvas$draw_path_segments_BANG_(ctx,data){
monet.canvas.begin_path.call(null,ctx);

var data__$1 = data;
var x1 = 0.0;
var y1 = 0.0;
while(true){
if((data__$1 == null)){
return monet.canvas.close_path.call(null,monet.canvas.stroke.call(null,ctx));
} else {
var state = cljs.core.first.call(null,data__$1);
var vec__5984 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(state);
var x2 = cljs.core.nth.call(null,vec__5984,(0),null);
var y2 = cljs.core.nth.call(null,vec__5984,(1),null);
var temp__4425__auto___5985 = new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4425__auto___5985)){
var color_5986 = temp__4425__auto___5985;
monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,monet.canvas.stroke.call(null,monet.canvas.fill.call(null,monet.canvas.fill_style.call(null,monet.canvas.close_path.call(null,ctx),color_5986)))),x1,y1);
} else {
}

var temp__4425__auto___5987 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4425__auto___5987)){
var color_5988 = temp__4425__auto___5987;
monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,monet.canvas.stroke_style.call(null,monet.canvas.close_path.call(null,monet.canvas.stroke.call(null,ctx)),color_5988)),x1,y1);
} else {
}

cljs.core.apply.call(null,turtle.renderer.canvas.draw_op.call(null,state),ctx,new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(state));

var G__5989 = cljs.core.next.call(null,data__$1);
var G__5990 = x2;
var G__5991 = y2;
data__$1 = G__5989;
x1 = G__5990;
y1 = G__5991;
continue;
}
break;
}
});
turtle.renderer.canvas.__GT_canvas = (function turtle$renderer$canvas$__GT_canvas(ctx){
return (function (data,p__5994,bounds,matrix){
var vec__5995 = p__5994;
var w = cljs.core.nth.call(null,vec__5995,(0),null);
var h = cljs.core.nth.call(null,vec__5995,(1),null);
console.log(cljs.core.pr_str.call(null,"screen-size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)));

console.log(cljs.core.pr_str.call(null,"bounds",bounds));

console.log(cljs.core.pr_str.call(null,"matrix",matrix));

return turtle.renderer.canvas.draw_path_segments_BANG_.call(null,monet.canvas.stroke_cap.call(null,monet.canvas.stroke_width.call(null,cljs.core.apply.call(null,monet.canvas.transform,ctx,matrix),(3)),new cljs.core.Keyword(null,"square","square",812434677)),data);
});
});

//# sourceMappingURL=canvas.js.map