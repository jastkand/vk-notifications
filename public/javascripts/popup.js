
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

var API = {
    call: function(method, options, callback) {
        $.ajax({
            url: this.requestUrl(method, options),
            success: function(data) {
                if (callback && typeof callback === "function") {
                    callback(data);
                }
            }
        });
    },
    requestUrl: function(method, options) {
        var optionsString;
        if (options && typeof options === "object") {
            optionsString = serialize(options);
        }
        else {
            optionsString = options;
        }
        return "https://api.vk.com/method/" + method.toString() + "?" + optionsString;
    }
};


if (jQuery.when.all === undefined) {
    jQuery.when.all = function(deferreds) {
        var deferred = new jQuery.Deferred();
        $.when.apply(jQuery, deferreds).then(
            function() {
                deferred.resolve(Array.prototype.slice.call(arguments));
            },
            function() {
                deferred.fail(Array.prototype.slice.call(arguments));
            });

        return deferred;
    }
}

function linkify(text) {
    var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
      pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
      emailAddressPattern = /[\w.+-]+@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6})+/gim;

    return text
      .replace(urlPattern, '<a href="$&">$&</a>')
      .replace(pseudoUrlPattern, '$1<a href="http://$2">$2</a>')
      .replace(emailAddressPattern, '<a href="mailto:$&">$&</a>');
}

function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}

function log(scope, message){
    var debug = true;
    if (debug) {
        console.log(scope + ':', message)
    }
}


/*global exports */
/*!
 * emoji
 *
 * This file auto create by 'bin/create_emoji_js.py'.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 *
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

;(function (name, definition) {
  // Come from eventproxy: https://github.com/JacksonTian/eventproxy/blob/master/lib/eventproxy.js#L7

  // this is considered "safe":
  var hasDefine = typeof define === 'function';
  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD Module or CMD Module
    define(definition);
  } else if (hasExports) {
    // Node.js Module
    module.exports = definition();
  } else {
    // Assign to common namespaces or simply the global object (window)
    this[name] = definition();
  }
})('jEmoji', function () {

var jEmoji = {};

/**
 * Emoji code map.
 *
 * format:
 *   Unified: [unified_unicode, title, classname, DoCoMo, KDDI, Softbank, Google]'
 *
 * @type {Object}
 */
