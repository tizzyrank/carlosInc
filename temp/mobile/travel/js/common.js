$(function(){
	$.slidebars();
	$('.main-bn').bjqs({
		height  : 500,
		width   : 900,
		animduration : 650,
		responsive  : true,
		automatic : true,
		animspeed : 3000,
		hoverpause : false,
		showmarkers : false,
		showcontrols : false
	});	

	$('.bxslider').bxSlider({
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideMargin: 0,
		pager: false,
		hideControlOnEnd: true
	});	

	$.scrollUp();
	$('.fancybox').fancybox({
		 width    : "100%",
		 height   : "auto",
		 autoSize : false
	});

	$('.p-radio label').click(function(){
		$('.p-radio label').removeClass('radio-active');
		$(this).addClass('radio-active');
		$('.p-radio input').removeAttr('checked');
		$(this).siblings('input').attr('checked','checked');
	});

	var $peopleNumer = $('.people-number select');
	$peopleNumer.change(function(){
		$(this).siblings('span').text($(this).val());
	});

	var scrollMenu = $('.scroll > ul');
	scrollMenu.click(function(){
		$(this).find('ul').children('li').stop().slideToggle(500);
	});

	var tabChoice = $('.tabs > ul > li > a');
	tabChoice.click(function(){
		tabChoice.removeClass('on');
		$(this).addClass('on');
		$('.tab-content').hide();
		$('.tab-content').eq($(this).parent('li').index()).show();
	});

	$('.maintitle').click(function(){
		$('.scroll-prize ul ul li a').slideUp(500);
		$(this).siblings('ul').find('a').stop().slideToggle(500);
	});

	$('.accroding-title').click(function(){
		$('.accroding-edit').slideUp(500);
		$(this).next('.accroding-edit').stop().slideToggle(500);
	});
})