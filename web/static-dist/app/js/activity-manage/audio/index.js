!function(l){function e(e){for(var t,n,r=e[0],i=e[1],a=e[2],o=0,u=[];o<r.length;o++)n=r[o],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&u.push(d[n][0]),d[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(l[t]=i[t]);for(f&&f(e);u.length;)u.shift()();return c.push.apply(c,a||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==d[a]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},d={27:0},c=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var f=r;c.push([753,0]),s()}({10:function(e,t){e.exports=jQuery},753:function(e,t,n){"use strict";n.r(t);var r=n(13),u=n.n(r),i=n(6),l=n.n(i),a=n(0),o=n.n(a),s=n(1),d=n.n(s),c=n(34),f=n(56);new(function(){function e(){o()(this,e),Object(f.c)($('[name="ext[mediaId]"]')),this.initStep2Form(),this.autoValidatorLength(),this.initFileChooser()}return d()(e,[{key:"initStep2Form",value:function(){var e=$("#step2-form");e.data("validator");e.validate({groups:{nameGroup:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer unsigned_integer",second:"required second_range unsigned_integer","ext[mediaId]":"required"},messages:{minute:{required:Translator.trans("activity.audio_manage.length_required_error_hint"),unsigned_integer:Translator.trans("activity.audio_manage.length_unsigned_integer_error_hint")},second:{required:Translator.trans("activity.audio_manage.length_required_error_hint"),second_range:Translator.trans("activity.audio_manage.second_range_error_hint"),unsigned_integer:Translator.trans("activity.audio_manage.length_unsigned_integer_error_hint")},"ext[mediaId]":Translator.trans("activity.audio_manage.media_error_hint")}})}},{key:"autoValidatorLength",value:function(){$(".js-length").blur(function(){var e=$("#step2-form").data("validator");if(e&&e.form()){var t=0|l()($("#minute").val()),n=0|l()($("#second").val());$("#length").val(60*t+n)}})}},{key:"initFileChooser",value:function(){var e=new c.a;console.log(e);e.on("select",function(e){Object(f.a)();!function(e){if(0!==e.length&&void 0!==e.length){var t=$("#minute"),n=$("#second"),r=$("#length"),i=l()(e.length),a=l()(i/60),o=i%60;t.val(a),n.val(o),r.val(i),e.minute=a,e.second=o}$('[name="media"]').val(u()(e))}(e),$('[name="ext[mediaId]"]').val(e.source),$("#step2-form").valid(),"self"==e.source?($("#ext_mediaId").val(e.id),$("#ext_mediaUri").val("")):($("#ext_mediaId").val(""),$("#ext_mediaUri").val(e.uri))})}}]),e}())}});