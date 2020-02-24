$(function(){
	var page01 = $('.page01'),
		page02 = $('.page02'),
		page03 = $('.page03'),
		pageSuccess = $('.page-success'),
		pageFail = $('.page-fail'),
		enterBtn = $('.page01 .enter-btn'),
		startBtn =  $('.page02 .enter-btn'),
		gameTime = 60,
		timeFunc,
		timeDisplay = $('.game-time b'),
		answerDisplay = $('.game-answer b');

	enterBtn.on('click', function(){
		page01.hide();
		page02.fadeIn(300);
	});

	startBtn.on('click', function(){
		page02.hide();
		page03.fadeIn(300);
		timeFunc = setInterval(timeCount,1000);
	});

	$('.wrong-place').on('click', function(e){
		e.stopPropagation();
		$(this).addClass('active');
		// console.log($('.active').length);
		answerDisplay.text($('.active').length);
		if($('.active').length == 10){
			clearInterval(timeFunc);
			page03.hide();
			pageSuccess.fadeIn(300);
		};
	});	

	$('.game-wrap').on('click', function(){
		$('.game-wrap').addClass('shake');
		setTimeout(function () { 
		    $('.game-wrap').removeClass('shake');
		}, 600);
	});	

	function timeCount(){
		if(gameTime != 0){
			gameTime--;
			timeDisplay.text(gameTime);
		}else{
			gameTime = 0;
			clearInterval(timeFunc);
			page03.hide();
			pageFail.fadeIn(300);
		};
	};

	$('.btn-challenge').on('click', function(){
		pageFail.add($('.answer-pic')).hide();
		$('.wrong-place').removeClass('active');
		answerDisplay.text(0);
		page03.fadeIn(300);
		timeDisplay.text(60);
		gameTime = 60;
		timeFunc = setInterval(timeCount,1000);
	});

	$('.btn-answer').on('click', function(){
		$('.answer-pic').fadeIn(300);
	});

	/*$(page01, page02).hide();
	pageSuccess.show();*/
});