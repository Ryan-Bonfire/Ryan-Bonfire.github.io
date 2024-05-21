var initial_load = true;

// Sliders
// ------------------------------------------------------------

var slick_sliders = [
	{
		selector: '.section-services__slider',
		limit: '1023',
		operator: '>',
		args: {
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			infinite: false,
			slide: '.section-services__slide',
			dots: true,
			arrows: false,
			adaptiveHeight: true,
			accessibility: false,
			appendDots: '.section-services__controls',
			customPaging: function(slick,index) {
				var title = $(slick.$slides[index]).data('title');
				return '<button type="button" class="pager-item"><svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="44.9" height="15.6" viewbox="0 0 44.9 15.6"><path fill="none" stroke="#F1E82B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1.7 1.5s12.1 9.4 41 5.3c.4.1-7.1-1.3-13.7-5.4 0 0 9.2 4.6 13.7 5.4-.4 1.2-2.1 3.2-12.8 7.5"/></svg><span class="text">'+title+'</span></button>';
			}
		}
	},
	{
		selector: '.section-cs__slider',
		limit: null,
		operator: null,
		args: {
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			infinite: false,
			slide: '.section-cs__slide',
			dots: true,
			arrows: false,
			adaptiveHeight: true,
			accessibility: false,
			appendDots: '.section-cs__controls',
			customPaging: function(slick,index) {
				var title = $(slick.$slides[index]).data('title');
				return '<button type="button" class="pager-item"><span class="indicator"></span>'+title+'<svg xmlns="http://www.w3.org/2000/svg" width="94.97" height="9.28" viewbox="0 0 94.97 9.28"><path stroke="#F1E82B" clip-rule="evenodd" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1 5.1s48.78-8.47 92.97-1.07c0 0-57.96-3.39-87.11 1.73 0 0 38.79-5.08 77.84.2 0 0-37.9-2.56-79.27 2.31"/></svg></button>';
			}
		}
	},
	{
		selector: '.section-values__slider--specialty',
		limit: null,
		operator: null,
		args: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			slide: '.section-values__slide',
			accessibility: false,
			arrows: true,
			appendArrows: '.section-values__controls',
			prevArrow: '<button type="button" class="section-values__slider__prev"><span class="hidden">Click here to go to previous slide</span><svg xmlns="http://www.w3.org/2000/svg" width="16.2" height="15.4" viewBox="0 0 16.2 15.4"><path d="M14.1 14.2C3.4 9.9 1.7 7.8 1.3 6.7 5.8 5.8 15 1.2 15 1.2 8.4 5.3.9 6.8 1.3 6.7" fill="none" stroke="#f1e82b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg></button>',
			nextArrow: '<button type="button" class="section-values__slider__next"><span class="hidden">Click here to go to next slide</span><svg xmlns="http://www.w3.org/2000/svg" width="16.2" height="15.4" viewBox="0 0 16.2 15.4"><path d="M14.9 6.7c.4.1-7.1-1.3-13.7-5.4 0-.1 9.2 4.5 13.7 5.4-.4 1.2-2.1 3.2-12.8 7.5" fill="none" stroke="#f1e82b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg></button>',
			responsive: [
			{
					breakpoint: 820,
					settings: {
						slidesToShow: 2,
					}
				},{
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						centerMode: true
					}
				}
			]
		}
	},
    {
		selector: '.section-specialty__slider--specialty',
		limit: '481',
		operator: '<',
		args: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			infinite: false,
			slide: '.section-specialty__slide',
			arrows: true,
			accessibility: false,
			arrows: true,
			dots: true,
			appendArrows: '.section-specialty__controls--specialty',
			appendDots: '.section-specialty__controls--specialty',
			prevArrow: '<button type="button" class="section-specialty__slider__prev"><span class="hidden">Click here to go to previous slide</span><svg xmlns="http://www.w3.org/2000/svg" width="16.2" height="15.4" viewBox="0 0 16.2 15.4"><path d="M14.1 14.2C3.4 9.9 1.7 7.8 1.3 6.7 5.8 5.8 15 1.2 15 1.2 8.4 5.3.9 6.8 1.3 6.7" fill="none" stroke="#f1e82b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg></button>',
			nextArrow: '<button type="button" class="section-specialty__slider__next"><span class="hidden">Click here to go to next slide</span><svg xmlns="http://www.w3.org/2000/svg" width="16.2" height="15.4" viewBox="0 0 16.2 15.4"><path d="M14.9 6.7c.4.1-7.1-1.3-13.7-5.4 0-.1 9.2 4.5 13.7 5.4-.4 1.2-2.1 3.2-12.8 7.5" fill="none" stroke="#f1e82b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg></button>',
			customPaging: function(slider, i) {
				i++;
				return '<button type="button"><span class="hidden">Click here to view slide '+i+'</span></button>';
			}
		}
	},
	{
		selector: '.wp-google-reviews',
		limit: null,
		operator: null,
		args: {
			slidesToShow: 3,
			prevArrow: '<button type="button" class="slick-prev"><span class="hidden">Click here to go to previous slide</span><svg style="transform: scale(-1, 1)" class="illo" xmlns="http://www.w3.org/2000/svg" width="44.9" height="15.6" viewbox="0 0 44.9 15.6"><path fill="none" stroke="#f1e82b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1.7 1.5s12.1 9.4 41 5.3c.4.1-7.1-1.3-13.7-5.4 0 0 9.2 4.6 13.7 5.4-.4 1.2-2.1 3.2-12.8 7.5"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="hidden">Click here to go to next slide</span><svg class="illo" xmlns="http://www.w3.org/2000/svg" width="44.9" height="15.6" viewbox="0 0 44.9 15.6"><path fill="none" stroke="#f1e82b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1.7 1.5s12.1 9.4 41 5.3c.4.1-7.1-1.3-13.7-5.4 0 0 9.2 4.6 13.7 5.4-.4 1.2-2.1 3.2-12.8 7.5"/></svg></button>',
			responsive: [
				{
					breakpoint: 1220,
					settings: {
						slidesToShow: 2,
					}
				},{
					breakpoint: 600,
					settings: {
						slidesToShow: 1
					}
				}
			]
		}
	}
];

