$(function(){	
	//slider-bn
	$('#slider-bn').bjqs({
		'height' : 300,
		'width' : 1000,
		'showcontrols' : false,
		'centermarkers' : false,
		'animduration' : 800,
		'animspeed' : 3500,
		'automatic' : true
	});	
	$('#slider-bn-small').bjqs({
		'height' : 200,
		'width' : 1000,
		'showcontrols' : false,
		'centermarkers' : false,
		'animduration' : 800,
		'animspeed' : 3500,		
		'automatic' : true
	});		

	//box hover
	$('.box').hover(function(){
		$(this).find('.name').stop().animate({'bottom':'-20px'},500);
	}, function(){
		$(this).find('.name').stop().animate({'bottom':'-56px'},500);
	});	

	//exp box hover	
	$('.exp-box').hover(function(){
		$(this).find('h4').stop().animate({'top':'147px'},500);
	}, function(){
		$(this).find('h4').stop().animate({'top':'180px'},500);
	});	

	//cate box hover
	$('.exp-box').hover(function(){
		$(this).find('h3').stop().animate({'top':'0px'},500);
	}, function(){
		$(this).find('h3').stop().animate({'top':'180px'},500);
	});	

	//在地體驗下拉
	$('.title > ul > li >a').click(function(){
		$(this).siblings('ul').children('li').slideToggle();
	});
	$('.title ul ul li a').click(function(){
		$('.title > ul > li >a').html($(this).text()+'<span>'+'</span>');
		$('.title ul ul li').slideUp();
	});

	//detail
	$('.tabs li a').click(function(){
		$('.tabs li a').removeClass('on');
		$(this).addClass('on');
		$('.detail-content').hide();
		$('.detail-content').eq($(this).parent('li').index()).show();
	});

	//popup
	$('.fancybox').fancybox();
	$('.piclist .fancybox').fancybox({
		
	});	

	//member form-list
	$('.orderlist a').click(function(){
		$('.orderlist a').removeClass('on');
		$(this).addClass('on');
		$('.form-list').hide();
		$('.form-list').eq($(this).parent('li').index()).show();
	});
});