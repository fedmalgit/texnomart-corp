import Share from 'ninelines-sharing';


document.addEventListener('DOMContentLoaded', () => {
	

}); 




/* Toggles */
(function ($) { 

	$('.header-search__btn').on('click', function() {

		var searchContain = $('.header-search-wrap');
		searchContain.toggleClass('search_active');
		searchContain.find('.header-search__input').focus();
	});

	$('.search-close').on("click", function (t) {
		$('.header-search-wrap').removeClass("search_active");
	});


	// $(document).click(function(event) {
	// 	if ($(event.target).closest(".header-search").length) return;
	
	// 	$('.header-search').removeClass('search_active') 
	// 	$('.header-search__btn').addClass('search_active') 
	
	// 	event.stopPropagation();
	// });

	


	var siteToggle = $('.navbar-toggler'),
	layer=$('.site__layer'),
	siteMenu= $('.nav-sidebar');


	siteToggle.on('click', function(){
		layer.toggleClass('active');
		$(this).toggleClass("collapsed");
		siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hidden');
	});


	$('.site__layer').on('click', function(){
		layer.removeClass('active');
		siteToggle.removeClass('collapsed');
		siteMenu.removeClass('show');
		$('body').removeClass('overflow-hidden');
	});





	$('.accordion .accordion-heading').on('click', function (i) { 
		var active_toggle = $(this).parents('.accordion').find('.accordion-item.current_toggle .accordion-toggle'), 
			toggle = $(this).parents('.accordion-item'), 
			acc = ($(this).parents('.accordion').hasClass('accordion_toggles')) ? true : false, 
			dropDown = toggle.find('.accordion-toggle');
		
		
		if (toggle.hasClass('current_toggle')) {
			toggle.removeClass('current_toggle');
			dropDown.slideUp('fast', function () { 
				
			} );
		} else {
			if (acc) {
				active_toggle.slideUp('fast', function () { 
					active_toggle.parents('.accordion-item').removeClass('current_toggle');
				} );
			}
			toggle.addClass('current_toggle');
			dropDown.slideDown('fast', function () { 
				
			} );
		}
		
		
		i.preventDefault();
		
		
		setTimeout(function () { 
			jQuery('body').trigger('debouncedresize');
		}, 600);
	} );
	




var courseSlider = $('.courses-carousel');

	$(courseSlider).slick({
		
		// normal options...
		// infinite: false,
		slidesToShow: 3,
		infinite: true,
		prevArrow: courseSlider.parents('.courses').find('.carousel-arrow-prev'),
		nextArrow: courseSlider.parents('.courses').find('.carousel-arrow-next'),
		responsive: [{
	  
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  infinite: true
			}
	  
		  }, {
	  
			breakpoint: 768,
			// settings: {
			//   slidesToShow: 2,
			// //   dots: true
			// }

			settings: "unslick" // destroys slick
		  }, 
		// {
	  
		// 	breakpoint: 300,
		// 	settings: "unslick" // destroys slick
	  
		//   }
	]
});




	/* Tabs */

		$('.tabs .tabs-navi li a').on('click', function (t) { 
			var tabs_parent = $(this).parents('.tabs'), 
				tabs = tabs_parent.find('.tabs-content-wrap'), 
				index = $(this).parents('li').index();
			
			
			tabs_parent.find('.tabs-navi > .current_tab').removeClass('current_tab');
			
			
			$(this).parents('li').addClass('current_tab');



			// tabs.find('.tabs-content-wrap__tab').not(':eq(' + index + ')').fadeOut('fast', function () { 
			// 	$(this).removeClass('active_tab');
			// } );
			
			
			// tabs.find('.tabs-content-wrap__tab:eq(' + index + ')').fadeIn('fast', function () { 
			// 	$(this).addClass('active_tab');
			// } );
			
			


			tabs.find('.tabs-content-wrap__tab').not(':eq(' + index + ')').removeClass('active_tab');

			
			
			tabs.find('.tabs-content-wrap__tab:eq(' + index + ')').addClass('active_tab');

			



			t.preventDefault();
			
			
			// setTimeout(function () { 
			// 	jQuery('body').trigger('debouncedresize');
			// }, 300);
		} );

	
	


		$('.form-input').each(function() {
			var input = $(this).find('input');
			var textarea = $(this).find('textarea');
			var activeClass = 'active';

			// console.log(input )
			let inputItem = undefined; 

			// if (input) inputItem = input;
			// if (textarea) inputItem = textarea;
		
			// if (inputItem) {
		
				input.on('focus', function() {
					$(this).parent('.form-input').addClass(activeClass);
				}); 

				input.on('blur', function () {
					if (input.val() == '') {
						$(this).parent('.form-input').removeClass(activeClass);
					}
				});


				textarea.on('focus', function() {
					$(this).parent('.form-input').addClass(activeClass);
				}); 

				textarea.on('blur', function () {
					if (textarea.val() == '') {
						$(this).parent('.form-input').removeClass(activeClass);
					}
				});


			// }
		});





            $(".primary-info-box__list").each(function () {
                var t = $(this),
                    e = t.children().eq(5).nextAll("li");
                e.hide(),
				t.next().on("click", function (t) {
					t.preventDefault();
					var n = $(this).toggleClass('active');
						n.text(n.text() === 'Еще' ? 'Скрыть' : 'Еще'), e.slideToggle(0);
				});
            });
    


			
	  
} )(jQuery);


// var formInput = document.querySelectorAll('.form-input')

// for (let el = 0; el < formInput.length; el++) {

// 	console.log(formInput[el])
// 	const input = formInput[el].querySelector('input'),
// 	textarea = formInput[el].querySelector('textarea'),
// 	activeClass = 'active';

// 	let inputItem = undefined;

// 	if (input) inputItem = input;
// 	if (textarea) inputItem = textarea;

// 	inputItem.addEventListener('focus', function () {
// 		this.parentElement.classList.add(activeClass);
// 	});

// 	inputItem.addEventListener('blur', function () {
// 		if (inputItem.value === '') {
// 		  this.parentElement.classList.remove(activeClass);
// 		}
// 	});

// }







	// /* Toggles */
	// (function ($) { 
	// 	$('.cmsmasters_toggles .cmsmasters_toggle_title').on('click', function (i) { 
	// 		var active_toggle = $(this).parents('.cmsmasters_toggles').find('.cmsmasters_toggle_wrap.current_toggle .cmsmasters_toggle'), 
	// 			toggle = $(this).parents('.cmsmasters_toggle_wrap'), 
	// 			acc = ($(this).parents('.cmsmasters_toggles').hasClass('toggles_mode_accordion')) ? true : false, 
	// 			dropDown = toggle.find('.cmsmasters_toggle');
			
			
	// 		if (toggle.hasClass('current_toggle')) {
	// 			dropDown.slideUp('fast', function () { 
	// 				toggle.removeClass('current_toggle');
	// 			} );
	// 		} else {
	// 			if (acc) {
	// 				active_toggle.slideUp('fast', function () { 
	// 					active_toggle.parents('.cmsmasters_toggle_wrap').removeClass('current_toggle');
	// 				} );
	// 			}
				
	// 			dropDown.slideDown('fast', function () { 
	// 				toggle.addClass('current_toggle');
	// 			} );
	// 		}
			
			
	// 		i.preventDefault();
			
			
	// 		setTimeout(function () { 
	// 			jQuery('body').trigger('debouncedresize');
	// 		}, 300);
	// 	} );
		
		

	// } )(jQuery);
	
