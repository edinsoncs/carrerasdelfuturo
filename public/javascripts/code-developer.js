$(document).ready(function(){
	var n = $(".jsClick");
	function webview(t) {
		$(t).click(function(){
			$(".none").slideToggle();
			$(t).parent().remove();
		});
	}
	webview(n)

});