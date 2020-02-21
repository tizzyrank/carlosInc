$(function(){
	var position1 = $('.inbox1').offset().top + $('.inbox1').height();
	var position2 = $('.inbox2').offset().top + $('.inbox2').height();
	var position3 = $('.inbox3').offset().top + $('.inbox3').height();
	var position4 = $('.inbox4').offset().top + $('.inbox4').height();
	var position5 = $('.inbox5').offset().top + $('.inbox5').height();
	var position6 = $('.inbox6').offset().top + $('.inbox6').height();

	$(window).bind('scroll',function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > position1-55) {
			$(".steps_nav").addClass("fix")
		}
		else {
			$(".steps_nav").removeClass("fix")
		}
		if (scrollTop >= position1-55) {
			$(".nav1").addClass("inactive")
		}
		else {
			$(".nav1").removeClass("inactive")
		} 
		if (scrollTop >= position2-55) {
			$(".nav2").addClass("inactive")
			$(".nav1").removeClass("inactive")
		}
		else {
			$(".nav2").removeClass("inactive")
		}   
		if (scrollTop >= position4-55) {
			$(".nav3").addClass("inactive")
			$(".nav2").removeClass("inactive")
		}
		else {
			$(".nav3").removeClass("inactive")
		}   
		if (scrollTop >=  position5-55) {
			$(".nav4").addClass("inactive")
			$(".nav3").removeClass("inactive")
		}
		else {
			$(".nav4").removeClass("inactive")
		}   
		if (scrollTop >=  position6-55) {
			$(".nav5").addClass("inactive")
			$(".nav4").removeClass("inactive")
		}
		else {
			$(".nav5").removeClass("inactive")
		}     
	});
	
	$(function(){
		$(".nav1").click(function () {
			$("html,body").animate({ scrollTop: position1-54 }, 1200);       
			return false;
		});
		$(".nav2").click(function () {
			$("html,body").animate({ scrollTop: position2-55 }, 1200);
			return false;
		});
		$(".nav3").click(function () {
			$("html,body").animate({ scrollTop: position4-55 }, 1200);
			return false;
		});
		$(".nav4").click(function () {
			$("html,body").animate({ scrollTop: position5-55 }, 1200);
			return false;
		});
		$(".nav5").click(function () {
			$("html,body").animate({ scrollTop: position6-55 }, 1200);
			return false;
		});
	});
});