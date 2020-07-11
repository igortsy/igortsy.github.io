$(document).ready(function(){

	$('.header__burger').on('click',function(e){
		$('body,html').css('overflow-y','auto');
		$('.header__burger,.header__nav').toggleClass('active');
			if($('.header__nav').hasClass('active'))
				$('body,html').css('overflow-y','hidden');
	});


	$('.slider').slick({

		fade:true,
		speed:1000,
		autoplay:true,
		autoplaySpeed:3000
	})
	$('.welcome-section__gallery,.portfolio-gallery__container').magnificPopup({
		delegate: 'a',
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
});