$(function(){
	$(window).load(function(){
		$('.loading').fadeOut(function(){
			$(this).remove();
		});
	});

	(function menuFunc(){
		var $menuBtn = $('.menu a'),
		$menuContent = $('.menu-col'),
		$menuCancel = $('.menu-cancel > i'),
		$menuMain = $('.menu-content > ul > li'),
		$menuSub = $('.menu-content > ul > li > ul'),
		$btnExplore = $('.btn-explore');

		$menuBtn.on('click', function(){
			$menuSub.stop().hide();
			$menuMain.removeClass('active');
			$menuContent.stop().fadeIn(300);
		});

		$menuCancel.on('click', function(){
			$menuContent.stop().fadeOut(300);
		});

		$menuMain.on('click', function(){
			$menuSub.stop().slideUp(300);
			$(this).addClass('active').siblings().removeClass('active');
			$(this).find('ul').stop().slideDown(300);
		});

		$btnExplore.on('click', function(){
			$menuContent.stop().fadeIn(300)
			$menuSub.stop().hide();
			$menuMain.removeClass('active').last().addClass('active').find('ul').stop().show();
		});
	}());

	var switchTabFunc = function(){
		var switchTabs = $('.tab-switch .btn-tabs'),
			tabContent = $('.tab-cotnet');
		switchTabs.on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			tabContent.hide()
			tabContent.eq($(this).index()).fadeIn();
			return false;
		}).first().click();
	}();

	$('.sliders .swiper-container').each(function(){
		var mySwiper = new Swiper($(this),{
			grabCursor: true,
			autoplay:3000,
			speed:600,
			autoplayDisableOnInteraction:false,
			effect:'slide',
			onTouchEnd: function(){
				mySwiper.startAutoplay();
			},
			nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        observer: true,
			observeParents: true
		});
	});

	var qaSlide = function(){
		$('.form-style .ques-list em').click(function(){
			$(this).parent().siblings('.ques-list').find('p').slideUp();
			$(this).next('p').slideDown();
		});
	}();
});