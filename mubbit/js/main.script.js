$(document).ready(function() {
    let header = document.getElementsByClassName('header')[0];
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.style.cssText = "margin-top:-20px;background-color:#fff;box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);";
        } else {
            header.style.cssText = '';
        }
    });
//--------------------------------------Preloader----------------------------------------------------
    function preloader() {
        setInterval(function(){
            $('#preloader').css('opacity', '0');

            $('#preloader').css('visibility','hidden');
        }, 1000)
    }
    preloader();

//--------------------------------------Slick------------------------------------------------------
    $('.reviews__slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnFocus: false,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchTreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 458,
            settings: {
                slidesToShow: 1,
                wariableWidth: true
            }
        }],
    });
//--------------------------------------/Slick------------------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('#toTop').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });
//---------------------------------Burger menu-----------------------------------------
    $('#burger-menu').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('#topNav').removeClass('burger');
            return;
        }
        $('#topNav').addClass('burger');
        $(this).addClass('opened');
        $('#toTop').css({
            "z-index": "4"
        });
    });
//--------------------------------Slow Scroll------------------------------------------
    $('li a[href^="#"').click(function() {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1000);
        if ($('.burger-menu').hasClass('opened')) $('.burger-menu').removeClass('opened');
        $('.nav').removeClass('burger');
        return false;
    })
//-------------------------------Isotope--------------------------------------------
    var $grid = $('.projects__box').isotope({
        itemSelector: '.projects__box-item',
        layoutMode: 'fitRows'
    });
    $('.projects__filter-inner li button').click(function() {
        $('.projects__filter-inner li button').removeClass('active');
        $(this).addClass('active');
        let selector = $(this).attr('data-filter');
        $('.projects__box').isotope({
            filter: selector
        });
        return false;
    });
    $grid.on('arrangeComplete', function(event, filteredItems) {
        $(".projects__box-item:hidden a").removeClass("mag");
        $(".projects__box-item:visible a").addClass("mag");
    });
//-------------------------------Isotope--------------------------------------------
//--------------------------------Popup--------------------------------------

    $('.projects__box').magnificPopup({
        delegate: 'a.mag',
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
//-----------------------------/Popup------------------------------------------
});

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