var operators = {
	'<': function(a, b) { return a < b },
	'>': function(a, b) { return a > b },
	'<=': function(a, b) { return a <= b },
	'>=': function(a, b) { return a >= b },
	'==': function(a, b) { return a == b }
}

function slick_init(sliders) {
	
	var window_width = jQuery(window).width();
	
	jQuery.each(sliders, function(index, value){
		
		if (jQuery(value.selector).length > 0) {

			jQuery(value.selector).each(function(){

				var args = Object.assign({}, value.args, {
					appendArrows 	: jQuery(value.args.appendArrows || value.selector, this.parentNode),
					appendDots		: jQuery(value.args.appendDots || value.selector, this.parentNode)
				});

				if (typeof(value.limit) === 'undefined' || value.limit == null) {

					jQuery(value.selector).each(function(){
						if (!jQuery(this).hasClass('slick-initialized')) {
							jQuery(this).slick(args);
						}
					});

				} else {

					if (operators[value.operator](window_width, value.limit)) {

						if (!jQuery(this).hasClass('slick-initialized')) {
							jQuery(this).slick(args);
						}

					}
					else {

						if (jQuery(this).hasClass('slick-initialized')) {
							jQuery(this).slick('unslick');
						}

					}

				}
			});
			
		}
	});
}


document.addEventListener('DOMContentLoaded', function() {
	
	$('html').removeClass('no-js');

	sitemapToggle();
	headerScroll();
	hamburger();
	escKey();

	// ----- Scroll
	$(window).on('scroll', function() {
		headerScroll();
	});

	// ----- Resize
	jQuery(window).resize(function() {
		slick_init(slick_sliders);
	});

	$('.collapse').each(initCollapse);

	// ----- Initialise Content
	initContent();
});

function initCollapse() {

	var $btn = $('button', this.nextElementSibling).on( 'click', $.proxy(function() {

		this.style.maxHeight = this.style.maxHeight ? null : this.scrollHeight + "px";

		$btn.text( this.style.maxHeight ? $btn.data('collapse') : $btn.data('expand') );

	}, this) );

}