var EMOJI_MAP = jEmoji.EMOJI_MAP = {
  // missing
  "👬": ["U+1F46C", "man and man holding hands", "1f46c", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "👭": ["U+1F46D", "woman and woman holding hands", "1f46d", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "🌲": ["U+1F332", "evergreen tree", "1f332", ["-", "-"], ["", "U+EB49"], ["", "U+E305"], ["󾁍", "U+FE04D"]],
  "🌳": ["U+1F333", "deciduous tree", "1f333", ["-", "-"], ["", "U+EB49"], ["", "U+E305"], ["󾁍", "U+FE04D"]],
  "🍋":  ["U+1F34B", "lemon", "1f34b", ["-", "-"], ["", "U+EABA"], ["", "U+E346"], ["󾁒", "U+FE052"]],
  "😎": ["U+1F60E", "smiling face with sunglasses", "1f60e", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],
  "😀":  ["U+1F600", "grinning face", "1f600", ["", "U+E753"], ["", "U+EB80"], ["", "U+E404"], ["󾌳", "U+FE333"]],
  // table.html
  "☀": ["U+2600", "black sun with rays", "2600", ["", "U+E63E"], ["", "U+E488"], ["", "U+E04A"], ["󾀀", "U+FE000"]],
  "☁": ["U+2601", "cloud", "2601", ["", "U+E63F"], ["", "U+E48D"], ["", "U+E049"], ["󾀁", "U+FE001"]],
  "☔": ["U+2614", "umbrella with rain drops", "2614", ["", "U+E640"], ["", "U+E48C"], ["", "U+E04B"], ["󾀂", "U+FE002"]],
  "⛄": ["U+26C4", "snowman without snow", "26c4", ["", "U+E641"], ["", "U+E485"], ["", "U+E048"], ["󾀃", "U+FE003"]],
  "⚡": ["U+26A1", "high voltage sign", "26a1", ["", "U+E642"], ["", "U+E487"], ["", "U+E13D"], ["󾀄", "U+FE004"]],
  "🌀": ["U+1F300", "cyclone", "1f300", ["", "U+E643"], ["", "U+E469"], ["", "U+E443"], ["󾀅", "U+FE005"]],
  "🌁": ["U+1F301", "foggy", "1f301", ["", "U+E644"], ["", "U+E598"], ["-", "-"], ["󾀆", "U+FE006"]],
  "🌂": ["U+1F302", "closed umbrella", "1f302", ["", "U+E645"], ["", "U+EAE8"], ["", "U+E43C"], ["󾀇", "U+FE007"]],
  "🌃": ["U+1F303", "night with stars", "1f303", ["", "U+E6B3"], ["", "U+EAF1"], ["", "U+E44B"], ["󾀈", "U+FE008"]],
  "🌄": ["U+1F304", "sunrise over mountains", "1f304", ["", "U+E63E"], ["", "U+EAF4"], ["", "U+E04D"], ["󾀉", "U+FE009"]],
  "🌅": ["U+1F305", "sunrise", "1f305", ["", "U+E63E"], ["", "U+EAF4"], ["", "U+E449"], ["󾀊", "U+FE00A"]],
  "🌆": ["U+1F306", "cityscape at dusk", "1f306", ["-", "-"], ["", "U+E5DA"], ["", "U+E146"], ["󾀋", "U+FE00B"]],
  "🌇": ["U+1F307", "sunset over buildings", "1f307", ["", "U+E63E"], ["", "U+E5DA"], ["", "U+E44A"], ["󾀌", "U+FE00C"]],
  "🌈": ["U+1F308", "rainbow", "1f308", ["-", "-"], ["", "U+EAF2"], ["", "U+E44C"], ["󾀍", "U+FE00D"]],
  "❄": ["U+2744", "snowflake", "2744", ["-", "-"], ["", "U+E48A"], ["-", "-"], ["󾀎", "U+FE00E"]],
  "⛅": ["U+26C5", "sun behind cloud", "26c5", ["", "U+E63E U+E63F"], ["", "U+E48E"], ["", "U+E04A U+E049"], ["󾀏", "U+FE00F"]],
  "🌉": ["U+1F309", "bridge at night", "1f309", ["", "U+E6B3"], ["", "U+E4BF"], ["", "U+E44B"], ["󾀐", "U+FE010"]],
  "🌊": ["U+1F30A", "water wave", "1f30a", ["", "U+E73F"], ["", "U+EB7C"], ["", "U+E43E"], ["󾀸", "U+FE038"]],
  "🌋": ["U+1F30B", "volcano", "1f30b", ["-", "-"], ["", "U+EB53"], ["-", "-"], ["󾀺", "U+FE03A"]],
  "🌌": ["U+1F30C", "milky way", "1f30c", ["", "U+E6B3"], ["", "U+EB5F"], ["", "U+E44B"], ["󾀻", "U+FE03B"]],
  "🌏": ["U+1F30F", "earth globe asia-australia", "1f30f", ["-", "-"], ["", "U+E5B3"], ["-", "-"], ["󾀹", "U+FE039"]],
  "🌑": ["U+1F311", "new moon symbol", "1f311", ["", "U+E69C"], ["", "U+E5A8"], ["-", "-"], ["󾀑", "U+FE011"]],
  "🌔": ["U+1F314", "waxing gibbous moon symbol", "1f314", ["", "U+E69D"], ["", "U+E5A9"], ["", "U+E04C"], ["󾀒", "U+FE012"]],
  "🌓": ["U+1F313", "first quarter moon symbol", "1f313", ["", "U+E69E"], ["", "U+E5AA"], ["", "U+E04C"], ["󾀓", "U+FE013"]],
  "🌙": ["U+1F319", "crescent moon", "1f319", ["", "U+E69F"], ["", "U+E486"], ["", "U+E04C"], ["󾀔", "U+FE014"]],
  "🌕": ["U+1F315", "full moon symbol", "1f315", ["", "U+E6A0"], ["-", "-"], ["-", "-"], ["󾀕", "U+FE015"]],
  "🌛": ["U+1F31B", "first quarter moon with face", "1f31b", ["", "U+E69E"], ["", "U+E489"], ["", "U+E04C"], ["󾀖", "U+FE016"]],
  "🌟": ["U+1F31F", "glowing star", "1f31f", ["-", "-"], ["", "U+E48B"], ["", "U+E335"], ["󾭩", "U+FEB69"]],
  "🌠": ["U+1F320", "shooting star", "1f320", ["-", "-"], ["", "U+E468"], ["-", "-"], ["󾭪", "U+FEB6A"]],
  "🕐": ["U+1F550", "clock face one oclock", "1f550", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E024"], ["󾀞", "U+FE01E"]],
  "🕑": ["U+1F551", "clock face two oclock", "1f551", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E025"], ["󾀟", "U+FE01F"]],
  "🕒": ["U+1F552", "clock face three oclock", "1f552", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E026"], ["󾀠", "U+FE020"]],
  "🕓": ["U+1F553", "clock face four oclock", "1f553", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E027"], ["󾀡", "U+FE021"]],
  "🕔": ["U+1F554", "clock face five oclock", "1f554", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E028"], ["󾀢", "U+FE022"]],
  "🕕": ["U+1F555", "clock face six oclock", "1f555", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E029"], ["󾀣", "U+FE023"]],
  "🕖": ["U+1F556", "clock face seven oclock", "1f556", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02A"], ["󾀤", "U+FE024"]],
  "🕗": ["U+1F557", "clock face eight oclock", "1f557", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02B"], ["󾀥", "U+FE025"]],
  "🕘": ["U+1F558", "clock face nine oclock", "1f558", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02C"], ["󾀦", "U+FE026"]],
  "🕙": ["U+1F559", "clock face ten oclock", "1f559", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02D"], ["󾀧", "U+FE027"]],
  "🕚": ["U+1F55A", "clock face eleven oclock", "1f55a", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02E"], ["󾀨", "U+FE028"]],
  "🕛": ["U+1F55B", "clock face twelve oclock", "1f55b", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02F"], ["󾀩", "U+FE029"]],
  "⌚": ["U+231A", "watch", "231a", ["", "U+E71F"], ["", "U+E57A"], ["-", "-"], ["󾀝", "U+FE01D"]],
  "⌛": ["U+231B", "hourglass", "231b", ["", "U+E71C"], ["", "U+E57B"], ["-", "-"], ["󾀜", "U+FE01C"]],
  "⏰": ["U+23F0", "alarm clock", "23f0", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02D"], ["󾀪", "U+FE02A"]],
  "⏳": ["U+23F3", "hourglass with flowing sand", "23f3", ["", "U+E71C"], ["", "U+E47C"], ["-", "-"], ["󾀛", "U+FE01B"]],
  "♈": ["U+2648", "aries", "2648", ["", "U+E646"], ["", "U+E48F"], ["", "U+E23F"], ["󾀫", "U+FE02B"]],
  "♉": ["U+2649", "taurus", "2649", ["", "U+E647"], ["", "U+E490"], ["", "U+E240"], ["󾀬", "U+FE02C"]],
  "♊": ["U+264A", "gemini", "264a", ["", "U+E648"], ["", "U+E491"], ["", "U+E241"], ["󾀭", "U+FE02D"]],
  "♋": ["U+264B", "cancer", "264b", ["", "U+E649"], ["", "U+E492"], ["", "U+E242"], ["󾀮", "U+FE02E"]],
  "♌": ["U+264C", "leo", "264c", ["", "U+E64A"], ["", "U+E493"], ["", "U+E243"], ["󾀯", "U+FE02F"]],
  "♍": ["U+264D", "virgo", "264d", ["", "U+E64B"], ["", "U+E494"], ["", "U+E244"], ["󾀰", "U+FE030"]],
  "♎": ["U+264E", "libra", "264e", ["", "U+E64C"], ["", "U+E495"], ["", "U+E245"], ["󾀱", "U+FE031"]],
  "♏": ["U+264F", "scorpius", "264f", ["", "U+E64D"], ["", "U+E496"], ["", "U+E246"], ["󾀲", "U+FE032"]],
  "♐": ["U+2650", "sagittarius", "2650", ["", "U+E64E"], ["", "U+E497"], ["", "U+E247"], ["󾀳", "U+FE033"]],
  "♑": ["U+2651", "capricorn", "2651", ["", "U+E64F"], ["", "U+E498"], ["", "U+E248"], ["󾀴", "U+FE034"]],
  "♒": ["U+2652", "aquarius", "2652", ["", "U+E650"], ["", "U+E499"], ["", "U+E249"], ["󾀵", "U+FE035"]],
  "♓": ["U+2653", "pisces", "2653", ["", "U+E651"], ["", "U+E49A"], ["", "U+E24A"], ["󾀶", "U+FE036"]],
  "⛎": ["U+26CE", "ophiuchus", "26ce", ["-", "-"], ["", "U+E49B"], ["", "U+E24B"], ["󾀷", "U+FE037"]],
  "🍀": ["U+1F340", "four leaf clover", "1f340", ["", "U+E741"], ["", "U+E513"], ["", "U+E110"], ["󾀼", "U+FE03C"]],
  "🌷": ["U+1F337", "tulip", "1f337", ["", "U+E743"], ["", "U+E4E4"], ["", "U+E304"], ["󾀽", "U+FE03D"]],
  "🌱": ["U+1F331", "seedling", "1f331", ["", "U+E746"], ["", "U+EB7D"], ["", "U+E110"], ["󾀾", "U+FE03E"]],
  "🍁": ["U+1F341", "maple leaf", "1f341", ["", "U+E747"], ["", "U+E4CE"], ["", "U+E118"], ["󾀿", "U+FE03F"]],
  "🌸": ["U+1F338", "cherry blossom", "1f338", ["", "U+E748"], ["", "U+E4CA"], ["", "U+E030"], ["󾁀", "U+FE040"]],
  "🌹": ["U+1F339", "rose", "1f339", ["-", "-"], ["", "U+E5BA"], ["", "U+E032"], ["󾁁", "U+FE041"]],
  "🍂": ["U+1F342", "fallen leaf", "1f342", ["", "U+E747"], ["", "U+E5CD"], ["", "U+E119"], ["󾁂", "U+FE042"]],
  "🍃": ["U+1F343", "leaf fluttering in wind", "1f343", ["-", "-"], ["", "U+E5CD"], ["", "U+E447"], ["󾁃", "U+FE043"]],
  "🌺": ["U+1F33A", "hibiscus", "1f33a", ["-", "-"], ["", "U+EA94"], ["", "U+E303"], ["󾁅", "U+FE045"]],
  "🌻": ["U+1F33B", "sunflower", "1f33b", ["-", "-"], ["", "U+E4E3"], ["", "U+E305"], ["󾁆", "U+FE046"]],
  "🌴": ["U+1F334", "palm tree", "1f334", ["-", "-"], ["", "U+E4E2"], ["", "U+E307"], ["󾁇", "U+FE047"]],
  "🌵": ["U+1F335", "cactus", "1f335", ["-", "-"], ["", "U+EA96"], ["", "U+E308"], ["󾁈", "U+FE048"]],
  "🌾": ["U+1F33E", "ear of rice", "1f33e", ["-", "-"], ["-", "-"], ["", "U+E444"], ["󾁉", "U+FE049"]],
  "🌽": ["U+1F33D", "ear of maize", "1f33d", ["-", "-"], ["", "U+EB36"], ["-", "-"], ["󾁊", "U+FE04A"]],
  "🍄": ["U+1F344", "mushroom", "1f344", ["-", "-"], ["", "U+EB37"], ["-", "-"], ["󾁋", "U+FE04B"]],
  "🌰": ["U+1F330", "chestnut", "1f330", ["-", "-"], ["", "U+EB38"], ["-", "-"], ["󾁌", "U+FE04C"]],
  "🌼": ["U+1F33C", "blossom", "1f33c", ["-", "-"], ["", "U+EB49"], ["", "U+E305"], ["󾁍", "U+FE04D"]],
  "🌿": ["U+1F33F", "herb", "1f33f", ["", "U+E741"], ["", "U+EB82"], ["", "U+E110"], ["󾁎", "U+FE04E"]],
  "🍒": ["U+1F352", "cherries", "1f352", ["", "U+E742"], ["", "U+E4D2"], ["-", "-"], ["󾁏", "U+FE04F"]],
  "🍌": ["U+1F34C", "banana", "1f34c", ["", "U+E744"], ["", "U+EB35"], ["-", "-"], ["󾁐", "U+FE050"]],
  "🍎": ["U+1F34E", "red apple", "1f34e", ["", "U+E745"], ["", "U+EAB9"], ["", "U+E345"], ["󾁑", "U+FE051"]],
  "🍊": ["U+1F34A", "tangerine", "1f34a", ["-", "-"], ["", "U+EABA"], ["", "U+E346"], ["󾁒", "U+FE052"]],
  "🍓": ["U+1F353", "strawberry", "1f353", ["-", "-"], ["", "U+E4D4"], ["", "U+E347"], ["󾁓", "U+FE053"]],
  "🍉": ["U+1F349", "watermelon", "1f349", ["-", "-"], ["", "U+E4CD"], ["", "U+E348"], ["󾁔", "U+FE054"]],
  "🍅": ["U+1F345", "tomato", "1f345", ["-", "-"], ["", "U+EABB"], ["", "U+E349"], ["󾁕", "U+FE055"]],
  "🍆": ["U+1F346", "aubergine", "1f346", ["-", "-"], ["", "U+EABC"], ["", "U+E34A"], ["󾁖", "U+FE056"]],
  "🍈": ["U+1F348", "melon", "1f348", ["-", "-"], ["", "U+EB32"], ["-", "-"], ["󾁗", "U+FE057"]],
  "🍍": ["U+1F34D", "pineapple", "1f34d", ["-", "-"], ["", "U+EB33"], ["-", "-"], ["󾁘", "U+FE058"]],
  "🍇": ["U+1F347", "grapes", "1f347", ["-", "-"], ["", "U+EB34"], ["-", "-"], ["󾁙", "U+FE059"]],
  "🍑": ["U+1F351", "peach", "1f351", ["-", "-"], ["", "U+EB39"], ["-", "-"], ["󾁚", "U+FE05A"]],
  "🍏": ["U+1F34F", "green apple", "1f34f", ["", "U+E745"], ["", "U+EB5A"], ["", "U+E345"], ["󾁛", "U+FE05B"]],
  "👀": ["U+1F440", "eyes", "1f440", ["", "U+E691"], ["", "U+E5A4"], ["", "U+E419"], ["󾆐", "U+FE190"]],
  "👂": ["U+1F442", "ear", "1f442", ["", "U+E692"], ["", "U+E5A5"], ["", "U+E41B"], ["󾆑", "U+FE191"]],
  "👃": ["U+1F443", "nose", "1f443", ["-", "-"], ["", "U+EAD0"], ["", "U+E41A"], ["󾆒", "U+FE192"]],
  "👄": ["U+1F444", "mouth", "1f444", ["", "U+E6F9"], ["", "U+EAD1"], ["", "U+E41C"], ["󾆓", "U+FE193"]],
  "👅": ["U+1F445", "tongue", "1f445", ["", "U+E728"], ["", "U+EB47"], ["", "U+E409"], ["󾆔", "U+FE194"]],
  "💄": ["U+1F484", "lipstick", "1f484", ["", "U+E710"], ["", "U+E509"], ["", "U+E31C"], ["󾆕", "U+FE195"]],
  "💅": ["U+1F485", "nail polish", "1f485", ["-", "-"], ["", "U+EAA0"], ["", "U+E31D"], ["󾆖", "U+FE196"]],
  "💆": ["U+1F486", "face massage", "1f486", ["-", "-"], ["", "U+E50B"], ["", "U+E31E"], ["󾆗", "U+FE197"]],
  "💇": ["U+1F487", "haircut", "1f487", ["", "U+E675"], ["", "U+EAA1"], ["", "U+E31F"], ["󾆘", "U+FE198"]],
  "💈": ["U+1F488", "barber pole", "1f488", ["-", "-"], ["", "U+EAA2"], ["", "U+E320"], ["󾆙", "U+FE199"]],
  "👤": ["U+1F464", "bust in silhouette", "1f464", ["", "U+E6B1"], ["-", "-"], ["-", "-"], ["󾆚", "U+FE19A"]],
  "👦": ["U+1F466", "boy", "1f466", ["", "U+E6F0"], ["", "U+E4FC"], ["", "U+E001"], ["󾆛", "U+FE19B"]],
  "👧": ["U+1F467", "girl", "1f467", ["", "U+E6F0"], ["", "U+E4FA"], ["", "U+E002"], ["󾆜", "U+FE19C"]],
  "👨": ["U+1F468", "man", "1f468", ["", "U+E6F0"], ["", "U+E4FC"], ["", "U+E004"], ["󾆝", "U+FE19D"]],
  "👩": ["U+1F469", "woman", "1f469", ["", "U+E6F0"], ["", "U+E4FA"], ["", "U+E005"], ["󾆞", "U+FE19E"]],
  "👪": ["U+1F46A", "family", "1f46a", ["-", "-"], ["", "U+E501"], ["-", "-"], ["󾆟", "U+FE19F"]],
  "👫": ["U+1F46B", "man and woman holding hands", "1f46b", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "👮": ["U+1F46E", "police officer", "1f46e", ["-", "-"], ["", "U+E5DD"], ["", "U+E152"], ["󾆡", "U+FE1A1"]],
  "👯": ["U+1F46F", "woman with bunny ears", "1f46f", ["-", "-"], ["", "U+EADB"], ["", "U+E429"], ["󾆢", "U+FE1A2"]],
  "👰": ["U+1F470", "bride with veil", "1f470", ["-", "-"], ["", "U+EAE9"], ["-", "-"], ["󾆣", "U+FE1A3"]],
  "👱": ["U+1F471", "person with blond hair", "1f471", ["-", "-"], ["", "U+EB13"], ["", "U+E515"], ["󾆤", "U+FE1A4"]],
  "👲": ["U+1F472", "man with gua pi mao", "1f472", ["-", "-"], ["", "U+EB14"], ["", "U+E516"], ["󾆥", "U+FE1A5"]],
  "👳": ["U+1F473", "man with turban", "1f473", ["-", "-"], ["", "U+EB15"], ["", "U+E517"], ["󾆦", "U+FE1A6"]],
  "👴": ["U+1F474", "older man", "1f474", ["-", "-"], ["", "U+EB16"], ["", "U+E518"], ["󾆧", "U+FE1A7"]],
  "👵": ["U+1F475", "older woman", "1f475", ["-", "-"], ["", "U+EB17"], ["", "U+E519"], ["󾆨", "U+FE1A8"]],
  "👶": ["U+1F476", "baby", "1f476", ["-", "-"], ["", "U+EB18"], ["", "U+E51A"], ["󾆩", "U+FE1A9"]],
  "👷": ["U+1F477", "construction worker", "1f477", ["-", "-"], ["", "U+EB19"], ["", "U+E51B"], ["󾆪", "U+FE1AA"]],
  "👸": ["U+1F478", "princess", "1f478", ["-", "-"], ["", "U+EB1A"], ["", "U+E51C"], ["󾆫", "U+FE1AB"]],
  "👹": ["U+1F479", "japanese ogre", "1f479", ["-", "-"], ["", "U+EB44"], ["-", "-"], ["󾆬", "U+FE1AC"]],
  "👺": ["U+1F47A", "japanese goblin", "1f47a", ["-", "-"], ["", "U+EB45"], ["-", "-"], ["󾆭", "U+FE1AD"]],
  "👻": ["U+1F47B", "ghost", "1f47b", ["-", "-"], ["", "U+E4CB"], ["", "U+E11B"], ["󾆮", "U+FE1AE"]],
  "👼": ["U+1F47C", "baby angel", "1f47c", ["-", "-"], ["", "U+E5BF"], ["", "U+E04E"], ["󾆯", "U+FE1AF"]],
  "👽": ["U+1F47D", "extraterrestrial alien", "1f47d", ["-", "-"], ["", "U+E50E"], ["", "U+E10C"], ["󾆰", "U+FE1B0"]],
  "👾": ["U+1F47E", "alien monster", "1f47e", ["-", "-"], ["", "U+E4EC"], ["", "U+E12B"], ["󾆱", "U+FE1B1"]],
  "👿": ["U+1F47F", "imp", "1f47f", ["-", "-"], ["", "U+E4EF"], ["", "U+E11A"], ["󾆲", "U+FE1B2"]],
  "💀": ["U+1F480", "skull", "1f480", ["-", "-"], ["", "U+E4F8"], ["", "U+E11C"], ["󾆳", "U+FE1B3"]],
  "💁": ["U+1F481", "information desk person", "1f481", ["-", "-"], ["-", "-"], ["", "U+E253"], ["󾆴", "U+FE1B4"]],
  "💂": ["U+1F482", "guardsman", "1f482", ["-", "-"], ["-", "-"], ["", "U+E51E"], ["󾆵", "U+FE1B5"]],
  "💃": ["U+1F483", "dancer", "1f483", ["-", "-"], ["", "U+EB1C"], ["", "U+E51F"], ["󾆶", "U+FE1B6"]],
  "🐌": ["U+1F40C", "snail", "1f40c", ["", "U+E74E"], ["", "U+EB7E"], ["-", "-"], ["󾆹", "U+FE1B9"]],
  "🐍": ["U+1F40D", "snake", "1f40d", ["-", "-"], ["", "U+EB22"], ["", "U+E52D"], ["󾇓", "U+FE1D3"]],
  "🐎": ["U+1F40E", "horse", "1f40e", ["", "U+E754"], ["", "U+E4D8"], ["", "U+E134"], ["󾟜", "U+FE7DC"]],
  "🐊": ["U+1F40A", "crocodile", "1f40a", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐋": ["U+1F40B", "whale", "1f40b", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐉": ["U+1F409", "dragon", "1f409", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐈": ["U+1F408", "cat", "1f408", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐇": ["U+1F407", "rabbit", "1f407", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐆": ["U+1F406", "leopard", "1f406", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐅": ["U+1F405", "tiger", "1f405", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐄": ["U+1F404", "cow", "1f404", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐃": ["U+1F403", "water buffalo", "1f403", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐂": ["U+1F402", "ox", "1f402", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐁": ["U+1F401", "mouse", "1f401", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐀": ["U+1F400", "rat", "1f400", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐔": ["U+1F414", "chicken", "1f414", ["-", "-"], ["", "U+EB23"], ["", "U+E52E"], ["󾇔", "U+FE1D4"]],
  "🐗": ["U+1F417", "boar", "1f417", ["-", "-"], ["", "U+EB24"], ["", "U+E52F"], ["󾇕", "U+FE1D5"]],
  "🐫": ["U+1F42B", "bactrian camel", "1f42b", ["-", "-"], ["", "U+EB25"], ["", "U+E530"], ["󾇖", "U+FE1D6"]],
  "🐘": ["U+1F418", "elephant", "1f418", ["-", "-"], ["", "U+EB1F"], ["", "U+E526"], ["󾇌", "U+FE1CC"]],
  "🐨": ["U+1F428", "koala", "1f428", ["-", "-"], ["", "U+EB20"], ["", "U+E527"], ["󾇍", "U+FE1CD"]],
  "🐒": ["U+1F412", "monkey", "1f412", ["-", "-"], ["", "U+E4D9"], ["", "U+E528"], ["󾇎", "U+FE1CE"]],
  "🐑": ["U+1F411", "sheep", "1f411", ["-", "-"], ["", "U+E48F"], ["", "U+E529"], ["󾇏", "U+FE1CF"]],
  "🐙": ["U+1F419", "octopus", "1f419", ["-", "-"], ["", "U+E5C7"], ["", "U+E10A"], ["󾇅", "U+FE1C5"]],
  "🐚": ["U+1F41A", "spiral shell", "1f41a", ["-", "-"], ["", "U+EAEC"], ["", "U+E441"], ["󾇆", "U+FE1C6"]],
  "🐛": ["U+1F41B", "bug", "1f41b", ["-", "-"], ["", "U+EB1E"], ["", "U+E525"], ["󾇋", "U+FE1CB"]],
  "🐜": ["U+1F41C", "ant", "1f41c", ["-", "-"], ["", "U+E4DD"], ["-", "-"], ["󾇚", "U+FE1DA"]],
  "🐝": ["U+1F41D", "honeybee", "1f41d", ["-", "-"], ["", "U+EB57"], ["-", "-"], ["󾇡", "U+FE1E1"]],
  "🐞": ["U+1F41E", "lady beetle", "1f41e", ["-", "-"], ["", "U+EB58"], ["-", "-"], ["󾇢", "U+FE1E2"]],
  "🐠": ["U+1F420", "tropical fish", "1f420", ["", "U+E751"], ["", "U+EB1D"], ["", "U+E522"], ["󾇉", "U+FE1C9"]],
  "🐡": ["U+1F421", "blowfish", "1f421", ["", "U+E751"], ["", "U+E4D3"], ["", "U+E019"], ["󾇙", "U+FE1D9"]],
  "🐢": ["U+1F422", "turtle", "1f422", ["-", "-"], ["", "U+E5D4"], ["-", "-"], ["󾇜", "U+FE1DC"]],
  "🐤": ["U+1F424", "baby chick", "1f424", ["", "U+E74F"], ["", "U+E4E0"], ["", "U+E523"], ["󾆺", "U+FE1BA"]],
  "🐥": ["U+1F425", "front-facing baby chick", "1f425", ["", "U+E74F"], ["", "U+EB76"], ["", "U+E523"], ["󾆻", "U+FE1BB"]],
  "🐦": ["U+1F426", "bird", "1f426", ["", "U+E74F"], ["", "U+E4E0"], ["", "U+E521"], ["󾇈", "U+FE1C8"]],
  "🐣": ["U+1F423", "hatching chick", "1f423", ["", "U+E74F"], ["", "U+E5DB"], ["", "U+E523"], ["󾇝", "U+FE1DD"]],
  "🐧": ["U+1F427", "penguin", "1f427", ["", "U+E750"], ["", "U+E4DC"], ["", "U+E055"], ["󾆼", "U+FE1BC"]],
  "🐩": ["U+1F429", "poodle", "1f429", ["", "U+E6A1"], ["", "U+E4DF"], ["", "U+E052"], ["󾇘", "U+FE1D8"]],
  "🐟": ["U+1F41F", "fish", "1f41f", ["", "U+E751"], ["", "U+E49A"], ["", "U+E019"], ["󾆽", "U+FE1BD"]],
  "🐬": ["U+1F42C", "dolphin", "1f42c", ["-", "-"], ["", "U+EB1B"], ["", "U+E520"], ["󾇇", "U+FE1C7"]],
  "🐭": ["U+1F42D", "mouse face", "1f42d", ["-", "-"], ["", "U+E5C2"], ["", "U+E053"], ["󾇂", "U+FE1C2"]],
  "🐯": ["U+1F42F", "tiger face", "1f42f", ["-", "-"], ["", "U+E5C0"], ["", "U+E050"], ["󾇀", "U+FE1C0"]],
  "🐱": ["U+1F431", "cat face", "1f431", ["", "U+E6A2"], ["", "U+E4DB"], ["", "U+E04F"], ["󾆸", "U+FE1B8"]],
  "🐳": ["U+1F433", "spouting whale", "1f433", ["-", "-"], ["", "U+E470"], ["", "U+E054"], ["󾇃", "U+FE1C3"]],
  "🐴": ["U+1F434", "horse face", "1f434", ["", "U+E754"], ["", "U+E4D8"], ["", "U+E01A"], ["󾆾", "U+FE1BE"]],
  "🐵": ["U+1F435", "monkey face", "1f435", ["-", "-"], ["", "U+E4D9"], ["", "U+E109"], ["󾇄", "U+FE1C4"]],
  "🐶": ["U+1F436", "dog face", "1f436", ["", "U+E6A1"], ["", "U+E4E1"], ["", "U+E052"], ["󾆷", "U+FE1B7"]],
  "🐷": ["U+1F437", "pig face", "1f437", ["", "U+E755"], ["", "U+E4DE"], ["", "U+E10B"], ["󾆿", "U+FE1BF"]],
  "🐻": ["U+1F43B", "bear face", "1f43b", ["-", "-"], ["", "U+E5C1"], ["", "U+E051"], ["󾇁", "U+FE1C1"]],
  "🐹": ["U+1F439", "hamster face", "1f439", ["-", "-"], ["-", "-"], ["", "U+E524"], ["󾇊", "U+FE1CA"]],
  "🐺": ["U+1F43A", "wolf face", "1f43a", ["", "U+E6A1"], ["", "U+E4E1"], ["", "U+E52A"], ["󾇐", "U+FE1D0"]],
  "🐮": ["U+1F42E", "cow face", "1f42e", ["-", "-"], ["", "U+EB21"], ["", "U+E52B"], ["󾇑", "U+FE1D1"]],
  "🐰": ["U+1F430", "rabbit face", "1f430", ["-", "-"], ["", "U+E4D7"], ["", "U+E52C"], ["󾇒", "U+FE1D2"]],
  "🐸": ["U+1F438", "frog face", "1f438", ["-", "-"], ["", "U+E4DA"], ["", "U+E531"], ["󾇗", "U+FE1D7"]],
  "🐾": ["U+1F43E", "paw prints", "1f43e", ["", "U+E698"], ["", "U+E4EE"], ["", "U+E536"], ["󾇛", "U+FE1DB"]],
  "🐲": ["U+1F432", "dragon face", "1f432", ["-", "-"], ["", "U+EB3F"], ["-", "-"], ["󾇞", "U+FE1DE"]],
  "🐼": ["U+1F43C", "panda face", "1f43c", ["-", "-"], ["", "U+EB46"], ["-", "-"], ["󾇟", "U+FE1DF"]],
  "🐽": ["U+1F43D", "pig nose", "1f43d", ["", "U+E755"], ["", "U+EB48"], ["", "U+E10B"], ["󾇠", "U+FE1E0"]],
  "😠": ["U+1F620", "angry face", "1f620", ["", "U+E6F1"], ["", "U+E472"], ["", "U+E059"], ["󾌠", "U+FE320"]],
  "😩": ["U+1F629", "weary face", "1f629", ["", "U+E6F3"], ["", "U+EB67"], ["", "U+E403"], ["󾌡", "U+FE321"]],
  "😲": ["U+1F632", "astonished face", "1f632", ["", "U+E6F4"], ["", "U+EACA"], ["", "U+E410"], ["󾌢", "U+FE322"]],
  "😞": ["U+1F61E", "disappointed face", "1f61e", ["", "U+E6F2"], ["", "U+EAC0"], ["", "U+E058"], ["󾌣", "U+FE323"]],
  "😵": ["U+1F635", "dizzy face", "1f635", ["", "U+E6F4"], ["", "U+E5AE"], ["", "U+E406"], ["󾌤", "U+FE324"]],
  "😰": ["U+1F630", "face with open mouth and cold sweat", "1f630", ["", "U+E723"], ["", "U+EACB"], ["", "U+E40F"], ["󾌥", "U+FE325"]],
  "😒": ["U+1F612", "unamused face", "1f612", ["", "U+E725"], ["", "U+EAC9"], ["", "U+E40E"], ["󾌦", "U+FE326"]],
  "😍": ["U+1F60D", "smiling face with heart-shaped eyes", "1f60d", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],
  "😤": ["U+1F624", "face with look of triumph", "1f624", ["", "U+E753"], ["", "U+EAC1"], ["", "U+E404"], ["󾌨", "U+FE328"]],
  "😜": ["U+1F61C", "face with stuck-out tongue and winking eye", "1f61c", ["", "U+E728"], ["", "U+E4E7"], ["", "U+E105"], ["󾌩", "U+FE329"]],
  "😝": ["U+1F61D", "face with stuck-out tongue and tightly-closed eyes", "1f61d", ["", "U+E728"], ["", "U+E4E7"], ["", "U+E409"], ["󾌪", "U+FE32A"]],
  "😋": ["U+1F60B", "face savouring delicious food", "1f60b", ["", "U+E752"], ["", "U+EACD"], ["", "U+E056"], ["󾌫", "U+FE32B"]],
  "😘": ["U+1F618", "face throwing a kiss", "1f618", ["", "U+E726"], ["", "U+EACF"], ["", "U+E418"], ["󾌬", "U+FE32C"]],
  "😚": ["U+1F61A", "kissing face with closed eyes", "1f61a", ["", "U+E726"], ["", "U+EACE"], ["", "U+E417"], ["󾌭", "U+FE32D"]],
  "😷": ["U+1F637", "face with medical mask", "1f637", ["-", "-"], ["", "U+EAC7"], ["", "U+E40C"], ["󾌮", "U+FE32E"]],
  "😳": ["U+1F633", "flushed face", "1f633", ["", "U+E72A"], ["", "U+EAC8"], ["", "U+E40D"], ["󾌯", "U+FE32F"]],
  "😃": ["U+1F603", "smiling face with open mouth", "1f603", ["", "U+E6F0"], ["", "U+E471"], ["", "U+E057"], ["󾌰", "U+FE330"]],
  "😅": ["U+1F605", "smiling face with open mouth and cold sweat", "1f605", ["", "U+E722"], ["", "U+E471 U+E5B1"], ["", "U+E415 U+E331"], ["󾌱", "U+FE331"]],
  "😆": ["U+1F606", "smiling face with open mouth and tightly-closed eyes", "1f606", ["", "U+E72A"], ["", "U+EAC5"], ["", "U+E40A"], ["󾌲", "U+FE332"]],
  "😁": ["U+1F601", "grinning face with smiling eyes", "1f601", ["", "U+E753"], ["", "U+EB80"], ["", "U+E404"], ["󾌳", "U+FE333"]],
  "😂": ["U+1F602", "face with tears of joy", "1f602", ["", "U+E72A"], ["", "U+EB64"], ["", "U+E412"], ["󾌴", "U+FE334"]],
  "😊": ["U+1F60A", "smiling face with smiling eyes", "1f60a", ["", "U+E6F0"], ["", "U+EACD"], ["", "U+E056"], ["󾌵", "U+FE335"]],
  "☺": ["U+263A", "white smiling face", "263a", ["", "U+E6F0"], ["", "U+E4FB"], ["", "U+E414"], ["󾌶", "U+FE336"]],
  "😄": ["U+1F604", "smiling face with open mouth and smiling eyes", "1f604", ["", "U+E6F0"], ["", "U+E471"], ["", "U+E415"], ["󾌸", "U+FE338"]],
  "😢": ["U+1F622", "crying face", "1f622", ["", "U+E72E"], ["", "U+EB69"], ["", "U+E413"], ["󾌹", "U+FE339"]],
  "😭": ["U+1F62D", "loudly crying face", "1f62d", ["", "U+E72D"], ["", "U+E473"], ["", "U+E411"], ["󾌺", "U+FE33A"]],
  "😨": ["U+1F628", "fearful face", "1f628", ["", "U+E757"], ["", "U+EAC6"], ["", "U+E40B"], ["󾌻", "U+FE33B"]],
  "😣": ["U+1F623", "persevering face", "1f623", ["", "U+E72B"], ["", "U+EAC2"], ["", "U+E406"], ["󾌼", "U+FE33C"]],
  "😡": ["U+1F621", "pouting face", "1f621", ["", "U+E724"], ["", "U+EB5D"], ["", "U+E416"], ["󾌽", "U+FE33D"]],
  "😌": ["U+1F60C", "relieved face", "1f60c", ["", "U+E721"], ["", "U+EAC5"], ["", "U+E40A"], ["󾌾", "U+FE33E"]],
  "😖": ["U+1F616", "confounded face", "1f616", ["", "U+E6F3"], ["", "U+EAC3"], ["", "U+E407"], ["󾌿", "U+FE33F"]],
  "😔": ["U+1F614", "pensive face", "1f614", ["", "U+E720"], ["", "U+EAC0"], ["", "U+E403"], ["󾍀", "U+FE340"]],
  "😱": ["U+1F631", "face screaming in fear", "1f631", ["", "U+E757"], ["", "U+E5C5"], ["", "U+E107"], ["󾍁", "U+FE341"]],
  "😪": ["U+1F62A", "sleepy face", "1f62a", ["", "U+E701"], ["", "U+EAC4"], ["", "U+E408"], ["󾍂", "U+FE342"]],
  "😏": ["U+1F60F", "smirking face", "1f60f", ["", "U+E72C"], ["", "U+EABF"], ["", "U+E402"], ["󾍃", "U+FE343"]],
  "😓": ["U+1F613", "face with cold sweat", "1f613", ["", "U+E723"], ["", "U+E5C6"], ["", "U+E108"], ["󾍄", "U+FE344"]],
  "😥": ["U+1F625", "disappointed but relieved face", "1f625", ["", "U+E723"], ["", "U+E5C6"], ["", "U+E401"], ["󾍅", "U+FE345"]],
  "😫": ["U+1F62B", "tired face", "1f62b", ["", "U+E72B"], ["", "U+E474"], ["", "U+E406"], ["󾍆", "U+FE346"]],
  "😉": ["U+1F609", "winking face", "1f609", ["", "U+E729"], ["", "U+E5C3"], ["", "U+E405"], ["󾍇", "U+FE347"]],
  "😺": ["U+1F63A", "smiling cat face with open mouth", "1f63a", ["", "U+E6F0"], ["", "U+EB61"], ["", "U+E057"], ["󾍈", "U+FE348"]],
  "😸": ["U+1F638", "grinning cat face with smiling eyes", "1f638", ["", "U+E753"], ["", "U+EB7F"], ["", "U+E404"], ["󾍉", "U+FE349"]],
  "😹": ["U+1F639", "cat face with tears of joy", "1f639", ["", "U+E72A"], ["", "U+EB63"], ["", "U+E412"], ["󾍊", "U+FE34A"]],
  "😽": ["U+1F63D", "kissing cat face with closed eyes", "1f63d", ["", "U+E726"], ["", "U+EB60"], ["", "U+E418"], ["󾍋", "U+FE34B"]],
  "😻": ["U+1F63B", "smiling cat face with heart-shaped eyes", "1f63b", ["", "U+E726"], ["", "U+EB65"], ["", "U+E106"], ["󾍌", "U+FE34C"]],
  "😿": ["U+1F63F", "crying cat face", "1f63f", ["", "U+E72E"], ["", "U+EB68"], ["", "U+E413"], ["󾍍", "U+FE34D"]],
  "😾": ["U+1F63E", "pouting cat face", "1f63e", ["", "U+E724"], ["", "U+EB5E"], ["", "U+E416"], ["󾍎", "U+FE34E"]],
  "😼": ["U+1F63C", "cat face with wry smile", "1f63c", ["", "U+E753"], ["", "U+EB6A"], ["", "U+E404"], ["󾍏", "U+FE34F"]],
  "🙀": ["U+1F640", "weary cat face", "1f640", ["", "U+E6F3"], ["", "U+EB66"], ["", "U+E403"], ["󾍐", "U+FE350"]],
  "🙅": ["U+1F645", "face with no good gesture", "1f645", ["", "U+E72F"], ["", "U+EAD7"], ["", "U+E423"], ["󾍑", "U+FE351"]],
  "🙆": ["U+1F646", "face with ok gesture", "1f646", ["", "U+E70B"], ["", "U+EAD8"], ["", "U+E424"], ["󾍒", "U+FE352"]],
  "🙇": ["U+1F647", "person bowing deeply", "1f647", ["-", "-"], ["", "U+EAD9"], ["", "U+E426"], ["󾍓", "U+FE353"]],
  "🙈": ["U+1F648", "see-no-evil monkey", "1f648", ["-", "-"], ["", "U+EB50"], ["-", "-"], ["󾍔", "U+FE354"]],
  "🙊": ["U+1F64A", "speak-no-evil monkey", "1f64a", ["-", "-"], ["", "U+EB51"], ["-", "-"], ["󾍕", "U+FE355"]],
  "🙉": ["U+1F649", "hear-no-evil monkey", "1f649", ["-", "-"], ["", "U+EB52"], ["-", "-"], ["󾍖", "U+FE356"]],
  "🙋": ["U+1F64B", "happy person raising one hand", "1f64b", ["-", "-"], ["", "U+EB85"], ["", "U+E012"], ["󾍗", "U+FE357"]],
  "🙌": ["U+1F64C", "person raising both hands in celebration", "1f64c", ["-", "-"], ["", "U+EB86"], ["", "U+E427"], ["󾍘", "U+FE358"]],
  "🙍": ["U+1F64D", "person frowning", "1f64d", ["", "U+E6F3"], ["", "U+EB87"], ["", "U+E403"], ["󾍙", "U+FE359"]],
  "🙎": ["U+1F64E", "person with pouting face", "1f64e", ["", "U+E6F1"], ["", "U+EB88"], ["", "U+E416"], ["󾍚", "U+FE35A"]],
  "🙏": ["U+1F64F", "person with folded hands", "1f64f", ["-", "-"], ["", "U+EAD2"], ["", "U+E41D"], ["󾍛", "U+FE35B"]],
  "🏠": ["U+1F3E0", "house building", "1f3e0", ["", "U+E663"], ["", "U+E4AB"], ["", "U+E036"], ["󾒰", "U+FE4B0"]],
  "🏡": ["U+1F3E1", "house with garden", "1f3e1", ["", "U+E663"], ["", "U+EB09"], ["", "U+E036"], ["󾒱", "U+FE4B1"]],
  "🏢": ["U+1F3E2", "office building", "1f3e2", ["", "U+E664"], ["", "U+E4AD"], ["", "U+E038"], ["󾒲", "U+FE4B2"]],
  "🏣": ["U+1F3E3", "japanese post office", "1f3e3", ["", "U+E665"], ["", "U+E5DE"], ["", "U+E153"], ["󾒳", "U+FE4B3"]],
  "🏥": ["U+1F3E5", "hospital", "1f3e5", ["", "U+E666"], ["", "U+E5DF"], ["", "U+E155"], ["󾒴", "U+FE4B4"]],
  "🏦": ["U+1F3E6", "bank", "1f3e6", ["", "U+E667"], ["", "U+E4AA"], ["", "U+E14D"], ["󾒵", "U+FE4B5"]],
  "🏧": ["U+1F3E7", "automated teller machine", "1f3e7", ["", "U+E668"], ["", "U+E4A3"], ["", "U+E154"], ["󾒶", "U+FE4B6"]],
  "🏨": ["U+1F3E8", "hotel", "1f3e8", ["", "U+E669"], ["", "U+EA81"], ["", "U+E158"], ["󾒷", "U+FE4B7"]],
  "🏩": ["U+1F3E9", "love hotel", "1f3e9", ["", "U+E669 U+E6EF"], ["", "U+EAF3"], ["", "U+E501"], ["󾒸", "U+FE4B8"]],
  "🏪": ["U+1F3EA", "convenience store", "1f3ea", ["", "U+E66A"], ["", "U+E4A4"], ["", "U+E156"], ["󾒹", "U+FE4B9"]],
  "🏫": ["U+1F3EB", "school", "1f3eb", ["", "U+E73E"], ["", "U+EA80"], ["", "U+E157"], ["󾒺", "U+FE4BA"]],
  "⛪": ["U+26EA", "church", "26ea", ["-", "-"], ["", "U+E5BB"], ["", "U+E037"], ["󾒻", "U+FE4BB"]],
  "⛲": ["U+26F2", "fountain", "26f2", ["-", "-"], ["", "U+E5CF"], ["", "U+E121"], ["󾒼", "U+FE4BC"]],
  "🏬": ["U+1F3EC", "department store", "1f3ec", ["-", "-"], ["", "U+EAF6"], ["", "U+E504"], ["󾒽", "U+FE4BD"]],
  "🏯": ["U+1F3EF", "japanese castle", "1f3ef", ["-", "-"], ["", "U+EAF7"], ["", "U+E505"], ["󾒾", "U+FE4BE"]],
  "🏰": ["U+1F3F0", "european castle", "1f3f0", ["-", "-"], ["", "U+EAF8"], ["", "U+E506"], ["󾒿", "U+FE4BF"]],
  "🏭": ["U+1F3ED", "factory", "1f3ed", ["-", "-"], ["", "U+EAF9"], ["", "U+E508"], ["󾓀", "U+FE4C0"]],
  "⚓": ["U+2693", "anchor", "2693", ["", "U+E661"], ["", "U+E4A9"], ["", "U+E202"], ["󾓁", "U+FE4C1"]],
  "🏮": ["U+1F3EE", "izakaya lantern", "1f3ee", ["", "U+E74B"], ["", "U+E4BD"], ["", "U+E30B"], ["󾓂", "U+FE4C2"]],
  "🗻": ["U+1F5FB", "mount fuji", "1f5fb", ["", "U+E740"], ["", "U+E5BD"], ["", "U+E03B"], ["󾓃", "U+FE4C3"]],
  "🗼": ["U+1F5FC", "tokyo tower", "1f5fc", ["-", "-"], ["", "U+E4C0"], ["", "U+E509"], ["󾓄", "U+FE4C4"]],
  "🗽": ["U+1F5FD", "statue of liberty", "1f5fd", ["-", "-"], ["-", "-"], ["", "U+E51D"], ["󾓆", "U+FE4C6"]],
  "🗾": ["U+1F5FE", "silhouette of japan", "1f5fe", ["-", "-"], ["", "U+E572"], ["-", "-"], ["󾓇", "U+FE4C7"]],
  "🗿": ["U+1F5FF", "moyai", "1f5ff", ["-", "-"], ["", "U+EB6C"], ["-", "-"], ["󾓈", "U+FE4C8"]],
  "👞": ["U+1F45E", "mans shoe", "1f45e", ["", "U+E699"], ["", "U+E5B7"], ["", "U+E007"], ["󾓌", "U+FE4CC"]],
  "👟": ["U+1F45F", "athletic shoe", "1f45f", ["", "U+E699"], ["", "U+EB2B"], ["", "U+E007"], ["󾓍", "U+FE4CD"]],
  "👠": ["U+1F460", "high-heeled shoe", "1f460", ["", "U+E674"], ["", "U+E51A"], ["", "U+E13E"], ["󾓖", "U+FE4D6"]],
  "👡": ["U+1F461", "womans sandal", "1f461", ["", "U+E674"], ["", "U+E51A"], ["", "U+E31A"], ["󾓗", "U+FE4D7"]],
  "👢": ["U+1F462", "womans boots", "1f462", ["-", "-"], ["", "U+EA9F"], ["", "U+E31B"], ["󾓘", "U+FE4D8"]],
  "👣": ["U+1F463", "footprints", "1f463", ["", "U+E698"], ["", "U+EB2A"], ["", "U+E536"], ["󾕓", "U+FE553"]],
  "👓": ["U+1F453", "eyeglasses", "1f453", ["", "U+E69A"], ["", "U+E4FE"], ["-", "-"], ["󾓎", "U+FE4CE"]],
  "👕": ["U+1F455", "t-shirt", "1f455", ["", "U+E70E"], ["", "U+E5B6"], ["", "U+E006"], ["󾓏", "U+FE4CF"]],
  "👖": ["U+1F456", "jeans", "1f456", ["", "U+E711"], ["", "U+EB77"], ["-", "-"], ["󾓐", "U+FE4D0"]],
  "👑": ["U+1F451", "crown", "1f451", ["", "U+E71A"], ["", "U+E5C9"], ["", "U+E10E"], ["󾓑", "U+FE4D1"]],
  "👔": ["U+1F454", "necktie", "1f454", ["-", "-"], ["", "U+EA93"], ["", "U+E302"], ["󾓓", "U+FE4D3"]],
  "👒": ["U+1F452", "womans hat", "1f452", ["-", "-"], ["", "U+EA9E"], ["", "U+E318"], ["󾓔", "U+FE4D4"]],
  "👗": ["U+1F457", "dress", "1f457", ["-", "-"], ["", "U+EB6B"], ["", "U+E319"], ["󾓕", "U+FE4D5"]],
  "👘": ["U+1F458", "kimono", "1f458", ["-", "-"], ["", "U+EAA3"], ["", "U+E321"], ["󾓙", "U+FE4D9"]],
  "👙": ["U+1F459", "bikini", "1f459", ["-", "-"], ["", "U+EAA4"], ["", "U+E322"], ["󾓚", "U+FE4DA"]],
  "👚": ["U+1F45A", "womans clothes", "1f45a", ["", "U+E70E"], ["", "U+E50D"], ["", "U+E006"], ["󾓛", "U+FE4DB"]],
  "👛": ["U+1F45B", "purse", "1f45b", ["", "U+E70F"], ["", "U+E504"], ["-", "-"], ["󾓜", "U+FE4DC"]],
  "👜": ["U+1F45C", "handbag", "1f45c", ["", "U+E682"], ["", "U+E49C"], ["", "U+E323"], ["󾓰", "U+FE4F0"]],
  "👝": ["U+1F45D", "pouch", "1f45d", ["", "U+E6AD"], ["-", "-"], ["-", "-"], ["󾓱", "U+FE4F1"]],
  "💰": ["U+1F4B0", "money bag", "1f4b0", ["", "U+E715"], ["", "U+E4C7"], ["", "U+E12F"], ["󾓝", "U+FE4DD"]],
  "💱": ["U+1F4B1", "currency exchange", "1f4b1", ["-", "-"], ["-", "-"], ["", "U+E149"], ["󾓞", "U+FE4DE"]],
  "💹": ["U+1F4B9", "chart with upwards trend and yen sign", "1f4b9", ["-", "-"], ["", "U+E5DC"], ["", "U+E14A"], ["󾓟", "U+FE4DF"]],
  "💲": ["U+1F4B2", "heavy dollar sign", "1f4b2", ["", "U+E715"], ["", "U+E579"], ["", "U+E12F"], ["󾓠", "U+FE4E0"]],
  "💳": ["U+1F4B3", "credit card", "1f4b3", ["-", "-"], ["", "U+E57C"], ["-", "-"], ["󾓡", "U+FE4E1"]],
  "💴": ["U+1F4B4", "banknote with yen sign", "1f4b4", ["", "U+E6D6"], ["", "U+E57D"], ["-", "-"], ["󾓢", "U+FE4E2"]],
  "💵": ["U+1F4B5", "banknote with dollar sign", "1f4b5", ["", "U+E715"], ["", "U+E585"], ["", "U+E12F"], ["󾓣", "U+FE4E3"]],
  "💸": ["U+1F4B8", "money with wings", "1f4b8", ["-", "-"], ["", "U+EB5B"], ["-", "-"], ["󾓤", "U+FE4E4"]],
  "🇨🇳": ["U+1F1E8 U+1F1F3", "regional indicator symbol letters cn", "1f1e81f1f3", ["-", "-"], ["", "U+EB11"], ["", "U+E513"], ["󾓭", "U+FE4ED"]],
  "🇩🇪": ["U+1F1E9 U+1F1EA", "regional indicator symbol letters de", "1f1e91f1ea", ["-", "-"], ["", "U+EB0E"], ["", "U+E50E"], ["󾓨", "U+FE4E8"]],
  "🇪🇸": ["U+1F1EA U+1F1F8", "regional indicator symbol letters es", "1f1ea1f1f8", ["-", "-"], ["", "U+E5D5"], ["", "U+E511"], ["󾓫", "U+FE4EB"]],
  "🇫🇷": ["U+1F1EB U+1F1F7", "regional indicator symbol letters fr", "1f1eb1f1f7", ["-", "-"], ["", "U+EAFA"], ["", "U+E50D"], ["󾓧", "U+FE4E7"]],
  "🇬🇧": ["U+1F1EC U+1F1E7", "regional indicator symbol letters gb", "1f1ec1f1e7", ["-", "-"], ["", "U+EB10"], ["", "U+E510"], ["󾓪", "U+FE4EA"]],
  "🇮🇹": ["U+1F1EE U+1F1F9", "regional indicator symbol letters it", "1f1ee1f1f9", ["-", "-"], ["", "U+EB0F"], ["", "U+E50F"], ["󾓩", "U+FE4E9"]],
  "🇯🇵": ["U+1F1EF U+1F1F5", "regional indicator symbol letters jp", "1f1ef1f1f5", ["-", "-"], ["", "U+E4CC"], ["", "U+E50B"], ["󾓥", "U+FE4E5"]],
  "🇰🇷": ["U+1F1F0 U+1F1F7", "regional indicator symbol letters kr", "1f1f01f1f7", ["-", "-"], ["", "U+EB12"], ["", "U+E514"], ["󾓮", "U+FE4EE"]],
  "🇷🇺": ["U+1F1F7 U+1F1FA", "regional indicator symbol letters ru", "1f1f71f1fa", ["-", "-"], ["", "U+E5D6"], ["", "U+E512"], ["󾓬", "U+FE4EC"]],
  "🇺🇸": ["U+1F1FA U+1F1F8", "regional indicator symbol letters us", "1f1fa1f1f8", ["-", "-"], ["", "U+E573"], ["", "U+E50C"], ["󾓦", "U+FE4E6"]],
  "🔥": ["U+1F525", "fire", "1f525", ["-", "-"], ["", "U+E47B"], ["", "U+E11D"], ["󾓶", "U+FE4F6"]],
  "🔦": ["U+1F526", "electric torch", "1f526", ["", "U+E6FB"], ["", "U+E583"], ["-", "-"], ["󾓻", "U+FE4FB"]],
  "🔧": ["U+1F527", "wrench", "1f527", ["", "U+E718"], ["", "U+E587"], ["-", "-"], ["󾓉", "U+FE4C9"]],
  "🔨": ["U+1F528", "hammer", "1f528", ["-", "-"], ["", "U+E5CB"], ["", "U+E116"], ["󾓊", "U+FE4CA"]],
  "🔩": ["U+1F529", "nut and bolt", "1f529", ["-", "-"], ["", "U+E581"], ["-", "-"], ["󾓋", "U+FE4CB"]],
  "🔪": ["U+1F52A", "hocho", "1f52a", ["-", "-"], ["", "U+E57F"], ["-", "-"], ["󾓺", "U+FE4FA"]],
  "🔫": ["U+1F52B", "pistol", "1f52b", ["-", "-"], ["", "U+E50A"], ["", "U+E113"], ["󾓵", "U+FE4F5"]],
  "🔮": ["U+1F52E", "crystal ball", "1f52e", ["-", "-"], ["", "U+EA8F"], ["", "U+E23E"], ["󾓷", "U+FE4F7"]],
  "🔯": ["U+1F52F", "six pointed star with middle dot", "1f52f", ["-", "-"], ["", "U+EA8F"], ["", "U+E23E"], ["󾓸", "U+FE4F8"]],
  "🔰": ["U+1F530", "japanese symbol for beginner", "1f530", ["-", "-"], ["", "U+E480"], ["", "U+E209"], ["󾁄", "U+FE044"]],
  "🔱": ["U+1F531", "trident emblem", "1f531", ["", "U+E71A"], ["", "U+E5C9"], ["", "U+E031"], ["󾓒", "U+FE4D2"]],
  "💉": ["U+1F489", "syringe", "1f489", ["-", "-"], ["", "U+E510"], ["", "U+E13B"], ["󾔉", "U+FE509"]],
  "💊": ["U+1F48A", "pill", "1f48a", ["-", "-"], ["", "U+EA9A"], ["", "U+E30F"], ["󾔊", "U+FE50A"]],
  "🅰": ["U+1F170", "negative squared latin capital letter a", "1f170", ["-", "-"], ["", "U+EB26"], ["", "U+E532"], ["󾔋", "U+FE50B"]],
  "🅱": ["U+1F171", "negative squared latin capital letter b", "1f171", ["-", "-"], ["", "U+EB27"], ["", "U+E533"], ["󾔌", "U+FE50C"]],
  "🆎": ["U+1F18E", "negative squared ab", "1f18e", ["-", "-"], ["", "U+EB29"], ["", "U+E534"], ["󾔍", "U+FE50D"]],
  "🅾": ["U+1F17E", "negative squared latin capital letter o", "1f17e", ["-", "-"], ["", "U+EB28"], ["", "U+E535"], ["󾔎", "U+FE50E"]],
  "🎀": ["U+1F380", "ribbon", "1f380", ["", "U+E684"], ["", "U+E59F"], ["", "U+E314"], ["󾔏", "U+FE50F"]],
  "🎁": ["U+1F381", "wrapped present", "1f381", ["", "U+E685"], ["", "U+E4CF"], ["", "U+E112"], ["󾔐", "U+FE510"]],
  "🎂": ["U+1F382", "birthday cake", "1f382", ["", "U+E686"], ["", "U+E5A0"], ["", "U+E34B"], ["󾔑", "U+FE511"]],
  "🎄": ["U+1F384", "christmas tree", "1f384", ["", "U+E6A4"], ["", "U+E4C9"], ["", "U+E033"], ["󾔒", "U+FE512"]],
  "🎅": ["U+1F385", "father christmas", "1f385", ["-", "-"], ["", "U+EAF0"], ["", "U+E448"], ["󾔓", "U+FE513"]],
  "🎌": ["U+1F38C", "crossed flags", "1f38c", ["-", "-"], ["", "U+E5D9"], ["", "U+E143"], ["󾔔", "U+FE514"]],
  "🎆": ["U+1F386", "fireworks", "1f386", ["-", "-"], ["", "U+E5CC"], ["", "U+E117"], ["󾔕", "U+FE515"]],
  "🎈": ["U+1F388", "balloon", "1f388", ["-", "-"], ["", "U+EA9B"], ["", "U+E310"], ["󾔖", "U+FE516"]],
  "🎉": ["U+1F389", "party popper", "1f389", ["-", "-"], ["", "U+EA9C"], ["", "U+E312"], ["󾔗", "U+FE517"]],
  "🎍": ["U+1F38D", "pine decoration", "1f38d", ["-", "-"], ["", "U+EAE3"], ["", "U+E436"], ["󾔘", "U+FE518"]],
  "🎎": ["U+1F38E", "japanese dolls", "1f38e", ["-", "-"], ["", "U+EAE4"], ["", "U+E438"], ["󾔙", "U+FE519"]],
  "🎓": ["U+1F393", "graduation cap", "1f393", ["-", "-"], ["", "U+EAE5"], ["", "U+E439"], ["󾔚", "U+FE51A"]],
  "🎒": ["U+1F392", "school satchel", "1f392", ["-", "-"], ["", "U+EAE6"], ["", "U+E43A"], ["󾔛", "U+FE51B"]],
  "🎏": ["U+1F38F", "carp streamer", "1f38f", ["-", "-"], ["", "U+EAE7"], ["", "U+E43B"], ["󾔜", "U+FE51C"]],
  "🎇": ["U+1F387", "firework sparkler", "1f387", ["-", "-"], ["", "U+EAEB"], ["", "U+E440"], ["󾔝", "U+FE51D"]],
  "🎐": ["U+1F390", "wind chime", "1f390", ["-", "-"], ["", "U+EAED"], ["", "U+E442"], ["󾔞", "U+FE51E"]],
  "🎃": ["U+1F383", "jack-o-lantern", "1f383", ["-", "-"], ["", "U+EAEE"], ["", "U+E445"], ["󾔟", "U+FE51F"]],
  "🎊": ["U+1F38A", "confetti ball", "1f38a", ["-", "-"], ["", "U+E46F"], ["-", "-"], ["󾔠", "U+FE520"]],
  "🎋": ["U+1F38B", "tanabata tree", "1f38b", ["-", "-"], ["", "U+EB3D"], ["-", "-"], ["󾔡", "U+FE521"]],
  "🎑": ["U+1F391", "moon viewing ceremony", "1f391", ["-", "-"], ["", "U+EAEF"], ["", "U+E446"], ["󾀗", "U+FE017"]],
  "📟": ["U+1F4DF", "pager", "1f4df", ["", "U+E65A"], ["", "U+E59B"], ["-", "-"], ["󾔢", "U+FE522"]],
  "☎": ["U+260E", "black telephone", "260e", ["", "U+E687"], ["", "U+E596"], ["", "U+E009"], ["󾔣", "U+FE523"]],
  "📞": ["U+1F4DE", "telephone receiver", "1f4de", ["", "U+E687"], ["", "U+E51E"], ["", "U+E009"], ["󾔤", "U+FE524"]],
  "📱": ["U+1F4F1", "mobile phone", "1f4f1", ["", "U+E688"], ["", "U+E588"], ["", "U+E00A"], ["󾔥", "U+FE525"]],
  "📲": ["U+1F4F2", "mobile phone with rightwards arrow at left", "1f4f2", ["", "U+E6CE"], ["", "U+EB08"], ["", "U+E104"], ["󾔦", "U+FE526"]],
  "📝": ["U+1F4DD", "memo", "1f4dd", ["", "U+E689"], ["", "U+EA92"], ["", "U+E301"], ["󾔧", "U+FE527"]],
  "📠": ["U+1F4E0", "fax machine", "1f4e0", ["", "U+E6D0"], ["", "U+E520"], ["", "U+E00B"], ["󾔨", "U+FE528"]],
  "✉": ["U+2709", "envelope", "2709", ["", "U+E6D3"], ["", "U+E521"], ["", "U+E103"], ["󾔩", "U+FE529"]],
  "📨": ["U+1F4E8", "incoming envelope", "1f4e8", ["", "U+E6CF"], ["", "U+E591"], ["", "U+E103"], ["󾔪", "U+FE52A"]],
  "📩": ["U+1F4E9", "envelope with downwards arrow above", "1f4e9", ["", "U+E6CF"], ["", "U+EB62"], ["", "U+E103"], ["󾔫", "U+FE52B"]],
  "📪": ["U+1F4EA", "closed mailbox with lowered flag", "1f4ea", ["", "U+E665"], ["", "U+E51B"], ["", "U+E101"], ["󾔬", "U+FE52C"]],
  "📫": ["U+1F4EB", "closed mailbox with raised flag", "1f4eb", ["", "U+E665"], ["", "U+EB0A"], ["", "U+E101"], ["󾔭", "U+FE52D"]],
  "📮": ["U+1F4EE", "postbox", "1f4ee", ["", "U+E665"], ["", "U+E51B"], ["", "U+E102"], ["󾔮", "U+FE52E"]],
  "📰": ["U+1F4F0", "newspaper", "1f4f0", ["-", "-"], ["", "U+E58B"], ["-", "-"], ["󾠢", "U+FE822"]],
  "📢": ["U+1F4E2", "public address loudspeaker", "1f4e2", ["-", "-"], ["", "U+E511"], ["", "U+E142"], ["󾔯", "U+FE52F"]],
  "📣": ["U+1F4E3", "cheering megaphone", "1f4e3", ["-", "-"], ["", "U+E511"], ["", "U+E317"], ["󾔰", "U+FE530"]],
  "📡": ["U+1F4E1", "satellite antenna", "1f4e1", ["-", "-"], ["", "U+E4A8"], ["", "U+E14B"], ["󾔱", "U+FE531"]],
  "📤": ["U+1F4E4", "outbox tray", "1f4e4", ["-", "-"], ["", "U+E592"], ["-", "-"], ["󾔳", "U+FE533"]],
  "📥": ["U+1F4E5", "inbox tray", "1f4e5", ["-", "-"], ["", "U+E593"], ["-", "-"], ["󾔴", "U+FE534"]],
  "📦": ["U+1F4E6", "package", "1f4e6", ["", "U+E685"], ["", "U+E51F"], ["", "U+E112"], ["󾔵", "U+FE535"]],
  "📧": ["U+1F4E7", "e-mail symbol", "1f4e7", ["", "U+E6D3"], ["", "U+EB71"], ["", "U+E103"], ["󾮒", "U+FEB92"]],
  "🔠": ["U+1F520", "input symbol for latin capital letters", "1f520", ["-", "-"], ["", "U+EAFD"], ["-", "-"], ["󾭼", "U+FEB7C"]],
  "🔡": ["U+1F521", "input symbol for latin small letters", "1f521", ["-", "-"], ["", "U+EAFE"], ["-", "-"], ["󾭽", "U+FEB7D"]],
  "🔢": ["U+1F522", "input symbol for numbers", "1f522", ["-", "-"], ["", "U+EAFF"], ["-", "-"], ["󾭾", "U+FEB7E"]],
  "🔣": ["U+1F523", "input symbol for symbols", "1f523", ["-", "-"], ["", "U+EB00"], ["-", "-"], ["󾭿", "U+FEB7F"]],
  "🔤": ["U+1F524", "input symbol for latin letters", "1f524", ["-", "-"], ["", "U+EB55"], ["-", "-"], ["󾮀", "U+FEB80"]],
  "✒": ["U+2712", "black nib", "2712", ["", "U+E6AE"], ["", "U+EB03"], ["-", "-"], ["󾔶", "U+FE536"]],
  "💺": ["U+1F4BA", "seat", "1f4ba", ["", "U+E6B2"], ["-", "-"], ["", "U+E11F"], ["󾔷", "U+FE537"]],
  "💻": ["U+1F4BB", "personal computer", "1f4bb", ["", "U+E716"], ["", "U+E5B8"], ["", "U+E00C"], ["󾔸", "U+FE538"]],
  "✏": ["U+270F", "pencil", "270f", ["", "U+E719"], ["", "U+E4A1"], ["", "U+E301"], ["󾔹", "U+FE539"]],
  "📎": ["U+1F4CE", "paperclip", "1f4ce", ["", "U+E730"], ["", "U+E4A0"], ["-", "-"], ["󾔺", "U+FE53A"]],
  "💼": ["U+1F4BC", "briefcase", "1f4bc", ["", "U+E682"], ["", "U+E5CE"], ["", "U+E11E"], ["󾔻", "U+FE53B"]],
  "💽": ["U+1F4BD", "minidisc", "1f4bd", ["-", "-"], ["", "U+E582"], ["", "U+E316"], ["󾔼", "U+FE53C"]],
  "💾": ["U+1F4BE", "floppy disk", "1f4be", ["-", "-"], ["", "U+E562"], ["", "U+E316"], ["󾔽", "U+FE53D"]],
  "💿": ["U+1F4BF", "optical disc", "1f4bf", ["", "U+E68C"], ["", "U+E50C"], ["", "U+E126"], ["󾠝", "U+FE81D"]],
  "📀": ["U+1F4C0", "dvd", "1f4c0", ["", "U+E68C"], ["", "U+E50C"], ["", "U+E127"], ["󾠞", "U+FE81E"]],
  "✂": ["U+2702", "black scissors", "2702", ["", "U+E675"], ["", "U+E516"], ["", "U+E313"], ["󾔾", "U+FE53E"]],
  "📍": ["U+1F4CD", "round pushpin", "1f4cd", ["-", "-"], ["", "U+E560"], ["-", "-"], ["󾔿", "U+FE53F"]],
  "📃": ["U+1F4C3", "page with curl", "1f4c3", ["", "U+E689"], ["", "U+E561"], ["", "U+E301"], ["󾕀", "U+FE540"]],
  "📄": ["U+1F4C4", "page facing up", "1f4c4", ["", "U+E689"], ["", "U+E569"], ["", "U+E301"], ["󾕁", "U+FE541"]],
  "📅": ["U+1F4C5", "calendar", "1f4c5", ["-", "-"], ["", "U+E563"], ["-", "-"], ["󾕂", "U+FE542"]],
  "📁": ["U+1F4C1", "file folder", "1f4c1", ["-", "-"], ["", "U+E58F"], ["-", "-"], ["󾕃", "U+FE543"]],
  "📂": ["U+1F4C2", "open file folder", "1f4c2", ["-", "-"], ["", "U+E590"], ["-", "-"], ["󾕄", "U+FE544"]],
  "📓": ["U+1F4D3", "notebook", "1f4d3", ["", "U+E683"], ["", "U+E56B"], ["", "U+E148"], ["󾕅", "U+FE545"]],
  "📖": ["U+1F4D6", "open book", "1f4d6", ["", "U+E683"], ["", "U+E49F"], ["", "U+E148"], ["󾕆", "U+FE546"]],
  "📔": ["U+1F4D4", "notebook with decorative cover", "1f4d4", ["", "U+E683"], ["", "U+E49D"], ["", "U+E148"], ["󾕇", "U+FE547"]],
  "📕": ["U+1F4D5", "closed book", "1f4d5", ["", "U+E683"], ["", "U+E568"], ["", "U+E148"], ["󾔂", "U+FE502"]],
  "📗": ["U+1F4D7", "green book", "1f4d7", ["", "U+E683"], ["", "U+E565"], ["", "U+E148"], ["󾓿", "U+FE4FF"]],
  "📘": ["U+1F4D8", "blue book", "1f4d8", ["", "U+E683"], ["", "U+E566"], ["", "U+E148"], ["󾔀", "U+FE500"]],
  "📙": ["U+1F4D9", "orange book", "1f4d9", ["", "U+E683"], ["", "U+E567"], ["", "U+E148"], ["󾔁", "U+FE501"]],
  "📚": ["U+1F4DA", "books", "1f4da", ["", "U+E683"], ["", "U+E56F"], ["", "U+E148"], ["󾔃", "U+FE503"]],
  "📛": ["U+1F4DB", "name badge", "1f4db", ["-", "-"], ["", "U+E51D"], ["-", "-"], ["󾔄", "U+FE504"]],
  "📜": ["U+1F4DC", "scroll", "1f4dc", ["", "U+E70A"], ["", "U+E55F"], ["-", "-"], ["󾓽", "U+FE4FD"]],
  "📋": ["U+1F4CB", "clipboard", "1f4cb", ["", "U+E689"], ["", "U+E564"], ["", "U+E301"], ["󾕈", "U+FE548"]],
  "📆": ["U+1F4C6", "tear-off calendar", "1f4c6", ["-", "-"], ["", "U+E56A"], ["-", "-"], ["󾕉", "U+FE549"]],
  "📊": ["U+1F4CA", "bar chart", "1f4ca", ["-", "-"], ["", "U+E574"], ["", "U+E14A"], ["󾕊", "U+FE54A"]],
  "📈": ["U+1F4C8", "chart with upwards trend", "1f4c8", ["-", "-"], ["", "U+E575"], ["", "U+E14A"], ["󾕋", "U+FE54B"]],
  "📉": ["U+1F4C9", "chart with downwards trend", "1f4c9", ["-", "-"], ["", "U+E576"], ["-", "-"], ["󾕌", "U+FE54C"]],
  "📇": ["U+1F4C7", "card index", "1f4c7", ["", "U+E683"], ["", "U+E56C"], ["", "U+E148"], ["󾕍", "U+FE54D"]],
  "📌": ["U+1F4CC", "pushpin", "1f4cc", ["-", "-"], ["", "U+E56D"], ["-", "-"], ["󾕎", "U+FE54E"]],
  "📒": ["U+1F4D2", "ledger", "1f4d2", ["", "U+E683"], ["", "U+E56E"], ["", "U+E148"], ["󾕏", "U+FE54F"]],
  "📏": ["U+1F4CF", "straight ruler", "1f4cf", ["-", "-"], ["", "U+E570"], ["-", "-"], ["󾕐", "U+FE550"]],
  "📐": ["U+1F4D0", "triangular ruler", "1f4d0", ["-", "-"], ["", "U+E4A2"], ["-", "-"], ["󾕑", "U+FE551"]],
  "📑": ["U+1F4D1", "bookmark tabs", "1f4d1", ["", "U+E689"], ["", "U+EB0B"], ["", "U+E301"], ["󾕒", "U+FE552"]],
  "🎽": ["U+1F3BD", "running shirt with sash", "1f3bd", ["", "U+E652"], ["-", "-"], ["-", "-"], ["󾟐", "U+FE7D0"]],
  "⚾": ["U+26BE", "baseball", "26be", ["", "U+E653"], ["", "U+E4BA"], ["", "U+E016"], ["󾟑", "U+FE7D1"]],
  "⛳": ["U+26F3", "flag in hole", "26f3", ["", "U+E654"], ["", "U+E599"], ["", "U+E014"], ["󾟒", "U+FE7D2"]],
  "🎾": ["U+1F3BE", "tennis racquet and ball", "1f3be", ["", "U+E655"], ["", "U+E4B7"], ["", "U+E015"], ["󾟓", "U+FE7D3"]],
  "⚽": ["U+26BD", "soccer ball", "26bd", ["", "U+E656"], ["", "U+E4B6"], ["", "U+E018"], ["󾟔", "U+FE7D4"]],
  "🎿": ["U+1F3BF", "ski and ski boot", "1f3bf", ["", "U+E657"], ["", "U+EAAC"], ["", "U+E013"], ["󾟕", "U+FE7D5"]],
  "🏀": ["U+1F3C0", "basketball and hoop", "1f3c0", ["", "U+E658"], ["", "U+E59A"], ["", "U+E42A"], ["󾟖", "U+FE7D6"]],
  "🏁": ["U+1F3C1", "chequered flag", "1f3c1", ["", "U+E659"], ["", "U+E4B9"], ["", "U+E132"], ["󾟗", "U+FE7D7"]],
  "🏂": ["U+1F3C2", "snowboarder", "1f3c2", ["", "U+E712"], ["", "U+E4B8"], ["-", "-"], ["󾟘", "U+FE7D8"]],
  "🏃": ["U+1F3C3", "runner", "1f3c3", ["", "U+E733"], ["", "U+E46B"], ["", "U+E115"], ["󾟙", "U+FE7D9"]],
  "🏄": ["U+1F3C4", "surfer", "1f3c4", ["", "U+E712"], ["", "U+EB41"], ["", "U+E017"], ["󾟚", "U+FE7DA"]],
  "🏆": ["U+1F3C6", "trophy", "1f3c6", ["-", "-"], ["", "U+E5D3"], ["", "U+E131"], ["󾟛", "U+FE7DB"]],
  "🏈": ["U+1F3C8", "american football", "1f3c8", ["-", "-"], ["", "U+E4BB"], ["", "U+E42B"], ["󾟝", "U+FE7DD"]],
  "🏊": ["U+1F3CA", "swimmer", "1f3ca", ["-", "-"], ["", "U+EADE"], ["", "U+E42D"], ["󾟞", "U+FE7DE"]],
  "🚃": ["U+1F683", "railway car", "1f683", ["", "U+E65B"], ["", "U+E4B5"], ["", "U+E01E"], ["󾟟", "U+FE7DF"]],
  "🚇": ["U+1F687", "metro", "1f687", ["", "U+E65C"], ["", "U+E5BC"], ["", "U+E434"], ["󾟠", "U+FE7E0"]],
  "Ⓜ": ["U+24C2", "circled latin capital letter m", "24c2", ["", "U+E65C"], ["", "U+E5BC"], ["", "U+E434"], ["󾟡", "U+FE7E1"]],
  "🚄": ["U+1F684", "high-speed train", "1f684", ["", "U+E65D"], ["", "U+E4B0"], ["", "U+E435"], ["󾟢", "U+FE7E2"]],
  "🚅": ["U+1F685", "high-speed train with bullet nose", "1f685", ["", "U+E65D"], ["", "U+E4B0"], ["", "U+E01F"], ["󾟣", "U+FE7E3"]],
  "🚗": ["U+1F697", "automobile", "1f697", ["", "U+E65E"], ["", "U+E4B1"], ["", "U+E01B"], ["󾟤", "U+FE7E4"]],
  "🚙": ["U+1F699", "recreational vehicle", "1f699", ["", "U+E65F"], ["", "U+E4B1"], ["", "U+E42E"], ["󾟥", "U+FE7E5"]],
  "🚌": ["U+1F68C", "bus", "1f68c", ["", "U+E660"], ["", "U+E4AF"], ["", "U+E159"], ["󾟦", "U+FE7E6"]],
  "🚏": ["U+1F68F", "bus stop", "1f68f", ["-", "-"], ["", "U+E4A7"], ["", "U+E150"], ["󾟧", "U+FE7E7"]],
  "🚢": ["U+1F6A2", "ship", "1f6a2", ["", "U+E661"], ["", "U+EA82"], ["", "U+E202"], ["󾟨", "U+FE7E8"]],
  "✈": ["U+2708", "airplane", "2708", ["", "U+E662"], ["", "U+E4B3"], ["", "U+E01D"], ["󾟩", "U+FE7E9"]],
  "⛵": ["U+26F5", "sailboat", "26f5", ["", "U+E6A3"], ["", "U+E4B4"], ["", "U+E01C"], ["󾟪", "U+FE7EA"]],
  "🚉": ["U+1F689", "station", "1f689", ["-", "-"], ["", "U+EB6D"], ["", "U+E039"], ["󾟬", "U+FE7EC"]],
  "🚀": ["U+1F680", "rocket", "1f680", ["-", "-"], ["", "U+E5C8"], ["", "U+E10D"], ["󾟭", "U+FE7ED"]],
  "🚤": ["U+1F6A4", "speedboat", "1f6a4", ["", "U+E6A3"], ["", "U+E4B4"], ["", "U+E135"], ["󾟮", "U+FE7EE"]],
  "🚕": ["U+1F695", "taxi", "1f695", ["", "U+E65E"], ["", "U+E4B1"], ["", "U+E15A"], ["󾟯", "U+FE7EF"]],
  "🚚": ["U+1F69A", "delivery truck", "1f69a", ["-", "-"], ["", "U+E4B2"], ["", "U+E42F"], ["󾟱", "U+FE7F1"]],
  "🚒": ["U+1F692", "fire engine", "1f692", ["-", "-"], ["", "U+EADF"], ["", "U+E430"], ["󾟲", "U+FE7F2"]],
  "🚑": ["U+1F691", "ambulance", "1f691", ["-", "-"], ["", "U+EAE0"], ["", "U+E431"], ["󾟳", "U+FE7F3"]],
  "🚓": ["U+1F693", "police car", "1f693", ["-", "-"], ["", "U+EAE1"], ["", "U+E432"], ["󾟴", "U+FE7F4"]],
  "⛽": ["U+26FD", "fuel pump", "26fd", ["", "U+E66B"], ["", "U+E571"], ["", "U+E03A"], ["󾟵", "U+FE7F5"]],
  "🅿": ["U+1F17F", "negative squared latin capital letter p", "1f17f", ["", "U+E66C"], ["", "U+E4A6"], ["", "U+E14F"], ["󾟶", "U+FE7F6"]],
  "🚥": ["U+1F6A5", "horizontal traffic light", "1f6a5", ["", "U+E66D"], ["", "U+E46A"], ["", "U+E14E"], ["󾟷", "U+FE7F7"]],
  "🚧": ["U+1F6A7", "construction sign", "1f6a7", ["-", "-"], ["", "U+E5D7"], ["", "U+E137"], ["󾟸", "U+FE7F8"]],
  "🚨": ["U+1F6A8", "police cars revolving light", "1f6a8", ["-", "-"], ["", "U+EB73"], ["", "U+E432"], ["󾟹", "U+FE7F9"]],
  "♨": ["U+2668", "hot springs", "2668", ["", "U+E6F7"], ["", "U+E4BC"], ["", "U+E123"], ["󾟺", "U+FE7FA"]],
  "⛺": ["U+26FA", "tent", "26fa", ["-", "-"], ["", "U+E5D0"], ["", "U+E122"], ["󾟻", "U+FE7FB"]],
  "🎠": ["U+1F3A0", "carousel horse", "1f3a0", ["", "U+E679"], ["-", "-"], ["-", "-"], ["󾟼", "U+FE7FC"]],
  "🎡": ["U+1F3A1", "ferris wheel", "1f3a1", ["-", "-"], ["", "U+E46D"], ["", "U+E124"], ["󾟽", "U+FE7FD"]],
  "🎢": ["U+1F3A2", "roller coaster", "1f3a2", ["-", "-"], ["", "U+EAE2"], ["", "U+E433"], ["󾟾", "U+FE7FE"]],
  "🎣": ["U+1F3A3", "fishing pole and fish", "1f3a3", ["", "U+E751"], ["", "U+EB42"], ["", "U+E019"], ["󾟿", "U+FE7FF"]],
  "🎤": ["U+1F3A4", "microphone", "1f3a4", ["", "U+E676"], ["", "U+E503"], ["", "U+E03C"], ["󾠀", "U+FE800"]],
  "🎥": ["U+1F3A5", "movie camera", "1f3a5", ["", "U+E677"], ["", "U+E517"], ["", "U+E03D"], ["󾠁", "U+FE801"]],
  "🎦": ["U+1F3A6", "cinema", "1f3a6", ["", "U+E677"], ["", "U+E517"], ["", "U+E507"], ["󾠂", "U+FE802"]],
  "🎧": ["U+1F3A7", "headphone", "1f3a7", ["", "U+E67A"], ["", "U+E508"], ["", "U+E30A"], ["󾠃", "U+FE803"]],
  "🎨": ["U+1F3A8", "artist palette", "1f3a8", ["", "U+E67B"], ["", "U+E59C"], ["", "U+E502"], ["󾠄", "U+FE804"]],
  "🎩": ["U+1F3A9", "top hat", "1f3a9", ["", "U+E67C"], ["", "U+EAF5"], ["", "U+E503"], ["󾠅", "U+FE805"]],
  "🎪": ["U+1F3AA", "circus tent", "1f3aa", ["", "U+E67D"], ["", "U+E59E"], ["-", "-"], ["󾠆", "U+FE806"]],
  "🎫": ["U+1F3AB", "ticket", "1f3ab", ["", "U+E67E"], ["", "U+E49E"], ["", "U+E125"], ["󾠇", "U+FE807"]],
  "🎬": ["U+1F3AC", "clapper board", "1f3ac", ["", "U+E6AC"], ["", "U+E4BE"], ["", "U+E324"], ["󾠈", "U+FE808"]],
  "🎭": ["U+1F3AD", "performing arts", "1f3ad", ["-", "-"], ["", "U+E59D"], ["", "U+E503"], ["󾠉", "U+FE809"]],
  "🎮": ["U+1F3AE", "video game", "1f3ae", ["", "U+E68B"], ["", "U+E4C6"], ["-", "-"], ["󾠊", "U+FE80A"]],
  "🀄": ["U+1F004", "mahjong tile red dragon", "1f004", ["-", "-"], ["", "U+E5D1"], ["", "U+E12D"], ["󾠋", "U+FE80B"]],
  "🎯": ["U+1F3AF", "direct hit", "1f3af", ["-", "-"], ["", "U+E4C5"], ["", "U+E130"], ["󾠌", "U+FE80C"]],
  "🎰": ["U+1F3B0", "slot machine", "1f3b0", ["-", "-"], ["", "U+E46E"], ["", "U+E133"], ["󾠍", "U+FE80D"]],
  "🎱": ["U+1F3B1", "billiards", "1f3b1", ["-", "-"], ["", "U+EADD"], ["", "U+E42C"], ["󾠎", "U+FE80E"]],
  "🎲": ["U+1F3B2", "game die", "1f3b2", ["-", "-"], ["", "U+E4C8"], ["-", "-"], ["󾠏", "U+FE80F"]],
  "🎳": ["U+1F3B3", "bowling", "1f3b3", ["-", "-"], ["", "U+EB43"], ["-", "-"], ["󾠐", "U+FE810"]],
  "🎴": ["U+1F3B4", "flower playing cards", "1f3b4", ["-", "-"], ["", "U+EB6E"], ["-", "-"], ["󾠑", "U+FE811"]],
  "🃏": ["U+1F0CF", "playing card black joker", "1f0cf", ["-", "-"], ["", "U+EB6F"], ["-", "-"], ["󾠒", "U+FE812"]],
  "🎵": ["U+1F3B5", "musical note", "1f3b5", ["", "U+E6F6"], ["", "U+E5BE"], ["", "U+E03E"], ["󾠓", "U+FE813"]],
  "🎶": ["U+1F3B6", "multiple musical notes", "1f3b6", ["", "U+E6FF"], ["", "U+E505"], ["", "U+E326"], ["󾠔", "U+FE814"]],
  "🎷": ["U+1F3B7", "saxophone", "1f3b7", ["-", "-"], ["-", "-"], ["", "U+E040"], ["󾠕", "U+FE815"]],
  "🎸": ["U+1F3B8", "guitar", "1f3b8", ["-", "-"], ["", "U+E506"], ["", "U+E041"], ["󾠖", "U+FE816"]],
  "🎹": ["U+1F3B9", "musical keyboard", "1f3b9", ["-", "-"], ["", "U+EB40"], ["-", "-"], ["󾠗", "U+FE817"]],
  "🎺": ["U+1F3BA", "trumpet", "1f3ba", ["-", "-"], ["", "U+EADC"], ["", "U+E042"], ["󾠘", "U+FE818"]],
  "🎻": ["U+1F3BB", "violin", "1f3bb", ["-", "-"], ["", "U+E507"], ["-", "-"], ["󾠙", "U+FE819"]],
  "🎼": ["U+1F3BC", "musical score", "1f3bc", ["", "U+E6FF"], ["", "U+EACC"], ["", "U+E326"], ["󾠚", "U+FE81A"]],
  "〽": ["U+303D", "part alternation mark", "303d", ["-", "-"], ["-", "-"], ["", "U+E12C"], ["󾠛", "U+FE81B"]],
  "📷": ["U+1F4F7", "camera", "1f4f7", ["", "U+E681"], ["", "U+E515"], ["", "U+E008"], ["󾓯", "U+FE4EF"]],
  "📹": ["U+1F4F9", "video camera", "1f4f9", ["", "U+E677"], ["", "U+E57E"], ["", "U+E03D"], ["󾓹", "U+FE4F9"]],
  "📺": ["U+1F4FA", "television", "1f4fa", ["", "U+E68A"], ["", "U+E502"], ["", "U+E12A"], ["󾠜", "U+FE81C"]],
  "📻": ["U+1F4FB", "radio", "1f4fb", ["-", "-"], ["", "U+E5B9"], ["", "U+E128"], ["󾠟", "U+FE81F"]],
  "📼": ["U+1F4FC", "videocassette", "1f4fc", ["-", "-"], ["", "U+E580"], ["", "U+E129"], ["󾠠", "U+FE820"]],
  "💋": ["U+1F48B", "kiss mark", "1f48b", ["", "U+E6F9"], ["", "U+E4EB"], ["", "U+E003"], ["󾠣", "U+FE823"]],
  "💌": ["U+1F48C", "love letter", "1f48c", ["", "U+E717"], ["", "U+EB78"], ["", "U+E103 U+E328"], ["󾠤", "U+FE824"]],
  "💍": ["U+1F48D", "ring", "1f48d", ["", "U+E71B"], ["", "U+E514"], ["", "U+E034"], ["󾠥", "U+FE825"]],
  "💎": ["U+1F48E", "gem stone", "1f48e", ["", "U+E71B"], ["", "U+E514"], ["", "U+E035"], ["󾠦", "U+FE826"]],
  "💏": ["U+1F48F", "kiss", "1f48f", ["", "U+E6F9"], ["", "U+E5CA"], ["", "U+E111"], ["󾠧", "U+FE827"]],
  "💐": ["U+1F490", "bouquet", "1f490", ["-", "-"], ["", "U+EA95"], ["", "U+E306"], ["󾠨", "U+FE828"]],
  "💑": ["U+1F491", "couple with heart", "1f491", ["", "U+E6ED"], ["", "U+EADA"], ["", "U+E425"], ["󾠩", "U+FE829"]],
  "💒": ["U+1F492", "wedding", "1f492", ["-", "-"], ["", "U+E5BB"], ["", "U+E43D"], ["󾠪", "U+FE82A"]],
  "🔞": ["U+1F51E", "no one under eighteen symbol", "1f51e", ["-", "-"], ["", "U+EA83"], ["", "U+E207"], ["󾬥", "U+FEB25"]],
  "©": ["U+00A9", "copyright sign", "a9", ["", "U+E731"], ["", "U+E558"], ["", "U+E24E"], ["󾬩", "U+FEB29"]],
  "®": ["U+00AE", "registered sign", "ae", ["", "U+E736"], ["", "U+E559"], ["", "U+E24F"], ["󾬭", "U+FEB2D"]],
  "™": ["U+2122", "trade mark sign", "2122", ["", "U+E732"], ["", "U+E54E"], ["", "U+E537"], ["󾬪", "U+FEB2A"]],
  "ℹ": ["U+2139", "information source", "2139", ["-", "-"], ["", "U+E533"], ["-", "-"], ["󾭇", "U+FEB47"]],
  "#⃣": ["U+0023 U+20E3", "hash key", "2320e3", ["", "U+E6E0"], ["", "U+EB84"], ["", "U+E210"], ["󾠬", "U+FE82C"]],
  "1⃣": ["U+0031 U+20E3", "keycap 1", "3120e3", ["", "U+E6E2"], ["", "U+E522"], ["", "U+E21C"], ["󾠮", "U+FE82E"]],
  "2⃣": ["U+0032 U+20E3", "keycap 2", "3220e3", ["", "U+E6E3"], ["", "U+E523"], ["", "U+E21D"], ["󾠯", "U+FE82F"]],
  "3⃣": ["U+0033 U+20E3", "keycap 3", "3320e3", ["", "U+E6E4"], ["", "U+E524"], ["", "U+E21E"], ["󾠰", "U+FE830"]],
  "4⃣": ["U+0034 U+20E3", "keycap 4", "3420e3", ["", "U+E6E5"], ["", "U+E525"], ["", "U+E21F"], ["󾠱", "U+FE831"]],
  "5⃣": ["U+0035 U+20E3", "keycap 5", "3520e3", ["", "U+E6E6"], ["", "U+E526"], ["", "U+E220"], ["󾠲", "U+FE832"]],
  "6⃣": ["U+0036 U+20E3", "keycap 6", "3620e3", ["", "U+E6E7"], ["", "U+E527"], ["", "U+E221"], ["󾠳", "U+FE833"]],
  "7⃣": ["U+0037 U+20E3", "keycap 7", "3720e3", ["", "U+E6E8"], ["", "U+E528"], ["", "U+E222"], ["󾠴", "U+FE834"]],
  "8⃣": ["U+0038 U+20E3", "keycap 8", "3820e3", ["", "U+E6E9"], ["", "U+E529"], ["", "U+E223"], ["󾠵", "U+FE835"]],
  "9⃣": ["U+0039 U+20E3", "keycap 9", "3920e3", ["", "U+E6EA"], ["", "U+E52A"], ["", "U+E224"], ["󾠶", "U+FE836"]],
  "0⃣": ["U+0030 U+20E3", "keycap 0", "3020e3", ["", "U+E6EB"], ["", "U+E5AC"], ["", "U+E225"], ["󾠷", "U+FE837"]],
  "🔟": ["U+1F51F", "keycap ten", "1f51f", ["-", "-"], ["", "U+E52B"], ["-", "-"], ["󾠻", "U+FE83B"]],
  "📶": ["U+1F4F6", "antenna with bars", "1f4f6", ["-", "-"], ["", "U+EA84"], ["", "U+E20B"], ["󾠸", "U+FE838"]],
  "📳": ["U+1F4F3", "vibration mode", "1f4f3", ["-", "-"], ["", "U+EA90"], ["", "U+E250"], ["󾠹", "U+FE839"]],
  "📴": ["U+1F4F4", "mobile phone off", "1f4f4", ["-", "-"], ["", "U+EA91"], ["", "U+E251"], ["󾠺", "U+FE83A"]],
  "🍔": ["U+1F354", "hamburger", "1f354", ["", "U+E673"], ["", "U+E4D6"], ["", "U+E120"], ["󾥠", "U+FE960"]],
  "🍙": ["U+1F359", "rice ball", "1f359", ["", "U+E749"], ["", "U+E4D5"], ["", "U+E342"], ["󾥡", "U+FE961"]],
  "🍰": ["U+1F370", "shortcake", "1f370", ["", "U+E74A"], ["", "U+E4D0"], ["", "U+E046"], ["󾥢", "U+FE962"]],
  "🍜": ["U+1F35C", "steaming bowl", "1f35c", ["", "U+E74C"], ["", "U+E5B4"], ["", "U+E340"], ["󾥣", "U+FE963"]],
  "🍞": ["U+1F35E", "bread", "1f35e", ["", "U+E74D"], ["", "U+EAAF"], ["", "U+E339"], ["󾥤", "U+FE964"]],
  "🍳": ["U+1F373", "cooking", "1f373", ["-", "-"], ["", "U+E4D1"], ["", "U+E147"], ["󾥥", "U+FE965"]],
  "🍦": ["U+1F366", "soft ice cream", "1f366", ["-", "-"], ["", "U+EAB0"], ["", "U+E33A"], ["󾥦", "U+FE966"]],
  "🍟": ["U+1F35F", "french fries", "1f35f", ["-", "-"], ["", "U+EAB1"], ["", "U+E33B"], ["󾥧", "U+FE967"]],
  "🍡": ["U+1F361", "dango", "1f361", ["-", "-"], ["", "U+EAB2"], ["", "U+E33C"], ["󾥨", "U+FE968"]],
  "🍘": ["U+1F358", "rice cracker", "1f358", ["-", "-"], ["", "U+EAB3"], ["", "U+E33D"], ["󾥩", "U+FE969"]],
  "🍚": ["U+1F35A", "cooked rice", "1f35a", ["", "U+E74C"], ["", "U+EAB4"], ["", "U+E33E"], ["󾥪", "U+FE96A"]],
  "🍝": ["U+1F35D", "spaghetti", "1f35d", ["-", "-"], ["", "U+EAB5"], ["", "U+E33F"], ["󾥫", "U+FE96B"]],
  "🍛": ["U+1F35B", "curry and rice", "1f35b", ["-", "-"], ["", "U+EAB6"], ["", "U+E341"], ["󾥬", "U+FE96C"]],
  "🍢": ["U+1F362", "oden", "1f362", ["-", "-"], ["", "U+EAB7"], ["", "U+E343"], ["󾥭", "U+FE96D"]],
  "🍣": ["U+1F363", "sushi", "1f363", ["-", "-"], ["", "U+EAB8"], ["", "U+E344"], ["󾥮", "U+FE96E"]],
  "🍱": ["U+1F371", "bento box", "1f371", ["-", "-"], ["", "U+EABD"], ["", "U+E34C"], ["󾥯", "U+FE96F"]],
  "🍲": ["U+1F372", "pot of food", "1f372", ["-", "-"], ["", "U+EABE"], ["", "U+E34D"], ["󾥰", "U+FE970"]],
  "🍧": ["U+1F367", "shaved ice", "1f367", ["-", "-"], ["", "U+EAEA"], ["", "U+E43F"], ["󾥱", "U+FE971"]],
  "🍖": ["U+1F356", "meat on bone", "1f356", ["-", "-"], ["", "U+E4C4"], ["-", "-"], ["󾥲", "U+FE972"]],
  "🍥": ["U+1F365", "fish cake with swirl design", "1f365", ["", "U+E643"], ["", "U+E4ED"], ["-", "-"], ["󾥳", "U+FE973"]],
  "🍠": ["U+1F360", "roasted sweet potato", "1f360", ["-", "-"], ["", "U+EB3A"], ["-", "-"], ["󾥴", "U+FE974"]],
  "🍕": ["U+1F355", "slice of pizza", "1f355", ["-", "-"], ["", "U+EB3B"], ["-", "-"], ["󾥵", "U+FE975"]],
  "🍗": ["U+1F357", "poultry leg", "1f357", ["-", "-"], ["", "U+EB3C"], ["-", "-"], ["󾥶", "U+FE976"]],
  "🍨": ["U+1F368", "ice cream", "1f368", ["-", "-"], ["", "U+EB4A"], ["-", "-"], ["󾥷", "U+FE977"]],
  "🍩": ["U+1F369", "doughnut", "1f369", ["-", "-"], ["", "U+EB4B"], ["-", "-"], ["󾥸", "U+FE978"]],
  "🍪": ["U+1F36A", "cookie", "1f36a", ["-", "-"], ["", "U+EB4C"], ["-", "-"], ["󾥹", "U+FE979"]],
  "🍫": ["U+1F36B", "chocolate bar", "1f36b", ["-", "-"], ["", "U+EB4D"], ["-", "-"], ["󾥺", "U+FE97A"]],
  "🍬": ["U+1F36C", "candy", "1f36c", ["-", "-"], ["", "U+EB4E"], ["-", "-"], ["󾥻", "U+FE97B"]],
  "🍭": ["U+1F36D", "lollipop", "1f36d", ["-", "-"], ["", "U+EB4F"], ["-", "-"], ["󾥼", "U+FE97C"]],
  "🍮": ["U+1F36E", "custard", "1f36e", ["-", "-"], ["", "U+EB56"], ["-", "-"], ["󾥽", "U+FE97D"]],
  "🍯": ["U+1F36F", "honey pot", "1f36f", ["-", "-"], ["", "U+EB59"], ["-", "-"], ["󾥾", "U+FE97E"]],
  "🍤": ["U+1F364", "fried shrimp", "1f364", ["-", "-"], ["", "U+EB70"], ["-", "-"], ["󾥿", "U+FE97F"]],
  "🍴": ["U+1F374", "fork and knife", "1f374", ["", "U+E66F"], ["", "U+E4AC"], ["", "U+E043"], ["󾦀", "U+FE980"]],
  "☕": ["U+2615", "hot beverage", "2615", ["", "U+E670"], ["", "U+E597"], ["", "U+E045"], ["󾦁", "U+FE981"]],
  "🍸": ["U+1F378", "cocktail glass", "1f378", ["", "U+E671"], ["", "U+E4C2"], ["", "U+E044"], ["󾦂", "U+FE982"]],
  "🍺": ["U+1F37A", "beer mug", "1f37a", ["", "U+E672"], ["", "U+E4C3"], ["", "U+E047"], ["󾦃", "U+FE983"]],
  "🍵": ["U+1F375", "teacup without handle", "1f375", ["", "U+E71E"], ["", "U+EAAE"], ["", "U+E338"], ["󾦄", "U+FE984"]],
  "🍶": ["U+1F376", "sake bottle and cup", "1f376", ["", "U+E74B"], ["", "U+EA97"], ["", "U+E30B"], ["󾦅", "U+FE985"]],
  "🍷": ["U+1F377", "wine glass", "1f377", ["", "U+E756"], ["", "U+E4C1"], ["", "U+E044"], ["󾦆", "U+FE986"]],
  "🍻": ["U+1F37B", "clinking beer mugs", "1f37b", ["", "U+E672"], ["", "U+EA98"], ["", "U+E30C"], ["󾦇", "U+FE987"]],
  "🍹": ["U+1F379", "tropical drink", "1f379", ["", "U+E671"], ["", "U+EB3E"], ["", "U+E044"], ["󾦈", "U+FE988"]],
  "↗": ["U+2197", "north east arrow", "2197", ["", "U+E678"], ["", "U+E555"], ["", "U+E236"], ["󾫰", "U+FEAF0"]],
  "↘": ["U+2198", "south east arrow", "2198", ["", "U+E696"], ["", "U+E54D"], ["", "U+E238"], ["󾫱", "U+FEAF1"]],
  "↖": ["U+2196", "north west arrow", "2196", ["", "U+E697"], ["", "U+E54C"], ["", "U+E237"], ["󾫲", "U+FEAF2"]],
  "↙": ["U+2199", "south west arrow", "2199", ["", "U+E6A5"], ["", "U+E556"], ["", "U+E239"], ["󾫳", "U+FEAF3"]],
  "⤴": ["U+2934", "arrow pointing rightwards then curving upwards", "2934", ["", "U+E6F5"], ["", "U+EB2D"], ["", "U+E236"], ["󾫴", "U+FEAF4"]],
  "⤵": ["U+2935", "arrow pointing rightwards then curving downwards", "2935", ["", "U+E700"], ["", "U+EB2E"], ["", "U+E238"], ["󾫵", "U+FEAF5"]],
  "↔": ["U+2194", "left right arrow", "2194", ["", "U+E73C"], ["", "U+EB7A"], ["-", "-"], ["󾫶", "U+FEAF6"]],
  "↕": ["U+2195", "up down arrow", "2195", ["", "U+E73D"], ["", "U+EB7B"], ["-", "-"], ["󾫷", "U+FEAF7"]],
  "⬆": ["U+2B06", "upwards black arrow", "2b06", ["-", "-"], ["", "U+E53F"], ["", "U+E232"], ["󾫸", "U+FEAF8"]],
  "⬇": ["U+2B07", "downwards black arrow", "2b07", ["-", "-"], ["", "U+E540"], ["", "U+E233"], ["󾫹", "U+FEAF9"]],
  "➡": ["U+27A1", "black rightwards arrow", "27a1", ["-", "-"], ["", "U+E552"], ["", "U+E234"], ["󾫺", "U+FEAFA"]],
  "⬅": ["U+2B05", "leftwards black arrow", "2b05", ["-", "-"], ["", "U+E553"], ["", "U+E235"], ["󾫻", "U+FEAFB"]],
  "▶": ["U+25B6", "black right-pointing triangle", "25b6", ["-", "-"], ["", "U+E52E"], ["", "U+E23A"], ["󾫼", "U+FEAFC"]],
  "◀": ["U+25C0", "black left-pointing triangle", "25c0", ["-", "-"], ["", "U+E52D"], ["", "U+E23B"], ["󾫽", "U+FEAFD"]],
  "⏩": ["U+23E9", "black right-pointing double triangle", "23e9", ["-", "-"], ["", "U+E530"], ["", "U+E23C"], ["󾫾", "U+FEAFE"]],
  "⏪": ["U+23EA", "black left-pointing double triangle", "23ea", ["-", "-"], ["", "U+E52F"], ["", "U+E23D"], ["󾫿", "U+FEAFF"]],
  "⏫": ["U+23EB", "black up-pointing double triangle", "23eb", ["-", "-"], ["", "U+E545"], ["-", "-"], ["󾬃", "U+FEB03"]],
  "⏬": ["U+23EC", "black down-pointing double triangle", "23ec", ["-", "-"], ["", "U+E544"], ["-", "-"], ["󾬂", "U+FEB02"]],
  "🔺": ["U+1F53A", "up-pointing red triangle", "1f53a", ["-", "-"], ["", "U+E55A"], ["-", "-"], ["󾭸", "U+FEB78"]],
  "🔻": ["U+1F53B", "down-pointing red triangle", "1f53b", ["-", "-"], ["", "U+E55B"], ["-", "-"], ["󾭹", "U+FEB79"]],
  "🔼": ["U+1F53C", "up-pointing small red triangle", "1f53c", ["-", "-"], ["", "U+E543"], ["-", "-"], ["󾬁", "U+FEB01"]],
  "🔽": ["U+1F53D", "down-pointing small red triangle", "1f53d", ["-", "-"], ["", "U+E542"], ["-", "-"], ["󾬀", "U+FEB00"]],
  "⭕": ["U+2B55", "heavy large circle", "2b55", ["", "U+E6A0"], ["", "U+EAAD"], ["", "U+E332"], ["󾭄", "U+FEB44"]],
  "❌": ["U+274C", "cross mark", "274c", ["-", "-"], ["", "U+E550"], ["", "U+E333"], ["󾭅", "U+FEB45"]],
  "❎": ["U+274E", "negative squared cross mark", "274e", ["-", "-"], ["", "U+E551"], ["", "U+E333"], ["󾭆", "U+FEB46"]],
  "❗": ["U+2757", "heavy exclamation mark symbol", "2757", ["", "U+E702"], ["", "U+E482"], ["", "U+E021"], ["󾬄", "U+FEB04"]],
  "⁉": ["U+2049", "exclamation question mark", "2049", ["", "U+E703"], ["", "U+EB2F"], ["-", "-"], ["󾬅", "U+FEB05"]],
  "‼": ["U+203C", "double exclamation mark", "203c", ["", "U+E704"], ["", "U+EB30"], ["-", "-"], ["󾬆", "U+FEB06"]],
  "❓": ["U+2753", "black question mark ornament", "2753", ["-", "-"], ["", "U+E483"], ["", "U+E020"], ["󾬉", "U+FEB09"]],
  "❔": ["U+2754", "white question mark ornament", "2754", ["-", "-"], ["", "U+E483"], ["", "U+E336"], ["󾬊", "U+FEB0A"]],
  "❕": ["U+2755", "white exclamation mark ornament", "2755", ["", "U+E702"], ["", "U+E482"], ["", "U+E337"], ["󾬋", "U+FEB0B"]],
  "〰": ["U+3030", "wavy dash", "3030", ["", "U+E709"], ["-", "-"], ["-", "-"], ["󾬇", "U+FEB07"]],
  "➰": ["U+27B0", "curly loop", "27b0", ["", "U+E70A"], ["", "U+EB31"], ["-", "-"], ["󾬈", "U+FEB08"]],
  "➿": ["U+27BF", "double curly loop", "27bf", ["", "U+E6DF"], ["-", "-"], ["", "U+E211"], ["󾠫", "U+FE82B"]],
  "❤": ["U+2764", "heavy black heart", "2764", ["", "U+E6EC"], ["", "U+E595"], ["", "U+E022"], ["󾬌", "U+FEB0C"]],
  "💓": ["U+1F493", "beating heart", "1f493", ["", "U+E6ED"], ["", "U+EB75"], ["", "U+E327"], ["󾬍", "U+FEB0D"]],
  "💔": ["U+1F494", "broken heart", "1f494", ["", "U+E6EE"], ["", "U+E477"], ["", "U+E023"], ["󾬎", "U+FEB0E"]],
  "💕": ["U+1F495", "two hearts", "1f495", ["", "U+E6EF"], ["", "U+E478"], ["", "U+E327"], ["󾬏", "U+FEB0F"]],
  "💖": ["U+1F496", "sparkling heart", "1f496", ["", "U+E6EC"], ["", "U+EAA6"], ["", "U+E327"], ["󾬐", "U+FEB10"]],
  "💗": ["U+1F497", "growing heart", "1f497", ["", "U+E6ED"], ["", "U+EB75"], ["", "U+E328"], ["󾬑", "U+FEB11"]],
  "💘": ["U+1F498", "heart with arrow", "1f498", ["", "U+E6EC"], ["", "U+E4EA"], ["", "U+E329"], ["󾬒", "U+FEB12"]],
  "💙": ["U+1F499", "blue heart", "1f499", ["", "U+E6EC"], ["", "U+EAA7"], ["", "U+E32A"], ["󾬓", "U+FEB13"]],
  "💚": ["U+1F49A", "green heart", "1f49a", ["", "U+E6EC"], ["", "U+EAA8"], ["", "U+E32B"], ["󾬔", "U+FEB14"]],
  "💛": ["U+1F49B", "yellow heart", "1f49b", ["", "U+E6EC"], ["", "U+EAA9"], ["", "U+E32C"], ["󾬕", "U+FEB15"]],
  "💜": ["U+1F49C", "purple heart", "1f49c", ["", "U+E6EC"], ["", "U+EAAA"], ["", "U+E32D"], ["󾬖", "U+FEB16"]],
  "💝": ["U+1F49D", "heart with ribbon", "1f49d", ["", "U+E6EC"], ["", "U+EB54"], ["", "U+E437"], ["󾬗", "U+FEB17"]],
  "💞": ["U+1F49E", "revolving hearts", "1f49e", ["", "U+E6ED"], ["", "U+E5AF"], ["", "U+E327"], ["󾬘", "U+FEB18"]],
  "💟": ["U+1F49F", "heart decoration", "1f49f", ["", "U+E6F8"], ["", "U+E595"], ["", "U+E204"], ["󾬙", "U+FEB19"]],
  "♥": ["U+2665", "black heart suit", "2665", ["", "U+E68D"], ["", "U+EAA5"], ["", "U+E20C"], ["󾬚", "U+FEB1A"]],
  "♠": ["U+2660", "black spade suit", "2660", ["", "U+E68E"], ["", "U+E5A1"], ["", "U+E20E"], ["󾬛", "U+FEB1B"]],
  "♦": ["U+2666", "black diamond suit", "2666", ["", "U+E68F"], ["", "U+E5A2"], ["", "U+E20D"], ["󾬜", "U+FEB1C"]],
  "♣": ["U+2663", "black club suit", "2663", ["", "U+E690"], ["", "U+E5A3"], ["", "U+E20F"], ["󾬝", "U+FEB1D"]],
  "🚬": ["U+1F6AC", "smoking symbol", "1f6ac", ["", "U+E67F"], ["", "U+E47D"], ["", "U+E30E"], ["󾬞", "U+FEB1E"]],
  "🚭": ["U+1F6AD", "no smoking symbol", "1f6ad", ["", "U+E680"], ["", "U+E47E"], ["", "U+E208"], ["󾬟", "U+FEB1F"]],
  "♿": ["U+267F", "wheelchair symbol", "267f", ["", "U+E69B"], ["", "U+E47F"], ["", "U+E20A"], ["󾬠", "U+FEB20"]],
  "🚩": ["U+1F6A9", "triangular flag on post", "1f6a9", ["", "U+E6DE"], ["", "U+EB2C"], ["-", "-"], ["󾬢", "U+FEB22"]],
  "⚠": ["U+26A0", "warning sign", "26a0", ["", "U+E737"], ["", "U+E481"], ["", "U+E252"], ["󾬣", "U+FEB23"]],
  "⛔": ["U+26D4", "no entry", "26d4", ["", "U+E72F"], ["", "U+E484"], ["", "U+E137"], ["󾬦", "U+FEB26"]],
  "♻": ["U+267B", "black universal recycling symbol", "267b", ["", "U+E735"], ["", "U+EB79"], ["-", "-"], ["󾬬", "U+FEB2C"]],
  "🚲": ["U+1F6B2", "bicycle", "1f6b2", ["", "U+E71D"], ["", "U+E4AE"], ["", "U+E136"], ["󾟫", "U+FE7EB"]],
  "🚶": ["U+1F6B6", "pedestrian", "1f6b6", ["", "U+E733"], ["", "U+EB72"], ["", "U+E201"], ["󾟰", "U+FE7F0"]],
  "🚹": ["U+1F6B9", "mens symbol", "1f6b9", ["-", "-"], ["-", "-"], ["", "U+E138"], ["󾬳", "U+FEB33"]],
  "🚺": ["U+1F6BA", "womens symbol", "1f6ba", ["-", "-"], ["-", "-"], ["", "U+E139"], ["󾬴", "U+FEB34"]],
  "🛀": ["U+1F6C0", "bath", "1f6c0", ["", "U+E6F7"], ["", "U+E5D8"], ["", "U+E13F"], ["󾔅", "U+FE505"]],
  "🚻": ["U+1F6BB", "restroom", "1f6bb", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E151"], ["󾔆", "U+FE506"]],
  "🚽": ["U+1F6BD", "toilet", "1f6bd", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E140"], ["󾔇", "U+FE507"]],
  "🚾": ["U+1F6BE", "water closet", "1f6be", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E309"], ["󾔈", "U+FE508"]],
  "🚼": ["U+1F6BC", "baby symbol", "1f6bc", ["-", "-"], ["", "U+EB18"], ["", "U+E13A"], ["󾬵", "U+FEB35"]],
  "🚪": ["U+1F6AA", "door", "1f6aa", ["", "U+E714"], ["-", "-"], ["-", "-"], ["󾓳", "U+FE4F3"]],
  "🚫": ["U+1F6AB", "no entry sign", "1f6ab", ["", "U+E738"], ["", "U+E541"], ["-", "-"], ["󾭈", "U+FEB48"]],
  "✔": ["U+2714", "heavy check mark", "2714", ["-", "-"], ["", "U+E557"], ["-", "-"], ["󾭉", "U+FEB49"]],
  "🆑": ["U+1F191", "squared cl", "1f191", ["", "U+E6DB"], ["", "U+E5AB"], ["-", "-"], ["󾮄", "U+FEB84"]],
  "🆒": ["U+1F192", "squared cool", "1f192", ["-", "-"], ["", "U+EA85"], ["", "U+E214"], ["󾬸", "U+FEB38"]],
  "🆓": ["U+1F193", "squared free", "1f193", ["", "U+E6D7"], ["", "U+E578"], ["-", "-"], ["󾬡", "U+FEB21"]],
  "🆔": ["U+1F194", "squared id", "1f194", ["", "U+E6D8"], ["", "U+EA88"], ["", "U+E229"], ["󾮁", "U+FEB81"]],
  "🆕": ["U+1F195", "squared new", "1f195", ["", "U+E6DD"], ["", "U+E5B5"], ["", "U+E212"], ["󾬶", "U+FEB36"]],
  "🆖": ["U+1F196", "squared ng", "1f196", ["", "U+E72F"], ["-", "-"], ["-", "-"], ["󾬨", "U+FEB28"]],
  "🆗": ["U+1F197", "squared ok", "1f197", ["", "U+E70B"], ["", "U+E5AD"], ["", "U+E24D"], ["󾬧", "U+FEB27"]],
  "🆘": ["U+1F198", "squared sos", "1f198", ["-", "-"], ["", "U+E4E8"], ["-", "-"], ["󾭏", "U+FEB4F"]],
  "🆙": ["U+1F199", "squared up with exclamation mark", "1f199", ["-", "-"], ["", "U+E50F"], ["", "U+E213"], ["󾬷", "U+FEB37"]],
  "🆚": ["U+1F19A", "squared vs", "1f19a", ["-", "-"], ["", "U+E5D2"], ["", "U+E12E"], ["󾬲", "U+FEB32"]],
  "🈁": ["U+1F201", "squared katakana koko", "1f201", ["-", "-"], ["-", "-"], ["", "U+E203"], ["󾬤", "U+FEB24"]],
  "🈂": ["U+1F202", "squared katakana sa", "1f202", ["-", "-"], ["", "U+EA87"], ["", "U+E228"], ["󾬿", "U+FEB3F"]],
  "🈲": ["U+1F232", "squared cjk unified ideograph-7981", "1f232", ["", "U+E738"], ["-", "-"], ["-", "-"], ["󾬮", "U+FEB2E"]],
  "🈳": ["U+1F233", "squared cjk unified ideograph-7a7a", "1f233", ["", "U+E739"], ["", "U+EA8A"], ["", "U+E22B"], ["󾬯", "U+FEB2F"]],
  "🈴": ["U+1F234", "squared cjk unified ideograph-5408", "1f234", ["", "U+E73A"], ["-", "-"], ["-", "-"], ["󾬰", "U+FEB30"]],
  "🈵": ["U+1F235", "squared cjk unified ideograph-6e80", "1f235", ["", "U+E73B"], ["", "U+EA89"], ["", "U+E22A"], ["󾬱", "U+FEB31"]],
  "🈶": ["U+1F236", "squared cjk unified ideograph-6709", "1f236", ["-", "-"], ["-", "-"], ["", "U+E215"], ["󾬹", "U+FEB39"]],
  "🈚": ["U+1F21A", "squared cjk unified ideograph-7121", "1f21a", ["-", "-"], ["-", "-"], ["", "U+E216"], ["󾬺", "U+FEB3A"]],
  "🈷": ["U+1F237", "squared cjk unified ideograph-6708", "1f237", ["-", "-"], ["-", "-"], ["", "U+E217"], ["󾬻", "U+FEB3B"]],
  "🈸": ["U+1F238", "squared cjk unified ideograph-7533", "1f238", ["-", "-"], ["-", "-"], ["", "U+E218"], ["󾬼", "U+FEB3C"]],
  "🈹": ["U+1F239", "squared cjk unified ideograph-5272", "1f239", ["-", "-"], ["", "U+EA86"], ["", "U+E227"], ["󾬾", "U+FEB3E"]],
  "🈯": ["U+1F22F", "squared cjk unified ideograph-6307", "1f22f", ["-", "-"], ["", "U+EA8B"], ["", "U+E22C"], ["󾭀", "U+FEB40"]],
  "🈺": ["U+1F23A", "squared cjk unified ideograph-55b6", "1f23a", ["-", "-"], ["", "U+EA8C"], ["", "U+E22D"], ["󾭁", "U+FEB41"]],
  "㊙": ["U+3299", "circled ideograph secret", "3299", ["", "U+E734"], ["", "U+E4F1"], ["", "U+E315"], ["󾬫", "U+FEB2B"]],
  "㊗": ["U+3297", "circled ideograph congratulation", "3297", ["-", "-"], ["", "U+EA99"], ["", "U+E30D"], ["󾭃", "U+FEB43"]],
  "🉐": ["U+1F250", "circled ideograph advantage", "1f250", ["-", "-"], ["", "U+E4F7"], ["", "U+E226"], ["󾬽", "U+FEB3D"]],
  "🉑": ["U+1F251", "circled ideograph accept", "1f251", ["-", "-"], ["", "U+EB01"], ["-", "-"], ["󾭐", "U+FEB50"]],
  "➕": ["U+2795", "heavy plus sign", "2795", ["-", "-"], ["", "U+E53C"], ["-", "-"], ["󾭑", "U+FEB51"]],
  "➖": ["U+2796", "heavy minus sign", "2796", ["-", "-"], ["", "U+E53D"], ["-", "-"], ["󾭒", "U+FEB52"]],
  "✖": ["U+2716", "heavy multiplication x", "2716", ["-", "-"], ["", "U+E54F"], ["", "U+E333"], ["󾭓", "U+FEB53"]],
  "➗": ["U+2797", "heavy division sign", "2797", ["-", "-"], ["", "U+E554"], ["-", "-"], ["󾭔", "U+FEB54"]],
  "💠": ["U+1F4A0", "diamond shape with a dot inside", "1f4a0", ["", "U+E6F8"], ["-", "-"], ["-", "-"], ["󾭕", "U+FEB55"]],
  "💡": ["U+1F4A1", "electric light bulb", "1f4a1", ["", "U+E6FB"], ["", "U+E476"], ["", "U+E10F"], ["󾭖", "U+FEB56"]],
  "💢": ["U+1F4A2", "anger symbol", "1f4a2", ["", "U+E6FC"], ["", "U+E4E5"], ["", "U+E334"], ["󾭗", "U+FEB57"]],
  "💣": ["U+1F4A3", "bomb", "1f4a3", ["", "U+E6FE"], ["", "U+E47A"], ["", "U+E311"], ["󾭘", "U+FEB58"]],
  "💤": ["U+1F4A4", "sleeping symbol", "1f4a4", ["", "U+E701"], ["", "U+E475"], ["", "U+E13C"], ["󾭙", "U+FEB59"]],
  "💥": ["U+1F4A5", "collision symbol", "1f4a5", ["", "U+E705"], ["", "U+E5B0"], ["-", "-"], ["󾭚", "U+FEB5A"]],
  "💦": ["U+1F4A6", "splashing sweat symbol", "1f4a6", ["", "U+E706"], ["", "U+E5B1"], ["", "U+E331"], ["󾭛", "U+FEB5B"]],
  "💧": ["U+1F4A7", "droplet", "1f4a7", ["", "U+E707"], ["", "U+E4E6"], ["", "U+E331"], ["󾭜", "U+FEB5C"]],
  "💨": ["U+1F4A8", "dash symbol", "1f4a8", ["", "U+E708"], ["", "U+E4F4"], ["", "U+E330"], ["󾭝", "U+FEB5D"]],
  "💩": ["U+1F4A9", "pile of poo", "1f4a9", ["-", "-"], ["", "U+E4F5"], ["", "U+E05A"], ["󾓴", "U+FE4F4"]],
  "💪": ["U+1F4AA", "flexed biceps", "1f4aa", ["-", "-"], ["", "U+E4E9"], ["", "U+E14C"], ["󾭞", "U+FEB5E"]],
  "💫": ["U+1F4AB", "dizzy symbol", "1f4ab", ["-", "-"], ["", "U+EB5C"], ["", "U+E407"], ["󾭟", "U+FEB5F"]],
  "💬": ["U+1F4AC", "speech balloon", "1f4ac", ["-", "-"], ["", "U+E4FD"], ["-", "-"], ["󾔲", "U+FE532"]],
  "✨": ["U+2728", "sparkles", "2728", ["", "U+E6FA"], ["", "U+EAAB"], ["", "U+E32E"], ["󾭠", "U+FEB60"]],
  "✴": ["U+2734", "eight pointed black star", "2734", ["", "U+E6F8"], ["", "U+E479"], ["", "U+E205"], ["󾭡", "U+FEB61"]],
  "✳": ["U+2733", "eight spoked asterisk", "2733", ["", "U+E6F8"], ["", "U+E53E"], ["", "U+E206"], ["󾭢", "U+FEB62"]],
  "⚪": ["U+26AA", "medium white circle", "26aa", ["", "U+E69C"], ["", "U+E53A"], ["", "U+E219"], ["󾭥", "U+FEB65"]],
  "⚫": ["U+26AB", "medium black circle", "26ab", ["", "U+E69C"], ["", "U+E53B"], ["", "U+E219"], ["󾭦", "U+FEB66"]],
  "🔴": ["U+1F534", "large red circle", "1f534", ["", "U+E69C"], ["", "U+E54A"], ["", "U+E219"], ["󾭣", "U+FEB63"]],
  "🔵": ["U+1F535", "large blue circle", "1f535", ["", "U+E69C"], ["", "U+E54B"], ["", "U+E21A"], ["󾭤", "U+FEB64"]],
  "🔲": ["U+1F532", "black square button", "1f532", ["", "U+E69C"], ["", "U+E54B"], ["", "U+E21A"], ["󾭤", "U+FEB64"]],
  "🔳": ["U+1F533", "white square button", "1f533", ["", "U+E69C"], ["", "U+E54B"], ["", "U+E21B"], ["󾭧", "U+FEB67"]],
  "⭐": ["U+2B50", "white medium star", "2b50", ["-", "-"], ["", "U+E48B"], ["", "U+E32F"], ["󾭨", "U+FEB68"]],
  "⬜": ["U+2B1C", "white large square", "2b1c", ["-", "-"], ["", "U+E548"], ["", "U+E21B"], ["󾭫", "U+FEB6B"]],
  "⬛": ["U+2B1B", "black large square", "2b1b", ["-", "-"], ["", "U+E549"], ["", "U+E21A"], ["󾭬", "U+FEB6C"]],
  "▫": ["U+25AB", "white small square", "25ab", ["-", "-"], ["", "U+E531"], ["", "U+E21B"], ["󾭭", "U+FEB6D"]],
  "▪": ["U+25AA", "black small square", "25aa", ["-", "-"], ["", "U+E532"], ["", "U+E21A"], ["󾭮", "U+FEB6E"]],
  "◽": ["U+25FD", "white medium small square", "25fd", ["-", "-"], ["", "U+E534"], ["", "U+E21B"], ["󾭯", "U+FEB6F"]],
  "◾": ["U+25FE", "black medium small square", "25fe", ["-", "-"], ["", "U+E535"], ["", "U+E21A"], ["󾭰", "U+FEB70"]],
  "◻": ["U+25FB", "white medium square", "25fb", ["-", "-"], ["", "U+E538"], ["", "U+E21B"], ["󾭱", "U+FEB71"]],
  "◼": ["U+25FC", "black medium square", "25fc", ["-", "-"], ["", "U+E539"], ["", "U+E21A"], ["󾭲", "U+FEB72"]],
  "🔶": ["U+1F536", "large orange diamond", "1f536", ["-", "-"], ["", "U+E546"], ["", "U+E21B"], ["󾭳", "U+FEB73"]],
  "🔷": ["U+1F537", "large blue diamond", "1f537", ["-", "-"], ["", "U+E547"], ["", "U+E21B"], ["󾭴", "U+FEB74"]],
  "🔸": ["U+1F538", "small orange diamond", "1f538", ["-", "-"], ["", "U+E536"], ["", "U+E21B"], ["󾭵", "U+FEB75"]],
  "🔹": ["U+1F539", "small blue diamond", "1f539", ["-", "-"], ["", "U+E537"], ["", "U+E21B"], ["󾭶", "U+FEB76"]],
  "❇": ["U+2747", "sparkle", "2747", ["", "U+E6FA"], ["", "U+E46C"], ["", "U+E32E"], ["󾭷", "U+FEB77"]],
  "💮": ["U+1F4AE", "white flower", "1f4ae", ["-", "-"], ["", "U+E4F0"], ["-", "-"], ["󾭺", "U+FEB7A"]],
  "💯": ["U+1F4AF", "hundred points symbol", "1f4af", ["-", "-"], ["", "U+E4F2"], ["-", "-"], ["󾭻", "U+FEB7B"]],
  "↩": ["U+21A9", "leftwards arrow with hook", "21a9", ["", "U+E6DA"], ["", "U+E55D"], ["-", "-"], ["󾮃", "U+FEB83"]],
  "↪": ["U+21AA", "rightwards arrow with hook", "21aa", ["-", "-"], ["", "U+E55C"], ["-", "-"], ["󾮈", "U+FEB88"]],
  "🔃": ["U+1F503", "clockwise downwards and upwards open circle arrows", "1f503", ["", "U+E735"], ["", "U+EB0D"], ["-", "-"], ["󾮑", "U+FEB91"]],
  "🔊": ["U+1F50A", "speaker with three sound waves", "1f50a", ["-", "-"], ["", "U+E511"], ["", "U+E141"], ["󾠡", "U+FE821"]],
  "🔋": ["U+1F50B", "battery", "1f50b", ["-", "-"], ["", "U+E584"], ["-", "-"], ["󾓼", "U+FE4FC"]],
  "🔌": ["U+1F50C", "electric plug", "1f50c", ["-", "-"], ["", "U+E589"], ["-", "-"], ["󾓾", "U+FE4FE"]],
  "🔍": ["U+1F50D", "left-pointing magnifying glass", "1f50d", ["", "U+E6DC"], ["", "U+E518"], ["", "U+E114"], ["󾮅", "U+FEB85"]],
  "🔎": ["U+1F50E", "right-pointing magnifying glass", "1f50e", ["", "U+E6DC"], ["", "U+EB05"], ["", "U+E114"], ["󾮍", "U+FEB8D"]],
  "🔒": ["U+1F512", "lock", "1f512", ["", "U+E6D9"], ["", "U+E51C"], ["", "U+E144"], ["󾮆", "U+FEB86"]],
  "🔓": ["U+1F513", "open lock", "1f513", ["", "U+E6D9"], ["", "U+E51C"], ["", "U+E145"], ["󾮇", "U+FEB87"]],
  "🔏": ["U+1F50F", "lock with ink pen", "1f50f", ["", "U+E6D9"], ["", "U+EB0C"], ["", "U+E144"], ["󾮐", "U+FEB90"]],
  "🔐": ["U+1F510", "closed lock with key", "1f510", ["", "U+E6D9"], ["", "U+EAFC"], ["", "U+E144"], ["󾮊", "U+FEB8A"]],
  "🔑": ["U+1F511", "key", "1f511", ["", "U+E6D9"], ["", "U+E519"], ["", "U+E03F"], ["󾮂", "U+FEB82"]],
  "🔔": ["U+1F514", "bell", "1f514", ["", "U+E713"], ["", "U+E512"], ["", "U+E325"], ["󾓲", "U+FE4F2"]],
  "☑": ["U+2611", "ballot box with check", "2611", ["-", "-"], ["", "U+EB02"], ["-", "-"], ["󾮋", "U+FEB8B"]],
  "🔘": ["U+1F518", "radio button", "1f518", ["-", "-"], ["", "U+EB04"], ["-", "-"], ["󾮌", "U+FEB8C"]],
  "🔖": ["U+1F516", "bookmark", "1f516", ["-", "-"], ["", "U+EB07"], ["-", "-"], ["󾮏", "U+FEB8F"]],
  "🔗": ["U+1F517", "link symbol", "1f517", ["-", "-"], ["", "U+E58A"], ["-", "-"], ["󾭋", "U+FEB4B"]],
  "🔙": ["U+1F519", "back with leftwards arrow above", "1f519", ["-", "-"], ["", "U+EB06"], ["", "U+E235"], ["󾮎", "U+FEB8E"]],
  "🔚": ["U+1F51A", "end with leftwards arrow above", "1f51a", ["", "U+E6B9"], ["-", "-"], ["-", "-"], ["󾀚", "U+FE01A"]],
  "🔛": ["U+1F51B", "on with exclamation mark with left right arrow above", "1f51b", ["", "U+E6B8"], ["-", "-"], ["-", "-"], ["󾀙", "U+FE019"]],
  "🔜": ["U+1F51C", "soon with rightwards arrow above", "1f51c", ["", "U+E6B7"], ["-", "-"], ["-", "-"], ["󾀘", "U+FE018"]],
  "🔝": ["U+1F51D", "top with upwards arrow above", "1f51d", ["-", "-"], ["-", "-"], ["", "U+E24C"], ["󾭂", "U+FEB42"]],
  "✅": ["U+2705", "white heavy check mark", "2705", ["-", "-"], ["", "U+E55E"], ["-", "-"], ["󾭊", "U+FEB4A"]],
  "✊": ["U+270A", "raised fist", "270a", ["", "U+E693"], ["", "U+EB83"], ["", "U+E010"], ["󾮓", "U+FEB93"]],
  "✋": ["U+270B", "raised hand", "270b", ["", "U+E695"], ["", "U+E5A7"], ["", "U+E012"], ["󾮕", "U+FEB95"]],
  "✌": ["U+270C", "victory hand", "270c", ["", "U+E694"], ["", "U+E5A6"], ["", "U+E011"], ["󾮔", "U+FEB94"]],
  "👊": ["U+1F44A", "fisted hand sign", "1f44a", ["", "U+E6FD"], ["", "U+E4F3"], ["", "U+E00D"], ["󾮖", "U+FEB96"]],
  "👍": ["U+1F44D", "thumbs up sign", "1f44d", ["", "U+E727"], ["", "U+E4F9"], ["", "U+E00E"], ["󾮗", "U+FEB97"]],
  "☝": ["U+261D", "white up pointing index", "261d", ["-", "-"], ["", "U+E4F6"], ["", "U+E00F"], ["󾮘", "U+FEB98"]],
  "👆": ["U+1F446", "white up pointing backhand index", "1f446", ["-", "-"], ["", "U+EA8D"], ["", "U+E22E"], ["󾮙", "U+FEB99"]],
  "👇": ["U+1F447", "white down pointing backhand index", "1f447", ["-", "-"], ["", "U+EA8E"], ["", "U+E22F"], ["󾮚", "U+FEB9A"]],
  "👈": ["U+1F448", "white left pointing backhand index", "1f448", ["-", "-"], ["", "U+E4FF"], ["", "U+E230"], ["󾮛", "U+FEB9B"]],
  "👉": ["U+1F449", "white right pointing backhand index", "1f449", ["-", "-"], ["", "U+E500"], ["", "U+E231"], ["󾮜", "U+FEB9C"]],
  "👋": ["U+1F44B", "waving hand sign", "1f44b", ["", "U+E695"], ["", "U+EAD6"], ["", "U+E41E"], ["󾮝", "U+FEB9D"]],
  "👏": ["U+1F44F", "clapping hands sign", "1f44f", ["-", "-"], ["", "U+EAD3"], ["", "U+E41F"], ["󾮞", "U+FEB9E"]],
  "👌": ["U+1F44C", "ok hand sign", "1f44c", ["", "U+E70B"], ["", "U+EAD4"], ["", "U+E420"], ["󾮟", "U+FEB9F"]],
  "👎": ["U+1F44E", "thumbs down sign", "1f44e", ["", "U+E700"], ["", "U+EAD5"], ["", "U+E421"], ["󾮠", "U+FEBA0"]],
  "👐": ["U+1F450", "open hands sign", "1f450", ["", "U+E695"], ["", "U+EAD6"], ["", "U+E422"], ["󾮡", "U+FEBA1"]],
  "🏇": ["U+1F3C7", "horse racer", "1f3c7", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🏉": ["U+1F3C9", "rugby football", "1f3c9", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🍼": ["U+1F37C", "babby bottle", "1f37c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🍐": ["U+1F350", "pear", "1f350", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌞": ["U+1F31e", "sun with face", "1f31e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌝": ["U+1F31D", "full moon with face", "1f31d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌜": ["U+1F31C", "last quarter moon with face", "1f31c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌚": ["U+1F31A", "new moon with face", "1f31a", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌘": ["U+1F318", "waning crescent moon symbol", "1f318", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌗": ["U+1F317", "last quarter moon symbol", "1f317", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌖": ["U+1F316", "waning gibbous moon symbol", "1f316", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌒": ["U+1F312", "waxing crescent moon symbol", "1f312", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌐": ["U+1F310", "globe with meridians", "1f310", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌎": ["U+1F30E", "earth globe americas", "1f30e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌍": ["U+1F30D", "earth globe europe-africa", "1f30d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🏤": ["U+1F3E4", "european post office", "1f3e4", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐏": ["U+1F40F", "ram", "1f40f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐐": ["U+1F410", "goat", "1f410", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐓": ["U+1F413", "rooster", "1f413", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐕": ["U+1F415", "dog", "1f415", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐖": ["U+1F416", "pig", "1f416", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🐪": ["U+1F42A", "dromedary camel", "1f42a", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "👥": ["U+1F465", "busts in silhouette", "1f465", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "💭": ["U+1F4AD", "thought balloon", "1f4ad", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "💶": ["U+1F4B6", "banknote with euro sign", "1f4b6", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "💷": ["U+1F4B7", "banknote with pound sign", "1f4b7", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "📬": ["U+1F4EC", "open mailbox with raised flag", "1f4ec", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "📭": ["U+1F4ED", "open mailbox with lowered flag", "1f4ed", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "📯": ["U+1F4EF", "postal horn", "1f4ef", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "📵": ["U+1F4F5", "no mobile phones", "1f4f5", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔀": ["U+1F500", "twisted rightwards arrows", "1f500", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔁": ["U+1F501", "clockwise rightwards and leftwards open circle arrows", "1f501", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔂": ["U+1F502", "clockwise rightwards and leftwards open circle arrows with circled one overlay", "1f502", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔃": ["U+1F503", "clockwise downwards and upwards open circle arrows", "1f503", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔄": ["U+1F504", "anticlockwise downwards and upwards open circle arrows", "1f504", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔅": ["U+1F505", "low brightness symbol", "1f505", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔆": ["U+1F506", "high brightness symbol", "1f506", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔇": ["U+1F507", "speaker with cancellation stroke", "1f507", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔉": ["U+1F509", "speaker with one sound wave", "1f509", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔕": ["U+1F515", "bell with cancellation stroke", "1f515", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔬": ["U+1F52C", "microscope", "1f52c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🔭": ["U+1F52D", "telescope", "1f52d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕜": ["U+1F55C", "clock face one-thirty", "1f55c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕝": ["U+1F55D", "clock face two-thirty", "1f55d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕞": ["U+1F55E", "clock face three-thirty", "1f55e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕟": ["U+1F55F", "clock face four-thirty", "1f55f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕠": ["U+1F560", "clock face five-thirty", "1f560", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕡": ["U+1F561", "clock face six-thirty", "1f561", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕢": ["U+1F562", "clock face seven-thirty", "1f562", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕣": ["U+1F563", "clock face eight-thirty", "1f563", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕤": ["U+1F564", "clock face nine-thirty", "1f564", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕥": ["U+1F565", "clock face ten-thirty", "1f565", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕦": ["U+1F566", "clock face eleven-thirty", "1f566", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕧": ["U+1F567", "clock face twelve-thirty", "1f567", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🕧": ["U+1F567", "grinning face", "1f600", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😇": ["U+1F607", "smiling face with halo", "1f607", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😈": ["U+1F608", "smiling face with horns", "1f608", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😐": ["U+1F610", "neutral face", "1f610", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😑": ["U+1F611", "expressionless face", "1f611", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😕": ["U+1F615", "confused face", "1f615", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😗": ["U+1F617", "kissing face", "1f617", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😗": ["U+1F617", "kissing face", "1f617", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😛": ["U+1F61B", "face with stuck-out tongue", "1f61b", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😟": ["U+1F61F", "worried face", "1f61f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😥": ["U+1F625", "disappointed but relieved face", "1f625", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😦": ["U+1F626", "frowning face with open mouth", "1f626", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😧": ["U+1F627", "anguished face", "1f627", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😬": ["U+1F62C", "grimacing face", "1f62c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😬": ["U+1F62C", "grimacing face", "1f62c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😮": ["U+1F62E", "face with open mouth", "1f62e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😯": ["U+1F62F", "hushed face", "1f62f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😴": ["U+1F634", "sleeping face", "1f634", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😶": ["U+1F636", "face without mouth", "1f636", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚁": ["U+1F681", "helicopter", "1f681", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚂": ["U+1F682", "steam locomotive", "1f682", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚆": ["U+1F686", "train", "1f686", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚈": ["U+1F688", "light rail", "1f688", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚎": ["U+1F68E", "trolleybus", "1f68e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚍": ["U+1F68D", "oncoming bus", "1f68d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚐": ["U+1F690", "minibus", "1f690", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚔": ["U+1F694", "oncoming police car", "1f694", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚖": ["U+1F696", "oncoming taxi", "1f696", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚘": ["U+1F698", "oncoming automobile", "1f698", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚛": ["U+1F69B", "articulated lorry", "1f69b", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚜": ["U+1F69C", "tractor", "1f69c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚝": ["U+1F69D", "monorail", "1f69d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚞": ["U+1F69E", "mountain railway", "1f69e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚟": ["U+1F69F", "suspension railway", "1f69f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚠": ["U+1F6A0", "mountain cableway", "1f6a0", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚡": ["U+1F6A1", "aerial tramway", "1f6a1", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚣": ["U+1F6A3", "rowboat", "1f6a3", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚦": ["U+1F6A6", "vertical traffic light", "1f6a6", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚮": ["U+1F6AE", "put litter in its place symbol", "1f6ae", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚯": ["U+1F6AF", "do not litter symbol", "1f6af", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚰": ["U+1F6B0", "potable water symbol", "1f6b0", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚱": ["U+1F6B1", "non-potable water symbol", "1f6b1", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚳": ["U+1F6B3", "no bicycles", "1f6b3", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚴": ["U+1F6B4", "bicyclist", "1f6b4", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚵": ["U+1F6B5", "mountain bicyclist", "1f6b5", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚷": ["U+1F6B7", "no pedestrians", "1f6b7", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚸": ["U+1F6B8", "children crossing", "1f6b8", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚿": ["U+1F6BF", "shower", "1f6bf", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🛁": ["U+1F6C1", "bathtub", "1f6c1", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🛂": ["U+1F6C2", "passport control", "1f6c2", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🛃": ["U+1F6C3", "customs", "1f6c3", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🛄": ["U+1F6C4", "baggage claim", "1f6c4", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🛅": ["U+1F6C5", "left luggage", "1f6c5", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😙": ["U+1F619", "kissing face with smiling eyes", "1f619", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🚊": ["U+1F68A", "tram", "1f68a", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]]
};


/**
 * Create map keys rexgep, keys sort by key's length desc.
 * 
 * @param {Object} map
 * @return {RegExp}
 */
function _createRegexp(map) {
  var keys = Object.keys(map);
  keys.sort(function (a, b) {
    return b.length - a.length;
  });
  return new RegExp('(' + keys.join('|') + ')', 'g');
}

var EMOJI_RE = null;
/**
 * Convert unified code to HTML.
 * 
 * @param {String} text
 * @return {String} html with emoji classname.
 */
function unifiedToHTML(text) {
  if (!EMOJI_RE) {
    EMOJI_RE = _createRegexp(EMOJI_MAP);
  }
  return text.replace(EMOJI_RE, function (_, m) {
    var em = EMOJI_MAP[m];
    return '<span class="emoji emoji' + em[2] + '" title="' + em[1] + '"></span>';
  });
}
jEmoji.unifiedToHTML = unifiedToHTML;

var EMOJI_DOCOMO_MAP = {};
var EMOJI_KDDI_MAP = {};
var EMOJI_SOFTBANK_MAP = {};
var EMOJI_GOOGLE_MAP = {};
var _maps = [EMOJI_DOCOMO_MAP, EMOJI_KDDI_MAP, EMOJI_SOFTBANK_MAP, EMOJI_GOOGLE_MAP];
for (var k in EMOJI_MAP) {
  var em = EMOJI_MAP[k];
  for (var i = 0; i < _maps.length; i++) {
    var index = i + 3;
    var code = em[index][0];
    var map = _maps[i];
    if (code === '-' || map[code]) { // use first code
      continue;
    }
    map[code] = k;
  }
}

var EMOJI_DOCOMO_RE = null;
/**
 * Convert DoCoMo code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function docomoToUnified(text) {
  if (!EMOJI_DOCOMO_RE) {
    EMOJI_DOCOMO_RE = _createRegexp(EMOJI_DOCOMO_MAP);
  }
  return text.replace(EMOJI_DOCOMO_RE, function (_, m) {
    return EMOJI_DOCOMO_MAP[m];
  });
}
jEmoji.docomoToUnified = docomoToUnified;

var EMOJI_KDDI_RE = null;
/**
 * Convert KDDI code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function kddiToUnified(text) {
  if (!EMOJI_KDDI_RE) {
    EMOJI_KDDI_RE = _createRegexp(EMOJI_KDDI_MAP);
  }
  return text.replace(EMOJI_KDDI_RE, function (_, m) {
    return EMOJI_KDDI_MAP[m];
  });
}
jEmoji.kddiToUnified = kddiToUnified;

var EMOJI_SOFTBANK_RE = null;
/**
 * Convert SoftBank code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function softbankToUnified(text) {
  if (!EMOJI_SOFTBANK_RE) {
    EMOJI_SOFTBANK_RE = _createRegexp(EMOJI_SOFTBANK_MAP);
  }
  return text.replace(EMOJI_SOFTBANK_RE, function (_, m) {
    return EMOJI_SOFTBANK_MAP[m];
  });
}
jEmoji.softbankToUnified = softbankToUnified;

var EMOJI_GOOGLE_RE = null;
/**
 * Convert Google code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function googleToUnified(text) {
  if (!EMOJI_GOOGLE_RE) {
    EMOJI_GOOGLE_RE = _createRegexp(EMOJI_GOOGLE_MAP);
  }
  return text.replace(EMOJI_GOOGLE_RE, function (_, m) {
    return EMOJI_GOOGLE_MAP[m];
  });
}
jEmoji.googleToUnified = googleToUnified;

return jEmoji;

});

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
    var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var	_ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ],
    monthNames: [
        "Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек",
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};


;
var groupLink, itemTemplate, processText, showAttachments;

$(document).on('click', 'a', function(e) {
  chrome.tabs.create({
    url: $(this).attr('href'),
    selected: true
  });
  return e.preventDefault();
});

processText = function(text) {
  text = text.trim().replace(/\n/g, '<br/>');
  text = linkify(text);
  text = text.replace(/\[([^\|]+)\|([^\]]+)\]/gi, '<a href="http://vk.com/$1">$2</a>');
  return jEmoji.unifiedToHTML(text);
};

groupLink = function(screen_name) {
  return "http://vk.com/" + screen_name;
};

showAttachments = function(attachments) {
  var attachment, links, photos, _i, _len;
  if (!attachments) {
    return null;
  }
  photos = $('<div />', {
    "class": 'photos'
  });
  links = $('<div />', {
    "class": 'links'
  });
  for (_i = 0, _len = attachments.length; _i < _len; _i++) {
    attachment = attachments[_i];
    if (attachment.type === "photo") {
      photos.append($('<img />', {
        src: attachment.photo.src,
        "class": 'photo'
      }));
    }
    if (attachment.type === "link") {
      links.append($('<a />', {
        href: attachment.link.url,
        text: attachment.link.url,
        "class": 'link'
      }));
    }
  }
  return $('<div />', {
    "class": 'attachments'
  }).append(photos).append(links);
};

itemTemplate = function(item, groups) {
  var group;
  group = groups[item.to_id];
  if (!group) {
    return null;
  }
  return $('<div />', {
    "class": 'item'
  }).append($('<div />', {
    "class": 'group-image'
  }).append($('<a />', {
    href: groupLink(group.screen_name)
  }).append($('<img />', {
    src: group.photo,
    title: group.name
  })))).append($('<div />', {
    "class": 'item-content'
  }).append($('<div />', {
    "class": 'group-name'
  }).append($('<a />', {
    href: groupLink(group.screen_name),
    text: group.name
  }))).append($('<div />', {
    "class": 'text'
  }).html(processText(item.text))).append(showAttachments(item.attachments)).append($('<span />', {
    "class": 'datestamp'
  }).html(dateFormat(item.date * 1000, 'longDate'))));
};

$(function() {
  chrome.storage.local.get({
    'vkaccess_token': {}
  }, function(items) {
    if (items.vkaccess_token.length === void 0) {
      $('#auth').show();
      return;
    }
    return chrome.runtime.sendMessage({
      action: "noification_list",
      token: items.vkaccess_token
    }, function(response) {
      var item, _i, _len, _ref, _results;
      if (response.content === 'EMPTY_GROUP_ITEMS') {
        return $('#notifications').append($('<p />', {
          text: 'Список отслеживаемых групп пуст. Добавьте группы в настройках расширения.'
        }));
      } else {
        _ref = response.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          _results.push($('#notifications').append(itemTemplate(item, response.groups)));
        }
        return _results;
      }
    });
  });
  $('#auth').click(function(e) {
    chrome.runtime.sendMessage({
      action: "vk_notification_auth"
    });
    return e.preventDefault();
  });
  $('#signout').click(function(e) {
    chrome.storage.local.remove('vkaccess_token');
    $('#list li').remove();
    return $('#auth').show();
  });
  $('#clean-up').click(function(e) {
    chrome.runtime.sendMessage({
      action: "clean_up"
    });
    return e.preventDefault();
  });
  $('#check-all').click(function(e) {
    chrome.runtime.sendMessage({
      action: "watch_post",
      read: 'ALL'
    });
    return e.preventDefault();
  });
  return $('#settings').click(function(e) {
    chrome.runtime.sendMessage({
      action: "open_options_page"
    });
    return e.preventDefault();
  });
});
