"use strict";exports.id=8161,exports.ids=[8161],exports.modules={8161:(e,n,r)=>{r.d(n,{bK:()=>layout});var t=r(9156),o=r(9757),i=0;let lodash_es_uniqueId=function(e){var n=++i;return(0,o.Z)(e)+n};var a=r(6964),d=r(3351),u=r(5247),s=Math.ceil,c=Math.max;let _baseRange=function(e,n,r,t){for(var o=-1,i=c(s((n-e)/(r||1)),0),a=Array(i);i--;)a[t?i:++o]=e,e+=r;return a};var f=r(1833),h=r(2200);let lodash_es_range=function(e,n,r){return r&&"number"!=typeof r&&(0,f.Z)(e,n,r)&&(n=r=void 0),e=(0,h.Z)(e),void 0===n?(n=e,e=0):n=(0,h.Z)(n),r=void 0===r?e<n?1:-1:(0,h.Z)(r),_baseRange(e,n,r,void 0)};var l=r(2123);let List=class List{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return unlink(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&unlink(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,r=n._prev;r!==n;)e.push(JSON.stringify(r,filterOutLinks)),r=r._prev;return"["+e.join(", ")+"]"}};function unlink(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function filterOutLinks(e,n){if("_next"!==e&&"_prev"!==e)return n}var g=a.Z(1);function removeNode(e,n,r,o,i){var a=i?[]:void 0;return t.Z(e.inEdges(o.v),function(t){var o=e.edge(t),d=e.node(t.v);i&&a.push({v:t.v,w:t.w}),d.out-=o,assignBucket(n,r,d)}),t.Z(e.outEdges(o.v),function(t){var o=e.edge(t),i=t.w,a=e.node(i);a.in-=o,assignBucket(n,r,a)}),e.removeNode(o.v),a}function assignBucket(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}var v=r(1263),p=r(5097),m=r(7640),Z=r(8416),w=r(3772),b=function(e){return(0,w.Z)((0,Z.Z)(e,void 0,d.Z),e+"")}(function(e,n){return null==e?{}:(0,p.Z)(e,n,function(n,r){return(0,m.Z)(e,r)})}),y=r(374),_=r(8948);let _baseGt=function(e,n){return e>n};var x=r(6402);let lodash_es_max=function(e){return e&&e.length?(0,_.Z)(e,x.Z,_baseGt):void 0};var k=r(2593),E=r(857),N=r(2110),O=r(4896);let lodash_es_mapValues=function(e,n){var r={};return n=(0,O.Z)(n,3),(0,N.Z)(e,function(e,t,o){(0,E.Z)(r,t,n(e,t,o))}),r};var L=r(1180),I=r(8791),P=r(7431),R=r(9615);let lodash_es_now=function(){return R.Z.Date.now()};function addDummyNode(e,n,r,t){var o;do o=lodash_es_uniqueId(t);while(e.hasNode(o));return r.dummy=n,e.setNode(o,r),o}function asNonCompoundGraph(e){var n=new l.k({multigraph:e.isMultigraph()}).setGraph(e.graph());return t.Z(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),t.Z(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}function intersectRect(e,n){var r,t,o=e.x,i=e.y,a=n.x-o,d=n.y-i,u=e.width/2,s=e.height/2;if(!a&&!d)throw Error("Not possible to find intersection inside of the rectangle");return Math.abs(d)*u>Math.abs(a)*s?(d<0&&(s=-s),r=s*a/d,t=s):(a<0&&(u=-u),r=u,t=u*d/a),{x:o+r,y:i+t}}function buildLayerMatrix(e){var n=u.Z(lodash_es_range(util_maxRank(e)+1),function(){return[]});return t.Z(e.nodes(),function(r){var t=e.node(r),o=t.rank;L.Z(o)||(n[o][t.order]=r)}),n}function addBorderNode(e,n,r,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=r,o.order=t),addDummyNode(e,"border",o,n)}function util_maxRank(e){return lodash_es_max(u.Z(e.nodes(),function(n){var r=e.node(n).rank;if(!L.Z(r))return r}))}function util_time(e,n){var r=lodash_es_now();try{return n()}finally{console.log(e+" time: "+(lodash_es_now()-r)+"ms")}}function notime(e,n){return n()}function add_border_segments_addBorderNode(e,n,r,t,o,i){var a=o[n][i-1],d=addDummyNode(e,"border",{width:0,height:0,rank:i,borderType:n},r);o[n][i]=d,e.setParent(d,t),a&&e.setEdge(a,d,{weight:1})}function swapWidthHeight(e){t.Z(e.nodes(),function(n){swapWidthHeightOne(e.node(n))}),t.Z(e.edges(),function(n){swapWidthHeightOne(e.edge(n))})}function swapWidthHeightOne(e){var n=e.width;e.width=e.height,e.height=n}function reverseYOne(e){e.y=-e.y}function swapXYOne(e){var n=e.x;e.x=e.y,e.y=n}var C=r(3667);let lodash_es_minBy=function(e,n){return e&&e.length?(0,_.Z)(e,(0,O.Z)(n,2),C.Z):void 0};function longestPath(e){var n={};t.Z(e.sources(),function dfs(r){var t=e.node(r);if(Object.prototype.hasOwnProperty.call(n,r))return t.rank;n[r]=!0;var o=I.Z(u.Z(e.outEdges(r),function(n){return dfs(n.w)-e.edge(n).minlen}));return(o===Number.POSITIVE_INFINITY||null==o)&&(o=0),t.rank=o})}function slack(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function feasibleTree(e){var n,r,o=new l.k({directed:!1}),i=e.nodes()[0],a=e.nodeCount();for(o.setNode(i,{});t.Z(o.nodes(),function dfs(n){t.Z(e.nodeEdges(n),function(r){var t=r.v,i=n===t?r.w:t;o.hasNode(i)||slack(e,r)||(o.setNode(i,{}),o.setEdge(n,i,{}),dfs(i))})}),o.nodeCount()<a;)n=function(e,n){return lodash_es_minBy(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return slack(n,r)})}(o,e),r=o.hasNode(n.v)?slack(e,n):-slack(e,n),function(e,n,r){t.Z(e.nodes(),function(e){n.node(e).rank+=r})}(o,e,r);return o}var M=r(5189),T=r(2908),j=(a.Z(1),a.Z(1),r(8343)),S=r(3313),B=r(9634),V=r(3873),G=(0,r(2361).Z)("length"),D=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Y="\ud800-\udfff",q="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",A="\ud83c[\udffb-\udfff]",F="[^"+Y+"]",z="(?:\ud83c[\udde6-\uddff]){2}",H="[\ud800-\udbff][\udc00-\udfff]",W="(?:"+q+"|"+A+")?",X="[\\ufe0e\\ufe0f]?",U="(?:\\u200d(?:"+[F,z,H].join("|")+")"+X+W+")*",J=RegExp(A+"(?="+A+")|(?:"+[F+q+"?",q,z,H,"["+Y+"]"].join("|")+")"+(X+W+U),"g");let _unicodeSize=function(e){for(var n=J.lastIndex=0;J.test(e);)++n;return n};Error();var K=r(6052);function dfs(e,n,r){K.Z(n)||(n=[n]);var o=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};return t.Z(n,function(n){if(!e.hasNode(n))throw Error("Graph does not have node: "+n);(function doDfs(e,n,r,o,i,a){!Object.prototype.hasOwnProperty.call(o,n)&&(o[n]=!0,r||a.push(n),t.Z(i(n),function(n){doDfs(e,n,r,o,i,a)}),r&&a.push(n))})(e,n,"post"===r,a,o,i)}),i}function networkSimplex(e){n=e,r=new l.k().setGraph(n.graph()),t.Z(n.nodes(),function(e){r.setNode(e,n.node(e))}),t.Z(n.edges(),function(e){var t=r.edge(e.v,e.w)||{weight:0,minlen:1},o=n.edge(e);r.setEdge(e.v,e.w,{weight:t.weight+o.weight,minlen:Math.max(t.minlen,o.minlen)})}),longestPath(e=r);var n,r,o,i,a=feasibleTree(e);for(initLowLimValues(a),initCutValues(a,e);o=leaveEdge(a);)i=enterEdge(a,e,o),exchangeEdges(a,e,o,i)}function initCutValues(e,n){var r=dfs(e,e.nodes(),"post");r=r.slice(0,r.length-1),t.Z(r,function(r){var t;t=e.node(r).parent,e.edge(r,t).cutvalue=calcCutValue(e,n,r)})}function calcCutValue(e,n,r){var o=e.node(r).parent,i=!0,a=n.edge(r,o),d=0;return a||(i=!1,a=n.edge(o,r)),d=a.weight,t.Z(n.nodeEdges(r),function(t){var a=t.v===r,u=a?t.w:t.v;if(u!==o){var s=a===i,c=n.edge(t).weight;if(d+=s?c:-c,e.hasEdge(r,u)){var f=e.edge(r,u).cutvalue;d+=s?-f:f}}}),d}function initLowLimValues(e,n){arguments.length<2&&(n=e.nodes()[0]),function dfsAssignLowLim(e,n,r,o,i){var a=r,d=e.node(o);return n[o]=!0,t.Z(e.neighbors(o),function(t){Object.prototype.hasOwnProperty.call(n,t)||(r=dfsAssignLowLim(e,n,r,t,o))}),d.low=a,d.lim=r++,i?d.parent=i:delete d.parent,r}(e,{},1,n)}function leaveEdge(e){return M.Z(e.edges(),function(n){return e.edge(n).cutvalue<0})}function enterEdge(e,n,r){var t=r.v,o=r.w;n.hasEdge(t,o)||(t=r.w,o=r.v);var i=e.node(t),a=e.node(o),d=i,u=!1;return i.lim>a.lim&&(d=a,u=!0),lodash_es_minBy(T.Z(n.edges(),function(n){return u===isDescendant(e,e.node(n.v),d)&&u!==isDescendant(e,e.node(n.w),d)}),function(e){return slack(n,e)})}function exchangeEdges(e,n,r,o){var i,a,d=r.v,u=r.w;e.removeEdge(d,u),e.setEdge(o.v,o.w,{}),initLowLimValues(e),initCutValues(e,n),i=M.Z(e.nodes(),function(e){return!n.node(e).parent}),a=(a=dfs(e,i,"pre")).slice(1),t.Z(a,function(r){var t=e.node(r).parent,o=n.edge(r,t),i=!1;o||(o=n.edge(t,r),i=!0),n.node(r).rank=n.node(t).rank+(i?o.minlen:-o.minlen)})}function isDescendant(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}r(4390),networkSimplex.initLowLimValues=initLowLimValues,networkSimplex.initCutValues=initCutValues,networkSimplex.calcCutValue=calcCutValue,networkSimplex.leaveEdge=leaveEdge,networkSimplex.enterEdge=enterEdge,networkSimplex.exchangeEdges=exchangeEdges;var Q=r(7942),$=r(7720),ee=r(7062),en=r(1572);let _baseZipObject=function(e,n,r){for(var t=-1,o=e.length,i=n.length,a={};++t<o;){var d=t<i?n[t]:void 0;r(a,e[t],d)}return a};var er=r(9219),et=r(8019),eo=r(9084),ei=r(1135);let _baseSortBy=function(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e};var ea=r(5467),ed=r(8111);let _compareAscending=function(e,n){if(e!==n){var r=void 0!==e,t=null===e,o=e==e,i=(0,ed.Z)(e),a=void 0!==n,d=null===n,u=n==n,s=(0,ed.Z)(n);if(!d&&!s&&!i&&e>n||i&&a&&u&&!d&&!s||t&&a&&u||!r&&u||!o)return 1;if(!t&&!i&&!s&&e<n||s&&r&&o&&!t&&!i||d&&r&&o||!a&&o||!u)return -1}return 0},_compareMultiple=function(e,n,r){for(var t=-1,o=e.criteria,i=n.criteria,a=o.length,d=r.length;++t<a;){var u=_compareAscending(o[t],i[t]);if(u){if(t>=d)return u;return u*("desc"==r[t]?-1:1)}}return e.index-n.index},_baseOrderBy=function(e,n,r){n=n.length?(0,et.Z)(n,function(e){return(0,K.Z)(e)?function(n){return(0,eo.Z)(n,1===e.length?e[0]:e)}:e}):[x.Z];var t=-1;return n=(0,et.Z)(n,(0,ea.Z)(O.Z)),_baseSortBy((0,ei.Z)(e,function(e,r,o){return{criteria:(0,et.Z)(n,function(n){return n(e)}),index:++t,value:e}}),function(e,n){return _compareMultiple(e,n,r)})};var eu=(0,r(9851).Z)(function(e,n){if(null==e)return[];var r=n.length;return r>1&&(0,f.Z)(e,n[0],n[1])?n=[]:r>2&&(0,f.Z)(n[0],n[1],n[2])&&(n=[n[0]]),_baseOrderBy(e,(0,er.Z)(n,1),[])});function consumeUnsortable(e,n,r){for(var t;n.length&&(t=k.Z(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}function buildLayerGraphs(e,n,r){return u.Z(n,function(n){var o,i;return o=function(e){for(var n;e.hasNode(n=lodash_es_uniqueId("_root")););return n}(e),i=new l.k({compound:!0}).setGraph({root:o}).setDefaultNodeLabel(function(n){return e.node(n)}),t.Z(e.nodes(),function(a){var d=e.node(a),u=e.parent(a);(d.rank===n||d.minRank<=n&&n<=d.maxRank)&&(i.setNode(a),i.setParent(a,u||o),t.Z(e[r](a),function(n){var r=n.v===a?n.w:n.v,t=i.edge(r,a),o=L.Z(t)?0:t.weight;i.setEdge(r,a,{weight:e.edge(n).weight+o})}),Object.prototype.hasOwnProperty.call(d,"minRank")&&i.setNode(a,{borderLeft:d.borderLeft[n],borderRight:d.borderRight[n]}))}),i})}function assignOrder(e,n){t.Z(n,function(n){t.Z(n,function(n,r){e.node(n).order=r})})}var es=r(3496),ec=r(9148),ef=r(2817);function addConflict(e,n,r){if(n>r){var t=n;n=r,r=t}var o=e[n];o||(e[n]=o={}),o[r]=!0}function layout(e,n){var r=n&&n.debugTiming?util_time:notime;r("layout",()=>{var n=r("  buildLayoutGraph",()=>{var n,r;return n=new l.k({multigraph:!0,compound:!0}),r=canonicalize(e.graph()),n.setGraph(v.Z({},el,selectNumberAttrs(r,eh),b(r,eg))),t.Z(e.nodes(),function(r){var t=canonicalize(e.node(r));n.setNode(r,y.Z(selectNumberAttrs(t,ev),ep)),n.setParent(r,e.parent(r))}),t.Z(e.edges(),function(r){var t=canonicalize(e.edge(r));n.setEdge(r,v.Z({},eZ,selectNumberAttrs(t,em),b(t,ew)))}),n});r("  runLayout",()=>{r("    makeSpaceForEdgeLabels",()=>{var e;return e=n.graph(),void(e.ranksep/=2,t.Z(n.edges(),function(r){var t=n.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)}))}),r("    removeSelfEdges",()=>{t.Z(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:e,label:n.edge(e)}),n.removeEdge(e)}})}),r("    acyclic",()=>{var e,r,o,i;return e="greedy"===n.graph().acyclicer?function(e,n){if(1>=e.nodeCount())return[];var r,o,i,a,s,c,f=(r=n||g,o=new l.k,i=0,a=0,t.Z(e.nodes(),function(e){o.setNode(e,{v:e,in:0,out:0})}),t.Z(e.edges(),function(e){var n=o.edge(e.v,e.w)||0,t=r(e),d=n+t;o.setEdge(e.v,e.w,d),a=Math.max(a,o.node(e.v).out+=t),i=Math.max(i,o.node(e.w).in+=t)}),s=lodash_es_range(a+i+3).map(function(){return new List}),c=i+1,t.Z(o.nodes(),function(e){assignBucket(s,c,o.node(e))}),{graph:o,buckets:s,zeroIdx:c}),h=function(e,n,r){for(var t,o=[],i=n[n.length-1],a=n[0];e.nodeCount();){for(;t=a.dequeue();)removeNode(e,n,r,t);for(;t=i.dequeue();)removeNode(e,n,r,t);if(e.nodeCount()){for(var d=n.length-2;d>0;--d)if(t=n[d].dequeue()){o=o.concat(removeNode(e,n,r,t,!0));break}}}return o}(f.graph,f.buckets,f.zeroIdx);return d.Z(u.Z(h,function(n){return e.outEdges(n.v,n.w)}))}(n,function(e){return n.edge(e).weight}):(r=[],o={},i={},t.Z(n.nodes(),function dfs(e){Object.prototype.hasOwnProperty.call(i,e)||(i[e]=!0,o[e]=!0,t.Z(n.outEdges(e),function(e){Object.prototype.hasOwnProperty.call(o,e.w)?r.push(e):dfs(e.w)}),delete o[e])}),r),void t.Z(e,function(e){var r=n.edge(e);n.removeEdge(e),r.forwardName=e.name,r.reversed=!0,n.setEdge(e.w,e.v,r,lodash_es_uniqueId("rev"))})}),r("    nestingGraph.run",()=>{var e,r,o,i,a;return e=addDummyNode(n,"root",{},"_root"),a={},t.Z(n.children(),function(e){!function dfs(e,r){var o=n.children(e);o&&o.length&&t.Z(o,function(e){dfs(e,r+1)}),a[e]=r}(e,1)}),o=2*(r=lodash_es_max(Q.Z(a))-1)+1,n.graph().nestingRoot=e,t.Z(n.edges(),function(e){n.edge(e).minlen*=o}),i=$.Z(n.edges(),function(e,r){return e+n.edge(r).weight},0)+1,void(t.Z(n.children(),function(d){(function nesting_graph_dfs(e,n,r,o,i,a,d){var u=e.children(d);if(!u.length){d!==n&&e.setEdge(n,d,{weight:0,minlen:r});return}var s=addBorderNode(e,"_bt"),c=addBorderNode(e,"_bb"),f=e.node(d);e.setParent(s,d),f.borderTop=s,e.setParent(c,d),f.borderBottom=c,t.Z(u,function(t){nesting_graph_dfs(e,n,r,o,i,a,t);var u=e.node(t),f=u.borderTop?u.borderTop:t,h=u.borderBottom?u.borderBottom:t,l=u.borderTop?o:2*o,g=f!==h?1:i-a[d]+1;e.setEdge(s,f,{weight:l,minlen:g,nestingEdge:!0}),e.setEdge(h,c,{weight:l,minlen:g,nestingEdge:!0})}),e.parent(d)||e.setEdge(n,s,{weight:0,minlen:i+a[d]})})(n,e,o,i,r,a,d)}),n.graph().nodeRankFactor=o)}),r("    rank",()=>(function(e){switch(e.graph().ranker){case"network-simplex":default:networkSimplex(e);break;case"tight-tree":longestPath(e),feasibleTree(e);break;case"longest-path":longestPath(e)}})(asNonCompoundGraph(n))),r("    injectEdgeLabelProxies",()=>{t.Z(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),o={rank:(n.node(e.w).rank-t.rank)/2+t.rank,e:e};addDummyNode(n,"edge-proxy",o,"_ep")}})}),r("    removeEmptyRanks",()=>{var e,r,o,i;return e=I.Z(u.Z(n.nodes(),function(e){return n.node(e).rank})),r=[],t.Z(n.nodes(),function(t){var o=n.node(t).rank-e;r[o]||(r[o]=[]),r[o].push(t)}),o=0,i=n.graph().nodeRankFactor,void t.Z(r,function(e,r){L.Z(e)&&r%i!=0?--o:o&&t.Z(e,function(e){n.node(e).rank+=o})})}),r("    nestingGraph.cleanup",()=>{var e;return e=n.graph(),void(n.removeNode(e.nestingRoot),delete e.nestingRoot,t.Z(n.edges(),function(e){n.edge(e).nestingEdge&&n.removeEdge(e)}))}),r("    normalizeRanks",()=>{var e;return e=I.Z(u.Z(n.nodes(),function(e){return n.node(e).rank})),void t.Z(n.nodes(),function(r){var t=n.node(r);P.Z(t,"rank")&&(t.rank-=e)})}),r("    assignRankMinMax",()=>{var e;return e=0,void(t.Z(n.nodes(),function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=lodash_es_max(e,t.maxRank))}),n.graph().maxRank=e)}),r("    removeEdgeLabelProxies",()=>{t.Z(n.nodes(),function(e){var r=n.node(e);"edge-proxy"===r.dummy&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}),r("    normalize.run",()=>{n.graph().dummyChains=[],t.Z(n.edges(),function(e){(function(e,n){var r,t,o=n.v,i=e.node(o).rank,a=n.w,d=e.node(a).rank,u=n.name,s=e.edge(n),c=s.labelRank;if(d!==i+1){e.removeEdge(n);var f=void 0;for(t=0,++i;i<d;++t,++i)s.points=[],r=addDummyNode(e,"edge",f={width:0,height:0,edgeLabel:s,edgeObj:n,rank:i},"_d"),i===c&&(f.width=s.width,f.height=s.height,f.dummy="edge-label",f.labelpos=s.labelpos),e.setEdge(o,r,{weight:s.weight},u),0===t&&e.graph().dummyChains.push(r),o=r;e.setEdge(o,a,{weight:s.weight},u)}})(n,e)})}),r("    parentDummyChains",()=>{var e,r;return e={},r=0,t.Z(n.children(),function dfs(o){var i=r;t.Z(n.children(o),dfs),e[o]={low:i,lim:r++}}),void t.Z(n.graph().dummyChains,function(r){for(var t=n.node(r),o=t.edgeObj,i=function(e,n,r,t){var o,i,a=[],d=[],u=Math.min(n[r].low,n[t].low),s=Math.max(n[r].lim,n[t].lim);o=r;do a.push(o=e.parent(o));while(o&&(n[o].low>u||s>n[o].lim));for(i=o,o=t;(o=e.parent(o))!==i;)d.push(o);return{path:a.concat(d.reverse()),lca:i}}(n,e,o.v,o.w),a=i.path,d=i.lca,u=0,s=a[0],c=!0;r!==o.w;){if(t=n.node(r),c){for(;(s=a[u])!==d&&n.node(s).maxRank<t.rank;)u++;s===d&&(c=!1)}if(!c){for(;u<a.length-1&&n.node(s=a[u+1]).minRank<=t.rank;)u++;s=a[u]}n.setParent(r,s),r=n.successors(r)[0]}})}),r("    addBorderSegments",()=>{t.Z(n.children(),function dfs(e){var r=n.children(e),o=n.node(e);if(r.length&&t.Z(r,dfs),Object.prototype.hasOwnProperty.call(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var i=o.minRank,a=o.maxRank+1;i<a;++i)add_border_segments_addBorderNode(n,"borderLeft","_bl",e,o,i),add_border_segments_addBorderNode(n,"borderRight","_br",e,o,i)}})}),r("    order",()=>(function(e){var n=util_maxRank(e),r=buildLayerGraphs(e,lodash_es_range(1,n+1),"inEdges"),o=buildLayerGraphs(e,lodash_es_range(n-1,-1,-1),"outEdges"),i=(a={},s=T.Z(e.nodes(),function(n){return!e.children(n).length}),c=lodash_es_max(u.Z(s,function(n){return e.node(n).rank})),f=u.Z(lodash_es_range(c+1),function(){return[]}),h=eu(s,function(n){return e.node(n).rank}),t.Z(h,function dfs(n){P.Z(a,n)||(a[n]=!0,f[e.node(n).rank].push(n),t.Z(e.successors(n),dfs))}),f);assignOrder(e,i);for(var a,s,c,f,h,g,v=Number.POSITIVE_INFINITY,p=0,m=0;m<4;++p,++m){(function(e,n){var r=new l.k;t.Z(e,function(e){var o,i,a,s=e.graph().root,c=function sortSubgraph(e,n,r,o){var i,a,s,c,f,h,l,g,v,p,m=e.children(n),Z=e.node(n),w=Z?Z.borderLeft:void 0,y=Z?Z.borderRight:void 0,_={};w&&(m=T.Z(m,function(e){return e!==w&&e!==y}));var x=(i=m,u.Z(i,function(n){var r=e.inEdges(n);if(!r.length)return{v:n};var t=$.Z(r,function(n,r){var t=e.edge(r),o=e.node(r.v);return{sum:n.sum+t.weight*o.order,weight:n.weight+t.weight}},{sum:0,weight:0});return{v:n,barycenter:t.sum/t.weight,weight:t.weight}}));t.Z(x,function(n){if(e.children(n.v).length){var t=sortSubgraph(e,n.v,r,o);_[n.v]=t,Object.prototype.hasOwnProperty.call(t,"barycenter")&&(L.Z(n.barycenter)?(n.barycenter=t.barycenter,n.weight=t.weight):(n.barycenter=(n.barycenter*n.weight+t.barycenter*t.weight)/(n.weight+t.weight),n.weight+=t.weight))}});var k=(a={},t.Z(x,function(e,n){var r=a[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};L.Z(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)}),t.Z(r.edges(),function(e){var n=a[e.v],r=a[e.w];L.Z(n)||L.Z(r)||(r.indegree++,n.out.push(a[e.w]))}),function(e){for(var n=[];e.length;){var r=e.pop();n.push(r),t.Z(r.in.reverse(),function(e){return function(n){!n.merged&&(L.Z(n.barycenter)||L.Z(e.barycenter)||n.barycenter>=e.barycenter)&&function(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}(e,n)}}(r)),t.Z(r.out,function(n){return function(r){r.in.push(n),0==--r.indegree&&e.push(r)}}(r))}return u.Z(T.Z(n,function(e){return!e.merged}),function(e){return b(e,["vs","i","barycenter","weight"])})}(T.Z(a,function(e){return!e.indegree})));(function(e,n){t.Z(e,function(e){e.vs=d.Z(e.vs.map(function(e){return n[e]?n[e].vs:e}))})})(k,_);var E=(c=(s={lhs:[],rhs:[]},t.Z(k,function(e){Object.prototype.hasOwnProperty.call(e,"barycenter")?s.lhs.push(e):s.rhs.push(e)}),s).lhs,f=eu(s.rhs,function(e){return-e.i}),h=[],l=0,g=0,v=0,c.sort(function(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}(!!o)),v=consumeUnsortable(h,f,v),t.Z(c,function(e){v+=e.vs.length,h.push(e.vs),l+=e.barycenter*e.weight,g+=e.weight,v=consumeUnsortable(h,f,v)}),p={vs:d.Z(h)},g&&(p.barycenter=l/g,p.weight=g),p);if(w&&(E.vs=d.Z([w,E.vs,y]),e.predecessors(w).length)){var N=e.node(e.predecessors(w)[0]),O=e.node(e.predecessors(y)[0]);Object.prototype.hasOwnProperty.call(E,"barycenter")||(E.barycenter=0,E.weight=0),E.barycenter=(E.barycenter*E.weight+N.order+O.order)/(E.weight+2),E.weight+=2}return E}(e,s,r,n);t.Z(c.vs,function(n,r){e.node(n).order=r}),o=c.vs,a={},t.Z(o,function(n){for(var t,o,d=e.parent(n);d;){if((t=e.parent(d))?(o=a[t],a[t]=d):(o=i,i=d),o&&o!==d){r.setEdge(o,d);return}d=t}})})})(p%2?r:o,p%4>=2),i=buildLayerMatrix(e);var Z,w=function(e,n){for(var r=0,o=1;o<n.length;++o)r+=function(e,n,r){for(var o=_baseZipObject(r||[],u.Z(r,function(e,n){return n})||[],en.Z),i=d.Z(u.Z(n,function(n){return eu(u.Z(e.outEdges(n),function(n){return{pos:o[n.w],weight:e.edge(n).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var s=2*a-1;a-=1;var c=u.Z(Array(s),function(){return 0}),f=0;return t.Z(i.forEach(function(e){var n=e.pos+a;c[n]+=e.weight;for(var r=0;n>0;)n%2&&(r+=c[n+1]),n=n-1>>1,c[n]+=e.weight;f+=e.weight*r})),f}(e,n[o-1],n[o]);return r}(e,i);w<v&&(m=0,Z=i,g=(0,ee.Z)(Z,5),v=w)}assignOrder(e,g)})(n)),r("    insertSelfEdges",()=>{var e;return e=buildLayerMatrix(n),void t.Z(e,function(e){var r=0;t.Z(e,function(e,o){var i=n.node(e);i.order=o+r,t.Z(i.selfEdges,function(e){addDummyNode(n,"selfedge",{width:e.label.width,height:e.label.height,rank:i.rank,order:o+ ++r,e:e.e,label:e.label},"_se")}),delete i.selfEdges})})}),r("    adjustCoordinateSystem",()=>{var e;("lr"===(e=n.graph().rankdir.toLowerCase())||"rl"===e)&&swapWidthHeight(n)}),r("    position",()=>{var e,r,o,i,a,d,s,c,f,h,g,p,m,Z,w,b,y;w=buildLayerMatrix(Z=e=asNonCompoundGraph(e=n)),b=Z.graph().ranksep,y=0,t.Z(w,function(e){var n=lodash_es_max(u.Z(e,function(e){return Z.node(e).height}));t.Z(e,function(e){Z.node(e).y=y+n/2}),y+=n+b}),i=buildLayerMatrix(r=e),d=v.Z((a={},$.Z(i,function(e,n){var o=0,i=0,d=e.length,u=k.Z(n);return t.Z(n,function(e,s){var c=function(e,n){if(e.node(n).dummy)return M.Z(e.predecessors(n),function(n){return e.node(n).dummy})}(r,e),f=c?r.node(c).order:d;(c||e===u)&&(t.Z(n.slice(i,s+1),function(e){t.Z(r.predecessors(e),function(n){var t=r.node(n),i=t.order;(i<o||f<i)&&!(t.dummy&&r.node(e).dummy)&&addConflict(a,n,e)})}),i=s+1,o=f)}),n}),a),function(e,n){var r={};function scan(n,o,i,a,d){var u;t.Z(lodash_es_range(o,i),function(o){u=n[o],e.node(u).dummy&&t.Z(e.predecessors(u),function(n){var t=e.node(n);t.dummy&&(t.order<a||t.order>d)&&addConflict(r,n,u)})})}return $.Z(n,function(n,r){var o,i=-1,a=0;return t.Z(r,function(t,d){if("border"===e.node(t).dummy){var u=e.predecessors(t);u.length&&(o=e.node(u[0]).order,scan(r,a,d,i,o),a=d,i=o)}scan(r,a,r.length,o,n.length)}),r}),r}(r,i)),s={},t.Z(["u","d"],function(e){o="u"===e?i:Q.Z(i).reverse(),t.Z(["l","r"],function(n){"r"===n&&(o=u.Z(o,function(e){return Q.Z(e).reverse()}));var i,a,c,f,h=("u"===e?r.predecessors:r.successors).bind(r),g=(i=o,a={},c={},f={},t.Z(i,function(e){t.Z(e,function(e,n){a[e]=e,c[e]=e,f[e]=n})}),t.Z(i,function(e){var n=-1;t.Z(e,function(e){var r=h(e);if(r.length)for(var t=((r=eu(r,function(e){return f[e]})).length-1)/2,o=Math.floor(t),i=Math.ceil(t);o<=i;++o){var u=r[o];c[e]===e&&n<f[u]&&!function(e,n,r){if(n>r){var t=n;n=r,r=t}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],r)}(d,e,u)&&(c[u]=e,c[e]=a[e]=a[u],n=f[u])}})}),{root:a,align:c}),v=function(e,n,r,o,i){var a,d,u,s,c,f={},h=(u=new l.k,a=(s=e.graph()).nodesep,d=s.edgesep,c=function(e,n,r){var t,o,u=e.node(n),s=e.node(r);if(t=0+u.width/2,Object.prototype.hasOwnProperty.call(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":o=-u.width/2;break;case"r":o=u.width/2}if(o&&(t+=i?o:-o),o=0,t+=(u.dummy?d:a)/2+(s.dummy?d:a)/2+s.width/2,Object.prototype.hasOwnProperty.call(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":o=s.width/2;break;case"r":o=-s.width/2}return o&&(t+=i?o:-o),o=0,t},t.Z(n,function(n){var o;t.Z(n,function(n){var t=r[n];if(u.setNode(t),o){var i=r[o],a=u.edge(i,t);u.setEdge(i,t,Math.max(c(e,n,o),a||0))}o=n})}),u),g=i?"borderLeft":"borderRight";function iterate(e,n){for(var r=h.nodes(),t=r.pop(),o={};t;)o[t]?e(t):(o[t]=!0,r.push(t),r=r.concat(n(t))),t=r.pop()}return iterate(function(e){f[e]=h.inEdges(e).reduce(function(e,n){return Math.max(e,f[n.v]+h.edge(n))},0)},h.predecessors.bind(h)),iterate(function(n){var r=h.outEdges(n).reduce(function(e,n){return Math.min(e,f[n.w]-h.edge(n))},Number.POSITIVE_INFINITY),t=e.node(n);r!==Number.POSITIVE_INFINITY&&t.borderType!==g&&(f[n]=Math.max(f[n],r))},h.successors.bind(h)),t.Z(o,function(e){f[e]=f[r[e]]}),f}(r,o,g.root,g.align,"r"===n);"r"===n&&(v=lodash_es_mapValues(v,function(e){return-e})),s[e+n]=v})}),c=lodash_es_minBy(Q.Z(s),function(e){var n=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return null==e||(0,ec.Z)(e,(0,es.Z)(function(e,o){var i=r.node(o).width/2;n=Math.max(e+i,n),t=Math.min(e-i,t)}),ef.Z),n-t}),f=Q.Z(c),h=I.Z(f),g=lodash_es_max(f),t.Z(["u","d"],function(e){t.Z(["l","r"],function(n){var r,t=e+n,o=s[t];if(o!==c){var i=Q.Z(o);(r="l"===n?h-I.Z(i):g-lodash_es_max(i))&&(s[t]=lodash_es_mapValues(o,function(e){return e+r}))}})}),p=r.graph().align,(m=lodash_es_mapValues(s.ul,function(e,n){if(p)return s[p.toLowerCase()][n];var r=eu(u.Z(s,n));return(r[1]+r[2])/2}))&&(0,N.Z)(m,(0,es.Z)(function(n,r){e.node(r).x=n}))}),r("    positionSelfEdges",()=>{t.Z(n.nodes(),function(e){var r=n.node(e);if("selfedge"===r.dummy){var t=n.node(r.e.v),o=t.x+t.width/2,i=t.y,a=r.x-o,d=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:o+2*a/3,y:i-d},{x:o+5*a/6,y:i-d},{x:o+a,y:i},{x:o+5*a/6,y:i+d},{x:o+2*a/3,y:i+d}],r.label.x=r.x,r.label.y=r.y}})}),r("    removeBorderNodes",()=>{t.Z(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),o=n.node(r.borderBottom),i=n.node(k.Z(r.borderLeft)),a=n.node(k.Z(r.borderRight));r.width=Math.abs(a.x-i.x),r.height=Math.abs(o.y-t.y),r.x=i.x+r.width/2,r.y=t.y+r.height/2}}),t.Z(n.nodes(),function(e){"border"===n.node(e).dummy&&n.removeNode(e)})}),r("    normalize.undo",()=>{t.Z(n.graph().dummyChains,function(e){var r,t=n.node(e),o=t.edgeLabel;for(n.setEdge(t.edgeObj,o);t.dummy;)r=n.successors(e)[0],n.removeNode(e),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),e=r,t=n.node(e)})}),r("    fixupEdgeLabelCoords",()=>{t.Z(n.edges(),function(e){var r=n.edge(e);if(Object.prototype.hasOwnProperty.call(r,"x"))switch(("l"===r.labelpos||"r"===r.labelpos)&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}})}),r("    undoCoordinateSystem",()=>{var e;("bt"===(e=n.graph().rankdir.toLowerCase())||"rl"===e)&&(t.Z(n.nodes(),function(e){reverseYOne(n.node(e))}),t.Z(n.edges(),function(e){var r=n.edge(e);t.Z(r.points,reverseYOne),Object.prototype.hasOwnProperty.call(r,"y")&&reverseYOne(r)})),("lr"===e||"rl"===e)&&(t.Z(n.nodes(),function(e){swapXYOne(n.node(e))}),t.Z(n.edges(),function(e){var r=n.edge(e);t.Z(r.points,swapXYOne),Object.prototype.hasOwnProperty.call(r,"x")&&swapXYOne(r)}),swapWidthHeight(n))}),r("    translateGraph",()=>(function(e){var n=Number.POSITIVE_INFINITY,r=0,o=Number.POSITIVE_INFINITY,i=0,a=e.graph(),d=a.marginx||0,u=a.marginy||0;function getExtremes(e){var t=e.x,a=e.y,d=e.width,u=e.height;n=Math.min(n,t-d/2),r=Math.max(r,t+d/2),o=Math.min(o,a-u/2),i=Math.max(i,a+u/2)}t.Z(e.nodes(),function(n){getExtremes(e.node(n))}),t.Z(e.edges(),function(n){var r=e.edge(n);Object.prototype.hasOwnProperty.call(r,"x")&&getExtremes(r)}),n-=d,o-=u,t.Z(e.nodes(),function(r){var t=e.node(r);t.x-=n,t.y-=o}),t.Z(e.edges(),function(r){var i=e.edge(r);t.Z(i.points,function(e){e.x-=n,e.y-=o}),Object.prototype.hasOwnProperty.call(i,"x")&&(i.x-=n),Object.prototype.hasOwnProperty.call(i,"y")&&(i.y-=o)}),a.width=r-n+d,a.height=i-o+u})(n)),r("    assignNodeIntersects",()=>{t.Z(n.edges(),function(e){var r,t,o=n.edge(e),i=n.node(e.v),a=n.node(e.w);o.points?(r=o.points[0],t=o.points[o.points.length-1]):(o.points=[],r=a,t=i),o.points.unshift(intersectRect(i,r)),o.points.push(intersectRect(a,t))})}),r("    reversePoints",()=>{t.Z(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}),r("    acyclic.undo",()=>{t.Z(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}})})}),r("  updateInputGraph",()=>{t.Z(e.nodes(),function(r){var t=e.node(r),o=n.node(r);t&&(t.x=o.x,t.y=o.y,n.children(r).length&&(t.width=o.width,t.height=o.height))}),t.Z(e.edges(),function(r){var t=e.edge(r),o=n.edge(r);t.points=o.points,Object.prototype.hasOwnProperty.call(o,"x")&&(t.x=o.x,t.y=o.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height})})}var eh=["nodesep","edgesep","ranksep","marginx","marginy"],el={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},eg=["acyclicer","ranker","rankdir","align"],ev=["width","height"],ep={width:0,height:0},em=["minlen","weight","width","height","labeloffset"],eZ={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},ew=["labelpos"];function selectNumberAttrs(e,n){return lodash_es_mapValues(b(e,n),Number)}function canonicalize(e){var n={};return t.Z(e,function(e,r){n[r.toLowerCase()]=e}),n}}};