const initContent = function() {

	initSlick();

	document.activeElement.blur();
	$('nav li').removeClass('focussed');

	var $navLink = $('.header-main nav a');
	$navLink.off('focus').on('focus', function() {
		$(this)
			.parents('li')
			.addClass('focussed');
	});
	$navLink.off('blur').on('blur', function() {
		$(this)
			.parents('li')
			.removeClass('focussed');
	});

	activeNav();
	smoothScroll();
	enquiryToggle();
	enquiryReturn();
	servicesAccordionToggle();

	$('.js-modaal-video').modaal({
		type: 'video'
	});

	$('.js-modaal--gallery').each(function() {
		var trigger = $(this);
		var random_token = trigger.data('slick-modal-gallery');

		trigger.modaal({
			type: 'image',
			after_image_change: function(current_item) {
				var index = $('.modaal-gallery-item').index(current_item);
				$.event.trigger('slick-modal-gallery-change', {
					token: random_token,
					index: index
				});
			}
		});
	});

	// ----- Listen & sync gallery changes
	$(document).on('slick-modal-gallery-change', function(event, payload) {
		$(
			'.cms-block--gallery__main.slick-initialized[data-slick-modal-gallery="' +
			payload.token +
			'"]'
		).slick('slickGoTo', payload.index);
	});

	// touch style toggle
	$('body')
		.find('a:not(.map-point), button')
		.off('touchstart touchend')
		.on('touchstart', function() {
			$(this).addClass('on-press');
		})
		.on('touchend', function() {
			$(this).removeClass('on-press');
		});

	initNewsletterForm();
	loadGravityForms();

	initial_load = false;
}


// Is touch: returns true or false
// ------------------------------------------------

function isTouch() {
	return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function activeNav() {
	$('nav li.is-active').removeClass('is-active');
	if ($('main').data('nav')) {
		var activeNav = '.nav-' + $('main').data('nav');
		$(activeNav).addClass('is-active');
	}

	if ($('main').data('subnav')) {
		var activeSubNav = '.nav-' + $('main').data('subnav');
		$(activeSubNav).addClass('is-active');
	}
}

// Smooth scrolling for named anchors and skip-to-links
function smoothScroll() {
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.unbind('click')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ?
					target :
					$('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
							scrollTop: target.offset().top -
								$('.header--main').outerHeight() -
								40
						},
						1000,
						function() {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								var x = window.scrollX,
									y = window.scrollY;
								$target.focus();
								window.scrollTo(x, y);
								return $target;
							}
						}
					);
				}
			}
		});
}

function toggleSideEnquiryForm() {
	if (!$('body').hasClass('is-enquiryOpen')) {
		$('.enquiry').attr({ 'aria-expanded': 'true', hidden: false });
		setTimeout(function() {
			$('body').addClass('is-enquiryOpen');
		}, 10);
		$('#enquiry__sendfocus').focus();
	} else {
		$('body').removeClass('is-enquiryOpen');
	}
}

function enquiryToggle() {
	$('.js-enquiryToggle')
		.unbind('click')
		.on('click', function() {
			if (!$('body').hasClass('page-contact1111')) {
				toggleSideEnquiryForm();
			} else {
				$('.input-focus input').focus();
			}
			return false;
		});

	//Footer get a quote button
	$('.get-a-quote-adaptive-btn').click(function(e) {
		var trigger = $(this);
		var is_mobile = $(window).width() < 960;
		if (trigger.hasClass('barba-prevent-desktop')) {
			//Don't barba on desktop, show side enquiry form
			if (!is_mobile) {
				toggleSideEnquiryForm();
				e.preventDefault();
			} else {
				//Do nothing
			}
		} else if (trigger.hasClass('barba-prevent-mobile')) {
			//Don't barba on mobile, show side enquiry form
			if (is_mobile) {
				toggleSideEnquiryForm();
				e.preventDefault();
			} else {
				//Do nothing
			}
		}
	});
}

function enquiryReturn() {
	$('.js-enquiryReturn')
		.unbind('click')
		.on('click', function() {
			$('body').removeClass('is-enquiryOpen');
			setTimeout(function() {
				$('.enquiry').attr({ 'aria-expanded': 'false', hidden: true });
			}, 100);
			// $('.first-skip-to').focus();
			return false;
		});
}

function sitemapToggle() {
	$('.js-sitemap').on('click', function() {
		if (!$('#sitemap').hasClass('is-active')) {
			$('.js-sitemap').addClass('is-active');
			$('#sitemap')
				.addClass('is-active')
				.attr({ 'aria-expanded': 'true', hidden: false })
				.stop()
				.slideDown(300, function() {
					var i =
						$('#sitemap').offset().top -
						$('.header-main').height() -
						20;
					$('html, body').animate({
							scrollTop: i
						},
						300,
						function() {
							$('#sitemap-focus').focus();
						}
					);
				});
		} else {
			$('.js-sitemap').removeClass('is-active');
			$('#sitemap')
				.removeClass('is-active')
				.attr({ 'aria-expanded': 'false', hidden: true })
				.stop()
				.slideUp(300, function() {
					$('.js-sitemap').focus();
				});
		}
		return false;
	});
}

