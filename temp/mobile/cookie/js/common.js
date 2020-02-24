$(function(){
	var mainTitle = $('.main-scene h1'),
		btnStart = $('.btn-start'),
		mainScene = $('.main-scene'),
		boy = $('.boy'),
		brick = $('.brick'),
		brick2 = $('.brick2'),
		cookie = $('.cookie'),
		finalTitle = $('.main-scene h2');

	btnStart.click(function() {
		mainTitle.add($(this)).fadeOut(300);
		mainScene.addClass('bg-move');
		boy.addClass('jump');
		brick.addClass('move');
		brick2.addClass('move');
		setTimeout(function(){
			brick.fadeOut(200);
		},2600)
		cookie.addClass('move');
		finalTitle.addClass('active');
	});

	cookie.on('webkitAnimationEnd', function(){
		boy.addClass('strong');
	});

	finalTitle.on('webkitAnimationEnd', function(){
		boy.fadeOut(300);
		$('.product01, .product02, .btn-more').addClass('active');
	});
});