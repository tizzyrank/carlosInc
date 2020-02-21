$(function(){
	$('.main-bn').parallax({
		imageSrc: $(this).attr('data-image-src'),
		speed: 0.5
	});

	new WOW().init();
	
	var $newsItem = $('.news ul li a');
	$newsItem.hover(function() {
		$(this).find('.mask').stop().animate({'opacity':1},400);
	}, function() {
		$(this).find('.mask').stop().animate({'opacity':0},400);
	});

	$('.scroll-top').on('click', function(){
		$('html, body').animate({scrollTop:0},1000);
	});
});