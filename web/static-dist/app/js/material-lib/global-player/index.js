!function(u){function e(e){for(var t,r,n=e[0],a=e[1],o=e[2],i=0,l=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(p,r)&&p[r]&&l.push(p[r][0]),p[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(c&&c(e);l.length;)l.shift()();return d.push.apply(d,o||[]),s()}function s(){for(var e,t=0;t<d.length;t++){for(var r=d[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==p[o]&&(n=!1)}n&&(d.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},p={174:0},d=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var c=n;d.push([604,0]),s()}({169:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(){return t=document.createElement("video"),["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(e){return/maybe|probably/i.test(t.canPlayType(e))})?"native":window.MediaSource?"hls":!!function(){var e={};if(e.ie9=/MSIE\s+9.0/i.test(navigator.userAgent),e.ie10=/MSIE\s+10.0/i.test(navigator.userAgent),e.ie11=/Trident\/7\./.test(navigator.userAgent),e.edge=/Edge\/13./i.test(navigator.userAgent),e.ie9||e.ie10||e.ie11||e.edge)return!0}()&&"flash";var t}},604:function(e,t,r){"use strict";r.r(t);function n(){var e=new QiQiuYun.Player({id:"global-player",playServer:app.cloudPlayServer,sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,resNo:u.data("resNo"),token:u.data("token"),user:{id:u.data("userId"),name:u.data("userName")}}),t=new l.a({name:"parent",project:"PlayerProject",type:"child"});e.on("video.timeupdate",function(e){t.sendToParent("video.timeupdate",e)})}var a=r(43),o=r.n(a),i=r(169),l=r(49),u=$("#global-player");("video"===u.data("fileType")&&"flash"===Object(i.a)()?function(){if(o.a.hasFlashPlayerVersion("11"))n();else{var e='\n    <div class="alert alert-warning alert-dismissible fade in" role="alert">\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">×</span>\n      </button>\n      '.concat(Translator.trans("site.flash_not_install_hint"),"\n    </div>");u.html(e).show()}}:n)()}});