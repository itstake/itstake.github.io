$(function() {
	$(".container-min-height").height(0);
	window.onresize = function(event) {
    if(document.documentElement.clientWidth < 700) {
		$(".container").width("100%");
	} else {
		$(".container").width("60%");
	}
	};
	$(window).scroll(function() {
		if($(window).scrollTop() < 360) {
			$(".main-slider > div").height(423);
			$(".container-min-height").height(0);
			$(".main-slider > div").css("position","static");
			$(".main-content div").each(function() {
				if($(this).attr("class") != 'container-min-height') {
					$(this).height(220);
				}
			});
		} else {
			$(".main-slider > div").height(60);
			$(".container-min-height").height(623);
			$(".main-slider > div").css("position","fixed");
		}
	});
})