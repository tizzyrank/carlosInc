$(function(){
	$('.scroll-top').click(function(){
		$('html, body').stop().animate({'scrollTop':0}, 600)
	});

	$(window).on('scroll', function(){
		var winTop = $(window).scrollTop();
		if(winTop > 600){
			$('.scroll-top').addClass('active');
		}else{
			$('.scroll-top').removeClass('active');
		};
	});

	var clipItem = $('.related-clip ul li');
	clipItem.click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	function youtubeThumbs(){
		var $youtubeThumb = $('.related-clip'),
			$youtubeThumbUl = $youtubeThumb.find('ul'),
			$youtubeThumbLi = $youtubeThumbUl.children('li'),
			$youtubeThumbLiWidth = $youtubeThumbLi.outerWidth(true),
			$youtubeBtnPrev = $('.related-clip .btn-prev'),
			$youtubeBtnNext = $('.related-clip .btn-next'),
			$youtubeThumbLeft = $youtubeThumbUl.position().left,
			$thumbLeft = 0,
			$slideSpeed = 100;
		$youtubeThumbUl.width($youtubeThumbLi.length*$youtubeThumbLi.outerWidth(true)+$youtubeThumbLi.length*3.5);

		$youtubeBtnNext.click(function(){
			$youtubeThumbLeft = $youtubeThumbUl.position().left;
			if($youtubeThumbUl.width() + $youtubeThumbLeft >= $youtubeThumbLi.outerWidth(true)*5){
				$thumbLeft = $youtubeThumbLeft-$youtubeThumbLiWidth;
				$youtubeThumbUl.stop().animate({'left':$thumbLeft}, $slideSpeed);
				/*$youtubeThumbLi.click(function(){
					$youtubeThumbUl.css('left',$thumbLeft);
				});*/
			}
		});
		$youtubeBtnPrev.click(function(){
			$youtubeThumbLeft = $youtubeThumbUl.position().left;
			if($youtubeThumbLeft < 0){
				$thumbLeft = $youtubeThumbLeft+$youtubeThumbLiWidth;
				$youtubeThumbUl.stop().animate({'left':$thumbLeft}, $slideSpeed);
				/*$youtubeThumbLi.click(function(){
					$youtubeThumbUl.css('left',$thumbLeft);
				});*/
			}
		});
	};

	function toggleDm(){
		$('.sectionB .pdsA a').click(function(){
			$('.dm02').hide();
			$('.dm01').toggle(300, function(){
				if($('.dm01').is(':visible')){
					$('.sectionB .pdsA a').find('em').text('關閉');
				}else{
					$('.sectionB .pdsA a').find('em').text('瞭解更多');
				};
			});
			$('.sectionB .pdsB a em').text('瞭解更多');
		});
		$('.sectionB .pdsB a').click(function(){
			$('.dm01').hide();
			$('.dm02').toggle(300, function(){
				if($('.dm02').is(':visible')){
					$('.sectionB .pdsB a').find('em').text('關閉');
				}else{
					$('.sectionB .pdsB a').find('em').text('瞭解更多');
				};
			});
			$('.sectionB .pdsA a em').text('瞭解更多');
		}).click();
	};

	function switchTab(){
		var tabItem = $('.switch-tab li'),
			tabContent = $('.switch-content > div');
		tabItem.click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			tabContent.eq($(this).index()).fadeIn(300).siblings().hide();
		}).eq(0).click();
	};

	$('.shop-buy a').hover(function() {
		$('.color-bg').addClass('active');
	}, function() {
		$('.color-bg').removeClass('active');
	});


	$('.icon-menu').click(function(e){
		$('.m-menu').fadeToggle(300);
	});

	function scrollNav(){
		$(window).on('load resize', function(){
			var mMenu = $('.m-menu'),
				mItem = $('.m-menu ul li a'),
				secTop = [0, $('.sectionB').offset().top, $('.sectionC').offset().top, $('.sectionE').offset().top],
				secTime = 400,
				titleHeight = $('.title').outerHeight(true),
				titleHeightPc = $('.title').outerHeight(),
				pcItem = $('.nav li a');

			/*$('.icon-menu').click(function(e){
				mMenu.toggleClass('active');
			});*/

			mItem.click(function(e){
				//e.stopPropagation();
				//mMenu.removeClass('active');
				mMenu.fadeOut(300);
				$('html, body').stop().animate({'scrollTop':secTop[$(this).parent().index()]-titleHeight}, secTime);
			});

			pcItem.click(function(){
				/*pcItem.parent().removeClass('active');
				$(this).parent().addClass('active');*/
				$('html, body').stop().animate({'scrollTop':secTop[$(this).parent().index()]-titleHeightPc}, secTime);
			});

			$(window).scroll(function(){
				var winScrollTop = $(window).scrollTop();
				if(winScrollTop < secTop[1]-titleHeightPc-10){
					pcItem.parent().eq(0).addClass('active');
				}else{
					pcItem.parent().eq(0).removeClass('active');
				};
				if(winScrollTop < secTop[2]-titleHeightPc-10 && winScrollTop > secTop[1]-titleHeightPc-10){
					pcItem.parent().eq(1).addClass('active');
				}else{
					pcItem.parent().eq(1).removeClass('active');
				};
				if(winScrollTop < secTop[3]-titleHeightPc-10 && winScrollTop > secTop[2]-titleHeightPc-10){
					pcItem.parent().eq(2).addClass('active');
				}else{
					pcItem.parent().eq(2).removeClass('active');
				};
				if(winScrollTop > secTop[2]+200){
					pcItem.parent().eq(3).addClass('active');
					pcItem.parent().eq(2).removeClass('active');
				}else{
					pcItem.parent().eq(3).removeClass('active');
				};
			});

			$('.btn-close').click(function(){
				$('.popup-outer').hide();
			});

			$('body').click(function(){
				$('.popup-outer').hide();
			});

			$('.popup').click(function(e){
				e.stopPropagation();
			});
		});
	};

	youtubeThumbs();
	toggleDm();
	switchTab();
	scrollNav();

	$('#btnCheck').click(function() {
		$('.popupSwitch').hide();
		$('.popupData').fadeIn(300);
	});

	var	btnFinish = $('#btnSend'),
		targetIframe = $('#target-iframe'),
		submitted = false;

	targetIframe.on('load', function(){
		if(submitted) {
			alert('您已完成本日簽到!');
			$('.popup-outer').hide();
		}else{
			console.log(submitted);
		};
	});

	btnFinish.on('click', function(){
		onSubmitEventHandler();
		$('.form-style').submit();
	});

	function onSubmitEventHandler(){
        if(checkFormData())
        {
            submitted = true;
            return true;
        }
        else
        {
            submitted = false;
            return false;
        }
    };
    function checkFormData(){
        var hasError = false;

        if($("#entry_71364734").val() == "")
        {
            alert("請輸入姓名");
            hasError = true;
        }
        else if($("#entry_523578097").val() == "")
        {
            alert("請輸入電話");
            hasError = true;
        }
        else if(!$.isNumeric( $("#entry_523578097").val()))
        {
            alert("電話請填寫數字");
            hasError = true;
        } 
        else if($("#entry_1335878641").val() == "")
        {
            alert("請輸入個人FB貼文網址");
            hasError = true;
        }
        return !hasError;
    };
});