$(function(){
	/*nav下拉選單*/
	$('.nav > ul > li').mouseenter(function(){
		$(this).children('.sub-nav').find('ul').height($(this).children('.sub-nav').height()-15);
		$(this).find('.sub-nav').stop(true,false).show().animate({'top':'45px','opacity':'1'},200);
	});
	$('.nav > ul > li').mouseleave(function(){
		$(this).find('.sub-nav').stop(true,false).hide().animate({'top':'55px','opacity':'0'},200);
	});
	
	/*購物車下拉*/
	$('.fn-cart').mouseenter(function(){
		$('.cart-list').stop(true,false).fadeIn(200);
		$(this).find('a:first').css({'color':'#ff4468'});
		$(this).find('a:first b').css({'color':'#fff'});
	});
	$('.fn-cart').mouseleave(function(){
		$('.cart-list').stop(true,false).fadeOut(200);
		$(this).find('a:first').css({'color':'#fff'});
		$(this).find('a:first b').css({'color':'#ff4468'});		
	});
			
	/*nav fixed*/
	$(window).on('scroll resize', function(){
		var scroll_Top = $(window).scrollTop(),
			scroll_height = $('.fn-bar').height()+$('.header').height()+$('.nav-frame').height();
		if(scroll_Top < scroll_height){
			$('.nav-frame').stop().css({position:'relative',top:"0px"});
			$('.nav-frame').next().css({'margin-top':'0px'});			
		}else if(scroll_Top > scroll_height && $('.nav-frame').css('position')=="relative"){
			$('.nav-frame').stop().css({position:"fixed",top:"-30px"}).animate({top:'0px'},350);
			$('.nav-frame').next().css({'margin-top':'65px'});
		}
	});
	
    /*偽div select search category*/
    $.divselect = function (searchSelect, inputselectid) {
        var inputselect = $(inputselectid);
        $(".search-select").click(function () {
            var ul = $(searchSelect + " ul");
            if (ul.css("display") == "none") {
                ul.slideDown("fast");
            } else {
                ul.slideUp("fast");
            }
        });
        $(".search-select ul li a").click(function () {
            var txt = $(this).text();
            $(searchSelect + " cite").html(txt);
            var value = $(this).attr("selectid");
            inputselect.val(value);
        });
    };
    $.divselect(".search-select", "#inputselect-select");	
			
	/*promo slider*/
	$('.promoSection').each(function(){
		var $block = $(this),
			$slides = $('ul', $block),
			_width = $block.width(),
			$li = $('li', $slides),
			_animateSpeed = 600,
			timer, _showSpeed = 8000, _stop = false;			
	
		var _str = '';
		for(var i=0, j=$li.length;i<j;i++){
			_str += '<li class="playerControl_' + (i+1) + '"></li>';
		}
		var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parents('.promoBlock'));
		var $playerControlLi = $playerControl.find('li').click(function(){
			var $this = $(this);
			$this.addClass('current').siblings('.current').removeClass('current');
			$li.hide();
			$li.eq($this.index()).fadeIn(600);
	
			return false;
		}).eq(0).click().end();	

		$('.promoBlock').hover(function(){
			clearTimeout(timer);
		}, function(){
			timer = setTimeout(move, _showSpeed);
		});
			
		function move(){
			var tabIndex = $li.parents('.promoBlock').children('.playerControl').find('.current').index();
			$playerControlLi.eq((tabIndex + 1) % $playerControlLi.length).click();
			timer = setTimeout(move, _showSpeed);
		}	

		timer = setTimeout(move, _showSpeed);
	});

	/*feature store*/
	$('.pm-feature .mask-contnet button, .pm-feature .mask-contnet span').remove();
	$('.promoBlock .pm-feature').prepend('<div class="feature-pos"></div>');
	var $featureLi = $('.pm-feature ul li'),
	    $featurePos = $('.pm-feature .feature-pos'),
	    $featureControl = $('.pm-feature').siblings('.playerControl').children('li');
	    $featureControl.click(function(){
			if($featureLi.eq(0).css('display')=='list-item'){
				$featurePos.css({'background-position':'-380px 0px'});
			}else if($featureLi.eq(1).css('display')=='list-item'){
				$featurePos.css({'background-position':'-460px 0px'});
			}else if($featureLi.eq(2).css('display')=='list-item'){
				$featurePos.css({'background-position':'-540px 0px'});
			}	
	    });
			
	/*promo hover*/
	$('.promoSection a').hover(function(){
		$(this).find('.mask-contnet').stop(true,false).fadeIn(300)},
	function(){
		$(this).find('.mask-contnet').stop(true,false).fadeOut(300);
	});		
	$('.btn-fav, .btn-subscribe, .btn-cart').click(function(){
		$(this).toggleClass('active');
	});		
		
	/*item goods hover*/
	$('.box-big a').hover(function(){
		$(this).find('.mask-contnet').stop(true,false).fadeIn(300)},
	function(){
		$(this).find('.mask-contnet').stop(true,false).fadeOut(300);		
	});
	$('.box-std a').hover(function(){
		$(this).find('.mask-contnet').stop(true,false).fadeIn(300)},
	function(){
		$(this).find('.mask-contnet').stop(true,false).fadeOut(300);		
	});
	$('.goods-item a').hover(function(){
		$(this).find('.mask-contnet-fav').stop(true,false).animate({'top':'0px'},300);},
	function(){
		$(this).find('.mask-contnet-fav').stop(true,false).animate({'top':'120px'},300);		
	});
	$('.box-hot a').hover(function(){
		$(this).find('.mask-contnet').stop(true,false).fadeIn(300)},
	function(){
		$(this).find('.mask-contnet').stop(true,false).fadeOut(300);		
	});	
	$('.box-list a').hover(function(){
		$(this).find('.mask-contnet').stop(true,false).fadeIn(300)},
	function(){
		$(this).find('.mask-contnet').stop(true,false).fadeOut(300);		
	});	

	/*tab switch*/
	$('.title-area ul li a').bind("click",function(){
		$(this).parent().siblings().find('a').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.title-area').siblings('.item-list').hide();
		$(this).parents('.title-area').siblings('.item-list').eq($(this).parent().index()).fadeIn(600);
	});

	var $tabLi =  $('.title-area ul li')
	var tabTimer, tabSpeed = 8000
	$('.tab-switch').hover(function(){
		clearTimeout(tabTimer);
	}, function(){
		tabTimer = setTimeout(tabMove, tabSpeed);
	});
	
	function tabMove(){
		var tabIndex = $tabLi.children().filter('.active').parent().index();
		tabIndex = (tabIndex + 1) % $tabLi.length;
		$tabLi.eq(tabIndex).children().click();
		tabTimer = setTimeout(tabMove, tabSpeed);
	}	
	tabTimer = setTimeout(tabMove, tabSpeed);

	/*buyer switch*/
	$('.articleList').mouseover(function(){
		var $article = $(this).parent('li');
		$('.articleList').removeClass('active');
		$(this).addClass('active')
		$('.imgDisplay img').attr('src','img/temp/buyer_info0'+$article.index()+'.jpg');
		$('.imgDisplay').attr('href',$(this).attr('href'));
	});		
	
	/*placeholder*/
	$('input:text[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
		
	/*分類頁切換商排序*/
	$('.rank-type .active').click(function(){
		if($(this).hasClass('upSort')){
			$(this).removeClass('upSort').addClass('downSort');
		}
		else if($(this).hasClass('downSort')){
			$(this).removeClass('downSort').addClass('upSort');			
		}
	});

	/*share-icon*/
	$('.btn-share').click(function(){
		$(this).parent('.mask-contnet').siblings('.item-share').toggleClass('fade-in');
		$(this).toggleClass('share-active');
	});

	$('.promoSection a, .goods a').mouseleave(function(){
		$('.item-share').removeClass('fade-in');
		$('.btn-share').removeClass('share-active');
	});

	/*修改商品連結網址*/
	$('.mask-contnet .btn-share, .mask-contnet .btn-fav, .item-share').each(function(){
		var $itemlink = $(this).parents('a').attr('href');
		$(this).mouseover(function(){
			if($itemlink != 'javascript:;')
			{
				$(this).parents('a').attr('href','javascript:;');
			}
		});
		$(this).mouseleave(function(){
			if($itemlink != 'javascript:;')
			{
				$(this).parents('a').attr('href',$itemlink);
			}
		});
	});		
	var apiLink = new Function('apiTarget','apiSite','apiTarget.click(function(){window.open(apiSite)})');
	apiLink($('.share-fb'),'https://www.facebook.com/')
	apiLink($('.share-twi'),'https://twitter.com/')
	apiLink($('.share-pin'),'https://www.pinterest.com/')
	apiLink($('.share-gp'),'https://plus.google.com/')

	/*搜尋商品商店bar*/
	$('input.search').focus(function(){
		$(this).siblings('.search-btn').animate({opacity:'1'},150);
	});

	$('input.search').blur(function(){
		$(this).siblings('.search-btn').animate({opacity:'0.5'},150);
	});

	function addSearchBtn(){
		$('.search-bar').after("<input type='submit' class='btn-search-store' id='search_store' value='找商店'>");
		$('.search-bar').after("<input type='submit' class='btn-search-goods' id='search_product' value='找商品'>");
	}

	addSearchBtn();
		
	/*footer fixed*/
	function footer_fixed(){
		if($('body').height() <= $(window).height())
		{
			$('.footer').addClass('footerfix');
		}else{
			$('.footer').removeClass('footerfix');			
		}
	}
	footer_fixed();	

	/*popup*/
	$('.fancybox').fancybox();
	
	/*scroll to top*/
	$.scrollUp();	

	/*happygo 會員*/
	$('.happygo-card').focus(function() {
		$(this).siblings('.w-normal').removeAttr('disabled');
		$('.happygo-id').siblings('.w-normal').attr('disabled','disabled');
	});
	$('.happygo-id').focus(function() {
		$(this).siblings('.w-normal').removeAttr('disabled');
		$('.happygo-card').siblings('.w-normal').attr('disabled','disabled');
	});

	/*選擇代購國家下拉*/
    $('.country-chosen select, .brand-country select').chosen();
    $('.country-chosen .chosen-single').prepend('<div class="country-count">幫你代購全球'+'<strong class="number1">1</strong>'+'<strong class="number8">8</strong>'+'國</div>');
    $('.chosen-results').click(function(){
    	var $countryCount = $(this).parents('.chosen-container').find('.country-count');
    	if($countryCount.next('span').text()!=""){
    		$countryCount.hide();
    	}
    });

    /*加入收藏訊息*/
    $('button.btn-fav').click(function(){
        if($(this).hasClass('active')){
             $.fancybox([
                { href : '#fav-msg' }
            ]);
         }
    });
    $('.fav-msg button, .btn-lg').click(function(){
        parent.$.fancybox.close();
    });
});