$(function () {
    //window load Animation
    function openAnimation() {
        let $loadingScene = $('.loading');
        let $loadingWord = $('.loading-word');
        /* $(window).on('load', function () { */
        $loadingScene.addClass('done');
        $loadingWord.fadeOut(200);
        setTimeout(function () {
            $loadingScene.remove();
        }, 1800);
        $('.mp-front, .mp-back, .logo').addClass('point');
        /* }); */
    };
    openAnimation();

    // header color switch
    function navSwitch() {
        let $navItem = $('nav ul li a');
        let navColor = {
            all: {
                color: '#020203'
            },
            games: {
                color: '#446a5e'
            },
            event: {
                color: '#3e5766'
            },
            sitePage: {
                color: '#6d4465'
            },
            landingPage: {
                color: '#684c4a'
            }
        };

        $navItem.on('mouseover click', function (e) {
            e.preventDefault();
            let $navName = $(this).text();
            switch ($navName) {
                case 'ALL':
                    $('header').css('backgroundColor', navColor.all.color);
                    break;
                case 'EVENT':
                    $('header').css('backgroundColor', navColor.event.color);
                    break;
                case 'LANDING PAGE':
                    $('header').css('backgroundColor', navColor.landingPage.color);
                    break;
                case 'GAMES':
                    $('header').css('backgroundColor', navColor.games.color);
                    break;
                case 'SITE PAGE':
                    $('header').css('backgroundColor', navColor.sitePage.color);
                    break;
            }
        }).on('click', function (e) {
            e.preventDefault();
            $navItem.removeClass('active');
            $(this).addClass('active');
        }).on('mouseout', function () {
            let $navColor = $('.active').data('color');
            $('header').css('backgroundColor', navColor[$navColor].color);
        });
    };
    navSwitch();

    // web portfolio list
    function webProtfoli() {
        let webData = [
            {
                imgUrl: 'img/web_010.jpg',
                webUrl: 'temp/web/hotel/index.html',
                mobileUrl: 'temp/mobile/hotel/index.html',
                name: '綠舞觀光飯店',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_023.jpg',
                webUrl: 'temp/web/annasui/index.html',
                name: 'Anna Sui 香水',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_01.jpg',
                webUrl: 'temp/web/wib/index.html',
                mobileUrl: 'temp/mobile/wib/index.html',
                name: 'World I Buy 購物商城',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_022.jpg',
                webUrl: 'temp/web/wjs/index.html',
                name: '萬金石馬拉松',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_027.jpg',
                webUrl: 'temp/web/gogt/index.html',
                name: '星際異攻隊2 前導頁',
                category: 'games'
            },
            {
                imgUrl: 'img/web_017.jpg',
                webUrl: 'temp/web/farlala/index.html',
                name: 'FARLALA 衣著',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_016.jpg',
                webUrl: 'temp/web/chic/index.html',
                name: 'CHIC GIRL 女鞋',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_025.jpg',
                webUrl: 'temp/web/line/index.html',
                name: 'Line貼圖大賞',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_032.jpg',
                webUrl: 'temp/web/mip6/index.html',
                mobileUrl: 'temp/mobile/mip6/index.html',
                name: 'MI6 指紋互動',
                category: 'games'
            },
            {
                imgUrl: 'img/web_019.jpg',
                webUrl: 'temp/web/mother/index.html',
                name: '撩媽攻略',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_024.jpg',
                webUrl: 'temp/web/apple_promo/index.html',
                name: '蘋果日報APP宣傳',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_035.jpg',
                webUrl: 'temp/web/scratchcard/index.html',
                mobileUrl: 'temp/mobile/scratchcard/index.html',
                name: '刮刮卡互動',
                category: 'games'
            },
            {
                imgUrl: 'img/web_026.jpg',
                webUrl: 'temp/web/member_fav/index.html',
                name: '壹會員 獨享超好康',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_028.jpg',
                webUrl: 'temp/web/tiffiany/index.html',
                mobileUrl: 'temp/mobile/tiffiany/index.html',
                name: 'Tiffany 鑽戒盒',
                category: 'games'
            },
            {
                imgUrl: 'img/web_021.jpg',
                webUrl: 'temp/web/pb/index.html',
                name: 'PB plus 運動加',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_020.jpg',
                webUrl: 'temp/web/muji/index.html',
                name: '無印良品 新生活',
                category: 'event'
            },
            {
                imgUrl: 'img/web_031.jpg',
                webUrl: 'temp/web/bumblebee/index.html',
                mobileUrl: 'temp/mobile/bumblebee/index.html',
                name: '大黃蜂 大家來找碴',
                category: 'games'
            },
            {
                imgUrl: 'img/web_030.jpg',
                webUrl: 'temp/web/pirate/index.html',
                name: '神鬼奇航問答',
                category: 'games'
            },
            {
                imgUrl: 'img/web_018.jpg',
                webUrl: 'temp/web/gmi/index.html',
                name: 'GMI 電子',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_04.jpg',
                webUrl: 'temp/web/travel/index.html',
                mobileUrl: 'temp/mobile/travel/index.html',
                name: '旅仁 Ever Travel',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_02.jpg',
                webUrl: 'temp/web/dress/event.html',
                name: '女裝洋裝活動頁',
                category: 'event'
            },
            {
                imgUrl: 'img/web_03.jpg',
                webUrl: 'temp/web/wib_open/index.html',
                name: 'WiB 開幕預告網頁',
                category: 'landing-page'
            },
            {
                imgUrl: 'img/web_029.jpg',
                webUrl: 'temp/web/logan_lucky/index.html',
                name: 'LoganGo 轉盤',
                category: 'games'
            },
            {
                imgUrl: 'img/web_05.jpg',
                webUrl: 'temp/web/wmall/index.html',
                name: 'WMALL 時尚玩家購物站',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_033.jpg',
                webUrl: 'temp/web/orange/index.html',
                mobileUrl: 'temp/mobile/orange/index.html',
                name: '油汙清潔蓋板',
                category: 'games'
            },
            {
                imgUrl: 'img/web_09.jpg',
                webUrl: 'temp/web/beach/event.html',
                name: '決勝海灘 心機穿搭',
                category: 'event'
            },
            {
                imgUrl: 'img/web_07.jpg',
                webUrl: 'temp/web/babe/event.html',
                name: '戶外大胆玩 親子寶貝',
                category: 'event'
            },
            {
                imgUrl: 'img/web_08.jpg',
                webUrl: 'temp/web/bag/event.html',
                name: '戀夏包包 BAG STYLE',
                category: 'event'
            },
            {
                imgUrl: 'img/web_034.jpg',
                webUrl: 'temp/web/cookie/index.html',
                mobileUrl: 'temp/mobile/cookie/index.html',
                name: '元氣餅乾互動',
                category: 'games'
            },
            {
                imgUrl: 'img/web_011.jpg',
                webUrl: 'temp/web/bike/index.html',
                name: 'BIKE LOYALTY 街車',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_06.jpg',
                webUrl: 'javascript:;',
                name: '中國信託 旅遊網',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_012.jpg',
                webUrl: 'javascript:;',
                name: 'Double Six 咖啡',
                category: 'site-page'
            },
            {
                imgUrl: 'img/web_013.jpg',
                webUrl: 'temp/web/blackwhite/event.html',
                name: 'Black x White 黑白派對',
                category: 'event'
            },
            {
                imgUrl: 'img/web_014.jpg',
                webUrl: 'temp/web/skin/event.html',
                name: '澤感肌膚 完勝攻略',
                category: 'event'
            },
            {
                imgUrl: 'img/web_015.jpg',
                webUrl: 'temp/web/magic/event.html',
                name: '底裝界魔術師',
                category: 'event'
            }
        ];
        let webProtfolio = document.querySelector('.profolio-web .wrap');
        let webContent = '';

        webData.forEach(function (item) {
            let links = item.webUrl;
            if ($(window).width() <= 1200) {
                if (item.mobileUrl !== undefined) {
                    links = item.mobileUrl;
                } else {
                    links = item.webUrl;
                };
            };
            webContent +=
                `<figure class="pw-col ${item.category}">
                <a href="${links}" target="_blank">
                    <div class="web-pic">
                        <img src=${item.imgUrl}>
                    </div>
                    <p>${item.name}</p>
                </a>
            </figure>`;
            webProtfolio.innerHTML = webContent;
        });
    };
    webProtfoli();

    function categoryFilter() {
        let $grid = $('.profolio-web .wrap').isotope({
            itemSelector: '.pw-col'
        });
        let $cateGory = $('.category ul li');

        $cateGory.find('a').on('click', function () {
            let $cateName = $(this).data('category');
            $grid.isotope({ filter: $cateName });
        });
    };
    categoryFilter();

    function textIntro() {
        let $textOuter = $('.intro .wrap div');

        $(window).on('scroll', function () {
            let $introTop = $('.intro').offset().top;
            let $winTop = $(this).scrollTop() + 400;
            if ($winTop > $introTop) {
                for (let i = 0; i < $textOuter.length; i++) {
                    setTimeout(function () {
                        $textOuter.eq(i).addClass('active');
                    }, i * 600);
                };
            }else if($winTop < $introTop - 1000){
                $textOuter.removeClass('active');
            };
        });
    };
    textIntro();
});