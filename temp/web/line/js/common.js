$(function(){
	$(window).on('load', function(){
		$('.loader').fadeOut();
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated'
		})
		wow.init();

		function switchTab(){
			var $tabBtn = $('.switch-section > .wrap > ul > li > a'),
				$tabSectionBg = $('.switch-section'),
				$btnOriginal = $('.btn-original'),
				$tabScetion = $('.tab-content .tab-section');

			$tabBtn.on('click', function(){
				$(this).addClass('active').parent().siblings().children().removeClass('active');
				$tabScetion.eq($(this).parent().index()).fadeIn(300).siblings().hide();
				if($btnOriginal.hasClass('active')){
					$tabSectionBg.removeClass('ss-green').addClass('ss-blue');
				}else{
					$tabSectionBg.removeClass('ss-blue').addClass('ss-green');
				};
			});

			var $picSelect = $('.original-content > ul li img');
			$picSelect.on('click', function(){
				$picSelect.parent('li').removeClass('active');
				$(this).parent('li').addClass('active');
			});
		}

		function noticeDorp(){
			var notice = $('.notice-btn');
			notice.on('click', function(){
				if($(this).next('.notice-content').is(':hidden')){
					var ruleTop = $('.rules').offset().top;

					$(this).next('.notice-content').slideDown(400);
					$(this).text('得獎名單 [ 了解更多 ▲ ]');
					$('html, body').animate({scrollTop: ruleTop},800);
				}else{
					$(this).next('.notice-content').slideUp(400);
					$(this).text('得獎名單 [ 了解更多 ▼ ]');
				};
			});
		};

		function scroller(){
			var scrollBtn = $('.scroll-top');

			$(window).on('scroll', function(){
				var windowTop = $(this).scrollTop();
				if(windowTop > 600){
					scrollBtn.addClass('active');
				}else if(windowTop < 600){
					scrollBtn.removeClass('active');
				};
			});

			scrollBtn.click(function(){
				$('html, body').stop().animate({'scrollTop':0},600);
			});
		};

		switchTab();
		noticeDorp();
		scroller();
	});
});