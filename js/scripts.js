animatedSlides = function() {

	var opened = {"left":false,"right":false}

	$(".button").each(function(i){
		$(this).click(function(e){
			var parentSlide = $(this).parents('div');
			var classList = parentSlide.attr("class").split(/\s+/);
			e.preventDefault();
			if (classList[1] == "left") {
				if (opened.left == false) {
					if (opened.right == true) {
						$(".slide.right").animate({ 
							right:"-95%"
						},500);
						opened.right=false;
					}
					$(".slide."+classList[1]).animate({ 
						left:"-5%"
					},500);
					opened.left=true;
				} else {
					$(".slide."+classList[1]).animate({ 
						left:"-95%"
					},500);
					opened.left=false;
				}
				
			}

			if (classList[1] == "right") {
				if (opened.right == false) {
					if (opened.left == true) {
						$(".slide.left").animate({ 
							left:"-95%"
						},500);
						opened.left=false;
					}
					$(".slide."+classList[1]).animate({ 
						right:"-5%"
					},500);
					opened.right=true;
				} else {
					$(".slide."+classList[1]).animate({ 
						right:"-95%"
					},500);
					opened.right=false;
				}
				
			} 

		});


	});

}