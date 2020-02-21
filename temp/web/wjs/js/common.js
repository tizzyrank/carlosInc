$(function(){
	$(window).load(function(){
		$('.page-load').hide();
		$('.wrap').show();
		new WOW().init();
		var s = skrollr.init();
		$.scrollSpeed(20, 1000);

		$(window).on('scroll', function(){
			var $windowTop = $(this).scrollTop();
		});

		var $height = $(this).height();
		$('.mouse-motion').css({'top':$height - 60});

		$('.pagestart').click(function(){
			$('html, body').animate({'scrollTop':0},1000);
			//return false;
		});

		$('.m-slider').slick({
			arrows : false,
			dots : true
		});
	});
	$(window).on('load resize', function(){
		if($(window).height() <= 768){
			$('.m-page-load').hide();
			$('.m-wrap').show()
			var $mobileHeight = $(window).height(),
				$headerHeight = $('.header-m').innerHeight(),
				$sliderHeight = $('.m-slider').height(),
				$footerHeight = $('.m-footer').innerHeight();

			$sliderHeight = $mobileHeight - $headerHeight;
			$('.m-slider').css({'height':$sliderHeight});
			$('.slick-dots').css({'bottom':$footerHeight + 4});
		}
	});
});
