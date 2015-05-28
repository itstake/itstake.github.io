$(function() {
	$(".container-min-height").height(0);

	$(window).scroll(function() {
		if($(window).scrollTop() < 300) {
			$(".main-slider > div").height(423);
			$(".container-min-height").height(0);
			$(".main-slider > div").css("position","static");
			$(".main-content div").each(function() {
				if($(this).attr("class") != 'container-min-height') {
					$(this).height(220);
				}
			});
		} else {
			$(".main-slider > div").height(70);
			$(".container-min-height").height(370);
			$(".main-slider > div").css("position","fixed");
		}
	});

	$(".main-menu li").click(function(e) {
		e.preventDefault();
			var index = $(this).index();
		$(".button").each(function(inx, element) {
			if(inx == index) {
				$(".button").eq(inx).css("text-decoration","underline");
				var classtorage = $(this).attr("data-class");
				console.log(classtorage);
				$("."+classtorage+"").css("display","block");
			} else {
				$(".button").eq(inx).css("text-decoration","none");
				var classtorage = $(this).attr("data-class");
				$("."+classtorage+"").css("display","none");
			}
		});

	});
})