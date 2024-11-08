
(function($) {
    "use strict";

    $(document).on('ready', function() {

        $(window).on('load', function() {
            $(".preloader").delay(500).fadeOut();                        
        });
                
        $(".hero-slider-active").owlCarousel({        
            items: 1,     
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            nav: true,          
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
        });

        $(".testimonial-carousel-active").owlCarousel({        
            items: 1,     
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
        });
        
        $(".testimonial-carousel-2").owlCarousel({        
            items: 2,
            margin: 30,     
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            responsive : {
                0 : {
                    items: 1
                },                
                1191 : {
                    items: 2
                }
            }
        });

        $(".hero-slider-2").owlCarousel({        
            items: 1,     
            dots: true,
            loop: true,
            autoplayTimeout: 9000,
            autoplay:true,
        });

        $(".brand-carousel-active").owlCarousel({  
            margin: 70,    
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,  
            responsive : {
                0 : {
                    items: 2,
                },
                767 : {
                    items: 2
                },                
                1191 : {
                    items: 5
                }
            }
        });

        $(".case-study-items").owlCarousel({  
            margin: 30,    
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            center: true,
            autoplay:true,
            nav: true,
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
            navContainer: '.case-study-carousel-wrapper .work-process-nav', 
            responsive : {
                0 : {
                    items: 1
                },
                768 : {
                    items: 2
                },                
                1200 : {
                    items: 3
                }
            }
        });
        
        $.scrollUp({
            scrollName: 'scrollUp',
            topDistance: '1110',
            topSpeed: 2000,
            animation: 'slide',
            animationInSpeed: 300,
            animationOutSpeed: 300, 
            scrollText: '<i class="fal fa-angle-up"></i>',
            activeOverlay: false, 
        });

        $('#responsive-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        var catButton = '.portfolio-cat-filter button';

        var caseButton = '.case-cat-filter button';

        $(catButton).on('click', function(){
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        $(caseButton).on('click', function(){
            $(caseButton).removeClass('active');
            $(this).addClass('active');
        });

        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        $("#mobile-menu").metisMenu();

        let wow = new WOW(
            {
                mobile: false
            }
        )
        wow.init();


        $('.side-toggle-menu, .offcanvas-btn').on('click', function() {            
            $('.offset-menu').addClass('show');
        });

        $('#offset-menu-close-btn').on('click', function() {            
            $('.offset-menu').removeClass('show');
        });

    });
})(jQuery);
