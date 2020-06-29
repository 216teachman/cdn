var _hmt = _hmt || []; 
$(document).ready(function() {
     c = {
        url: document.URL,
        pic: $('meta[property="og:image"]').attr("content"),
        title: document.title || "",
        desc: $('meta[name="description"]').length ? $('meta[name="description"]').attr("content") : ""
    }
    $(".share-weixin").each(function() {
        $(this).find(".share-popover").length || ($(this).append('<span class="share-popover"><span class="share-popover-inner" id="weixin-qrcode"></span></span>'),
        $("#weixin-qrcode").qrcode({
            width: 80,
            height: 80,
            text: c.url
        }))
    })
    $('[etap="share"]').on("click", function() {
        var a = $(this)
          , b = a.data("share")
          , d = "";
        switch (b) {
        case "qq":
            d = "http://connect.qq.com/widget/shareqq/index.html?url=" + c.url + "&desc=" + c.desc + "&summary=" + c.title + "&site=zeshlife&pics=" + c.pic;
            break;
        case "weibo":
            d = "http://service.weibo.com/share/share.php?title=" + c.title + "&url=" + c.url + "&source=bookmark&pic=" + c.pic;
            break;
        case "douban":
            d = "http://www.douban.com/share/service?image=" + c.pic + "&href=" + c.url + "&name=" + c.title + "&text=" + c.desc;
            break;
        case "qzone":
            d = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + c.url + "&title=" + c.title + "&desc=" + c.desc + "&pics=" + c.pic;
            break;
        case "tqq":
            d = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + c.url + "&title=" + c.title;
            break;
        case "facebook":
            d = "https://www.facebook.com/share.php?u=" + c.url + "&t=" + c.title;
            break;
        case "twitter":
            d = "https://twitter.com/intent/tweet?text=" + c.title + c.url;
            break;
        case "linkedin":
            d = "https://www.linkedin.com/shareArticle?mini=true&ro=true&armin=armin&url=" + c.url + "&title=" + c.title + "&summary=" + c.desc
        }
        a.attr("href") || a.attr("target") || a.attr("href", d).attr("target", "_blank")
    })
})
if ($(".thumb:first").data("src") || $(".widget_ui_posts .thumb:first").data("src")) {
	$(".thumb").lazyload({
		data_attribute: "src",
		placeholder: "/style/images/thumbnail.png",
		threshold: 400
	});
	$(".widget_ui_posts .thumb").lazyload({
		data_attribute: "src",
		placeholder: "/style/images/thumbnail.png",
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
$(document).scroll(function() {
	if($("iframe").length>0){
	$("iframe").parent("div").remove();
	$("iframe").remove();
	}
})
