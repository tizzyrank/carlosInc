$(function(){

    (function noticeDorp(){
		var notice = $('.notice-btn');
		notice.on('click', function(){
			if($(this).next('.notice-content').is(':hidden')){
				var ruleTop = $('.rules').offset().top;

				$(this).next('.notice-content').slideDown(400);
				$(this).text('活動辦法 [ 了解更多 ▲ ]');
				$('html, body').animate({scrollTop: ruleTop},800);
			}else{
				$(this).next('.notice-content').slideUp(400);
				$(this).text('活動辦法 [ 了解更多 ▼ ]');
			};
		});
	}());

	$('.ans li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	function pressPrint(){
		var myElement = document.querySelector('.fingerPrint');
		if(myElement){
			var mc = new Hammer(myElement);
		    mc.on('press pressup', function(event) {
		    	if(event.type=='press'){
		    		$('.bg-gray').addClass('active');
		    		$('.fingerPrint').removeClass('flash')
		    		$('.title01, .title02, .subTitle01, .subTitle02').addClass('fadeOut');
		    	}else if(event.type=='pressup'){
		    		$('.bg-gray').removeClass('active');
		    		$('.fingerPrint').addClass('flash')
		    		$('.title01, .title02, .subTitle01, .subTitle02').removeClass('fadeOut');
		    	};
		    	if(event.deltaTime >= 1000){
		    		$('.mipA').hide();
		    		$('.mipB').fadeIn(300);
		    	}
		    });
		}
	};
	pressPrint();

	$('.btn-confirm').click(function(){
		checkFormData();
	})

	$('.btn-answer').click(function(){
		$('.mipB').hide();
		$('.mipC').fadeIn(300);
	});

	/*form data js*/
	$("#spanSubmitInfo").hide();
	var submitted = false;

    function onSubmitEventHandler(){
        $("#spanSubmitInfo").show();
        $("#btnSubmit").hide();

        if(checkFormData())
        {
            submitted=true;

            return true;
        }
        else
        {
            $("#spanSubmitInfo").hide();
            $("#btnSubmit").show();

            submitted=false;

            return false;
        }
    }

    function checkFormData(){
        var hasError = false;

        if($("#entry_737272527").val() == "")
        {
            alert("請填寫姓名");
            hasError = true;
        }
        else if($("#entry_1974593567").val() == "")
        {
            alert("請填寫手機號碼");
            hasError = true;
        }
        else if(!$.isNumeric( $("#entry_1974593567").val()))
        {
            alert("電話請填寫數字");
            hasError = true;
        }
        else if($.isNumeric($("#entry_1974593567").val()) && !$("#entry_737272527").val()==""){
        	alert('恭喜完成搶票!');
        	$('.mipC').hide();
        	$('.mipA').fadeIn(300);
			var rewardLink = window.open();
			rewardLink.location= 'http://ticket.appledaily.com.tw/mi6.php';
        }

        return !hasError;
    }
});