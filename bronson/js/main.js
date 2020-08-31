$(function(){
    setTimeout(function(){$('.preloader').css({visibility:'hidden',opacity:0})},1500);

    $(window).on('scroll', function() {
        if (window.pageYOffset > 50) {
        		$('.header').addClass('stick');
        		$('.header__burger').addClass('dark');
        } else {
            $('.header').removeClass('stick');
            $('.header__burger').removeClass('dark');
        }
    });
	$('form').validate({
		rules:{
			email:{
				required: true,
				email: true
			},
			topic:{
				required: true,
			}
		}
	});

	var typed = new Typed('#typed',{stringsElement:'#typed-strings',loop:true,typeSpeed:60, startDelay: 30,});

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

   var owl = $('.owl-carousel');
owl.owlCarousel({items:2,margin:30,dots:true,
responsive : {
    // breakpoint from 0 up
    0 : {
    	items:1
    },
    // breakpoint from 480 up
    480 : {
    	items:1
    },
    // breakpoint from 768 up
    768 : {
		items:2
    }
}
});

//плавная прокрутка-------------------------------------------

    $(".header__nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        let id  = $(this).attr('href');

        // находим высоту, на которой расположен блок
        let top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
        	$('.header__burger,.header__nav').toggleClass('active');
    });

    let home = document.querySelector('#home');
    let about = document.querySelector('#about');
    let services = document.querySelector('#services');
    let portfolio = document.querySelector('#portfolio');
    let blog = document.querySelector('#blog');
    let contact = document.querySelector('#contact');

    window.addEventListener("scroll",()=>{
    	let windo = window.pageYOffset;
    	if(about.offsetTop <= windo && services.offsetTop > windo){
    		$('.header__nav-link').removeClass('active');
    		$('a[href="#about"]').addClass('active');
    	}
    	else if(services.offsetTop <= windo && portfolio.offsetTop > windo){
    		$('.header__nav-link').removeClass('active');
    		$('a[href="#services"]').addClass('active');
    	}
    	else if(portfolio.offsetTop <= windo && blog.offsetTop > windo){
    		$('.header__nav-link').removeClass('active');
    		$('a[href="#portfolio"]').addClass('active');
    	}
    	else if(blog.offsetTop <= windo && contact.offsetTop-200 > windo){
    		$('.header__nav-link').removeClass('active');
    		$('a[href="#blog"]').addClass('active');
    	}
    	else if(contact.offsetTop-200 <= windo){
    		$('.header__nav-link').removeClass('active');
    		$('a[href="#contact"]').addClass('active');
    	}
    	else{
    		$('.header__nav-link').removeClass('active');
    		$('a[href="#home"]').addClass('active');
    	}
    })

            $('.header__burger').on('click',function(e){
        	$('body,html').css('overflow-y','auto');
        	$('.header__burger,.header__nav').toggleClass('active');


        });
});
