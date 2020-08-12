
$(document).ready(function() {
$('.reviews__slider').slick({
  arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
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
});
$('.team__slides').slick({
  arrows: true,

        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
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
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }

        }],

});


function plx(element,distance,speed){
	const item = document.querySelector(element);
	item.style.transform = 'translateY('+distance * speed +'px)';


}

window.addEventListener('scroll',function(){
	if(document.querySelector('.top__img')){
		plx('.top__img-box',window.pageYOffset-document.querySelector('.top__img').offsetTop,.1);
	}
	if(document.querySelector('.plx-l-leaf')){
		plx('.plx-l-leaf',window.pageYOffset-document.querySelector('.plx-l-leaf').offsetTop,.35)
	}
	if(document.querySelector('.plx-r-leaf')){
		plx('.plx-r-leaf',window.pageYOffset-document.querySelector('.plx-r-leaf').offsetTop,.2);
	}
	if(document.querySelector('.plx-1')){
		plx('.plx-1',window.pageYOffset-document.querySelector('.plx-1').offsetTop,.13);
	}
	if(document.querySelector('.plx-2')){
		plx('.plx-2',window.pageYOffset-document.querySelector('.plx-2').offsetTop,.10);
	}
	if(document.querySelector('.plx-3')){
		plx('.plx-3',window.pageYOffset-document.querySelector('.plx-3').offsetTop,.3);
	}
	if(document.querySelector('.plx-4')){
		plx('.plx-4',window.pageYOffset-document.querySelector('.plx-4').offsetTop,.19);
	}
	if(document.querySelector('.plx-5')){
		plx('.plx-5',window.pageYOffset-document.querySelector('.plx-5').offsetTop,.13);
	}
	if(document.querySelector('.plx-6')){
		plx('.plx-6',window.pageYOffset-document.querySelector('.plx-6').offsetTop,.29);
	}


	// plx('.plx-l-leaf',window.scrollY,.2);
	// plx('.plx-r-leaf',window.scrollY,.3);
	//console.log(window.scrollY)
	// plx('.big-rose',window.scrollY,.3);
	// plx('.small-rose',window.scrollY,.5);
	//plx('header',window.scrollY,1);

});
window.addEventListener('submit',function(e){
	let name = document.querySelector('#name')
	let email = document.querySelector('#email')
	let message = document.querySelector('#message')
	let btn = document.querySelector('#submitBtn')
	if(!name.value.length){
		name.classList.add('error');

		e.preventDefault()
	}
})
$('.header__burger').on('click',function(e){
	$('body,html').css('overflow-y','auto');
	$('.header__burger,.menu__list').toggleClass('active');

});

    function preloader() {
        setInterval(() => {
            $('#preloader').css('opacity', '0');

            $('#preloader').css('visibility','hidden');
        }, 1000)
    }
    preloader();
});
