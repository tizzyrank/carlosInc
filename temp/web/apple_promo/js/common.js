$(function(){
	$(window).load(function(){
		$('.loading').fadeOut();
		$('.cb-top, .cb-bottom').addClass('motion');

		AOS.init({
	      	disable: 'mobile',
	      	duration: 700,
	      	offset: 0
	    });

		var mySwiper = new Swiper('.pc-slider .swiper-container',{
			grabCursor: true,
			autoplay:3000,
			speed:600,
			autoplayDisableOnInteraction:false,
			effect:'coverflow',
			onTouchEnd: function(){
				mySwiper.startAutoplay();
			}
		});

		var mySwiper2 = new Swiper('.mobile-slider .swiper-container',{
			slidesPerView: 2,
			spaceBetween: 20
  		});
	});
});