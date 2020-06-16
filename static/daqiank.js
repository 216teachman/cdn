var _hmt = _hmt || []; 
if ($(".bdsharebuttonbox").length) {
	if ($(".article-content").length) {
		$(".article-content img").data("tag", "bdshare")
	}
	window._bd_share_config = {
		common: {
			"bdText": "",
			"bdMini": "2",
			"bdMiniList": false,
			"bdPic": "",
			"bdStyle": "0",
			"bdSize": "24"
		},
		share: [{
			bdCustomStyle: "http://118.24.12.84:10002/style/css/share.css"
		}]
	};
	with(document) {
		0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=" + ~ ( - new Date() / 3600000)]
	}
}
if ($(".thumb:first").data("src") || $(".widget_ui_posts .thumb:first").data("src")) {
	$(".thumb").lazyload({
		data_attribute: "src",
		placeholder: "http://118.24.12.84:10002/style/images/thumbnail.png",
		threshold: 400
	});
	$(".widget_ui_posts .thumb").lazyload({
		data_attribute: "src",
		placeholder: "http://118.24.12.84:10002/style/images/thumbnail.png",
		threshold: 400
	})
}
$(".search-show").bind("click",
function() {
	$(this).find(".fa").toggleClass("fa-remove");
	$("body").toggleClass("search-on");
	if ($("body").hasClass("search-on")) {
		$(".site-search").find("input").focus();
		$("body").removeClass("m-nav-show")
	}
});
$("body").append('<div class="m-mask"></div>');
$("body").append($(".site-navbar").clone().attr("class", "m-navbar"));
$(".m-icon-nav").on("click",
function() {
	$("body").addClass("m-nav-show");
	$(".m-mask").show();
	$("body").removeClass("search-on");
	$(".search-show .fa").removeClass("fa-remove")
});
$(".m-mask").on("click",
function() {
	$(this).hide();
	$("body").removeClass("m-nav-show")
});
if ($("body").hasClass("search-results")) {
	var val = $(".site-search-form .search-input").val();
	var reg = eval("/" + val + "/i");
	$(".excerpt h2 a, .excerpt .note, .excerpt .meta").each(function() {
		$(this).html($(this).text().replace(reg,
		function(w) {
			return "<b>" + w + "</b>"
		}))
	})
};