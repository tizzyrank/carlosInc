$(function(){
	$('body').prepend('<div class="page-loading"><img src="img/logo.png"></div>');

	$('.animsition').animsition({
		inClass     :  'fade-in',
		outClass    :  'fade-out',
		inDuration  :  1500,
		outDuration :  800,
		loading     :  true
	});

	$('.main-slider').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false,
		animationLoop: true,
		slideshowSpeed: 4500,
		animationSpeed: 1200
	});

	$('.hotel-slider').flexslider({
		animation: "fade",
		controlNav: "thumbnails",
		directionNav: false,
		pauseOnHover: true,
		slideshowSpeed: 4000,
		animationSpeed: 800
	});

	$('.equip-slider').flexslider({
		animation: "fade",
		controlNav: "thumbnails",
		slideshow: false,
		directionNav: false,
		pauseOnHover: true,
		animationSpeed: 800
	});

	$('.common-slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: true,
		pauseOnHover: true,
		slideshowSpeed: 4000,
		animationSpeed: 800
	});

	$('.wed-slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		animationLoop: true,
		slideshowSpeed: 4000,
		animationSpeed: 800
	});

	var $navLi = $('.nav > ul > li');
	$navLi.hover(function() {
		$(this).children('a').addClass('focus');
		$(this).find('ul').stop().fadeIn(400);
	}, function() {
		$(this).children('a').removeClass('focus');
		$(this).find('ul').stop().fadeOut(400);
	});

	$(window).on('scroll resize',function(){
		var $navTop = $('.nav').offset().top,
			$windowTop = $(window).scrollTop(),
			$headerHeight = $('.header').outerHeight(),
			$navHeight = $('.nav').height(); 
		if($windowTop > $navTop+$navHeight && $navTop!=0){
			$('.nav').stop().css({'position':'fixed',top:-60}).animate({top:0},500);
		}else if($windowTop < $headerHeight){
			$('.nav').stop().css({'position':'absolute',top:$headerHeight});
		}	
	});

	$('.datepicker').datepicker({
		dateFormat: "yy / mm / dd",
		minDate: 0
	});

	$('.fancybox').fancybox({
		padding:0,
		margin:0
	});

	function tabSwitch(element){
		element.click(function(e){
			var $this = $(this);
			$this.siblings().removeClass('active');
			$this.addClass('active');
			$('.bk-switch').hide();
			$('.bk-switch').eq($(this).index()).fadeIn();
			e.preventDefault();
		}).eq(0).trigger('click');
	}
	tabSwitch($('.rooms-type ul li, .hotel-col-left .hotel-detail-tabs li, .ab-tab ul li, .meeting-content > ul > li'));

	new WOW().init();

	$('.ab-question .ques-list em').click(function(){
		$(this).parent().siblings('.ques-list').find('p').slideUp();
		$(this).next('p').slideDown();
	});

	$('.news-tag .tags').click(function(){
		$(this).toggleClass('active');
	});

	/*garden map*/
	for(i=1; i<=24; i++){
		//$('.draw-map').append('<div class=mark0'+i+'>'+'</div>')
		$('.mark0'+i).css({'background-image':'url(img/garden/mark0'+i+'.png)'});
	}

	$('.draw-map div[class^=mark]').hover(function() {
		$(this).children('.eqip-info').stop().fadeIn()
	}, function() {
		$(this).children('.eqip-info').stop().fadeOut()
	});
});