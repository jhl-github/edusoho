webpackJsonp(["app/js/classroom/detail/teacher-list/index"],{0:function(t,o,c){"use strict";c("7840d638cc48059df0fc")},"7840d638cc48059df0fc":function(t,o){"use strict";$("body").on("click",".teacher-item .follow-btn",function(){var t=$(this);$.post(t.data("url"),function(){var o=t.data("loggedin");1===o&&(t.hide(),t.closest(".teacher-item").find(".unfollow-btn").show())})}).on("click",".unfollow-btn",function(){var t=$(this);$.post(t.data("url"),function(){}).always(function(){t.hide(),t.closest(".teacher-item").find(".follow-btn").show()})})}});