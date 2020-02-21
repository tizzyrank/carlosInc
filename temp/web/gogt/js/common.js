$(function(){
	var stars = document.getElementById("stars"),
		ships = document.getElementById("ships"),
		starLord = document.getElementById("starLord"),
		rocket = document.getElementById("rocket"),
		gamora = document.getElementById("gamora"),
		drax = document.getElementById("drax"),
		yondu = document.getElementById("yondu"),
		nebula = document.getElementById("nebula"),
		mantis = document.getElementById("mantis"),
		pflag = true,
		panels = [ships, starLord, rocket, gamora, drax, yondu, nebula, mantis];

	var movementStrength = 15;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	$("body").mousemove(function(e) {
		var pageX = e.pageX - $(window).width() / 2;
		var pageY = e.pageY - $(window).height() / 2;
		var newvalueX = width * pageX * -1 - 50;
		var newvalueY = height * pageY * -1 - 50;
		for (i = 0; i < panels.length; i++) {
			var x = newvalueX + i;
			var y = newvalueY + i;
			$(panels[i]).css("transform", "translate(50%,50%) translate3d(" + x + "%," + y + "%, 0vw)");
		}
	});

	window.addEventListener('deviceorientation', function(e) {
		var alpha = e.alpha,
			beta = e.beta,
			gamma = e.gamma;
		for (i = 0; i < panels.length; i++) {
			var mobileX = Math.round(gamma * 0.5 - 50);
			var mobileY = Math.round(beta * 0.5 - 75);
			$(panels[i]).css("transform", "translate(50%,50%) translate3d(" + mobileX + "%," + mobileY + "%, 0vw)");
		}
	}, false);
});