$(function(){

	/*header function*/
	$('.header .lang').hover(function(){
		$(this).find('.lang-dorpdown').stop().fadeIn();
	},function(){
		$(this).find('.lang-dorpdown').stop().fadeOut();
	});

	$('.search input').focus(function(){
		$(this).addClass('active');
	});
	$('.search input').blur(function(){
		$(this).removeClass('active');
	});

	$('.header .mybag-dropdown').parents('li').hover(function(){
		$('.mybag-dropdown').stop().fadeIn();
	}, function(){
		$('.mybag-dropdown').stop().fadeOut();
	});

	$('.top-msg-close').click(function(){
		$(this).parent('div').hide();
	});

	/*nav*/
	$('.nav > div > ul > li').hover(function() {
		$(this).find('.sub-menu').stop().show().animate({'opacity':'1','top':'50px'},400);
	}, function() {
		$(this).find('.sub-menu').stop().hide().css({'opacity':'0','top':'25px'});
	});

	/*swiper*/
	var swiper = new Swiper('.main-slider', {
		autoplay:4000,
		speed:600,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
        paginationClickable: true,
		pagination: '.swiper-pagination'
	});

	var swiper2 = new Swiper('.collection-slider', {
		autoplay:4000,
		speed:600,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
        paginationClickable: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		loop:true
	});

	var swiper3 = new Swiper('.m-collect-slider', {
		speed:600,
        pagination: '.swiper-pagination2',
		paginationType: 'fraction',
		slidesPerView: 2
	});

	var swiper4 = new Swiper('.detail-slider', {
		autoplay:4000,
		speed:600,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
        paginationClickable: true,
		pagination: '.swiper-pagination',
		loop:true
	});

	var swiper5 = new Swiper('.related-slider', {
		speed:600,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
        paginationClickable: true,
		slidesPerView: 5,
		pagination: '.related-pagination',
		paginationType: 'fraction',
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
	});

	var swiper6 = new Swiper('.recent-slider', {
		speed:600,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
        paginationClickable: true,
		slidesPerView: 5,
		pagination: '.recent-pagination',
		paginationType: 'fraction',
		nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2'
	});

	var swiper7 = new Swiper('.m-related-slider', {
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
        paginationClickable: true,
		slidesPerView: 2
	});

	var swiper8 = new Swiper('.m-recent-slider', {
		speed:600,
        pagination: '.swiper-pagination2',
		paginationType: 'fraction',
		slidesPerView: 1
	});

	/*mobile menu*/
	$('.m-menu-icon').on('click', function(e){
		e.stopPropagation();
		$('body').toggleClass('m-wrap-left');
	});

	$('.m-menu-mybag').on('click', function(e){
		e.stopPropagation();
		$('body').toggleClass('m-wrap-right');
	});

	$('.wrap-cover').on('click', function(){
		$('body').removeClass('m-wrap-left m-wrap-right');
	});

	$(window).on('load resize', function(){
		var $headerHeight = $('.header').innerHeight();
		$('.m-search').height($headerHeight);
		$('.m-signin').height($headerHeight).css({'line-height':$headerHeight+'px'});
	});

	$('.m-nav > ul > li').click(function(){
		$('.m-nav ul ul').slideUp();
		$('.m-nav > ul > li').removeClass('active');
		if($(this).children('ul').is(':hidden')){
			$(this).addClass('active');
			$(this).children('ul').slideDown();
		}
	});

	/*tab switch*/
	$('.tab-switch ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content').hide();
		$('.tab-content').eq($(this).index()).fadeIn();
	}).eq(0).click();

	/*mobile filter switch*/
	$('.m-filter-btn').on('click', function(){
		$(this).children('i').removeClass('fa-plus fa-minus');
		if($('.m-cate-filter').is(':visible')){
			$(this).children('i').addClass('fa-plus');
			$(this).children('span').text('SHOW FILTER');
			$('.m-cate-filter').hide();
		}else if(!$('.m-cate-filter').is(':visible')){
			$(this).children('i').addClass('fa-minus');
			$(this).children('span').text('HIDE FILTER');
			$('.m-cate-filter').show();
		}
	}).click();

	/*detail*/
	$('.di-spec ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.di-s-tab ul li').click(function(){
		$('.tab-contnet > div').hide();
		$('.tab-contnet').children('div').eq($(this).index()).show();
	});

	/*login*/
	$(window).on('load resize', function(){
		if($(window).width()<1250){
			$('.create-new-acc a').attr('href','acc_create.html').removeClass('fancybox');
		}else{
			$('.create-new-acc a').attr('href','#acc-create').addClass('fancybox');
		};
	});

	/*popup*/
	$('.fancybox').fancybox({
		padding:0,
		margin:[0,20,0,20]
	});
	$('.close-popup').click(function(){
		$.fancybox.close();
	});

	/*qa*/
	$('.qa-col h4').click(function(){
		$('.qa-col > div').slideUp();
		$('.qa-col i').removeClass('fa-minus');
		if($(this).siblings('div').is(':hidden')){
			$(this).siblings('div').slideDown();
			$(this).siblings('i').addClass('fa-minus');
		}
	});
	$('.qa-col').eq(0).children('h4').click();

	/*credit card select*/
	$('.credit-card ul li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	});

	/*select style*/
	var $selectStyle = $('.select-style').children('select');
	$selectStyle.change(function(){
		$(this).siblings('span').text($('option:selected',this).text());
	});
});