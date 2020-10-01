$(function(){
     setTimeout(function() {
        $('.preloader').css({
            visibility: 'hidden',
            opacity: 0
        });
    }, 2000)
    new WOW().init();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.header').addClass('header--sticky');
            $('.logo').addClass('logo--hidden');
            $('.header').find('.col-lg-6').addClass('offset-lg-3');
        } else {
            $('.header').removeClass('header--sticky');
            $('.logo').removeClass('logo--hidden');
            $('.header').find('.col-lg-6').removeClass('offset-lg-3');
        }
        let aboutOffset = $('#about').offset().top;
        let classesOffset = $('#classes').offset().top;
        let eventsOffset = $('#events').offset().top;
        let contactsOffset = $('#contacts').offset().top;
        let offsetWin = $(this).scrollTop();
        if (offsetWin + 100 >= aboutOffset && offsetWin < classesOffset) {
            $('.menu-link-js').removeClass('active');
            $('a[href="#about"]').addClass('active')
        } else if (offsetWin + 100 >= classesOffset && offsetWin < eventsOffset) {
            $('.menu-link-js').removeClass('active');
            $('a[href="#classes"]').addClass('active')
        } else if (offsetWin + 100 >= eventsOffset && offsetWin < contactsOffset) {
            $('.menu-link-js').removeClass('active');
            $('a[href="#events"]').addClass('active')
        } else if (offsetWin + 100 >= classesOffset) {
            $('.menu-link-js').removeClass('active');
            $('a[href="#contacts"]').addClass('active')
        } else {
            $('.menu-link-js').removeClass('active');
            $('a[href="#home"]').addClass('active')
        }
    });

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            'phone-number':{
                required: true,
                number: true
            },
            message:{
                required:true
            }
        }
    });


    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $('.popup-gallery-events').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $('.popup-gallery-classes').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('show');
    })

    $('.menu-link-js').on('click',function(){
        console.log($(this).attr('href'));
        let offsetSection = $($(this).attr('href')).offset().top;
        $('.menu-link-js').removeClass('active')
        $('.header__menu').toggleClass('show');
        $('.burger').toggleClass('active');

        $('body,html').animate({scrollTop:offsetSection+50},1000);
        $(this).addClass('active')

    });


if('objectFit' in document.documentElement.style === false)
{
  Array.prototype.forEach.call(document.querySelectorAll('.object-fit'),function(el){

    var image = el.querySelector('img');
    el.style.backgroundImage = 'url("'+image.src+'")';
    el.classList.add('object-fit--polyfill');

  });
}

})

