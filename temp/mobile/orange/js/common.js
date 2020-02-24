$(function(){
	var pressBtn = $('.title-btn'),
		title = $('.title-start'),
		bottle = $('.bottle-col'),
		bottlePull = $('.bottle-pull'),
		bottleShot = $('.bottle-shot'),
		bubble = $('.bubble'),
		titleBar = $('.title-bar'),
		hand = $('.hand'),
		logo = $('.logo');

	pressBtn.on('click touchstart', function(){
		$('.title-start').addClass('animated fadeOutLeft');
		$(this).addClass('animated zoomOut');
		bottle.show().addClass('animated fadeInRight');
		bottlePull.addClass('animated pulled');
		bottleShot.addClass('animated fadeInRight');
		bubble.show().addClass('animated bubbleIn');
		titleBar.show().addClass('animated fadeInDown');
		hand.show().addClass('animated fadeInRight');
		logo.show().addClass('animated finalZoomIn');
		$('.oil-drit, .pan-dirt').addClass('fade-dirt');

		setTimeout(removeBottle,1800);
	});

	function removeBottle(){
		bottle.removeClass('fadeInRight').fadeOut(300);
		title.remove();
		pressBtn.remove();
	};

});