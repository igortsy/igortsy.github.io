$(function() {
	setTimeout(function(){$('.preloader').css({visibility:'hidden',opacity:0})},1500)

    $(window).on('scroll', function() {
    	//stick header------------------------------------
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('stick');
            $('.header__burger').addClass('dark');
        } else {
            $('.header').removeClass('stick');
            $('.header__burger').removeClass('dark');
        }
      //pointway menu----------------------------------------
        let windowOffset = $(window).scrollTop();
        if (Math.floor($('#about').offset().top) <= windowOffset && Math.floor($('#services').offset().top) > windowOffset) {
            $('.header__nav-link').removeClass('active');
            $('a[href="#about"]').addClass('active');
        } else if (Math.floor($('#services').offset().top) <= windowOffset && Math.floor($('#portfolio').offset().top) > windowOffset) {
            $('.header__nav-link').removeClass('active');
            $('a[href="#services"]').addClass('active');
        } else if (Math.floor($('#portfolio').offset().top) <= windowOffset && Math.floor($('#blog').offset().top) > windowOffset) {
            $('.header__nav-link').removeClass('active');
            $('a[href="#portfolio"]').addClass('active');
        } else if (Math.floor($('#blog').offset().top) <= windowOffset && Math.floor($('#contact').offset().top) - 200 > windowOffset) {
            $('.header__nav-link').removeClass('active');
            $('a[href="#blog"]').addClass('active');
        } else if (Math.floor($('#contact').offset().top - 200) <= windowOffset) {
            $('.header__nav-link').removeClass('active');
            $('a[href="#contact"]').addClass('active');
        } else {
            $('.header__nav-link').removeClass('active');
            $('a[href="#home"]').addClass('active');
        }
    });
    //form validate---------------------------------------------------
    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            topic: {
                required: true,
            }
        }
    });
    //typed plagin-----------------------------------------------------
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 60,
        startDelay: 30,
    });

    //izotope--------------------------------------------------------
    var $grid = $('.izo-box').isotope({
        itemSelector: '.cell',
        layoutMode: 'fitRows'
    });
    $('.projects__nav-inner li button').click(function() {
        $('.projects__nav-inner li button').removeClass('active');
        $(this).addClass('active');
        let selector = $(this).attr('data-filter');
        $('.izo-box').isotope({
            filter: selector
        });
        return false;
    });
    $grid.on('arrangeComplete', function(event, filteredItems) {
        $(".cell:hidden a").removeClass("filter");
        $(".cell:visible a").addClass("filter");
    });


    //popup-----------------------------------------------------------
    $('.izo-box').magnificPopup({
        delegate: 'a.filter',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                // return item.el.attr('title') + '<small>by </small>';
            }
        }
    });

    //Owl карусель
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 2,
        margin: 30,
        dots: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 768 up
            768: {
                items: 2
            }
        }
    });
    //плавная прокрутка-------------------------------------------
    $(".header__nav").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
        $('.header__burger,.header__nav').toggleClass('active');
    });
    $('.header__burger').on('click', function(e) {
        $('body,html').css('overflow-y', 'auto');
        $('.header__burger,.header__nav').toggleClass('active');
    });
});
