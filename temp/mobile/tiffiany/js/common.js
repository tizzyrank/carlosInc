$(function(){
	var deviceWidth = $(window).width();
	if(deviceWidth > 480){
		mouseMotion();
	}else{
		mobileMotion();
	};

	function mouseMotion(){
		$(window).on('mousemove', function(event) {
		    var width = $(window).width();
		    var mouseX = event.pageX - (width * 0.5);
		    var height = $(window).height();
		    var mouseY = event.pageY - (height * 0.5);
		    var xAngle = (mouseY / height) * 240;
		    var yAngle = (mouseX / width) * 240;
		    //$('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
		    $('.cube').css("transform","rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
		});
	};

	function mobileMotion(){
		window.addEventListener('deviceorientation', function(e) {
			var alpha = e.alpha,
				beta = e.beta,
				gamma = e.gamma,
				mobileX = Math.round(beta * 1.1)-60,
				mobileY = Math.round(gamma * 1.1);
			$('.cube').css("transform","rotateX("+mobileX+"deg) rotateY("+mobileY+"deg)");			
		}, false);
	};

	$('.open-zone').on('click touchstart', function(){
    	$('.cb-front, .cb-back, .cb-right, .cb-left, .cb-top, .cb-bottom').addClass('open');
    	$('.ring').addClass('motion');
    	$('.btn').show().animate({'bottom':'20%','opacity':'1'},600);
    	$('.notice').fadeOut();
    });
});