goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../cljs_flake/flake.js", ['cljs_flake.flake'], ['cljs.core']);
goog.addDependency("../turtle/core.js", ['turtle.core'], ['cljs.core']);
goog.addDependency("../monet/core.js", ['monet.core'], ['cljs.core']);
goog.addDependency("../monet/canvas.js", ['monet.canvas'], ['monet.core', 'cljs.core']);
goog.addDependency("../turtle/renderer/canvas.js", ['turtle.renderer.canvas'], ['cljs.core', 'monet.canvas']);
goog.addDependency("../cljs_flake/core.js", ['cljs_flake.core'], ['cljs_flake.flake', 'cljs.core', 'turtle.core', 'turtle.renderer.canvas']);
