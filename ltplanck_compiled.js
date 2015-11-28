if(!lt.util.load.provided_QMARK_('lt.plugins.ltplanck.form')) {
goog.provide('lt.plugins.ltplanck.form');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.ltplanck.form.whitespace_QMARK_ = (function whitespace_QMARK_(ch){return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"\t",null,"\n",null], null), null),ch);
});
lt.plugins.ltplanck.form.end_pair_QMARK_ = (function end_pair_QMARK_(ch){return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"]",null,"}",null], null), null),ch);
});
lt.plugins.ltplanck.form.start_pair_QMARK_ = (function start_pair_QMARK_(ch){return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"[",null,"{",null], null), null),ch);
});
lt.plugins.ltplanck.form.opposites = {"]": "[", "[": "]", "}": "{", "{": "}", "(": ")", ")": "("};
lt.plugins.ltplanck.form.get_ch = (function get_ch(ed,loc){return cljs.core.get.call(null,lt.objs.editor.line.call(null,ed,(function (){var or__4884__auto__ = (loc["line"]);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);
}
})()),(function (){var or__4884__auto__ = (loc["ch"]);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc);
}
})());
});
lt.plugins.ltplanck.form.adjust_loc = (function adjust_loc(loc,delta){var obj6608 = {"line":(loc["line"]),"ch":((loc["ch"]) + delta)};return obj6608;
});
lt.plugins.ltplanck.form.str_contains_QMARK_ = (function str_contains_QMARK_(a,b){return (a.indexOf(b) > -1);
});
lt.plugins.ltplanck.form.stringz_QMARK_ = (function stringz_QMARK_(ed,loc,line,token_type){if(cljs.core.truth_(token_type))
{var ch = cljs.core.get.call(null,line,(loc["ch"]));var left_ch = cljs.core.get.call(null,line,(lt.plugins.ltplanck.form.adjust_loc.call(null,loc,-1)["ch"]));return (lt.plugins.ltplanck.form.str_contains_QMARK_.call(null,token_type,"string")) && (cljs.core.not.call(null,(function (){var and__4872__auto__ = lt.plugins.ltplanck.form.end_pair_QMARK_.call(null,ch);if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core._EQ_.call(null,"\"",left_ch)) && (!(cljs.core._EQ_.call(null,"string",lt.objs.editor.__GT_token_type.call(null,ed,cljs.core.js__GT_clj.call(null,lt.plugins.ltplanck.form.adjust_loc.call(null,loc,1))))));
} else
{return and__4872__auto__;
}
})()));
} else
{return null;
}
});
lt.plugins.ltplanck.form.string_BAR_comment_QMARK_ = (function string_BAR_comment_QMARK_(ed,loc,line){var t = lt.objs.editor.__GT_token_type.call(null,ed,loc);if(cljs.core.truth_(t))
{if(lt.plugins.ltplanck.form.str_contains_QMARK_.call(null,t,"comment-form"))
{return false;
} else
{if(lt.plugins.ltplanck.form.str_contains_QMARK_.call(null,t,"comment"))
{return true;
} else
{if(cljs.core.truth_(lt.plugins.ltplanck.form.stringz_QMARK_.call(null,ed,loc,line,t)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
} else
{return null;
}
});
lt.plugins.ltplanck.form.move_loc_line = (function move_loc_line(ed,loc,dir){if(cljs.core.truth_(loc))
{var neue = (function (){var obj6614 = {"line":((cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"up","up",1013907981)))?((loc["line"]) - 1):((loc["line"]) + 1)),"ch":(loc["ch"])};return obj6614;
})();if(((neue["line"]) < 0))
{return null;
} else
{if(((neue["line"]) > lt.objs.editor.last_line.call(null,ed)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var obj6616 = {"line":(neue["line"]),"ch":((cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"up","up",1013907981)))?(function (){var x__5191__auto__ = (lt.objs.editor.line_length.call(null,ed,(neue["line"])) - 1);var y__5192__auto__ = 0;return ((x__5191__auto__ > y__5192__auto__) ? x__5191__auto__ : y__5192__auto__);
})():0)};return obj6616;
} else
{return null;
}
}
}
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.ltplanck.form.move_loc = (function() { 
var move_loc__delegate = function (ed,dir,loc,p__6617){var map__6619 = p__6617;var map__6619__$1 = ((cljs.core.seq_QMARK_.call(null,map__6619))?cljs.core.apply.call(null,cljs.core.hash_map,map__6619):map__6619);var line = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"line","line",1017226086));if(cljs.core.truth_(loc))
{var len = (cljs.core.truth_(line)?cljs.core.count.call(null,line):lt.objs.editor.line_length.call(null,ed,(loc["line"])));var neue = lt.plugins.ltplanck.form.adjust_loc.call(null,loc,((cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"left","left",1017222009)))?-1:1));if(((neue["ch"]) < 0))
{return lt.plugins.ltplanck.form.move_loc_line.call(null,ed,loc,new cljs.core.Keyword(null,"up","up",1013907981));
} else
{if(((neue["ch"]) >= len))
{return lt.plugins.ltplanck.form.move_loc_line.call(null,ed,loc,new cljs.core.Keyword(null,"down","down",1016993812));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return neue;
} else
{return null;
}
}
}
} else
{return null;
}
};
var move_loc = function (ed,dir,loc,var_args){
var p__6617 = null;if (arguments.length > 3) {
  p__6617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return move_loc__delegate.call(this,ed,dir,loc,p__6617);};
move_loc.cljs$lang$maxFixedArity = 3;
move_loc.cljs$lang$applyTo = (function (arglist__6634){
var ed = cljs.core.first(arglist__6634);
arglist__6634 = cljs.core.next(arglist__6634);
var dir = cljs.core.first(arglist__6634);
arglist__6634 = cljs.core.next(arglist__6634);
var loc = cljs.core.first(arglist__6634);
var p__6617 = cljs.core.rest(arglist__6634);
return move_loc__delegate(ed,dir,loc,p__6617);
});
move_loc.cljs$core$IFn$_invoke$arity$variadic = move_loc__delegate;
return move_loc;
})()
;
lt.plugins.ltplanck.form.within_range = (function within_range(p__6620,cur){var vec__6622 = p__6620;var start = cljs.core.nth.call(null,vec__6622,0,null);var end = cljs.core.nth.call(null,vec__6622,1,null);if(cljs.core.truth_(cur))
{return ((end >= (cur["line"]))) && (((cur["line"]) >= start));
} else
{return null;
}
});
lt.plugins.ltplanck.form.move_matching_loc = (function move_matching_loc(ed,loc,dir,line){var ch = cljs.core.get.call(null,line,(loc["ch"]));var next_loc = lt.plugins.ltplanck.form.move_loc.call(null,ed,dir,loc,new cljs.core.Keyword(null,"line","line",1017226086),line);var next_line = (cljs.core.truth_(next_loc)?((cljs.core.not_EQ_.call(null,(loc["line"]),(next_loc["line"])))?lt.objs.editor.line.call(null,ed,(next_loc["line"])):line):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,next_loc,next_line], null);
});
lt.plugins.ltplanck.form.opposites_reg_ex = (new RegExp("\\(|\\[|\\{|\\)|\\]|\\}"));
lt.plugins.ltplanck.form.reverse_str = (function reverse_str(v){return v.split("").reverse().join("");
});
lt.plugins.ltplanck.form.idx_next_opposites = (function idx_next_opposites(v){var temp__4092__auto__ = lt.plugins.ltplanck.form.opposites_reg_ex.exec(v);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return m.index;
} else
{return null;
}
});
lt.plugins.ltplanck.form.maybe_skip_to_next_opposites = (function maybe_skip_to_next_opposites(loc,line){if(cljs.core.truth_((function (){var and__4872__auto__ = loc;if(cljs.core.truth_(and__4872__auto__))
{return line;
} else
{return and__4872__auto__;
}
})()))
{var v = line.substr((loc["ch"]));var vl = (v["length"]);var idx = lt.plugins.ltplanck.form.idx_next_opposites.call(null,v);if(cljs.core.truth_((function (){var and__4872__auto__ = idx;if(cljs.core.truth_(and__4872__auto__))
{return ((idx > 0)) && ((idx < vl));
} else
{return and__4872__auto__;
}
})()))
{return lt.plugins.ltplanck.form.adjust_loc.call(null,loc,idx);
} else
{if(cljs.core.not.call(null,idx))
{return lt.plugins.ltplanck.form.adjust_loc.call(null,loc,((line["length"]) - 1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return loc;
} else
{return null;
}
}
}
} else
{return loc;
}
});
lt.plugins.ltplanck.form.idx_prev_opposites = (function idx_prev_opposites(v){return lt.plugins.ltplanck.form.idx_next_opposites.call(null,lt.plugins.ltplanck.form.reverse_str.call(null,v));
});
lt.plugins.ltplanck.form.maybe_skip_to_prev_opposites = (function maybe_skip_to_prev_opposites(loc,line){if(cljs.core.truth_((function (){var and__4872__auto__ = loc;if(cljs.core.truth_(and__4872__auto__))
{return line;
} else
{return and__4872__auto__;
}
})()))
{var v = line.substr(0,((loc["ch"]) + 1));var vl = (v["length"]);var idx = lt.plugins.ltplanck.form.idx_prev_opposites.call(null,v);if(cljs.core.truth_((function (){var and__4872__auto__ = idx;if(cljs.core.truth_(and__4872__auto__))
{return ((idx > 0)) && ((idx < vl));
} else
{return and__4872__auto__;
}
})()))
{return lt.plugins.ltplanck.form.adjust_loc.call(null,loc,(- idx));
} else
{if(cljs.core.not.call(null,idx))
{return lt.plugins.ltplanck.form.adjust_loc.call(null,loc,(- (loc["ch"])));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return loc;
} else
{return null;
}
}
}
} else
{return loc;
}
});
lt.plugins.ltplanck.form.loc_next_end_pair = (function loc_next_end_pair(ed,loc){if(cljs.core.truth_(loc))
{var search_range = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(loc["line"]),((loc["line"]) + 200)], null);var cur = loc;var line = lt.objs.editor.line.call(null,ed,(loc["line"]));var level = 0;while(true){
if(cljs.core.not.call(null,(function (){var and__4872__auto__ = cur;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = line;if(cljs.core.truth_(and__4872__auto____$1))
{return lt.plugins.ltplanck.form.within_range.call(null,search_range,cur);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{return null;
} else
{var vec__6624 = lt.plugins.ltplanck.form.move_matching_loc.call(null,ed,cur,new cljs.core.Keyword(null,"right","right",1122416014),line);var ch = cljs.core.nth.call(null,vec__6624,0,null);var next_loc = cljs.core.nth.call(null,vec__6624,1,null);var next_line = cljs.core.nth.call(null,vec__6624,2,null);var next_loc__$1 = lt.plugins.ltplanck.form.maybe_skip_to_next_opposites.call(null,next_loc,next_line);if(cljs.core.not.call(null,(function (){var or__4884__auto__ = lt.plugins.ltplanck.form.start_pair_QMARK_.call(null,ch);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.plugins.ltplanck.form.end_pair_QMARK_.call(null,ch);
}
})()))
{{
var G__6635 = next_loc__$1;
var G__6636 = next_line;
var G__6637 = level;
cur = G__6635;
line = G__6636;
level = G__6637;
continue;
}
} else
{if(cljs.core.truth_(lt.plugins.ltplanck.form.string_BAR_comment_QMARK_.call(null,ed,cur,line)))
{{
var G__6638 = next_loc__$1;
var G__6639 = next_line;
var G__6640 = level;
cur = G__6638;
line = G__6639;
level = G__6640;
continue;
}
} else
{if(cljs.core.truth_(lt.plugins.ltplanck.form.start_pair_QMARK_.call(null,ch)))
{{
var G__6641 = next_loc__$1;
var G__6642 = next_line;
var G__6643 = (level + 1);
cur = G__6641;
line = G__6642;
level = G__6643;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = lt.plugins.ltplanck.form.end_pair_QMARK_.call(null,ch);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core._EQ_.call(null,0,level);
} else
{return and__4872__auto__;
}
})()))
{return cur;
} else
{if(cljs.core.truth_(lt.plugins.ltplanck.form.end_pair_QMARK_.call(null,ch)))
{{
var G__6644 = next_loc__$1;
var G__6645 = next_line;
var G__6646 = (level - 1);
cur = G__6644;
line = G__6645;
level = G__6646;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__6647 = next_loc__$1;
var G__6648 = next_line;
var G__6649 = level;
cur = G__6647;
line = G__6648;
level = G__6649;
continue;
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
} else
{return null;
}
});
lt.plugins.ltplanck.form.loc_next_matching_start_pair = (function loc_next_matching_start_pair(ed,loc,pair_ch){if(cljs.core.truth_(loc))
{var search_range = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((loc["line"]) - 200),(loc["line"])], null);var cur = loc;var line = lt.objs.editor.line.call(null,ed,(loc["line"]));var level = 0;while(true){
if(cljs.core.not.call(null,(function (){var and__4872__auto__ = cur;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = line;if(cljs.core.truth_(and__4872__auto____$1))
{return lt.plugins.ltplanck.form.within_range.call(null,search_range,cur);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{return null;
} else
{var vec__6626 = lt.plugins.ltplanck.form.move_matching_loc.call(null,ed,cur,new cljs.core.Keyword(null,"left","left",1017222009),line);var ch = cljs.core.nth.call(null,vec__6626,0,null);var next_loc = cljs.core.nth.call(null,vec__6626,1,null);var next_line = cljs.core.nth.call(null,vec__6626,2,null);var next_loc__$1 = lt.plugins.ltplanck.form.maybe_skip_to_prev_opposites.call(null,next_loc,next_line);if(!((cljs.core._EQ_.call(null,ch,(lt.plugins.ltplanck.form.opposites[pair_ch]))) || (cljs.core._EQ_.call(null,ch,pair_ch))))
{{
var G__6650 = next_loc__$1;
var G__6651 = next_line;
var G__6652 = level;
cur = G__6650;
line = G__6651;
level = G__6652;
continue;
}
} else
{if(cljs.core.truth_(lt.plugins.ltplanck.form.string_BAR_comment_QMARK_.call(null,ed,cur,line)))
{{
var G__6653 = next_loc__$1;
var G__6654 = next_line;
var G__6655 = level;
cur = G__6653;
line = G__6654;
level = G__6655;
continue;
}
} else
{if(cljs.core._EQ_.call(null,ch,(lt.plugins.ltplanck.form.opposites[pair_ch])))
{{
var G__6656 = next_loc__$1;
var G__6657 = next_line;
var G__6658 = (level + 1);
cur = G__6656;
line = G__6657;
level = G__6658;
continue;
}
} else
{if((cljs.core._EQ_.call(null,ch,pair_ch)) && (cljs.core._EQ_.call(null,0,level)))
{return cur;
} else
{if(cljs.core._EQ_.call(null,ch,pair_ch))
{{
var G__6659 = next_loc__$1;
var G__6660 = next_line;
var G__6661 = (level - 1);
cur = G__6659;
line = G__6660;
level = G__6661;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__6662 = next_loc__$1;
var G__6663 = next_line;
var G__6664 = level;
cur = G__6662;
line = G__6663;
level = G__6664;
continue;
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
} else
{return null;
}
});
lt.plugins.ltplanck.form.get_bounds_matching = (function get_bounds_matching(ed,loc){var temp__4092__auto__ = lt.plugins.ltplanck.form.loc_next_end_pair.call(null,ed,loc);if(cljs.core.truth_(temp__4092__auto__))
{var loc_next_end = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.ltplanck.form.loc_next_matching_start_pair.call(null,ed,lt.plugins.ltplanck.form.move_loc.call(null,ed,new cljs.core.Keyword(null,"left","left",1017222009),loc_next_end),(lt.plugins.ltplanck.form.opposites[lt.plugins.ltplanck.form.get_ch.call(null,ed,loc_next_end)]));if(cljs.core.truth_(temp__4092__auto____$1))
{var loc_next_start = temp__4092__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_next_start,loc_next_end], null);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.ltplanck.form.get_next_bounds_matching = (function get_next_bounds_matching(ed,p__6627){var vec__6629 = p__6627;var start = cljs.core.nth.call(null,vec__6629,0,null);var end = cljs.core.nth.call(null,vec__6629,1,null);var temp__4092__auto__ = lt.plugins.ltplanck.form.loc_next_end_pair.call(null,ed,lt.plugins.ltplanck.form.move_loc.call(null,ed,new cljs.core.Keyword(null,"right","right",1122416014),end));if(cljs.core.truth_(temp__4092__auto__))
{var loc_next_end = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.ltplanck.form.loc_next_matching_start_pair.call(null,ed,lt.plugins.ltplanck.form.move_loc.call(null,ed,new cljs.core.Keyword(null,"left","left",1017222009),start),(lt.plugins.ltplanck.form.opposites[lt.plugins.ltplanck.form.get_ch.call(null,ed,loc_next_end)]));if(cljs.core.truth_(temp__4092__auto____$1))
{var loc_next_start = temp__4092__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_next_start,loc_next_end], null);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.ltplanck.form.get_top_level_form = (function() {
var get_top_level_form = null;
var get_top_level_form__1 = (function (ed){return get_top_level_form.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
var get_top_level_form__2 = (function (ed,loc){var temp__4090__auto__ = (function (){var G__6632 = lt.plugins.ltplanck.form.get_bounds_matching.call(null,ed,cljs.core.clj__GT_js.call(null,loc));var G__6632__$1 = (((G__6632 == null))?null:cljs.core.iterate.call(null,cljs.core.partial.call(null,lt.plugins.ltplanck.form.get_next_bounds_matching,ed),G__6632));var G__6632__$2 = (((G__6632__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__6632__$1));var G__6632__$3 = (((G__6632__$2 == null))?null:cljs.core.last.call(null,G__6632__$2));return G__6632__$3;
})();if(cljs.core.truth_(temp__4090__auto__))
{var vec__6633 = temp__4090__auto__;var start = cljs.core.nth.call(null,vec__6633,0,null);var end = cljs.core.nth.call(null,vec__6633,1,null);var start_c = cljs.core.js__GT_clj.call(null,start,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var end_c = cljs.core.js__GT_clj.call(null,end,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),lt.objs.editor.range.call(null,ed,start_c,cljs.core.update_in.call(null,end_c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)),new cljs.core.Keyword(null,"start","start",1123661780),start_c,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.update_in.call(null,end_c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc),0))
{return get_top_level_form.call(null,ed,cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"ch","ch",1013907415),1));
} else
{return null;
}
}
});
get_top_level_form = function(ed,loc){
switch(arguments.length){
case 1:
return get_top_level_form__1.call(this,ed);
case 2:
return get_top_level_form__2.call(this,ed,loc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_top_level_form.cljs$core$IFn$_invoke$arity$1 = get_top_level_form__1;
get_top_level_form.cljs$core$IFn$_invoke$arity$2 = get_top_level_form__2;
return get_top_level_form;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltplanck.project')) {
goog.provide('lt.plugins.ltplanck.project');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.ltplanck.project.ltplanck_plugin_dir = lt.objs.plugins.find_plugin.call(null,"ltplanck");
/**
* Find project path based on given path
*/
lt.plugins.ltplanck.project.project_path = (function project_path(path){if(cljs.core.not.call(null,path))
{return lt.objs.files.join.call(null,lt.plugins.ltplanck.project.ltplanck_plugin_dir,"scratchdir");
} else
{var prj = lt.objs.files.walk_up_find.call(null,path,"planck-project.clj");if(cljs.core.truth_(prj))
{return lt.objs.files.parent.call(null,prj);
} else
{if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return path;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.objs.files.parent.call(null,path);
} else
{return null;
}
}
}
}
});
lt.plugins.ltplanck.project.parse_project = (function parse_project(project_path){var prj = lt.objs.files.join.call(null,project_path,"planck-project.clj");if(cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,prj)))
{return null;
} else
{return cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,prj)));
}
});
lt.plugins.ltplanck.project.project_args = (function project_args(project_path){var temp__4090__auto__ = lt.plugins.ltplanck.project.parse_project.call(null,project_path);if(cljs.core.truth_(temp__4090__auto__))
{var cfg = temp__4090__auto__;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cfg);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.files.basename.call(null,project_path);
}
})(),new cljs.core.Keyword(null,"cp","cp",1013907423),clojure.string.join.call(null,":",cljs.core.concat.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(cfg),new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(cfg)))], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.files.basename.call(null,project_path)], null);
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltplanck.core')) {
goog.provide('lt.plugins.ltplanck.core');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.ltplanck.project');
goog.require('lt.plugins.ltplanck.form');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltplanck.project');
goog.require('lt.plugins.ltplanck.form');
lt.plugins.ltplanck.core.ltplanck_plugin_dir = lt.objs.plugins.find_plugin.call(null,"ltplanck");
lt.plugins.ltplanck.core.ltplanck_cilent_path = lt.objs.files.join.call(null,lt.plugins.ltplanck.core.ltplanck_plugin_dir,"node","ltplanck.js");
lt.plugins.ltplanck.core.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();if((out.indexOf("connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return cljs.core.println.call(null,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","on-out","lt.plugins.ltplanck.core/on-out",515610922),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.ltplanck.core.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if(cljs.core.not.call(null,new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
} else
{return lt.objs.console.error.call(null,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","on-error","lt.plugins.ltplanck.core/on-error",3394170596),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.ltplanck.core.__BEH__on_exit = (function __BEH__on_exit(this$,data){if((cljs.core.not.call(null,new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                              to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","on-exit","lt.plugins.ltplanck.core/on-exit",1415053142),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","connecting-notifier","lt.plugins.ltplanck.core/connecting-notifier",1860233829),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.ltplanck.core","on-exit","lt.plugins.ltplanck.core/on-exit",1415053142),new cljs.core.Keyword("lt.plugins.ltplanck.core","on-error","lt.plugins.ltplanck.core/on-error",3394170596),new cljs.core.Keyword("lt.plugins.ltplanck.core","on-out","lt.plugins.ltplanck.core/on-out",515610922)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.plugins.ltplanck.core.start_planck_client = (function start_planck_client(p__6808){var map__6810 = p__6808;var map__6810__$1 = ((cljs.core.seq_QMARK_.call(null,map__6810))?cljs.core.apply.call(null,cljs.core.hash_map,map__6810):map__6810);var props = map__6810__$1;var client = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"client","client",3951159101));var proj_path = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615));var path = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","connecting-notifier","lt.plugins.ltplanck.core/connecting-notifier",1860233829),client);var client_id = lt.objs.clients.__GT_id.call(null,client);var cfg = lt.plugins.ltplanck.project.project_args.call(null,proj_path);lt.objs.notifos.working.call(null,"Connecting..");
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1014003711),proj_path], null));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),process.execPath,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.ltplanck.core.ltplanck_cilent_path,lt.objs.clients.tcp.port,client_id,proj_path,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cfg),new cljs.core.Keyword(null,"cp","cp",1013907423).cljs$core$IFn$_invoke$arity$1(cfg)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.ltplanck.core.ltplanck_plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["ATOM_SHELL_INTERNAL_RUN_AS_NODE",1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.ltplanck.core.try_connect = (function try_connect(p__6811){var map__6813 = p__6811;var map__6813__$1 = ((cljs.core.seq_QMARK_.call(null,map__6813))?cljs.core.apply.call(null,cljs.core.hash_map,map__6813):map__6813);var props = map__6813__$1;var info = cljs.core.get.call(null,map__6813__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var proj_path = lt.plugins.ltplanck.project.project_path.call(null,path);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elm-client","elm-client",1622336068));lt.plugins.ltplanck.core.start_planck_client.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"proj-path","proj-path",4362692615),proj_path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.ltplanck.core.get_eval_code = (function get_eval_code(ed){if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"start","start",1123661780),lt.objs.editor.__GT_cursor.call(null,ed,"start"),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.__GT_cursor.call(null,ed,"end")], null);
} else
{return lt.plugins.ltplanck.form.get_top_level_form.call(null,ed);
}
});
lt.plugins.ltplanck.core.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(ed){var temp__4092__auto__ = lt.plugins.ltplanck.core.get_eval_code.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var form = temp__4092__auto__;var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form))], null)], null));return lt.object.raise.call(null,lt.plugins.ltplanck.core.planck,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","on-eval.one","lt.plugins.ltplanck.core/on-eval.one",1114270028),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Planck: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one.planck","eval.one.planck",4556960221),null], null), null));
lt.plugins.ltplanck.core.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__6815 = event;var map__6815__$1 = ((cljs.core.seq_QMARK_.call(null,map__6815))?cljs.core.apply.call(null,cljs.core.hash_map,map__6815):map__6815);var origin = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating clojurscript in planck...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.planck","editor.eval.planck",2946879316),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.ltplanck.core.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.planck","editor.eval.planck",2946879316),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","eval!","lt.plugins.ltplanck.core/eval!",2096382095),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.ltplanck.core.__BEH__eval_result = (function __BEH__eval_result(ed,res){lt.objs.notifos.done_working.call(null,"Planck cljs evaluated");
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","eval-result","lt.plugins.ltplanck.core/eval-result",4646619448),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__eval_result,new cljs.core.Keyword(null,"desc","desc",1016984067),"Planck: Eval result",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.planck.eval.res","editor.planck.eval.res",3240134972),null], null), null));
lt.plugins.ltplanck.core.__BEH__eval_err = (function __BEH__eval_err(ed,res){lt.objs.notifos.done_working.call(null);
lt.objs.notifos.set_msg_BANG_.call(null,"Planck cljs reported errors.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","eval-err","lt.plugins.ltplanck.core/eval-err",2041159358),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__eval_err,new cljs.core.Keyword(null,"desc","desc",1016984067),"Planck: Eval error",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.planck.eval.err","editor.planck.eval.err",3240122881),null], null), null));
lt.plugins.ltplanck.core.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.ltplanck.core.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","connect","lt.plugins.ltplanck.core/connect",2849646260),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltplanck.core.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","planck-plugin","lt.plugins.ltplanck.core/planck-plugin",889137209),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"planck.plugin","planck.plugin",1059367394),null], null), null));
lt.plugins.ltplanck.core.planck = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltplanck.core","planck-plugin","lt.plugins.ltplanck.core/planck-plugin",889137209));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Planck",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your planck project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.ltplanck.core.planck,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"planck.eval-one","planck.eval-one",3773596964),new cljs.core.Keyword(null,"desc","desc",1016984067),"Planck: Eval selected cljs using planck",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.one.planck","eval.one.planck",4556960221));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=ltplanck_compiled.js.map