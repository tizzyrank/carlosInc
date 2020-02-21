$(function(){
	$('body').append('<div class="loading"><img src="img/loading.png"></div>');
	$(window).on('resize load',function(){
		var winWidth = $(window).width();
		if(winWidth >= 640){
			$(document).mousemove(function(e){
				var moveX=e.pageX,
					moveY=e.pageY;
				$('.main-product').css({left:160+moveX*0.025*-1,bottom:moveY*0.025+40})
			});
			youtubeBG();	
		};
		$('.loading').fadeOut(300, function(){
			$('.loading').hide();
			AOS.init({
		      	duration: 800,
		      	offset: -120,
		      	disable: 'mobile'
		    });
		});
		navSlide();
	});

	function youtubeBG(){
		$('#video').YTPlayer({
		    fitToBackground: true,
		    videoId: 'Mz1mZYhVBbc'
		});
	};

	var clipboard = new Clipboard('.textCopy');
	clipboard.on('success', function(e) {
		e.clearSelection();
		alert("已複製PO文文字");
	});

	$('[data-fancybox]').fancybox({
		youtube : {
			controls : 0,
			showinfo : 0
		},
		buttons : [
			'close'
		]
	});

	$('.menus').on('click', function(){
		$(this).toggleClass('open');
		if($('.m-nav').is(':hidden')){
			$('.m-nav').fadeIn();
			$('.m-nav ul').addClass('active');
		}else{
			$('.m-nav').fadeOut();
			$('.m-nav ul').removeClass('active');
		};
	});
	$('.m-nav ul li a').click(function(){
		$('.menus').click();
	});

	function navSlide(){
		var pagePos = [];
		pagePos.push($('.section04').offset().top);
		pagePos.push($('.section02').offset().top);
		pagePos.push($('.section03').offset().top);
		pagePos.push($('.product-grid').offset().top - 90);
		pagePos.push($('.product-notice').offset().top);
		$('.nav-desktop ul li a').on('click', function(){
			var $this = $(this);
			$('html, body').stop().animate({'scrollTop':pagePos[$this.parent().index()]},600);
		});
		$('.btnFantacy').click(function(){
			$('html, body').stop().animate({'scrollTop':pagePos[0]},600);
		});
		/*$('.btnFairy').click(function(){
			$('html, body').stop().animate({'scrollTop':pagePos[2]},600);
		});*/
		$('.m-nav ul li a').on('click', function(){
			var $this = $(this);
			$('html, body').stop().animate({'scrollTop':pagePos[$this.parent().index()]},10);
		});
	};

	$('.fb-share-style').click(function(){
		window.open('https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMz1mZYhVBbc&display=popup&ref=plugin&src=share_button', '發佈到Facebook', config='height=530,width=680');
	});
});