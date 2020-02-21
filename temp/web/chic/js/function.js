$(function(){
	/*swiper*/
	var swiper = new Swiper('.main-slider, .product-slider', {
		autoplay:4000,
		speed:400,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
		loop:true,
        paginationClickable: true,
		pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
	});

	var swiper2 = new Swiper('.dress-style', {
        slidesPerView: 5,
        paginationClickable: true,
        nextButton: '.dress-style .swiper-button-next',
        prevButton: '.dress-style .swiper-button-prev'
    });

    var swiper3 = new Swiper('.recently-viwed', {
        slidesPerView: 5,
        paginationClickable: true,
        nextButton: '.recently-viwed .swiper-button-next',
        prevButton: '.recently-viwed .swiper-button-prev'
    });

	/*top icons menu*/
	$('.m-top-icons').click(function(){
		var navOffsetX = $('.top-icons-menu').width();	
		$('.m-nav-menu').hide();
		if(!$('.top-icons-menu').is(':visible')){
			$('.wrapper').addClass('lightblack');
			$('.top-icons-menu').css({right:-navOffsetX});
			$('.top-icons-menu').show().animate({right:0},400);
		}else{
			$('.top-icons-menu').hide();
			$('.wrapper').removeClass('lightblack');
		}
	});

	/*nav-m*/
	$('.m-nav').click(function(){
		var navOffsetX = $('.m-nav-menu').width();
		$('.top-icons-menu').hide();
		if(!$('.m-nav-menu').is(':visible')){
			$('.wrapper').addClass('lightblack');
			$('.m-nav-menu').css({left:-navOffsetX});
			$('.m-nav-menu').show().animate({left:0},400);
		}else{
			$('.m-nav-menu').hide();
			$('.wrapper').removeClass('lightblack');
		}
	});	

	$('.wrapper').click(function(){
		$('.top-icons-menu, .m-nav-menu').hide();
		$('.wrapper').removeClass('lightblack');
	});

	$('.m-nav-menu > ul > li > a').click(function(){
		$(this).parent('li').siblings().children('a').removeClass('active');
		$(this).addClass('active');
		$('.m-nav-menu ul ul').hide();
		$(this).next().stop().slideDown(400);
	});

	/*nav*/
	$('.nav > ul > li').hover(function() {
		$(this).children('ul').stop().fadeIn(400);
	}, function() {
		$(this).children('ul').stop().hide();
	});

	/*cart*/
	$('.cart-list').hover(function() {
		$('.cart-detail').stop().fadeIn(400);
	}, function() {
		$('.cart-detail').stop().hide();
	});

	/*footer*/
	$('.footer .container > ul > li').click(function(){
		$(this).siblings().removeClass('active').children('ul').stop().slideUp(400);
		$(this).addClass('active').children('ul').stop().slideDown(400);
	});

	/*fix bar*/
	$('.side-scroll').on('click', function(){
		$('html, body').stop(true,true).animate({scrollTop:0},1000);
	});

	/*nano scroller*/
	$(".nano").nanoScroller({ alwaysVisible: true });

	/*goods hover*/
	$(window).on('load resize', function(){
		var $maskImgHeight = $('.mask').siblings('img').height();
		$('.mask').height($maskImgHeight);
	});
	$('.goods-content .col-three a, .goods-content .col-half a').hover(function() {
		$(this).find('.mask').stop().fadeIn();
	}, function() {
		$(this).find('.mask').stop().fadeOut();
	});

	/*flex slider*/
	$('.detail-slider .flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		directionNav: false,
		pauseOnHover: true,
		slideshowSpeed: 4000,
		animationSpeed: 800
	});

	/*product detail*/
	$('.dc-title ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.detail-content > ul > li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.dc-section').hide();
		$('.dc-section').eq($(this).index()).fadeIn()
	});

	$('.m-detail-content .tabs').click(function(){
		$(this).siblings().removeClass('active').find('.m-dc-section').stop().slideUp();
		$(this).addClass('active').find('.m-dc-section').stop().slideDown();
	});

	/*buy step*/
	$('.bi-list input[type="radio"]').focus(function(){
		$(this).siblings('input[type="text"]').removeProp('disabled');
	});

	$('.company-invoice').focus(function(){
		$('.invoice').fadeIn();
	});

	$('.item-fav').click(function(){
		$(this).toggleClass('active');
	});

	/*popup*/
	$('.fancybox').fancybox({
		padding:0,
		margin:[0,20,0,20]
	});

	/*qa*/
	$('.qa-list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.qa-list li').children('p').stop().slideUp();
		$(this).children('p').stop().slideDown();
	});

	/*member-fav select all*/
	$('.select-item .si-selected').click(function(){
		$('.si-product').prop('checked','checked');
	});
	$('.select-item .si-cancel').click(function(){
		$('.si-product').prop('checked','');
	});

	/*css*/
	$('.width100').parent('div').siblings('div').children('span').css('width','110');
});