(function(){
	var c = document.location.pathname.split("/")[1];
	$('#globalHeader').load('common/global_header_' + c + '.html');
	$('#globalFooter').load('common/global_footer_' + c + '.html');

	var scripts = ["//www.muji.com/js/lib/cssua.js","//www.muji.com/js/lib/fastclick.js"];

	for(var i = 0; i < scripts.length; i++) {
	    var script = document.createElement("script");
	    script.src = scripts[i];
	    document.body.appendChild(script);
	}

})();


$(function(){


	if(typeof cssua === "object" && cssua.ua.mobile && typeof FastClick === "function"){

			var selectors = [
				$("#hGlobalNav h1").get(0),
				$("#hSearch h1").get(0),
				$("#hGlobalNav .cancel").get(0),
				$("#hSearch .cancel").get(0)
			];

			for(var i = 0, sLen = selectors.length; i < sLen; i++ ) {
				if(selectors[i] != undefined){
				FastClick.attach(selectors[i]);
				}
			}

	}

	$(document).on("click", "#hGlobalNav h1", function(){
		$("body").addClass("menuOpen");
	});

	$(document).on("click", "#hGlobalNav .cancel", function(){
		$("body").removeClass("menuOpen");
	});

	$(document).on("click", "#hSearch h1", function(){
		$("body").addClass("searchOpen");
		$("#hSearch input[type='search']").focus();
	});

	$(document).on("click", "#hSearch .cancel", function(){
		$("body").removeClass("searchOpen");
	});


});