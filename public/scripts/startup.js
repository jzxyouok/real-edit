var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var r;for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}}function eachReverse(e,t){if(e){var r;for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var r;for(r in e)if(hasProp(e,r)&&t(e[r],r))break}function mixin(e,t,r,i){return t&&eachProp(t,function(t,n){(r||!hasProp(e,n))&&(i&&"string"!=typeof t?(e[n]||(e[n]={}),mixin(e[n],t,r,i)):e[n]=t)}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,r,i){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=i,r&&(n.originalError=r),n}function newContext(e){function t(e){var t,r;for(t=0;e[t];t+=1)if(r=e[t],"."===r)e.splice(t,1),t-=1;else if(".."===r){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}function r(e,r,i){var n,o,a,s,c,u,p,d,f,l,h,m=r&&r.split("/"),g=m,b=w.map,v=b&&b["*"];if(e&&"."===e.charAt(0)&&(r?(g=getOwn(w.pkgs,r)?m=[r]:m.slice(0,m.length-1),e=g.concat(e.split("/")),t(e),o=getOwn(w.pkgs,n=e[0]),e=e.join("/"),o&&e===n+"/"+o.main&&(e=n)):0===e.indexOf("./")&&(e=e.substring(2))),i&&b&&(m||v)){for(s=e.split("/"),c=s.length;c>0;c-=1){if(p=s.slice(0,c).join("/"),m)for(u=m.length;u>0;u-=1)if(a=getOwn(b,m.slice(0,u).join("/")),a&&(a=getOwn(a,p))){d=a,f=c;break}if(d)break;!l&&v&&getOwn(v,p)&&(l=getOwn(v,p),h=c)}!d&&l&&(d=l,f=h),d&&(s.splice(0,f,d),e=s.join("/"))}return e}function i(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName?(t.parentNode.removeChild(t),!0):void 0})}function n(e){var t=getOwn(w.paths,e);return t&&isArray(t)&&t.length>1?(i(e),t.shift(),q.require.undef(e),q.require([e]),!0):void 0}function o(e){var t,r=e?e.indexOf("!"):-1;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function a(e,t,i,n){var a,s,c,u,p=null,d=t?t.name:null,f=e,l=!0,h="";return e||(l=!1,e="_@r"+(A+=1)),u=o(e),p=u[0],e=u[1],p&&(p=r(p,d,n),s=getOwn(M,p)),e&&(p?h=s&&s.normalize?s.normalize(e,function(e){return r(e,d,n)}):r(e,d,n):(h=r(e,d,n),u=o(h),p=u[0],h=u[1],i=!0,a=q.nameToUrl(h))),c=!p||s||i?"":"_unnormalized"+(R+=1),{prefix:p,name:h,parentMap:t,unnormalized:!!c,url:a,originalName:f,isDefine:l,id:(p?p+"!"+h:h)+c}}function s(e){var t=e.id,r=getOwn(k,t);return r||(r=k[t]=new q.Module(e)),r}function c(e,t,r){var i=e.id,n=getOwn(k,i);!hasProp(M,i)||n&&!n.defineEmitComplete?(n=s(e),n.error&&"error"===t?r(n.error):n.on(t,r)):"defined"===t&&r(M[i])}function u(e,t){var r=e.requireModules,i=!1;t?t(e):(each(r,function(t){var r=getOwn(k,t);r&&(r.error=e,r.events.error&&(i=!0,r.emit("error",e)))}),i||req.onError(e))}function p(){globalDefQueue.length&&(apsp.apply(j,[j.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function d(e){delete k[e],delete S[e]}function f(e,t,r){var i=e.map.id;e.error?e.emit("error",e.error):(t[i]=!0,each(e.depMaps,function(i,n){var o=i.id,a=getOwn(k,o);!a||e.depMatched[n]||r[o]||(getOwn(t,o)?(e.defineDep(n,M[o]),e.check()):f(a,t,r))}),r[i]=!0)}function l(){var e,t,r,o,a=1e3*w.waitSeconds,s=a&&q.startTime+a<(new Date).getTime(),c=[],p=[],d=!1,h=!0;if(!v){if(v=!0,eachProp(S,function(r){if(e=r.map,t=e.id,r.enabled&&(e.isDefine||p.push(r),!r.error))if(!r.inited&&s)n(t)?(o=!0,d=!0):(c.push(t),i(t));else if(!r.inited&&r.fetched&&e.isDefine&&(d=!0,!e.prefix))return h=!1}),s&&c.length)return r=makeError("timeout","Load timeout for modules: "+c,null,c),r.contextName=q.contextName,u(r);h&&each(p,function(e){f(e,{},{})}),s&&!o||!d||!isBrowser&&!isWebWorker||y||(y=setTimeout(function(){y=0,l()},50)),v=!1}}function h(e){hasProp(M,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,r,i){e.detachEvent&&!isOpera?i&&e.detachEvent(i,t):e.removeEventListener(r,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,q.onScriptLoad,"load","onreadystatechange"),m(t,q.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function b(){var e;for(p();j.length;){if(e=j.shift(),null===e[0])return u(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var v,x,q,E,y,w={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},k={},S={},O={},j=[],M={},P={},A=1,R=1;return E={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?e.exports:e.exports=M[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){var t,r=getOwn(w.pkgs,e.map.id);return t=r?getOwn(w.config,e.map.id+"/"+r.main):getOwn(w.config,e.map.id),t||{}},exports:M[e.map.id]}}},x=function(e){this.events=getOwn(O,e.id)||{},this.map=e,this.shim=getOwn(w.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,r,i){i=i||{},this.inited||(this.factory=t,r?this.on("error",r):this.events.error&&(r=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;return this.shim?(q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})),void 0):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;P[e]||(P[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,r=this.map.id,i=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=q.execCb(r,o,i,n)}catch(a){e=a}else n=q.execCb(r,o,i,n);if(this.map.isDefine&&(t=this.module,t&&void 0!==t.exports&&t.exports!==this.exports?n=t.exports:void 0===n&&this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",u(this.error=e)}else n=o;this.exports=n,this.map.isDefine&&!this.ignore&&(M[r]=n,req.onResourceLoad&&req.onResourceLoad(q,this.map,this.depMaps)),d(r),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=a(e.prefix);this.depMaps.push(i),c(i,"defined",bind(this,function(i){var n,o,p,f=this.map.name,l=this.map.parentMap?this.map.parentMap.name:null,h=q.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(i.normalize&&(f=i.normalize(f,function(e){return r(e,l,!0)})||""),o=a(e.prefix+"!"+f,this.map.parentMap),c(o,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),p=getOwn(k,o.id),p&&(this.depMaps.push(o),this.events.error&&p.on("error",bind(this,function(e){this.emit("error",e)})),p.enable()),void 0):(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),n.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(k,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&d(e.map.id)}),u(e)}),n.fromText=bind(this,function(r,i){var o=e.name,c=a(o),p=useInteractive;i&&(r=i),p&&(useInteractive=!1),s(c),hasProp(w.config,t)&&(w.config[o]=w.config[t]);try{req.exec(r)}catch(d){return u(makeError("fromtexteval","fromText eval for "+t+" failed: "+d,d,[t]))}p&&(useInteractive=!0),this.depMaps.push(c),q.completeLoad(o),h([o],n)}),i.load(e.name,h,n,w),void 0)})),q.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){S[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var r,i,n;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(E,e.id))return this.depExports[t]=n(this),void 0;this.depCount+=1,c(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&c(e,"error",bind(this,this.errback))}r=e.id,i=k[r],hasProp(E,r)||!i||i.enabled||q.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(k,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},q={config:w,contextName:e,registry:k,defined:M,urlFetched:P,defQueue:j,Module:x,makeModuleMap:a,nextTick:req.nextTick,onError:u,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=w.pkgs,r=w.shim,i={paths:!0,config:!0,map:!0};eachProp(e,function(e,t){i[t]?"map"===t?(w.map||(w.map={}),mixin(w[t],e,!0,!0)):mixin(w[t],e,!0):w[t]=e}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),r[t]=e}),w.shim=r),e.packages&&(each(e.packages,function(e){var r;e="string"==typeof e?{name:e}:e,r=e.location,t[e.name]={name:e.name,location:r||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),w.pkgs=t),eachProp(k,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,i){function n(r,o,c){var p,d,f;return i.enableBuildCallback&&o&&isFunction(o)&&(o.__requireJsBuild=!0),"string"==typeof r?isFunction(o)?u(makeError("requireargs","Invalid require call"),c):t&&hasProp(E,r)?E[r](k[t.id]):req.get?req.get(q,r,t,n):(d=a(r,t,!1,!0),p=d.id,hasProp(M,p)?M[p]:u(makeError("notloaded",'Module name "'+p+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(b(),q.nextTick(function(){b(),f=s(a(null,t)),f.skipMap=i.skipMap,f.init(r,o,c,{enabled:!0}),l()}),n)}return i=i||{},mixin(n,{isBrowser:isBrowser,toUrl:function(e){var i,n=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return-1!==n&&(!a||n>1)&&(i=e.substring(n,e.length),e=e.substring(0,n)),q.nameToUrl(r(e,t&&t.id,!0),i,!0)},defined:function(e){return hasProp(M,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(M,e)||hasProp(k,e)}}),t||(n.undef=function(e){p();var r=a(e,t,!0),i=getOwn(k,e);delete M[e],delete P[r.url],delete O[e],i&&(i.events.defined&&(O[e]=i.events),d(e))}),n},enable:function(e){var t=getOwn(k,e.id);t&&s(e).enable()},completeLoad:function(e){var t,r,i,o=getOwn(w.shim,e)||{},a=o.exports;for(p();j.length;){if(r=j.shift(),null===r[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);h(r)}if(i=getOwn(k,e),!t&&!hasProp(M,e)&&i&&!i.inited){if(!(!w.enforceDefine||a&&getGlobal(a)))return n(e)?void 0:u(makeError("nodefine","No define call for "+e,null,[e]));h([e,o.deps||[],o.exportsFn])}l()},nameToUrl:function(e,t,r){var i,n,o,a,s,c,u,p,d;if(req.jsExtRegExp.test(e))p=e+(t||"");else{for(i=w.paths,n=w.pkgs,s=e.split("/"),c=s.length;c>0;c-=1){if(u=s.slice(0,c).join("/"),o=getOwn(n,u),d=getOwn(i,u)){isArray(d)&&(d=d[0]),s.splice(0,c,d);break}if(o){a=e===o.name?o.location+"/"+o.main:o.location,s.splice(0,c,a);break}}p=s.join("/"),p+=t||(/\?/.test(p)||r?"":".js"),p=("/"===p.charAt(0)||p.match(/^[\w\+\.\-]+:/)?"":w.baseUrl)+p}return w.urlArgs?p+((-1===p.indexOf("?")?"?":"&")+w.urlArgs):p},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,r,i){return t.apply(i,r)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);return n(t.id)?void 0:u(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},q.require=q.makeRequire(),q}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.6",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||!navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,r,i){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=r,r=i):e=[]),o&&o.context&&(a=o.context),n=getOwn(contexts,a),n||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,r)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.load=function(e,t,r){var i,n=e&&e.config||{};if(isBrowser)return i=n.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=n.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||isOpera?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=r,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;if(isWebWorker)try{importScripts(r),e.completeLoad(t)}catch(o){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+r,o,[t]))}},isBrowser&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,t,r){var i,n;"string"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,t=null),!t&&isFunction(r)&&(t=[],r.length&&(r.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,r){t.push(r)}),t=(1===r.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(i=currentlyAddingScript||getInteractiveScript(),i&&(e||(e=i.getAttribute("data-requiremodule")),n=contexts[i.getAttribute("data-requirecontext")])),(n?n.defQueue:globalDefQueue).push([e,t,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),require.config({baseUrl:"/scripts",paths:{jquery:"../components/jquery/jquery",lodash:"../components/lodash/lodash","bootstrap-affix":"../components/bootstrap/js/bootstrap-affix","bootstrap-alert":"../components/bootstrap/js/bootstrap-alert","bootstrap-transition":"../components/bootstrap/js/bootstrap-transition","bootstrap-dropdown":"../components/bootstrap/js/bootstrap-dropdown","bootstrap-tooltip":"../components/bootstrap/js/bootstrap-tooltip","bootstrap-modal":"../components/bootstrap/js/bootstrap-modal"},shim:{"bootstrap-alert":["jquery"],"bootstrap-affix":["jquery"],"bootstrap-transition":["jquery"],"bootstrap-dropdown":["jquery"],"bootstrap-tooltip":["jquery"],"bootstrap-modal":["jquery"]},urlArgs:"v=20130827142930%2B0800"}),require(["main"]),define(".startup.build",function(){}),define("main",[],function(){console.log("real_edit.start!")});
//@ sourceMappingURL=startup.js.map