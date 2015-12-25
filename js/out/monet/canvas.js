// Compiled by ClojureScript 1.7.170 {}
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
monet.canvas.get_context = (function monet$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name.call(null,type));
});
monet.canvas.begin_path = (function monet$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
monet.canvas.close_path = (function monet$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
monet.canvas.fill = (function monet$canvas$fill(ctx){
ctx.fill();

return ctx;
});
monet.canvas.stroke = (function monet$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__5835){
var map__5838 = p__5835;
var map__5838__$1 = ((((!((map__5838 == null)))?((((map__5838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5838):map__5838);
var x = cljs.core.get.call(null,map__5838__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5838__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__5838__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__5838__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * DEPRECATED. Prefer fill-rect
 */
monet.canvas.rect = (function monet$canvas$rect(ctx,p__5840){
var map__5843 = p__5840;
var map__5843__$1 = ((((!((map__5843 == null)))?((((map__5843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5843):map__5843);
var x = cljs.core.get.call(null,map__5843__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5843__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__5843__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__5843__$1,new cljs.core.Keyword(null,"h","h",1109658740));
monet.canvas.begin_path.call(null,ctx);

ctx.rect(x,y,w,h);

monet.canvas.close_path.call(null,ctx);

monet.canvas.fill.call(null,ctx);

return ctx;
});
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__5845){
var map__5848 = p__5845;
var map__5848__$1 = ((((!((map__5848 == null)))?((((map__5848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5848):map__5848);
var x = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.strokeRect(x,y,w,h);

return ctx;
});
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__5850){
var map__5853 = p__5850;
var map__5853__$1 = ((((!((map__5853 == null)))?((((map__5853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5853):map__5853);
var x = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__5853__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.fillRect(x,y,w,h);

return ctx;
});
monet.canvas.circle = (function monet$canvas$circle(ctx,p__5855){
var map__5858 = p__5855;
var map__5858__$1 = ((((!((map__5858 == null)))?((((map__5858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5858):map__5858);
var x = cljs.core.get.call(null,map__5858__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5858__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__5858__$1,new cljs.core.Keyword(null,"r","r",-471384190));
monet.canvas.begin_path.call(null,ctx);

ctx.arc(x,y,r,(0),(Math.PI * (2)),true);

monet.canvas.close_path.call(null,ctx);

monet.canvas.fill.call(null,ctx);

return ctx;
});
monet.canvas.text = (function monet$canvas$text(ctx,p__5860){
var map__5863 = p__5860;
var map__5863__$1 = ((((!((map__5863 == null)))?((((map__5863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5863):map__5863);
var text__$1 = cljs.core.get.call(null,map__5863__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var x = cljs.core.get.call(null,map__5863__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5863__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.fillText(text__$1,x,y);

return ctx;
});
monet.canvas.font_style = (function monet$canvas$font_style(ctx,font){
ctx.font = font;

return ctx;
});
monet.canvas.fill_style = (function monet$canvas$fill_style(ctx,color){
ctx.fillStyle = cljs.core.name.call(null,color);

return ctx;
});
monet.canvas.stroke_style = (function monet$canvas$stroke_style(ctx,color){
ctx.strokeStyle = cljs.core.name.call(null,color);

return ctx;
});
monet.canvas.stroke_width = (function monet$canvas$stroke_width(ctx,w){
ctx.lineWidth = w;

return ctx;
});
monet.canvas.stroke_cap = (function monet$canvas$stroke_cap(ctx,cap){
ctx.lineCap = cljs.core.name.call(null,cap);

return ctx;
});
monet.canvas.move_to = (function monet$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
monet.canvas.line_to = (function monet$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
monet.canvas.alpha = (function monet$canvas$alpha(ctx,a){
ctx.globalAlpha = a;

return ctx;
});
monet.canvas.composition_operation = (function monet$canvas$composition_operation(ctx,operation){
ctx.globalCompositionOperation = cljs.core.name.call(null,operation);

return ctx;
});
monet.canvas.text_align = (function monet$canvas$text_align(ctx,alignment){
ctx.textAlign = cljs.core.name.call(null,alignment);

return ctx;
});
monet.canvas.text_baseline = (function monet$canvas$text_baseline(ctx,alignment){
ctx.textBaseline = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
monet.canvas.get_pixel = (function monet$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(imgd[(0)]),new cljs.core.Keyword(null,"green","green",-945526839),(imgd[(1)]),new cljs.core.Keyword(null,"blue","blue",-622100620),(imgd[(2)]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(imgd[(3)])], null);
});
monet.canvas.save = (function monet$canvas$save(ctx){
ctx.save();

return ctx;
});
monet.canvas.restore = (function monet$canvas$restore(ctx){
ctx.restore();

return ctx;
});
monet.canvas.rotate = (function monet$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
monet.canvas.scale = (function monet$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
monet.canvas.translate = (function monet$canvas$translate(ctx,x,y){
ctx.translate(x,y);

return ctx;
});
/**
 * Multiplies a custom transformation matrix to the existing
 * HTML5 canvas transformation according to the follow convention:
 * 
 * [ x']   [ m11 m21 dx ] [ x ]
 * [ y'] = [ m12 m22 dy ] [ y ]
 * [ 1 ]   [ 0   0   1  ] [ 1 ]
 */
monet.canvas.transform = (function monet$canvas$transform(var_args){
var args5865 = [];
var len__5729__auto___5871 = arguments.length;
var i__5730__auto___5872 = (0);
while(true){
if((i__5730__auto___5872 < len__5729__auto___5871)){
args5865.push((arguments[i__5730__auto___5872]));

var G__5873 = (i__5730__auto___5872 + (1));
i__5730__auto___5872 = G__5873;
continue;
} else {
}
break;
}

var G__5867 = args5865.length;
switch (G__5867) {
case 7:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5865.length)].join('')));

}
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__5868){
var map__5869 = p__5868;
var map__5869__$1 = ((((!((map__5869 == null)))?((((map__5869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5869):map__5869);
var m11 = cljs.core.get.call(null,map__5869__$1,new cljs.core.Keyword(null,"m11","m11",-1747137747));
var m12 = cljs.core.get.call(null,map__5869__$1,new cljs.core.Keyword(null,"m12","m12",-1234809182));
var m21 = cljs.core.get.call(null,map__5869__$1,new cljs.core.Keyword(null,"m21","m21",1822226849));
var m22 = cljs.core.get.call(null,map__5869__$1,new cljs.core.Keyword(null,"m22","m22",1714612893));
var dx = cljs.core.get.call(null,map__5869__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__5869__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$lang$maxFixedArity = 7;
/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
monet.canvas.draw_image = (function monet$canvas$draw_image(var_args){
var args5875 = [];
var len__5729__auto___5884 = arguments.length;
var i__5730__auto___5885 = (0);
while(true){
if((i__5730__auto___5885 < len__5729__auto___5884)){
args5875.push((arguments[i__5730__auto___5885]));

var G__5886 = (i__5730__auto___5885 + (1));
i__5730__auto___5885 = G__5886;
continue;
} else {
}
break;
}

var G__5877 = args5875.length;
switch (G__5877) {
case 4:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5875.length)].join('')));

}
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__5878){
var map__5879 = p__5878;
var map__5879__$1 = ((((!((map__5879 == null)))?((((map__5879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5879):map__5879);
var params = map__5879__$1;
var sh = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"sh","sh",-682444007));
var sw = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var x = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dh = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"dh","dh",528137731));
var dx = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var w = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"w","w",354169001));
var sy = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var dy = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var h = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var dw = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"dw","dw",-821060841));
var sx = cljs.core.get.call(null,map__5879__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var pred__5881_5888 = cljs.core._EQ_;
var expr__5882_5889 = cljs.core.count.call(null,params);
if(cljs.core.truth_(pred__5881_5888.call(null,(2),expr__5882_5889))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_(pred__5881_5888.call(null,(4),expr__5882_5889))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_(pred__5881_5888.call(null,(8),expr__5882_5889))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__5882_5889)].join('')));
}
}
}

return ctx;
});

monet.canvas.draw_image.cljs$lang$maxFixedArity = 4;
monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var args5890 = [];
var len__5729__auto___5896 = arguments.length;
var i__5730__auto___5897 = (0);
while(true){
if((i__5730__auto___5897 < len__5729__auto___5896)){
args5890.push((arguments[i__5730__auto___5897]));

var G__5898 = (i__5730__auto___5897 + (1));
i__5730__auto___5897 = G__5898;
continue;
} else {
}
break;
}

var G__5892 = args5890.length;
switch (G__5892) {
case 5:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5890.length)].join('')));

}
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__5893){
var map__5894 = p__5893;
var map__5894__$1 = ((((!((map__5894 == null)))?((((map__5894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5894):map__5894);
var cpx = cljs.core.get.call(null,map__5894__$1,new cljs.core.Keyword(null,"cpx","cpx",296463436));
var cpy = cljs.core.get.call(null,map__5894__$1,new cljs.core.Keyword(null,"cpy","cpy",-1203422450));
var x = cljs.core.get.call(null,map__5894__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5894__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;
monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var args5900 = [];
var len__5729__auto___5906 = arguments.length;
var i__5730__auto___5907 = (0);
while(true){
if((i__5730__auto___5907 < len__5729__auto___5906)){
args5900.push((arguments[i__5730__auto___5907]));

var G__5908 = (i__5730__auto___5907 + (1));
i__5730__auto___5907 = G__5908;
continue;
} else {
}
break;
}

var G__5902 = args5900.length;
switch (G__5902) {
case 7:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5900.length)].join('')));

}
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__5903){
var map__5904 = p__5903;
var map__5904__$1 = ((((!((map__5904 == null)))?((((map__5904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5904):map__5904);
var cp1x = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"cp1x","cp1x",465245137));
var cp1y = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"cp1y","cp1y",628283543));
var cp2x = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749));
var cp2y = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"cp2y","cp2y",903335801));
var x = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5904__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;
monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__5910){
var map__5913 = p__5910;
var map__5913__$1 = ((((!((map__5913 == null)))?((((map__5913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5913):map__5913);
var x = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__5913__$1,new cljs.core.Keyword(null,"r","r",-471384190));

monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
monet.canvas.add_entity = (function monet$canvas$add_entity(mc,k,ent){
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function monet$canvas$remove_entity(mc,k){
return delete new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function monet$canvas$get_entity(mc,k){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
monet.canvas.update_entity = (function monet$canvas$update_entity(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5919 = arguments.length;
var i__5730__auto___5920 = (0);
while(true){
if((i__5730__auto___5920 < len__5729__auto___5919)){
args__5736__auto__.push((arguments[i__5730__auto___5920]));

var G__5921 = (i__5730__auto___5920 + (1));
i__5730__auto___5920 = G__5921;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.call(null,func,cur,extra);
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
});

monet.canvas.update_entity.cljs$lang$maxFixedArity = (3);

monet.canvas.update_entity.cljs$lang$applyTo = (function (seq5915){
var G__5916 = cljs.core.first.call(null,seq5915);
var seq5915__$1 = cljs.core.next.call(null,seq5915);
var G__5917 = cljs.core.first.call(null,seq5915__$1);
var seq5915__$2 = cljs.core.next.call(null,seq5915__$1);
var G__5918 = cljs.core.first.call(null,seq5915__$2);
var seq5915__$3 = cljs.core.next.call(null,seq5915__$2);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic(G__5916,G__5917,G__5918,seq5915__$3);
});
monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc));
var seq__5926 = cljs.core.seq.call(null,ks);
var chunk__5927 = null;
var count__5928 = (0);
var i__5929 = (0);
while(true){
if((i__5929 < count__5928)){
var k = cljs.core._nth.call(null,chunk__5927,i__5929);
monet.canvas.remove_entity.call(null,mc,k);

var G__5930 = seq__5926;
var G__5931 = chunk__5927;
var G__5932 = count__5928;
var G__5933 = (i__5929 + (1));
seq__5926 = G__5930;
chunk__5927 = G__5931;
count__5928 = G__5932;
i__5929 = G__5933;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5926);
if(temp__4425__auto__){
var seq__5926__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5926__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__5926__$1);
var G__5934 = cljs.core.chunk_rest.call(null,seq__5926__$1);
var G__5935 = c__5474__auto__;
var G__5936 = cljs.core.count.call(null,c__5474__auto__);
var G__5937 = (0);
seq__5926 = G__5934;
chunk__5927 = G__5935;
count__5928 = G__5936;
i__5929 = G__5937;
continue;
} else {
var k = cljs.core.first.call(null,seq__5926__$1);
monet.canvas.remove_entity.call(null,mc,k);

var G__5938 = cljs.core.next.call(null,seq__5926__$1);
var G__5939 = null;
var G__5940 = (0);
var G__5941 = (0);
seq__5926 = G__5938;
chunk__5927 = G__5939;
count__5928 = G__5940;
i__5929 = G__5941;
continue;
}
} else {
return null;
}
}
break;
}
});
monet.canvas.entity = (function monet$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"update","update",1045576396),update], null);
});
monet.canvas.attr = (function monet$canvas$attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__5942){
var map__5950 = p__5942;
var map__5950__$1 = ((((!((map__5950 == null)))?((((map__5950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5950):map__5950);
var mc = map__5950__$1;
var canvas = cljs.core.get.call(null,map__5950__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var updating_QMARK_ = cljs.core.get.call(null,map__5950__$1,new cljs.core.Keyword(null,"updating?","updating?",1586585646));
var ctx = cljs.core.get.call(null,map__5950__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var active = cljs.core.get.call(null,map__5950__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var entities = cljs.core.get.call(null,map__5950__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1109658740),monet.canvas.attr.call(null,canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref.call(null,active))){
var ks_5957 = cljs.core.js_keys.call(null,entities);
var cnt_5958 = ks_5957.length;
var i_5959 = (0);
while(true){
if((i_5959 < cnt_5958)){
var k_5960 = (ks_5957[i_5959]);
var map__5952_5961 = (entities[k_5960]);
var map__5952_5962__$1 = ((((!((map__5952_5961 == null)))?((((map__5952_5961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5952_5961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5952_5961):map__5952_5961);
var ent_5963 = map__5952_5962__$1;
var draw_5964 = cljs.core.get.call(null,map__5952_5962__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var update_5965 = cljs.core.get.call(null,map__5952_5962__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var value_5966 = cljs.core.get.call(null,map__5952_5962__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4659__auto__ = update_5965;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.deref.call(null,updating_QMARK_);
} else {
return and__4659__auto__;
}
})())){
var updated_5967 = (function (){var or__4671__auto__ = (function (){try{return update_5965.call(null,value_5966);
}catch (e5955){if((e5955 instanceof Error)){
var e = e5955;
console.log(e);

return value_5966;
} else {
throw e5955;

}
}})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return value_5966;
}
})();
if(cljs.core.truth_((entities[k_5960]))){
(entities[k_5960] = cljs.core.assoc.call(null,ent_5963,new cljs.core.Keyword(null,"value","value",305978217),updated_5967));
} else {
}
} else {
}

if(cljs.core.truth_(draw_5964)){
try{draw_5964.call(null,ctx,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((entities[k_5960])));
}catch (e5956){if((e5956 instanceof Error)){
var e_5968 = e5956;
console.log(e_5968);
} else {
throw e5956;

}
}} else {
}

var G__5969 = (i_5959 + (1));
i_5959 = G__5969;
continue;
} else {
}
break;
}

return monet.core.animation_frame.call(null,((function (map__5950,map__5950__$1,mc,canvas,updating_QMARK_,ctx,active,entities){
return (function (){
return monet$canvas$draw_loop.call(null,mc);
});})(map__5950,map__5950__$1,mc,canvas,updating_QMARK_,ctx,active,entities))
);
} else {
return null;
}
});
monet.canvas.monet_canvas = (function monet$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__4671__auto__ = context_type;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "2d";
}
})();
var ctx = monet.canvas.get_context.call(null,elem,ct);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),elem,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"entities","entities",1940967403),{},new cljs.core.Keyword(null,"updating?","updating?",1586585646),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.atom.call(null,true)], null);
});
monet.canvas.init = (function monet$canvas$init(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5978 = arguments.length;
var i__5730__auto___5979 = (0);
while(true){
if((i__5730__auto___5979 < len__5729__auto___5978)){
args__5736__auto__.push((arguments[i__5730__auto___5979]));

var G__5980 = (i__5730__auto___5979 + (1));
i__5730__auto___5979 = G__5980;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__5976){
var vec__5977 = p__5976;
var context_type = cljs.core.nth.call(null,vec__5977,(0),null);
var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);
monet.canvas.draw_loop.call(null,mc);

return mc;
});

monet.canvas.init.cljs$lang$maxFixedArity = (1);

monet.canvas.init.cljs$lang$applyTo = (function (seq5974){
var G__5975 = cljs.core.first.call(null,seq5974);
var seq5974__$1 = cljs.core.next.call(null,seq5974);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(G__5975,seq5974__$1);
});
monet.canvas.stop = (function monet$canvas$stop(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function monet$canvas$stop_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function monet$canvas$start_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function monet$canvas$restart(mc){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),true);

return monet.canvas.draw_loop.call(null,mc);
});

//# sourceMappingURL=canvas.js.map