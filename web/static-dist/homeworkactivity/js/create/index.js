!function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/",o(o.s=49)}([function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var o=n(18);function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),o(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var m=n(6),g=n(0),v=n(21),y=n(23),b=n(11),w="prototype",$=function(t,e,n){var i,o,s,a=t&$.F,r=t&$.G,c=t&$.S,l=t&$.P,u=t&$.B,f=t&$.W,d=r?g:g[e]||(g[e]={}),h=d[w],p=r?m:c?m[e]:(m[e]||{})[w];for(i in r&&(n=e),n)(o=!a&&p&&void 0!==p[i])&&b(d,i)||(s=o?p[i]:n[i],d[i]=r&&"function"!=typeof p[i]?n[i]:u&&o?v(s,m):f&&p[i]==s?function(i){function t(t,e,n){if(this instanceof i){switch(arguments.length){case 0:return new i;case 1:return new i(t);case 2:return new i(t,e)}return new i(t,e,n)}return i.apply(this,arguments)}return t[w]=i[w],t}(s):l&&"function"==typeof s?v(Function.call,s):s,l&&((d.virtual||(d.virtual={}))[i]=s,t&$.R&&h&&!h[i]&&y(h,i,s)))};$.F=1,$.G=2,$.S=4,$.P=8,$.B=16,$.W=32,$.U=64,$.R=128,t.exports=$},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=n(29)},function(t,e,n){t.exports=n(46)},function(t,e,n){var i=n(24),o=n(25),s=n(27),a=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(i(t),e=s(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(32),o=n(41);t.exports=Object.keys||function(t){return i(t,o)}},function(t,e,n){var i=n(14),o=n(15);t.exports=function(t){return i(o(t))}},function(t,e,n){var i=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?i:n)(t)}},function(t,e,n){var i=n(15);t.exports=function(t){return Object(i(t))}},function(t,e,n){t.exports=n(19)},function(t,e,n){n(20);var i=n(0).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(5);i(i.S+i.F*!n(3),"Object",{defineProperty:n(10).f})},function(t,e,n){var s=n(22);t.exports=function(i,o,t){if(s(i),void 0===o)return i;switch(t){case 1:return function(t){return i.call(o,t)};case 2:return function(t,e){return i.call(o,t,e)};case 3:return function(t,e,n){return i.call(o,t,e,n)}}return function(){return i.apply(o,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(10),o=n(28);t.exports=n(3)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(7);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(7),o=n(6).document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,n){var o=n(7);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){n(30),t.exports=n(0).Object.assign},function(t,e,n){var i=n(5);i(i.S+i.F,"Object",{assign:n(31)})},function(t,e,n){"use strict";var d=n(3),h=n(12),p=n(42),m=n(43),g=n(17),v=n(14),o=Object.assign;t.exports=!o||n(4)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=o({},t)[n]||Object.keys(o({},e)).join("")!=i})?function(t,e){for(var n=g(t),i=arguments.length,o=1,s=p.f,a=m.f;o<i;)for(var r,c=v(arguments[o++]),l=s?h(c).concat(s(c)):h(c),u=l.length,f=0;f<u;)r=l[f++],d&&!a.call(c,r)||(n[r]=c[r]);return n}:o},function(t,e,n){var a=n(11),r=n(13),c=n(34)(!1),l=n(37)("IE_PROTO");t.exports=function(t,e){var n,i=r(t),o=0,s=[];for(n in i)n!=l&&a(i,n)&&s.push(n);for(;e.length>o;)a(i,n=e[o++])&&(~c(s,n)||s.push(n));return s}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var c=n(13),l=n(35),u=n(36);t.exports=function(r){return function(t,e,n){var i,o=c(t),s=l(o.length),a=u(n,s);if(r&&e!=e){for(;a<s;)if((i=o[a++])!=i)return!0}else for(;a<s;a++)if((r||a in o)&&o[a]===e)return r||a||0;return!r&&-1}}},function(t,e,n){var i=n(16),o=Math.min;t.exports=function(t){return 0<t?o(i(t),9007199254740991):0}},function(t,e,n){var i=n(16),o=Math.max,s=Math.min;t.exports=function(t,e){return(t=i(t))<0?o(t+e,0):s(t,e)}},function(t,e,n){var i=n(38)("keys"),o=n(40);t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var i=n(0),o=n(6),s="__core-js_shared__",a=o[s]||(o[s]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(39)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(s){var i={element:"body",position:null,type:"info",allow_dismiss:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};function n(t,e,n){e={content:{message:"object"==typeof e?e.message:e,title:e.title?e.title:"",icon:e.icon?e.icon:"",url:e.url?e.url:"#",target:e.target?e.target:"-"}};n=s.extend(!0,{},e,n),this.settings=s.extend(!0,{},i,n),this._defaults=i,"-"==this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"},"number"==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),this.init()}String.format=function(){for(var t=arguments[0],e=1;e<arguments.length;e++)t=t.replace(RegExp("\\{"+(e-1)+"\\}","gm"),arguments[e]);return t},s.extend(n.prototype,{init:function(){var a=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),"#"!=this.settings.content.url&&this.styleURL(),this.styleDismiss(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(t,e){var n={};for(var t in"string"==typeof t?n[t]=e:n=t,n)switch(t){case"type":this.$ele.removeClass("alert-"+a.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+a.settings.type),a.settings.type=n[t],this.$ele.addClass("alert-"+n[t]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+n[t]);break;case"icon":var i=this.$ele.find('[data-notify="icon"]');"class"==a.settings.icon_type.toLowerCase()?i.removeClass(a.settings.content.icon).addClass(n[t]):(i.is("img")||i.find("img"),i.attr("src",n[t]));break;case"progress":var o=a.settings.delay-a.settings.delay*(n[t]/100);this.$ele.data("notify-delay",o),this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",n[t]).css("width",n[t]+"%");break;case"url":this.$ele.find('[data-notify="url"]').attr("href",n[t]);break;case"target":this.$ele.find('[data-notify="url"]').attr("target",n[t]);break;default:this.$ele.find('[data-notify="'+t+'"]').html(n[t])}var s=this.$ele.outerHeight()+parseInt(a.settings.spacing)+parseInt(a.settings.offset.y);a.reposition(s)},close:function(){a.close()}}},buildNotify:function(){var t=this.settings.content;this.$ele=s(String.format(this.settings.template,this.settings.type,t.title,t.message,t.url,t.target)),this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none"),(this.settings.delay<=0&&!this.settings.showProgressbar||!this.settings.showProgressbar)&&this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){"class"==this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"5px",zIndex:this.settings.z_index+2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:"0px",position:"absolute",top:"0px",width:"100%",zIndex:this.settings.z_index+1})},placement:function(){var n=this,t=this.settings.offset.y,e={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",zIndex:this.settings.z_index},i=!1,o=this.settings;switch(s('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){return t=Math.max(t,parseInt(s(this).css(o.placement.from))+parseInt(s(this).outerHeight())+parseInt(o.spacing))}),1==this.settings.newest_on_top&&(t=this.settings.offset.y),e[this.settings.placement.from]=t+"px",this.settings.placement.align){case"left":case"right":e[this.settings.placement.align]=this.settings.offset.x+"px";break;case"center":e.left=0,e.right=0}this.$ele.css(e).addClass(this.settings.animate.enter),s.each(Array("webkit-","moz-","o-","ms-",""),function(t,e){n.$ele[0].style[e+"AnimationIterationCount"]=1}),s(this.settings.element).append(this.$ele),1==this.settings.newest_on_top&&(t=parseInt(t)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(t)),s.isFunction(n.settings.onShow)&&n.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(t){i=!0}).one(this.animations.end,function(t){s.isFunction(n.settings.onShown)&&n.settings.onShown.call(this)}),setTimeout(function(){i||s.isFunction(n.settings.onShown)&&n.settings.onShown.call(this)},600)},bind:function(){var n=this;if(this.$ele.find('[data-notify="dismiss"]').on("click",function(){n.close()}),this.$ele.mouseover(function(t){s(this).data("data-hover","true")}).mouseout(function(t){s(this).data("data-hover","false")}),this.$ele.data("data-hover","false"),0<this.settings.delay){n.$ele.data("notify-delay",n.settings.delay);var i=setInterval(function(){var t=parseInt(n.$ele.data("notify-delay"))-n.settings.timer;if("false"===n.$ele.data("data-hover")&&"pause"==n.settings.mouse_over||"pause"!=n.settings.mouse_over){var e=(n.settings.delay-t)/n.settings.delay*100;n.$ele.data("notify-delay",t),n.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",e).css("width",e+"%")}t<=-n.settings.timer&&(clearInterval(i),n.close())},n.settings.timer)}},close:function(){var e=this,t=parseInt(this.$ele.css(this.settings.placement.from)),n=!1;this.$ele.data("closing","true").addClass(this.settings.animate.exit),e.reposition(t),s.isFunction(e.settings.onClose)&&e.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(t){n=!0}).one(this.animations.end,function(t){s(this).remove(),s.isFunction(e.settings.onClosed)&&e.settings.onClosed.call(this)}),setTimeout(function(){n||(e.$ele.remove(),e.settings.onClosed&&e.settings.onClosed(e.$ele))},600)},reposition:function(t){var e=this,n='[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])',i=this.$ele.nextAll(n);1==this.settings.newest_on_top&&(i=this.$ele.prevAll(n)),i.each(function(){s(this).css(e.settings.placement.from,t),t=parseInt(t)+parseInt(e.settings.spacing)+s(this).outerHeight()})}}),s.notify=function(t,e){return new n(0,t,e).notify},s.notifyDefaults=function(t){return i=s.extend(!0,{},i,t)},s.notifyClose=function(t){void 0===t||"all"==t?s("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):s('[data-notify-position="'+t+'"]').find('[data-notify="dismiss"]').trigger("click")}})(jQuery)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)},function(t,e){t.exports=jQuery},function(t,e,n){n(47),t.exports=n(0).Object.keys},function(t,e,n){var i=n(17),o=n(12);n(48)("keys",function(){return function(t){return o(i(t))}})},function(t,e,n){var o=n(5),s=n(0),a=n(4);t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],i={};i[t]=e(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}},function(t,e,n){"use strict";n.r(e);function o(t){var e=!1,n="",i=$("#task-create-content-iframe").contents().find(".js-subjective-remask");t.find("tbody tr").each(function(){var t=$(this).data("type");console.log(t),"essay"==t&&(e=!0)}),console.log(e),e||0==t.find("tbody tr").length?i.html(""):(console.log(i),n="homework"==i.data("type")?Translator.trans("activity.homework_manage.objective_question_hint"):Translator.trans("activity.homework_manage.pass_objective_question_hint"),i.html(n).removeClass("hidden"))}var i=n(1),s=n.n(i),a=n(2),r=n.n(a),c=function(){function e(t){s()(this,e),this.$element=t,this.initEvent()}return r()(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("click",'[data-role="batch-select"]',function(t){return e._batch2Item(t)}),this.$element.on("click",'[data-role="batch-item"]',function(t){return e._item2Batch(t)})}},{key:"_batch2Item",value:function(t){var e=$(t.currentTarget).prop("checked");this.$element.find('[data-role="batch-select"]').prop("checked",e),this.$element.find('[data-role="batch-item"]:visible').prop("checked",e)}},{key:"_item2Batch",value:function(){this.$element.find('[data-role="batch-item"]').length==this.$element.find('[data-role="batch-item"]:checked').length?this.$element.find('[data-role="batch-select"]').prop("checked",!0):this.$element.find('[data-role="batch-select"]').prop("checked",!1)}}]),e}(),l=n(8),u=n.n(l),f=(n(44),function(t,e,n,i){var o=2<arguments.length&&void 0!==n?n:{},s=3<arguments.length&&void 0!==i?i:{};$('[data-notify="container"]').remove();var a="";switch(t){case"info":a="cd-icon cd-icon-info-o color-info mrm";break;case"success":a="cd-icon cd-icon-success-o color-success mrm";break;case"danger":a="cd-icon cd-icon-danger-o color-danger mrm";break;case"warning":a="cd-icon cd-icon-warning-o color-warning mrm"}var r={message:e,icon:a},c={type:t,delay:3e3,placement:{from:"top",align:"center"},animate:{enter:"animated fadeInDownSmall",exit:"animated fadeOutUp"},offset:80,z_index:1051,timer:100,template:'<div data-notify="container" class="notify-content"><div class="notify notify-{0}"><span data-notify="icon"></span><span data-notify="title">{1}</span><span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div></div>'};$.notify(u()(r,s),u()(c,o))}),d=function(){function n(t,e){s()(this,n),this.$form=t,this.$modal=e,this.initEvent()}return r()(n,[{key:"initEvent",value:function(){var e=this;this.$form.on("click",'[data-role="item-delete-btn"]',function(t){return e.deleteQuestion(t)}),this.$form.on("click",'[data-role="replace-item"]',function(t){return e.replaceQuestion(t)}),this.$form.on("click",'[data-role="preview-btn"]',function(t){return e.previewQuestion(t)}),this.$form.on("click",'[data-role="batch-delete-btn"]',function(t){return e.batchDelete(t)}),this.initSortList()}},{key:"initSortList",value:function(){var s,o=this,t=this.$form.find("tbody"),e=t.hasClass("js-homework-table")?"":"<td></td>",n='<tr class="question-placehoder js-placehoder"><td></td><td></td><td></td><td></td><td></td><td></td><td></td>'.concat(e,"</tr>");t.sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:n,exclude:".notMoveHandle",onDragStart:function(t,e,n){t.hasClass("have-sub-questions")||$(".js-have-sub").removeClass("is-question");var i=t.offset(),o=e.rootGroup.pointer;s={left:o.left-i.left,top:o.top-i.top},n(t,e)},onDrag:function(t,e){var n=t.height();t.css({left:e.left-s.left,top:e.top-s.top}),$(".js-placehoder").css({height:n})},onDrop:function(t,e,n){if(n(t,e),t.hasClass("have-sub-questions")){var i=t.parents("tbody");i.find("tr.is-question").each(function(){var t=$(this);i.find("[data-parent-id="+t.data("id")+"]").detach().insertAfter(t)})}else $(".js-have-sub").addClass("is-question");o.refreshSeqs()}})}},{key:"replaceQuestion",value:function(t){var e=this,n=$(t.currentTarget),i=[],o=this.$form.find("tbody:visible");o.find('[name="questionIds[]"]').each(function(){i.push($(this).val())}),this.$modal.data("manager",this).modal(),$.get(n.data("url"),{excludeIds:i.join(","),type:o.data("type")},function(t){e.$modal.html(t)})}},{key:"deleteQuestion",value:function(t){t.stopPropagation();var e=$(t.currentTarget),n=e.closest("tr").data("id"),i=e.closest("tbody");i.find('[data-parent-id="'+n+'"]').remove(),e.closest("tr").remove(),o(this.$form),i.trigger("lengthChange"),this.refreshSeqs()}},{key:"batchDelete",value:function(){if(0==this.$form.find('[data-role="batch-item"]:checked').length){var t=this.$form.find(".js-help-redmine");t?(t.text(Translator.trans("activity.testpaper_manage.question_required_error_hint")).show(),setTimeout(function(){t.slideUp()},3e3)):f("danger",Translator.trans("activity.testpaper_manage.question_required_error_hint"))}var i=this;this.$form.find('[data-role="batch-item"]:checked').each(function(t,e){var n=$(this).val();"material"==$(this).closest("tr").data("type")&&i.$form.find('[data-parent-id="'+n+'"]').remove(),$(this).closest("tr").remove()}),this.refreshSeqs(),o(this.$form)}},{key:"previewQuestion",value:function(t){t.preventDefault(),window.open($(t.currentTarget).data("url"),"_blank","directories=0,height=580,width=820,scrollbars=1,toolbar=0,status=0,menubar=0,location=0")}},{key:"refreshSeqs",value:function(){var e=1;this.$form.find("tbody tr").each(function(){var t=$(this);t.hasClass("have-sub-questions")||(t.find("td.seq").html(e),e++)}),this.$form.find('[name="questionLength"]').val(0<e-1?e-1:null)}}]),n}(),h=n(9),p=n.n(h),m=function(){function e(t){s()(this,e),this.$homeworkModal=$("#modal",window.parent.document),this.$questionPickedModal=$("#attachment-modal",window.parent.document),this.$element=t,this.$step2_form=this.$element.find("#step2-form"),this.$step3_form=this.$element.find("#step3-form"),this.validator2=null,this.init()}return r()(e,[{key:"init",value:function(){this.initEvent(),this.setValidateRule(),this.inItStep2form()}},{key:"initEvent",value:function(){var n=this;this.$element.on("click",'[data-role="pick-item"]',function(t){return n.showPickQuestion(t)}),this.$questionPickedModal.on("shown.bs.modal",function(){n.$homeworkModal.hide()}),this.$questionPickedModal.on("hidden.bs.modal",function(){n.showPickedQuestion(),n.$homeworkModal.show(),n.$questionPickedModal.html(""),n.validator2&&n.validator2.form()}),this.$questionPickedModal.on("selectQuestion",function(t,e){return n.selectQuestion(t,e)}),window.ltc.on("getActivity",function(t){window.ltc.emit("returnActivity",{valid:n.validator.form(),data:window.ltc.getFormSerializeObject($("#step2-form"))})}),window.ltc.on("getValidate",function(t){window.ltc.emit("returnValidate",{valid:n.validator.form()})})}},{key:"initCkeditor",value:function(t){var e=this.$element.data("status")?350:200,n=CKEDITOR.replace("homework-about-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#homework-about-field").data("imageUploadUrl"),height:e});n.on("change",function(){$("#homework-about-field").val(n.getData())}),n.on("blur",function(){t.form()})}},{key:"showPickQuestion",value:function(t){var e=this;t.preventDefault();var n=$(t.currentTarget),i=[];$("#question-table-tbody").find('[name="questionIds[]"]').each(function(){i.push($(this).val())}),this.$questionPickedModal.modal().data("manager",this),$.get(n.data("url"),{excludeIds:i.join(",")},function(t){e.$questionPickedModal.html(t)})}},{key:"showPickedQuestion",value:function(){var t=$(".js-cached-question");if(""!==t.text()){var e=$(".js-origin-bank").val(),n=$(".js-current-bank").val();$.trim(e)!==$.trim(n)&&$(".js-homework-table").html("");var i=JSON.parse(t.text());t.text("");var o=[];$.each(p()(i),function(t,e){o.push.apply(o,p()(i[e]))});var s=$(".js-pick-modal").data("pickUrl"),a=this;$.post(s,{questionIds:o},function(t){var e=a.$step2_form.find("tbody:visible");e.length<=0&&(e=a.$step2_form.find("tbody")),e.append(t).removeClass("hide"),e.trigger("lengthChange"),a.refreshSeq()})}}},{key:"refreshSeq",value:function(){var i=1;this.$step2_form.find("tbody tr").each(function(t,e){var n=$(e);n.hasClass("have-sub-questions")||(n.find("td.seq").html(i),i++)}),this.$step2_form.find('[name="questionLength"]').val(0<i-1?i-1:null),this.validator.form()}},{key:"selectQuestion",value:function(){}},{key:"inItStep2form",value:function(){this.validator=this.$step2_form.validate({onkeyup:!1,rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},description:{required:!0},content:"required",questionLength:{required:!0}},messages:{description:Translator.trans("activity.homework_manage.question_homework_hint"),questionLength:Translator.trans("activity.homework_manage.question_required_error_hint")}}),this.initCkeditor(this.validator)}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",function(t,e){return this.optional(e)||/^[0-9]+(\.[0-9]?)?$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.arithmetic_float_error_hint"))),$.validator.addMethod("positiveInteger",function(t,e){return this.optional(e)||/^[1-9]\d*$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.positive_integer_error_hint"))),$.validator.addMethod("DateAndTime",function(t,e){return this.optional(e)||/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ([0-1]{1}[0-9]{1})|(2[0-4]{1}):[0-5]{1}[0-9]{1}$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.date_and_time_error_hint:mm")))}}]),e}(),g=$("#step2-form");new m($("#iframe-content")),new c(g),new d(g,$("#attachment-modal",window.parent.document))}]);