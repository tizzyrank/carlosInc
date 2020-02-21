$(function(){
	function mobileMenu(){
		$("#hGlobalNav h1").on("click", function(){
			$("body").addClass("menuOpen");
		});

		$("#hGlobalNav .cancel").on("click", function(){
			$("body").removeClass("menuOpen");
		});
	};
	mobileMenu();

	// $(window).on('load', function(){
		$('.top-col').addClass('animated');
	// });
});