function headerScroll() {

	// Post-header
	var $scrollValue = $('body').hasClass('page-home') ? $(window).height() - 80 : 300;

	if ($(window).scrollTop() > 100) {
		if (!$('body').hasClass('is-headerScroll')) {
			$('body').addClass('is-headerScroll');
		}
	} else {
		if ($('body').hasClass('is-headerScroll')) {
			$('body').removeClass('is-headerScroll');
		}
	}
}

function hamburger() {
	$('.js-hamburger')
		.unbind('click')
		.on('click', function() {
			if (!$('body').hasClass('is-hamburgerOpen')) {
				$('body').addClass('is-hamburgerOpen');
				$(this).attr('aria-expanded', 'true');
				setTimeout(function() {
					$('.header-mobile .btn.btn--primary').focus();
				}, 100);
			} else {
				$('body').removeClass('is-hamburgerOpen');
				$(this).attr('aria-expanded', 'false');
			}
			return false;
		});
}

function servicesAccordionToggle() {

	if ($('.section-services__slider') && $(window).width() <= 1023) {
		setTimeout(function() {
			$('.section-services__slide:first-child').addClass('is-exploded');
		}, 500);
	}
	$('.section-services__slider .accordion__trigger').off('click').on('click', function(){

		if( $(this).parent().hasClass('accordion-has-eased') ) {
			$(this).parent().removeClass('accordion-active');
			$(this).next().stop().slideUp(500, function(){
				$(this).parent().removeClass('accordion-has-eased is-exploded');
			});
		} else {
			$('.section-services__slider .accordion__panel:not(.accordion-active)').slideUp(500).parent().removeClass('accordion-active accordion-has-eased is-exploded');
			$(this).parent().addClass('accordion-active');
			$(this).next().stop().slideToggle(500, function(){
				$(this).parent().addClass('accordion-has-eased is-exploded');
				var i = $(this).prev().offset().top - $('.header-main').height() -1;
				$('html, body').animate({
					scrollTop: i
				}, 300);
			});
		}

	});
	// Injecting our accordion script.
	new Accordion({
		singularMode: true,
		hideExceptFirst: false,
		animationEase: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
		classGroup: '.accordion-list',
		classItem: '.accordion',
		classPanel: '.accordion__panel',
		classButton: '.accordion__trigger'
	});
}

function escKey() {
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			// For enquiry slider open
			if ($('body').hasClass('is-enquiryOpen')) {
				$('body').removeClass('is-enquiryOpen');
				setTimeout(function() {
					$('.enquiry').attr({
						'aria-expanded': 'false',
						hidden: true
					});
				}, 100);
			}

			// For mobile menu open
			if ($('body').hasClass('is-hamburgerOpen')) {
				$('body').removeClass('is-hamburgerOpen');
				$('.hamburger').focus();
			}

			// If sitemap is open
			if ($('#sitemap').hasClass('is-active')) {
				$('.js-sitemap').removeClass('is-active');
				$('#sitemap')
					.removeClass('is-active')
					.attr({ 'aria-expanded': 'false', hidden: true })
					.stop()
					.slideUp(300, function() {
						$('.js-sitemap').focus();
					});
			}
		}
	});
}

function initNewsletterForm() {
	var forms = $('form.newsletter:not(.validate-init)');

	if (forms.length) {
		forms.each(function() {
			var $form = $(this);

			$form.addClass('validate-init');

			$form.validate({
				errorPlacement: function(error, element) {
					// this is a basic custom error placement to stop inline error messages popping up, in favor of a single message
					return true;
				},
				submitHandler: function(form) {
					var $submit = $form.find('button');
					//var original_button_text = $submit.text();

					$submit.prop('disabled', true).css('cursor', 'progress');

					$form.find('.message--error, .message--success').hide();

					var data = $form.serialize() + '&action=ajax_subscribe';

					$.ajax({
						url: js_vars.ajax_url,
						data: data,
						method: 'post',
						dataType: 'json'
					}).done(function(data, status, jqXHR) {
						$submit
							.prop('disabled', false)
							.css('cursor', 'default');

						if (data.status == 'OK') {
							trackEvent({
								category: 'form',
								action: 'submit',
								label: 'Subscription Form'
							});

							$form.find('.message--success').show();
							form.reset();
						} else {
							$form
								.find('.message--error')
								.text(data.message)
								.show();
						}
					});
				}
			});
		});
	}
}

