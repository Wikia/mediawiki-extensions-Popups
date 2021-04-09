!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t.default=r}])},"./node_modules/redux/dist/redux.min.js":function(e,t,n){(function(e,n){!function(t){"use strict";var r=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function a(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+n+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e,t){return function(){return t(e.apply(this,arguments))}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}t.createStore=function e(t,n,i){var a;if("function"==typeof n&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw Error("Expected the enhancer to be a function.");return i(e)(t,n)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var s=t,u=n,c=[],p=c,l=!1;function d(){p===c&&(p=c.slice())}function f(){if(l)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function w(e){if("function"!=typeof e)throw Error("Expected the listener to be a function.");if(l)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),p.push(e),function(){if(t){if(l)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=p.indexOf(e);p.splice(n,1)}}}function h(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw Error("Reducers may not dispatch actions.");try{l=!0,u=s(u,e)}finally{l=!1}for(var t=c=p,n=0;t.length>n;n++)(0,t[n])();return e}return h({type:o.INIT}),(a={dispatch:h,subscribe:w,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");s=e,h({type:o.REPLACE})}})[r]=function(){var e,t=w;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[r]=function(){return this},e},a},t.combineReducers=function(e){for(var t=Object.keys(e),n={},r=0;t.length>r;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var s,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,i={},o=0;u.length>o;o++){var c=u[o],p=e[c],l=(0,n[c])(p,t);if(void 0===l){var d=a(c,t);throw Error(d)}i[c]=l,r=r||l!==p}return r?i:e}},t.bindActionCreators=function(e,t){if("function"==typeof e)return s(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},i=0;n.length>i;i++){var o=n[i],a=e[o];"function"==typeof a&&(r[o]=s(a,t))}return r},t.applyMiddleware=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map((function(e){return e(i)}));return function(e){for(var t=1;arguments.length>t;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},n,{dispatch:r=c.apply(void 0,o)(n.dispatch)})}}},t.compose=c,t.__DO_NOT_USE__ActionTypes=o,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n("./node_modules/webpack/buildin/global.js"),n("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"./src/index.js":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"boot",(function(){return me})),n.d(r,"fetch",(function(){return ge})),n.d(r,"linkDwell",(function(){return ve})),n.d(r,"abandon",(function(){return be})),n.d(r,"linkClick",(function(){return Ee})),n.d(r,"previewDwell",(function(){return ye})),n.d(r,"previewShow",(function(){return Te})),n.d(r,"pageviewLogged",(function(){return Pe})),n.d(r,"showSettings",(function(){return xe})),n.d(r,"hideSettings",(function(){return ke})),n.d(r,"saveSettings",(function(){return Se})),n.d(r,"statsvLogged",(function(){return _e}));var i=n("./node_modules/redux/dist/redux.min.js"),o=n("./node_modules/redux-thunk/dist/redux-thunk.min.js"),a=n.n(o),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.devicePixelRatio;return e?e>1.5?2:e>1?1.5:1:1}(),u={BRACKETED_DEVICE_PIXEL_RATIO:s,THUMBNAIL_SIZE:320*Math.max(s,1.5),EXTRACT_LENGTH:525},c={TYPE_GENERIC:"generic",TYPE_PAGE:"page",TYPE_DISAMBIGUATION:"disambiguation",TYPE_REFERENCE:"reference"};function p(e,t,n,r,i,o,a,s){var u=function(e){if(null==e||0===e.length)return;return e}(i);return{title:e,url:t,languageCode:n,languageDirection:r,extract:u,type:function(e,t){if(void 0===t)return c.TYPE_GENERIC;switch(e){case c.TYPE_GENERIC:case c.TYPE_DISAMBIGUATION:case c.TYPE_PAGE:return e;default:return c.TYPE_PAGE}}(o,u),thumbnail:a,pageId:s}}function l(e,t){return p(e,t,"","",[],"")}function d(e,t,n){return function(e,t){return e.getNamespaceId()===t.get("wgNamespaceNumber")&&e.getMainText()===t.get("wgTitle")}(n,t)?n.getFragment()&&t.get("wgPopupsReferencePreviews")&&$(e).parent().hasClass("reference")?c.TYPE_REFERENCE:null:c.TYPE_PAGE}function f(e,t){var n=e;return void 0===e||0===n.length?[]:n=function(e,t){var n=[],r="<bi-".concat(Math.random(),">"),i="<snip-".concat(Math.random(),">");t=t.replace(/\s+/g," ").trim();var o=mw.util.escapeRegExp(t),a=new RegExp("(^|\\s)(".concat(o,")(|$)"),"i");return(e=(e=(e=e.replace(/\s+/," ")).replace(a,"$1".concat(i).concat(r,"$2").concat(i,"$3"))).split(i)).forEach((function(e){0===e.indexOf(r)?n.push($("<b>").text(e.substring(r.length))):n.push(document.createTextNode(e))})),n}(n,t)}function w(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function h(e){var t=$.extend({},e);return t.extract=f(e.extract,e.title),t}function m(e){return p(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.type,e.thumbnail,e.pageid)}function g(e,t,n){function r(n){var r=t.endpoint;return e({url:r+encodeURIComponent(n),headers:{Accept:'application/json; charset=utf-8; profile="'.concat("https://www.mediawiki.org/wiki/Specs/Summary/1.2.0",'"'),"Accept-Language":t.acceptLanguage}})}return{fetch:r,convertPageToModel:b,fetchPreviewForTitle:function(e){var i=e.getPrefixedDb(),o=r(i);return o.then((function(e){return(e=e||{}).title=e.title||i,e.extract=e.extract||"",b(e,t.THUMBNAIL_SIZE,n)})).catch((function(e,t,n){return $.Deferred().reject("http",{xhr:e,textStatus:t,exception:n})})).promise({abort:function(){o.abort()}})}}}function v(e,t,n){var r=e.source.split("/"),i=r[r.length-1],o=function(e){return new RegExp(/\.(jpg|jpeg|png|gif)$/i).test(e)}(t.source)||void 0,a=i.indexOf("px-");if(-1===a)return o&&t;var s,u,c=i.substr(a+3);return e.width>e.height?(s=n,u=Math.floor(n/e.width*e.height)):(s=Math.floor(n/e.height*e.width),u=n),s>=t.width&&-1===c.indexOf(".svg")?o&&t:(r[r.length-1]="".concat(s,"px-").concat(c),{source:r.join("/"),width:s,height:u})}function b(e,t,n){return p(e.title,new mw.Title(e.title).getUrl(),e.lang,e.dir,n(e),e.type,e.thumbnail?v(e.thumbnail,e.originalimage,t):void 0,e.pageid)}function E(e){var t=e.extract_html;return 0===t.length?[]:$.parseHTML(t)}function y(e){return f(e.extract,e.title)}function T(e){var t=$.extend({},u,{acceptLanguage:e.get("wgPageContentLanguage")}),n=$.extend({},t,{endpoint:e.get("wgPopupsRestGatewayEndpoint")});switch(e.get("wgPopupsGateway")){case"mwApiPlain":return function(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:mw.config.get("wgPopupsTextExtractsIntroOnly",!0),exchars:t.EXTRACT_LENGTH,explaintext:!0,exsectionformat:"plain",piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:300,maxage:300,uselang:"content"},{headers:{"X-Analytics":"preview=1","Accept-Language":t.acceptLanguage}})}return{fetch:n,extractPageFromResponse:w,convertPageToModel:m,fetchPreviewForTitle:function(e){var t=n(e.getPrefixedDb());return t.then((function(e){return m(h(w(e)))})).promise({abort:function(){t.abort()}})},formatPlainTextExtract:h}}(new mw.Api,t);case"restbasePlain":return g($.ajax,n,y);case"restbaseHTML":return g($.ajax,n,E);default:throw new Error("Unknown gateway")}}function P(){function e(e){var t=["book","journal","news","note","web"],n=null;return e.find("cite[class]").each((function(e,r){for(var i=r.className.split(/\s+/),o=i.length;o--;)if(-1!==t.indexOf(i[o]))return n=i[o],!1})),n}return{fetchPreviewForTitle:function(t,n){var r=t.getFragment().replace(/ /g,"_"),i=function(e){var t="#".concat($.escapeSelector(e));return $("".concat(t," .mw-reference-text, ").concat(t," .reference-text"))}(r);if(!i.length||!i.text().trim()&&!i.children().length)return $.Deferred().reject("Footnote not found or empty",{textStatus:"abort",xhr:{readyState:0}}).promise({abort:function(){}});var o={url:"#".concat(r),extract:i.html(),type:c.TYPE_REFERENCE,referenceType:e(i),sourceElementId:n.parentNode.id};return $.Deferred().resolve(o).promise({abort:function(){}})}}}function x(e){return mw.html.escape(e)}var k={};function S(e){if(!k[e]){var t=document.createElement("div");t.innerHTML=e,k[e]=t.firstElementChild}return k[e].cloneNode(!0)}function _(e){var t=x(e.heading),n=x(e.saveLabel),r=x(e.closeLabel),i=x(e.helpText),o=x(e.okLabel),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.id,n=e.name,r=e.description,i=e.isChecked;return{id:x(t),name:x(n),description:r?x(r):"",isChecked:i}}))}(e.choices);return $($.parseHTML("\n\t\t<section id='mwe-popups-settings'>\n\t\t\t<header>\n\t\t\t\t<div>\n\t\t\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-close close'>".concat(r,"</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>").concat(t,"</h1>\n\t\t\t\t<div>\n\t\t\t\t\t<button class='save mw-ui-button mw-ui-progressive'>").concat(n,"</button>\n\t\t\t\t\t<button class='okay mw-ui-button mw-ui-progressive' style='display:none;'>").concat(o,"</button>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<main id='mwe-popups-settings-form'>\n\t\t\t\t<form>\n\t\t\t\t\t").concat(a.map((function(e){var t=e.id,n=e.name,r=e.description,i=e.isChecked;return'\n\t\t\t\t\t<p class="mw-ui-checkbox">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t'.concat(i?"checked":"","\n\t\t\t\t\t\t\tvalue='").concat(t,"'\n\t\t\t\t\t\t\ttype='checkbox'\n\t\t\t\t\t\t\tid='mwe-popups-settings-").concat(t,"'>\n\t\t\t\t\t\t<label for='mwe-popups-settings-").concat(t,"'>\n\t\t\t\t\t\t\t<span>").concat(n,"</span>\n\t\t\t\t\t\t\t").concat(r,"\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>")})).join(""),"\n\t\t\t\t</form>\n\t\t\t</main>\n\t\t\t<div class='mwe-popups-settings-help' style='display:none;'>\n\t\t\t\t<div class=\"mw-ui-icon mw-ui-icon-element mw-ui-icon-footer\"></div>\n\t\t\t\t<p>").concat(i,"</p>\n\t\t\t</div>\n\t\t</section>\n\t").trim()))}function R(e){var t,n;return function(r){return t||(t=function(e){var t=[{id:c.TYPE_PAGE,name:mw.msg("popups-settings-option-page"),description:mw.msg("popups-settings-option-page-description")},{id:c.TYPE_REFERENCE,name:mw.msg("popups-settings-option-reference"),description:mw.msg("popups-settings-option-reference-description")}];return e||t.splice(1,1),_({heading:mw.msg("popups-settings-title"),closeLabel:mw.msg("popups-settings-cancel"),saveLabel:mw.msg("popups-settings-save"),helpText:mw.msg("popups-settings-help"),okLabel:mw.msg("popups-settings-help-ok"),choices:t})}(e),n=$("<div>").addClass("mwe-popups-overlay"),t.find(".save").on("click",(function(){var e={};t.find("input").each((function(t,n){e[n.value]=$(n).is(":checked")})),r.saveSettings(e)})),t.find(".close, .okay").on("click",r.hideSettings)),{appendTo:function(e){n.appendTo(e),t.appendTo(n)},show:function(){n.show()},hide:function(){n.hide()},toggleHelp:function(e){!function(e,t){var n=$("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}(0,e)},setEnabled:function(e){Object.keys(e).forEach((function(n){t.find("#mwe-popups-settings-"+n).prop("checked",e[n])}))}}}}function A(e,t){var n;e.subscribe((function(){var r=e.getState();n!==r&&(t(n,r),n=r)}))}function C(e,t){if(function(e){return e.hash&&e.host===location.host&&e.pathname===location.pathname&&e.search===location.search}(e))try{return mw.Title.newFromText(t.get("wgPageName")+decodeURIComponent(e.hash))}catch(e){return null}return function(e,t){if(!e)return null;var n=mw.Title.newFromText(e);return n&&t.indexOf(n.namespace)>=0?n:null}(function(e,t){var n;try{n=new mw.Uri(e)}catch(e){return}if(n.host===location.hostname){var r,i=Object.keys(n.query).length;if(i)1===i&&"title"in n.query&&(r=n.query.title);else{var o=mw.util.escapeRegExp(t.get("wgArticlePath")).replace("\\$1","([^?#]+)"),a=new RegExp(o).exec(n.path);try{r=a&&decodeURIComponent(a[1])}catch(e){}}return r?"".concat(r).concat(n.fragment?"#".concat(n.fragment):""):void 0}}(e.href,t),t.get("wgContentNamespaces"))}function O(e){var t=$.Deferred();return setTimeout((function(){return t.resolve()}),e),t.promise()}var I=n("./src/ui/pointer-mask.svg"),N=n.n(I),j={h:250,w:203},D={h:200,w:320};function L(e,t){var n=u.BRACKETED_DEVICE_PIXEL_RATIO;if(!e)return null;var r,i,o,a,s=e.width/n,c=e.height/n,p=e.height>e.width||s<D.w;if(p&&c<j.h&&e.height<j.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1)return null;p?(r=s>j.w?(s-j.w)/-2:j.w-s,i=c>j.h?(c-j.h)/-2:0,o=j.w,a=j.h,s<o&&(r=0,o=s)):(r=0,i=c>D.h?(c-D.h)/-2:0,o=D.w,a=c>D.h?D.h:c);var l,d,f=p&&s<j.w;return{el:t?(l=e.source,(d=document.createElement("img")).className="mwe-popups-thumbnail",d.src=l,d):function(e,t,n,r,i,o,a,s){var u="http://www.w3.org/2000/svg",c=document.createElementNS(u,"polyline"),p=-1===e.indexOf("not-tall")?[0,0,0,s]:[0,s-1,a,s-1];c.setAttribute("stroke","rgba(0,0,0,0.1)"),c.setAttribute("points",p.join(" ")),c.setAttribute("stroke-width",1);var l=$(document.createElementNS(u,"image"));l[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),l.addClass(e).attr({x:n,y:r,width:i,height:o});var d=$(document.createElementNS(u,"svg")).attr({xmlns:u,width:a,height:s}).append(l);return d.append(c),d}(p?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,r,i,s,c,o,a),isTall:p,isNarrow:f,offset:f?j.w-s:0,width:s,height:c}}function Y(e,t){var n=S('\n\t<div class="mwe-popups" aria-hidden></div>\n');return n.className="mwe-popups mwe-popups-type-".concat(e),t.className="mwe-popups-container",n.appendChild(t),$(n)}function H(e,t,n,r){var i=Y(e.type,S('\n\t<div class="mwe-popups-container">\n\t\t<div class="mw-ui-icon mw-ui-icon-element"></div>\n\t\t<strong class="mwe-popups-title"></strong>\n\t\t<a class="mwe-popups-extract">\n\t\t\t<span class="mwe-popups-message"></span>\n\t\t</a>\n\t\t<footer>\n\t\t\t<a class="mwe-popups-read-link"></a>\n\t\t</footer>\n\t</div>\n'));return i.find(".mw-ui-icon ").addClass("mw-ui-icon-preview-".concat(e.type)),i.find(".mwe-popups-extract").attr("href",e.url),i.find(".mwe-popups-message").html(x(n)),i.find(".mwe-popups-read-link").html(x(r)).attr("href",e.url),t?i.find(".mwe-popups-title").html(x(e.title)):i.find(".mwe-popups-title").remove(),i}var G="event.ReferencePreviewsPopups",F=!1;function M(e){var t=e.referenceType||"generic",n=mw.message("popups-refpreview-".concat(t));n.exists()||(n=mw.message("popups-refpreview-reference"));var r=Y(e.type,S('\n<div class="mwe-popups-container">\n    <div class="mwe-popups-extract">\n        <div class="mwe-popups-scroll">\n            <strong class="mwe-popups-title">\n                <span class="mw-ui-icon mw-ui-icon-element"></span>\n                <span class="mwe-popups-title-placeholder"></span>\n            </strong>\n            <div class="mw-parser-output"></div>\n        </div>\n        <div class="mwe-popups-fade"></div>\n    </div>\n\t<footer>\n\t\t<div class="mwe-popups-settings"></div>\n\t</footer>\n</div>'));return r.find(".mwe-popups-title-placeholder").replaceWith(x(n.text())),r.find(".mwe-popups-title .mw-ui-icon").addClass("mw-ui-icon-reference-".concat(t)),r.find(".mw-parser-output").html(e.extract),r.find('.mwe-popups-extract a[href][class~="external"]:not([target])').each((function(e,t){t.target="_blank",t.rel="".concat(t.rel?"".concat(t.rel," "):"","noopener")})),r.find(".mw-collapsible").replaceWith($("<div>").addClass("mwe-collapsible-placeholder").append($("<span>").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-infoFilled"),$("<div>").addClass("mwe-collapsible-placeholder-label").text(mw.msg("popups-refpreview-collapsible-placeholder")))),r.find("table.sortable").removeClass("sortable jquery-tablesorter").find(".headerSort").removeClass("headerSort").attr({tabindex:null,title:null}),mw.config.get("wgPopupsReferencePreviewsBetaFeature")?r.find(".mwe-popups-container").addClass("footer-empty"):r.find(".mwe-popups-settings").append($("<a>").addClass("mwe-popups-settings-icon").append($("<span>").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-small mw-ui-icon-settings"))),F&&r.find(".mw-parser-output").on("click","a",(function(){mw.track(G,{action:"clickedReferencePreviewsContentLink"})})),r.find(".mwe-popups-scroll").on("scroll",(function(e){var t=e.target,n=t.scrollTop>=t.scrollHeight-t.clientHeight-1;if(F&&(t.isOpenRecorded||(mw.track(G,{action:"poppedOpen",scrollbarsPresent:t.scrollHeight>t.clientHeight}),t.isOpenRecorded=!0),t.scrollTop>0&&!t.isScrollRecorded&&(mw.track(G,{action:"scrolled"}),t.isScrollRecorded=!0)),n||!t.isScrolling){var r=$(t).parent(),i=t.scrollWidth>t.clientWidth,o=t.offsetHeight-t.clientHeight,a=t.scrollHeight>t.clientHeight,s=t.offsetWidth-t.clientWidth;r.find(".mwe-popups-fade").css({bottom:i?"".concat(o,"px"):0,right:a?"".concat(s,"px"):0}),t.isScrolling=!n,r.toggleClass("mwe-popups-fade-out",t.isScrolling)}})),r}$((function(){mw.config.get("wgPopupsReferencePreviews")&&navigator.sendBeacon&&mw.config.get("wgIsArticle")&&!F&&(F=!0,mw.track(G,{action:"pageview"}))}));function U(e,t,n,r){var i=Y(e.type,S('\n<div>\n    <a class="mwe-popups-discreet"></a>\n    <a class="mwe-popups-extract"></a>\n    <footer>\n        <a class="mwe-popups-settings-icon">\n            <span class="mw-ui-icon mw-ui-icon-element mw-ui-icon-small mw-ui-icon-settings"></span>\n        </a>\n    </footer>\n</div>\n\t'));i.find(".mwe-popups-discreet, .mwe-popups-extract").attr("href",e.url),i.find(".mwe-popups-extract").attr("dir",e.languageDirection).attr("lang",e.languageCode),i.find(".mwe-popups-settings-icon").attr("title",r),t?i.find(".mwe-popups-discreet").append(t.el):i.find(".mwe-popups-discreet").remove();var o=i.find(".mwe-popups-extract");if(e.extract){o.append(e.extract);var a=function(e){return e&&e.isNarrow?"".concat(215+e.offset,"px"):""}(t);n||(o.css("width",a),i.find("footer").css("width",a))}return i}function X(){var e;B()||(e=document.body,$("<div>").attr("id","mwe-popups-svg").html(N.a).appendTo(e))}function W(e){var t=function(e){switch(e.type){case c.TYPE_PAGE:return function(e){var t=L(e.thumbnail,B()),n=null!==t,r=B(),i=mw.msg("popups-settings-icon-gear-title");return{el:U(e,t,r,i),hasThumbnail:n,thumbnail:t,isTall:n&&t.isTall}}(e);case c.TYPE_DISAMBIGUATION:return function(e){var t=mw.msg("popups-preview-disambiguation"),n=mw.msg("popups-preview-disambiguation-link");return{el:H(e,!0,t,n),hasThumbnail:!1,isTall:!1}}(e);case c.TYPE_REFERENCE:return function(e){return{el:M(e),hasThumbnail:!1,isTall:!1}}(e);default:return function(e){var t=mw.msg("popups-preview-no-preview"),n=mw.msg("popups-preview-footer-read");return{el:H(e,!1,t,n),hasThumbnail:!1,isTall:!1}}(e)}}(e);return{show:function(e,n,r){return function(e,t,n,r,i,o,a){var s=function(e,t,n,r){var i,o=!1,a=!1,s=t.pageY?V(t.pageY-t.scrollTop,t.clientRects,!1)+t.scrollTop+n:t.offset.top+t.height+8,u=t.clientY?t.clientY:s;i=t.pageX?t.width>28?t.pageX:t.offset.left+t.width/2:t.offset.left;i>t.windowWidth/2&&(i+=t.pageX?0:t.width,i-=e?450:320,o=!0);t.pageX&&(i+=o?18:-18);u>t.windowHeight/2&&(a=!0,s=t.offset.top,t.pageY&&(s=V(t.pageY-t.scrollTop,t.clientRects,!0)+t.scrollTop),s-=n);return{offset:{top:s,left:i},flippedX:"rtl"===r?!o:o,flippedY:a,dir:r}}(e.isTall,t,8,a);e.el.appendTo(o),function(e,t,n,r,i,o){var a=e.el,s=e.isTall,u=e.hasThumbnail,c=e.thumbnail,p=t.flippedY;!p&&!s&&u&&c.height<r&&!B()&&a.find(".mwe-popups-extract").css("margin-top",c.height-i);a.addClass(n.join(" ")),a.css({left:"".concat(t.offset.left,"px"),top:p?"auto":t.offset.top,bottom:p?"".concat(o-t.offset.top,"px"):"auto"}),u&&!B()&&function(e,t){var n=e.el,r=e.isTall,i=e.thumbnail,o=t.flippedY,a=t.flippedX,s=t.dir,u=function(e,t,n){if(!e&&!t)return n?"mwe-popups-mask-flip":"mwe-popups-mask";if(e&&n)return t?"mwe-popups-landscape-mask-flip":"mwe-popups-landscape-mask";return}(r,o,a);if(u){var c={scaleX:1,translateX:r?Math.min(i.width-j.w,0):0};"rtl"===s&&(c.scaleX=-1,c.translateX=r?j.w:D.w),document.getElementById(u).setAttribute("transform","matrix(".concat(c.scaleX," 0 0 1 ").concat(c.translateX," 0)")),n.find("image")[0].setAttribute("clip-path","url(#".concat(u,")"))}}(e,t)}(e,s,function(e,t){var n=[];t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up");t.flippedY&&t.flippedX?n.push("flipped-x-y"):t.flippedY?n.push("flipped-y"):t.flippedX&&n.push("flipped-x");n.push(function(e,t){if((!e.hasThumbnail||e.isTall&&!t.flippedX)&&!t.flippedY)return!1;if(e.hasThumbnail&&(!e.isTall&&!t.flippedY||e.isTall&&t.flippedX))return!0;return!1}(e,t)?"mwe-popups-image-pointer":"mwe-popups-no-image-pointer"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall");return n}(e,s),D.h,8,t.windowHeight),e.el.show(),e.el.hasClass("mwe-popups-type-reference")&&e.el.find(".mwe-popups-scroll").first().trigger("scroll");return O(200).then((function(){!function(e,t){e.el.on("mouseenter",t.previewDwell).on("mouseleave",t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click((function(e){e.stopPropagation(),t.showSettings(e)}))}(e,r),r.previewShow(i)}))}(t,e,$(e.target),n,r,document.body,document.documentElement.getAttribute("dir"))},hide:function(){return function(e){var t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",n="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up";return e.el.removeClass(t).addClass(n),O(150).then((function(){e.el.remove()}))}(t)}}}function B(){return window.CSS&&"function"==typeof CSS.supports&&CSS.supports("clip-path","polygon(1px 1px)")}function V(e,t,n){var r,i=null;return Array.prototype.slice.call(t).forEach((function(t){var o=Math.abs(e-t.top+e-t.bottom);(null===i||i>o)&&(i=o,r=n?Math.floor(t.top):Math.ceil(t.bottom))})),r}function q(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}function K(e,t,n,r){var i=q(t,n);e&&q(e,n)!==i&&r(i)}var z={footerLink:function(e){var t;return function(n,r){void 0===t&&(t=function(){var e=$("<li>").append($("<a>").attr("href","#").text(mw.message("popups-settings-enable").text()));e.hide();var t=$("#footer-places, #f-list");return 0===t.length&&(t=$("#footer li").parent()),t.append(e),e}()).on("click",(function(t){t.preventDefault(),e.showSettings()})),r.settings.shouldShowFooterLink?t.show():t.hide()}},linkTitle:function(){var e;return function(t,n){var r,i=t&&t.preview.activeLink;i!==n.preview.activeLink&&((r=i)&&e&&($(r).attr("title",e),e=void 0),n.preview.enabled[n.preview.previewType]&&function(t){if(t&&!e){var n=$(t);e=n.attr("title"),n.attr("title","")}}(n.preview.activeLink))}},pageviews:function(e,t){return function(n,r){var i,o;r.pageviews&&r.pageviews.pageview&&r.pageviews.page&&(i=r.pageviews.page,o=r.pageviews.pageview,t("event.VirtualPageView",{source_page_id:i.id,source_namespace:i.namespaceId,source_title:mw.Title.newFromText(i.title).getPrefixedDb(),source_url:i.url,page_id:o.page_id,page_namespace:o.page_namespace,page_title:mw.Title.newFromText(o.page_title).getPrefixedDb()}),e.pageviewLogged())}},render:function(e){var t;return function(n,r){r.preview.shouldShow&&!t?(t=W(r.preview.fetchResponse)).show(r.preview.measures,e,r.preview.activeToken):!r.preview.shouldShow&&t&&(t.hide(),t=void 0)}},settings:function(e,t){var n;return function(r,i){r&&(!1===r.settings.shouldShow&&i.settings.shouldShow?(n||(n=t(e)).appendTo(document.body),n.setEnabled(i.preview.enabled),n.show()):r.settings.shouldShow&&!1===i.settings.shouldShow&&n.hide(),r.settings.showHelp!==i.settings.showHelp&&n.toggleHelp(i.settings.showHelp))}},statsv:function(e,t){return function(n,r){var i=r.statsv;i.action&&(t(i.action,i.data),e.statsvLogged())}},syncUserSettings:function(e){return function(t,n){K(t,n,"eventLogging.previewCount",e.storePreviewCount),K(t,n,"preview.enabled."+c.TYPE_PAGE,e.storePagePreviewsEnabled),K(t,n,"preview.enabled."+c.TYPE_REFERENCE,e.storeReferencePreviewsEnabled)}}},Z="BOOT",J="LINK_DWELL",Q="ABANDON_START",ee="ABANDON_END",te="LINK_CLICK",ne="FETCH_START",re="FETCH_END",ie="FETCH_COMPLETE",oe="FETCH_FAILED",ae="FETCH_ABORTED",se="PAGEVIEW_LOGGED",ue="PREVIEW_DWELL",ce="PREVIEW_SHOW",pe="PREVIEW_SEEN",le="SETTINGS_SHOW",de="SETTINGS_HIDE",fe="SETTINGS_CHANGE",we="STATSV_LOGGED";function he(e){return e.timestamp=mw.now(),e}function me(e,t,n,r,i){var o=r.get("wgUserEditCount");return{type:Z,initiallyEnabled:e,isNavPopupsEnabled:r.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:t.getPageviewToken(),page:{url:i,title:r.get("wgTitle"),namespaceId:r.get("wgNamespaceNumber"),id:r.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:o}}}function ge(e,t,n,r,i){var o=t.getPrefixedDb(),a=t.namespace;return function(s){var u=e.fetchPreviewForTitle(t,n);s(he({type:ne,el:n,title:o,namespaceId:a,promise:u}));var p=u.then((function(e){return s(he({type:re,el:n})),e})).catch((function(e,t){var i=new Error(e),o=t&&t.textStatus&&"abort"===t.textStatus?ae:oe;throw i.data=t,s({type:o,el:n,token:r}),i}));return $.when(p,O(function(e){switch(e){case c.TYPE_PAGE:return 350;case c.TYPE_REFERENCE:return 150;default:return 0}}(i))).then((function(e){s({type:ie,el:n,result:e,token:r})})).catch((function(e){var i=e.data,a=!0;i&&i.xhr&&0===i.xhr.readyState&&(a=!("error"===i.textStatus&&""===i.exception||"abort"===i.textStatus));a&&s({type:ie,el:n,result:l(o,t.getUrl()),token:r})}))}}function ve(e,t,n,r,i,o){var a=i(),s=e.getPrefixedDb(),u=e.namespace;return function(i,c){var p=O(150),l=he({type:J,el:t,previewType:o,measures:n,token:a,title:s,namespaceId:u,promise:p});function d(){return c().preview.activeToken===a}return i(l),d()?p.then((function(){if(c().preview.enabled[o]&&d())return i(ge(r,e,t,a,o))})):$.Deferred().resolve().promise()}}function be(){return function(e,t){var n=t().preview,r=n.activeToken,i=n.promise;return r?(e(he({type:Q,token:r})),"abort"in i&&i.abort(),O(300).then((function(){e({type:ee,token:r})}))):$.Deferred().resolve().promise()}}function Ee(e){return he({type:te,el:e})}function ye(){return{type:ue}}function Te(e){return function(t,n){return t(he({type:ce,token:e})),O(1e3).then((function(){var r=n().preview,i=r&&r.fetchResponse,o=r&&r.activeToken,a=i&&[c.TYPE_PAGE,c.TYPE_DISAMBIGUATION].indexOf(i.type)>-1;o&&o===e&&i&&a&&t({type:pe,title:i.title,pageId:i.pageId,namespace:0})}))}}function Pe(){return{type:se}}function xe(){return{type:le}}function ke(){return{type:de}}function Se(e){return function(t,n){t({type:fe,oldValue:n().preview.enabled,newValue:e})}}function _e(){return{type:we}}function Re(e,t){var n,r=Object.prototype.hasOwnProperty,i={};for(var o in e)r.call(e,o)&&!r.call(t,o)&&(i[o]=e[o]);for(var a in t)if(r.call(t,a))if((n=t[a])&&n.constructor===Object){var s=e[a]?Re({},e[a]):{};i[a]=Re(s,t[a])}else i[a]=t[a];return i}var Ae={pageviews:function(e,t){switch(void 0===e&&(e={pageview:void 0}),t.type){case Z:return Re(e,{page:t.page});case se:return Re(e,{pageview:void 0});case pe:return Re(e,{pageview:{page_title:t.title,page_id:t.pageId,page_namespace:t.namespace}});default:return e}},preview:function(e,t){switch(void 0===e&&(e={enabled:{},activeLink:void 0,previewType:void 0,measures:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1,wasClicked:!1}),t.type){case Z:return Re(e,{enabled:t.initiallyEnabled});case fe:return Re(e,{enabled:t.newValue});case J:return t.el!==e.activeLink?Re(e,{activeLink:t.el,previewType:t.previewType,measures:t.measures,activeToken:t.token,shouldShow:!1,isUserDwelling:!0,promise:t.promise}):Re(e,{isUserDwelling:!0});case ae:case ee:return t.token!==e.activeToken||e.isUserDwelling?e:Re(e,{activeLink:void 0,previewType:void 0,activeToken:void 0,measures:void 0,fetchResponse:void 0,shouldShow:!1});case ue:return Re(e,{isUserDwelling:!0});case Q:return Re(e,{isUserDwelling:!1,wasClicked:!1});case ne:return Re(e,{fetchResponse:void 0,promise:t.promise});case ie:if(t.token===e.activeToken)return Re(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}},settings:function(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case le:return Re(e,{shouldShow:!0,showHelp:!1});case de:return Re(e,{shouldShow:!1,showHelp:!1});case fe:var n=Object.keys(t.newValue),r=n.every((function(e){return t.oldValue[e]===t.newValue[e]})),i=n.some((function(e){return t.oldValue[e]&&!t.newValue[e]})),o=n.some((function(e){return!1===t.newValue[e]}));return Re(e,r?{shouldShow:!1}:{shouldShow:i,showHelp:i,shouldShowFooterLink:o});case Z:var a=Object.keys(t.initiallyEnabled).some((function(e){return!1===t.initiallyEnabled[e]}));return Re(e,{shouldShowFooterLink:t.user.isAnon&&a});default:return e}},statsv:function(e,t){switch(e=e||{},t.type){case ne:return Re(e,{fetchStartedAt:t.timestamp});case re:return Re(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case oe:return Re(e,{action:"counter.PagePreviewsApiFailure",data:1});case J:return Re(e,{linkDwellStartedAt:t.timestamp});case ce:return Re(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case we:return Re(e,{action:null,data:null});default:return e}}};function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Oe=[".extiw",".image",".new",".internal",".external",".mw-cite-backlink a",".oo-ui-buttonedElement-button",".ve-ce-surface a",".cancelLink a"];!function(){var e,t,n;t=mw.config,n=parseInt(t.get("wgPopupsFlags"),10),t.set("wgPopupsConflictsWithNavPopupGadget",!!(1&n)),t.set("wgPopupsConflictsWithRefTooltipsGadget",!!(2&n)),t.set("wgPopupsReferencePreviews",!!(4&n)),t.set("wgPopupsReferencePreviewsBetaFeature",!!(8&n));var o,s,u=i.compose,p=mw.user.generateRandomSessionId,l=T(mw.config),f=P(),w=(s=mw.storage,{isPagePreviewsEnabled:function(){return"0"!==s.get("mwe-popups-enabled")},storePagePreviewsEnabled:function(e){e?s.remove("mwe-popups-enabled"):s.set("mwe-popups-enabled","0")},isReferencePreviewsEnabled:function(){return"0"!==s.get("mwe-popups-referencePreviews-enabled")},storeReferencePreviewsEnabled:function(e){e?s.remove("mwe-popups-referencePreviews-enabled"):s.set("mwe-popups-referencePreviews-enabled","0"),mw.track("event.ReferencePreviewsPopups",{action:e?"anonymousEnabled":"anonymousDisabled"})}}),h=function(e,t,n){return n.get("wgPopupsReferencePreviews")?n.get("wgPopupsConflictsWithRefTooltipsGadget")||"minerva"===n.get("skin")?null:e.isAnon()?t.isReferencePreviewsEnabled():!!n.get("wgPopupsReferencePreviews")||("1"===mw.user.options.get("popups-reference-previews")||null):null}(mw.user,w,mw.config),m=R(null!==h),g=(o=mw.experiments,{weightedBoolean:function(e,t,n){return"true"===o.getBucket({enabled:!0,name:e,buckets:{true:t,false:1-t}},n)}}),v=function(e,t,n){return function(e,t,n){var r=t.get("wgPopupsStatsvSamplingRate",0);return n.weightedBoolean("ext.Popups.statsv",r,e.sessionId())}(e,t,n)?mw.track:function(){}}(mw.user,mw.config,g),b=function(e){return e.get("wgPopupsVirtualPageViews")?mw.track:function(){}}(mw.config),E=(Ce(e={},c.TYPE_PAGE,function(e,t,n){return n.get("wgPopupsConflictsWithNavPopupGadget")?null:e.isAnon()?t.isPagePreviewsEnabled():"1"===mw.user.options.get("popups")||null}(mw.user,w,mw.config)),Ce(e,c.TYPE_REFERENCE,h),e);mw.config.get("debug")&&(u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u);var y=i.createStore(i.combineReducers(Ae),u(i.applyMiddleware(a.a))),x=i.bindActionCreators(r,y.dispatch),k=function(e,t){var n,r=function(){};if(e.isAnon())r=function(e){e.preventDefault(),t.showSettings()};else{n=mw.Title.newFromText("Special:Preferences#mw-prefsection-rendering").getUrl()}return{settingsUrl:n,showSettings:r,previewDwell:t.previewDwell,previewAbandon:t.abandon,previewShow:t.previewShow,click:t.linkClick}}(mw.user,x);!function(e,t,n,r,i,o,a){A(e,z.footerLink(t)),A(e,z.linkTitle()),A(e,z.render(i)),A(e,z.statsv(t,o)),A(e,z.syncUserSettings(n)),A(e,z.settings(t,r)),A(e,z.pageviews(t,a))}(y,x,w,m,k,v,b),x.boot(E,mw.user,w,mw.config,window.location.href),mw.popups=function(e){return{isEnabled:function(){return e.getState().preview.enabled[c.TYPE_PAGE]}}}(y);var S=[];if(null!==E[c.TYPE_PAGE]){var _=Oe.join(", ");S.push("#mw-content-text a[href][title]:not(".concat(_,")"))}if(null!==E[c.TYPE_REFERENCE]&&S.push('#mw-content-text .reference a[ href*="#" ]'),S.length){var O=S.join(", ");X(),$(document).on("mouseover keyup",O,(function(e){var t=C(this,mw.config);if(t){var n,r=d(this,mw.config,t);switch(r){case c.TYPE_PAGE:n=l;break;case c.TYPE_REFERENCE:n=f;break;default:return}var i=$(this),o=$(window),a={pageX:e.pageX,pageY:e.pageY,clientY:e.clientY,width:i.width(),height:i.height(),offset:i.offset(),clientRects:this.getClientRects(),windowWidth:o.width(),windowHeight:o.height(),scrollTop:o.scrollTop()};x.linkDwell(t,this,a,n,p,r)}})).on("mouseout blur",O,(function(){C(this,mw.config)&&x.abandon()})).on("click",O,(function(){var e=C(this,mw.config);e&&c.TYPE_PAGE===d(this,mw.config,e)&&x.linkClick(this)}))}else mw.log.warn("ext.popups was loaded but everything is disabled")}(),window.Redux=i,window.ReduxThunk=o},"./src/ui/pointer-mask.svg":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><clipPath id="mwe-popups-mask"><path d="M0 8h10l8-8 8 8h974v992H0z"></path></clipPath><clipPath id="mwe-popups-mask-flip"><path d="M0 8h294l8-8 8 8h690v992H0z"></path></clipPath><clipPath id="mwe-popups-landscape-mask"><path d="M0 8h174l8-8 8 8h810v992H0z"></path></clipPath><clipPath id="mwe-popups-landscape-mask-flip"><path d="M0 0h1000v242H190l-8 8-8-8H0z"></path></clipPath></defs></svg>'}});
//# sourceMappingURL=index.js.map.json