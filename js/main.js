; (function () {
	'use strict';

	var contentWayPoint = function () {
		$('.animate-box').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				$(this.element).addClass('item-animate');
				setTimeout(function () {
					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});
				}, 100);
			}
		}, { offset: '85%' });
	};

	var burgerMenu = function () {
		$('.js-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var el = $(this);
			if ($('body').hasClass('offcanvas')) {
				el.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				el.addClass('active');
				$('body').addClass('offcanvas');
			}
		});
	};

	var mobileMenuOutsideClick = function () {
		$(document).on('click', function (event) {
			var container = $("#aside, .js-nav-toggle");
			if (!container.is(event.target) && container.has(event.target).length === 0) {
				if ($('body').hasClass('offcanvas')) {
					$('body').removeClass('offcanvas');
					$('.js-nav-toggle').removeClass('active');
				}
			}
		});
		$(document).on('scroll', function () {
			if ($('body').hasClass('offcanvas')) {
				$('body').removeClass('offcanvas');
				$('.js-nav-toggle').removeClass('active');
			}
		});
	};

	var clickMenu = function () {
		$('#navbar a:not([class="external"])').on('click', function (event) {
			var section = $(this).data('nav-section'), navbar = $('#navbar');
			if ($('[data-section="' + section + '"]').length) {
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top - 60
				}, 500);
			}
			if (navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
				$('.js-nav-toggle').removeClass('active');
			}
			event.preventDefault();
			return false;
		});
	};

	$(function () {
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		clickMenu();
	});
}());