function initSlick() {
	slick_init(slick_sliders);


	$('.section-cs__slider')
		.off('beforeChange')
		.on('beforeChange', function(slick, currentSlide) {
			$('.section-cs__slider').removeClass('js-wp--section-cs');
		});

	$('.section-cs__slider')
		.off('afterChange');

	$('.section-services__slider .slick-dots .pager-item')
		.off('click');

	$('.section-services__slider')
		.off('beforeChange')
		.on('beforeChange', function(slick, currentSlide) {
			$('.section-services__slider .slick-slide').removeClass(
				'is-exploded'
			);
		});
	$('.section-services__slider')
		.off('afterChange')
		.on('afterChange', function(slick, currentSlide) {
			$('.section-services__slider .slick-current').addClass(
				'is-exploded'
			);
		});
}

function trackEvent(options) {
	var category = options['category'];
	var action = options['action'];
	var label = options['label'];

	if (typeof gtag != 'undefined') {
		gtag('event', action, { event_category: category, event_label: label });
	} else if (typeof ga != 'undefined') {
		ga('send', 'event', category, action, label);
	}
}

function loadGravityForms() {
	$('.load-gf-form:not(.gf-form-loaded)').each(function() {
		var target = $(this);
		var form_id = target.data('id');

		if (!form_id) {
			return;
		}

		$.ajax({
			url: js_vars.ajax_url,
			data: {
				action: 'get-gf-form',
				gf_form_id: target.data('id')
			},
			method: 'get'
		}).done(function(data, status, jqXHR) {

			target.addClass('gf-form-loaded');
			target.append(data);
			target.fadeIn(500);

			// Trigger event now that we've rendered the form
			$(document).trigger('gform_post_render', [form_id, 1]);

			if (target.find('.datepicker').length) {
				if (window['gformInitDatepicker']) {
					gformInitDatepicker();
				}
			}
		});
	});
}


// ---------------------------------------- Scroll Watcher (Sections)


function titleAnimations(el) {
	var titles = el.querySelectorAll('.title--stagger');
	for (var i = 0; i < titles.length; i++) {
		titles[i].classList.add('is-revealed');
		titles[i].style.opacity = '1';
	}
};

if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

	const observerFunction = (selector, callback, config = {}) => {
		config = Object.assign(config, {
			rootMargin: "0px 0px",
			threshold: 0.01
		})
		let elements = document.querySelectorAll(selector);
		let onIntersection = (input) => {
			if (input.length === 0) {
				obs.disconnect();
			}
			// ----- Loop through the entries
			input.forEach(el => {
				if (el.intersectionRatio > 0) {
					callback(el);
					obs.unobserve(el.target);
				}
			});
		}
		let obs = new IntersectionObserver(onIntersection, config);
		elements.forEach(el => {
			obs.observe(el);
		})
	}


	// ----- "JS-WP" Elements (Observer One)

	const observerOne = (el) => {
		el.target.classList.add('is-revealed');
		if (el.target.classList.contains('section-solution') || el.target.classList.contains('hero-solution')) {
			el.target.classList.add('is-exploded');
		}
		if (el.target.classList.contains('section-services')) {
			setTimeout(function() {
				let element = el.target.querySelector('.slick-active');
				if (!element) return;
				element.classList.add('is-exploded');
			}, 1200);
		}
		titleAnimations(el.target);
	}
	observerFunction('.js-wp', observerOne);


	// ----- "JS-WP-Section" Elements (Observer Two)

	const observerTwo = (el) => {
		el.target.classList.add('is-revealed');
		titleAnimations(el.target);
	}
	observerFunction('.js-wp--section-cs', observerTwo);

	// ----- "JS-WP-Section" Elements (Observer Three)

	const observerThree = (el) => {
		titleAnimations(el.target);
	};

	observerFunction('.illo', observerThree);

	// ----- "section-cs" Elements (Observer Four)

	const observerFour = (el) => {
		titleAnimations(el.target);
	};
	observerFunction('.section-cs', observerFour);

}