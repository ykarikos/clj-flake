// Compiled by ClojureScript 1.7.170 {}
goog.provide('turtle.core');
goog.require('cljs.core');
turtle.core.colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"black","black",1294279647),"#663300","#68FF33"], null);
/**
 * Calculates the smallest and largest [x,y] points
 */
turtle.core.bounding_box = (function turtle$core$bounding_box(coords){
var vec__5785 = cljs.core.apply.call(null,cljs.core.juxt.call(null,cljs.core.min,cljs.core.max),cljs.core.map.call(null,cljs.core.first,coords));
var min_x = cljs.core.nth.call(null,vec__5785,(0),null);
var max_x = cljs.core.nth.call(null,vec__5785,(1),null);
var vec__5786 = cljs.core.apply.call(null,cljs.core.juxt.call(null,cljs.core.min,cljs.core.max),cljs.core.map.call(null,cljs.core.second,coords));
var min_y = cljs.core.nth.call(null,vec__5786,(0),null);
var max_y = cljs.core.nth.call(null,vec__5786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,min_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,max_y], null)], null);
});
turtle.core.extend_margin = (function turtle$core$extend_margin(p__5787,margin){
var vec__5791 = p__5787;
var vec__5792 = cljs.core.nth.call(null,vec__5791,(0),null);
var min_x = cljs.core.nth.call(null,vec__5792,(0),null);
var min_y = cljs.core.nth.call(null,vec__5792,(1),null);
var vec__5793 = cljs.core.nth.call(null,vec__5791,(1),null);
var max_x = cljs.core.nth.call(null,vec__5793,(0),null);
var max_y = cljs.core.nth.call(null,vec__5793,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(min_x - margin),(min_y - margin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(max_x + margin),(max_y + margin)], null)], null);
});
turtle.core.adjust_to_zero = (function turtle$core$adjust_to_zero(p__5794){
var vec__5798 = p__5794;
var vec__5799 = cljs.core.nth.call(null,vec__5798,(0),null);
var min_x = cljs.core.nth.call(null,vec__5799,(0),null);
var min_y = cljs.core.nth.call(null,vec__5799,(1),null);
var vec__5800 = cljs.core.nth.call(null,vec__5798,(1),null);
var max_x = cljs.core.nth.call(null,vec__5800,(0),null);
var max_y = cljs.core.nth.call(null,vec__5800,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(max_x - min_x),(max_y - min_y)], null)], null);
});
turtle.core.radians = (Math.PI / 180.0);
turtle.core.deg__GT_rad = (function turtle$core$deg__GT_rad(theta){
return (theta * turtle.core.radians);
});
/**
 * Given a state (containing a heading), move forward by the supplied
 * distance.
 */
turtle.core.move_forward = (function turtle$core$move_forward(state,dist){
var rad = turtle.core.deg__GT_rad.call(null,new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(state));
var vec__5802 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(state);
var x = cljs.core.nth.call(null,vec__5802,(0),null);
var y = cljs.core.nth.call(null,vec__5802,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dist * Math.cos(rad))),(y + (dist * Math.sin(rad)))], null));
});
/**
 * Given a state, and an operation (either the + or - function),
 * update such that the new heading is altered by the angle
 */
turtle.core.turn = (function turtle$core$turn(op,state,angle){
var heading = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.mod.call(null,op.call(null,heading,angle),(360)));
});
turtle.core.update_color = (function turtle$core$update_color(state,color){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"color","color",1011675173),color);
});
turtle.core.update_fill = (function turtle$core$update_fill(state,color){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"fill","fill",883462889),color);
});
turtle.core.color_index = (function turtle$core$color_index(state,index){
return turtle.core.update_color.call(null,state,cljs.core.get.call(null,turtle.core.colors,index));
});
turtle.core.push_state = (function turtle$core$push_state(state,_){
var saved = cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"heading","heading",-1312171873)], null));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (saved){
return (function (p1__1204_SHARP_){
return cljs.core.conj.call(null,p1__1204_SHARP_,saved);
});})(saved))
);
});
turtle.core.pop_state = (function turtle$core$pop_state(state,_){
var restored = cljs.core.peek.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.call(null,cljs.core.merge.call(null,state,restored,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.pop);
});
turtle.core.goto_origin = (function turtle$core$goto_origin(state,_){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),(90),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358),true], null));
});
turtle.core.pen_ops = (function turtle$core$pen_ops(state,pen){
if(cljs.core._EQ_.call(null,pen,new cljs.core.Keyword(null,"up","up",-269712113))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"move","move",-2110884309),true);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"move","move",-2110884309));
}
});
turtle.core.state_mapper = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"restore","restore",267172424),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),new cljs.core.Keyword(null,"left","left",-399115937)],[turtle.core.update_color,turtle.core.color_index,turtle.core.pop_state,turtle.core.update_fill,turtle.core.push_state,turtle.core.pen_ops,cljs.core.partial.call(null,turtle.core.turn,cljs.core._),turtle.core.goto_origin,turtle.core.move_forward,cljs.core.partial.call(null,turtle.core.turn,cljs.core._PLUS_)]);
/**
 * Evolves the current state and a given command to determine the next state,
 * e.g. if the current position is (4,3) pointing north, then move to (4,4)
 * and turn in to the heading relative to the command.
 */
