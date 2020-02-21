$(function(){
	/*swiper*/
	var swiper = new Swiper('.main-slider', {
		autoplay:4000,
		speed:400,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
		loop:true,
		pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30
	});

	var swiper = new Swiper('.market-slider', {
		autoplay:4000,
		speed:400,
		resizeReInit:true,
		calculateHeight:true,
		autoplayDisableOnInteraction:false,
		loop:true,
		pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30
	}); 

	var live_swiper = new Swiper('.live-slider', {
		autoplay:4000,
		speed:400,
		autoplayDisableOnInteraction:false,
		loop:true,
		pagination: '.live-swiper-tab',
		paginationClickable: true
	});

	var store_swiper = new Swiper('.store-slider', {
		autoplay:4000,
		speed:400,
		autoplayDisableOnInteraction:false,
		loop:true
	});

	/*fav toggle*/
	$('.fav').click(function(){
		$(this).toggleClass('active');
	});

	/*Best Tab Switch*/
	var $bestTab = $('.best-section ul li a');
	$bestTab.on('click',function(){
		$bestTab.parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.best-list').hide();
		$('.best-list').eq($(this).parent('li').index()).fadeIn();
	});

	/*menu*/
	$.slidebars({
		scrollLock: false
	});

	/*scroll to top*/
	$.scrollUp();

	/*search*/
	$('.search').click(function(){
		$('html').toggleClass('search-page');
		$('html').removeClass('cart-page');
		$('.cart-panel').add('.cart-bg').hide();
		if($('html').hasClass('search-page')){
			$('#sb-site').height($('.search-panel').height()+46);
			$('.search-panel').fadeIn(300);
		}else{
			$('#sb-site').height('');
			$('.search-panel').hide();
		}
	});
	$('.search-close').click(function(){
		$('.search-panel').hide();
		$('html').removeClass('search-page');
		$('#sb-site').height('');
	});

	/*cart*/
	$('.cart').click(function(){
		$('html').toggleClass('cart-page');
		$('html').removeClass('search-page');
		$('.search-panel').hide();
		if($('html').hasClass('cart-page')){
			$('#sb-site').height($(window).height());
			$('.cart-panel').add('.cart-bg').fadeIn(300);
		}else{
			$('#sb-site').height('');
			$('.cart-panel').add('.cart-bg').hide();
		}
	});
	$('.cart-bg').add('.btn-continue').click(function(){
		$('html').removeClass('cart-page');
		$('.cart-panel').add('.cart-bg').hide();
		$('#sb-site').height('');
	});

	/*soon tab*/
	var $soonTab = $('.soon-bn ul li a'),
		$soonBn = $('.soon-bn .soon-ad');
	$soonTab.click(function(){
		$soonTab.removeClass('active');
		$(this).addClass('active');
		$soonBn.hide();
		$soonBn.eq($(this).parent('li').index()).fadeIn();
	});
	$(window).on('resize load',function(){
		$('.live-item-des').height($('.live-itme-pic').height());
	});

	/*店家頁*/
	$('.btn-subscribe').click(function(){
		$(this).toggleClass('active');
	});
	/*
	$(window).on('resize load',function(){
		$('.si-store').height($('.seller-info .head_pic').height());
	});*/

	var $storeSelect = $('.store-cate').next('select'),
		$modelSelect = $('.select-model').next('select');
	$storeSelect.add($modelSelect).change(function(){
		$(this).prev('div').children('span').text($(this).val());
	});

	/*賣場頁*/
	var $btnPlus = $('.num-plus a'),
		$btnMinus = $('.num-minus a'),
		$productNum = parseInt($('.product-num p input').val());
	$btnPlus.click(function(){
		if( $productNum < 100){
			$productNum++;
			$('.product-num p input').val($productNum);
		}
	});
	$btnMinus.click(function(){
		if( $productNum > 1){
			$productNum--;
			$('.product-num p input').val($productNum);
		}
	});
	$('.more-pic').click(function(){
		$('.market-pic').fadeIn(500);
		$(this).hide();
	});

	/*生火按鈕*/
	$('.btn-hot').click(function(){
		var $hotNum = parseInt($(this).find('span').text())+1;
		$(this).addClass('active');
		if($(this).hasClass('hot-num')){
			$(this).find('span').text($hotNum);
		}
		$(this).removeClass('hot-num');		
	});

	/*會員tab*/
	$('.menu-tab a').on('click',function(){
		$('.menu-tab a').removeClass('active');
		$(this).addClass('active');
		$('.menu-contnet').hide();
		$('.menu-contnet').eq($(this).index()).show();
	});

	/*代購訂單*/
	$('.tb-btn-edit').on('click', function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).parents('.tb-section').find($('.editable')).hide();
			$(this).parents('.tb-section').find($('.bi-column')).show();
			$(this).parents('.tb-section').find($('.btn-delete')).show();
			$(this).text('完成');
		}else if(!$(this).hasClass('active')){
			$(this).parents('.tb-section').find($('.editable')).show();
			$(this).parents('.tb-section').find($('.bi-column')).hide();
			$(this).parents('.tb-section').find($('.btn-delete')).hide();
			$(this).text('編輯');
		}
	});

	$('.tb-section h5').click(function(){
		$(this).next('.drop-content').slideUp();
		$(this).removeClass('open');
		if($(this).next('.drop-content').is(':hidden')){
			$(this).next('.drop-content').slideDown();
			$(this).addClass('open');
		}
	});
})