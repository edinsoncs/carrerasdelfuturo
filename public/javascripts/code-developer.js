$(document).ready(function(){
	var n = $(".jsClick");
	var videoPlay = $(".header__Cours--Articl");
	function webview(t) {
		$(t).click(function(){
			$(".none").slideToggle();
			$(t).parent().remove();
		});
	}
	webview(n)

	function showPlay(element) {
		$(element).click(function() {
			$(".Articl--Figure img").fadeOut('fast');
			$("video").css('display','block');


			//None Cap
			$(".container--Icon").css('display','none');
			//Playing Video
			document.getElementById("showvideo").play();

		});
	}

	showPlay(videoPlay)



});