turtle.core.next_state = (function turtle$core$next_state(var_args){
var args5803 = [];
var len__5729__auto___5809 = arguments.length;
var i__5730__auto___5810 = (0);
while(true){
if((i__5730__auto___5810 < len__5729__auto___5809)){
args5803.push((arguments[i__5730__auto___5810]));

var G__5811 = (i__5730__auto___5810 + (1));
i__5730__auto___5810 = G__5811;
continue;
} else {
}
break;
}

var G__5805 = args5803.length;
switch (G__5805) {
case 0:
return turtle.core.next_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return turtle.core.next_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return turtle.core.next_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5803.length)].join('')));

}
});

turtle.core.next_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

turtle.core.next_state.cljs$core$IFn$_invoke$arity$1 = (function (curr_state){
return curr_state;
});

turtle.core.next_state.cljs$core$IFn$_invoke$arity$2 = (function (curr_state,p__5806){
var vec__5807 = p__5806;
var cmd = cljs.core.nth.call(null,vec__5807,(0),null);
var vec__5808 = cljs.core.nthnext.call(null,vec__5807,(1));
var peek_ahead = cljs.core.nth.call(null,vec__5808,(0),null);
var temp__4423__auto__ = cljs.core.get.call(null,turtle.core.state_mapper,cmd);
if(cljs.core.truth_(temp__4423__auto__)){
var update_fn = temp__4423__auto__;
return update_fn.call(null,cljs.core.select_keys.call(null,curr_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"move","move",-2110884309)], null)),peek_ahead);
} else {
return curr_state;
}
});

turtle.core.next_state.cljs$lang$maxFixedArity = 2;
turtle.core.process = (function turtle$core$process(cmds){
var init_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),(90),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reductions.call(null,turtle.core.next_state,init_state,cljs.core.filter.call(null,((function (init_state){
return (function (p1__1205_SHARP_){
return turtle.core.state_mapper.call(null,cljs.core.first.call(null,p1__1205_SHARP_));
});})(init_state))
,cljs.core.partition_all.call(null,(2),(1),cljs.core.flatten.call(null,cmds))));
});
/**
 * Calculates an affine transform matrix which will scale a drawing 
 * constrained by the min/max bounds to the given screen co-ords. Note
 * that the drawing is flipped so (0,0) will be represented at (or near)
 * the lower edge, not the upper edge.
 */
turtle.core.calc_matrix_transform = (function turtle$core$calc_matrix_transform(p__5813,p__5814){
var vec__5819 = p__5813;
var screen_x = cljs.core.nth.call(null,vec__5819,(0),null);
var screen_y = cljs.core.nth.call(null,vec__5819,(1),null);
var vec__5820 = p__5814;
var vec__5821 = cljs.core.nth.call(null,vec__5820,(0),null);
var min_x = cljs.core.nth.call(null,vec__5821,(0),null);
var min_y = cljs.core.nth.call(null,vec__5821,(1),null);
var vec__5822 = cljs.core.nth.call(null,vec__5820,(1),null);
var max_x = cljs.core.nth.call(null,vec__5822,(0),null);
var max_y = cljs.core.nth.call(null,vec__5822,(1),null);
var scale_x = (screen_x / (max_x - min_x));
var scale_y = (screen_y / (max_y - min_y));
var scale = (function (){var x__5009__auto__ = scale_x;
var y__5010__auto__ = scale_y;
return ((x__5009__auto__ < y__5010__auto__) ? x__5009__auto__ : y__5010__auto__);
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,0.0,0.0,(- scale),(scale * (- min_x)),(scale * max_y)], null);
});
turtle.core.draw_BANG_ = (function turtle$core$draw_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5828 = arguments.length;
var i__5730__auto___5829 = (0);
while(true){
if((i__5730__auto___5829 < len__5729__auto___5828)){
args__5736__auto__.push((arguments[i__5730__auto___5829]));

var G__5830 = (i__5730__auto___5829 + (1));
i__5730__auto___5829 = G__5830;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return turtle.core.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

turtle.core.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,cmds,p__5826){
var vec__5827 = p__5826;
var screen_area = cljs.core.nth.call(null,vec__5827,(0),null);
var data = turtle.core.process.call(null,cmds);
var bounds = turtle.core.extend_margin.call(null,turtle.core.bounding_box.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"coords","coords",-599429112),data)),(5));
var output = (((screen_area == null))?cljs.core.second.call(null,turtle.core.adjust_to_zero.call(null,bounds)):screen_area);
var matrix = turtle.core.calc_matrix_transform.call(null,output,bounds);
return renderer.call(null,data,output,bounds,matrix);
});

turtle.core.draw_BANG_.cljs$lang$maxFixedArity = (2);

turtle.core.draw_BANG_.cljs$lang$applyTo = (function (seq5823){
var G__5824 = cljs.core.first.call(null,seq5823);
var seq5823__$1 = cljs.core.next.call(null,seq5823);
var G__5825 = cljs.core.first.call(null,seq5823__$1);
var seq5823__$2 = cljs.core.next.call(null,seq5823__$1);
return turtle.core.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5824,G__5825,seq5823__$2);
});
turtle.core.move_op_QMARK_ = (function turtle$core$move_op_QMARK_(command){
var or__4671__auto__ = new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358).cljs$core$IFn$_invoke$arity$1(command);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(command);
}
});

//# sourceMappingURL=core.js.map