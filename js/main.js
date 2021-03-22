window.onload = function() {
	AOS.init();
}

$(window).scroll(function() {
	$(".scroll-indicator").css("opacity", 1 - $(window).scrollTop() / 200);
});