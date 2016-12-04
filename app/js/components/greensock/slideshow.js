import $ from 'jquery';
import { TweenLite, TimelineLite } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

export default class GsapSlideshow {

    init(element) {
        this.panel = element;

		// Variables
		let sectionForm,
			$slide = this.panel.find('.slide'),
			$slideActive = this.panel.find('.slide.active'),
			$navLink = this.panel.find('.nav a'),
			$navLi = this.panel.find('.nav li'),
			$wrapper = $('.slidesContainer-wrapper');

		// Init function
		function init() {
			// Set active slide visible
			TweenLite.set($slideActive, { y: '0%' });

			// Fade slides in
			TweenLite.set($wrapper, { className: '-=loading' });
		}
		init();

		// Navigation click
		$navLink.on('click', (e) => {

			let sectionFrom = this.panel.find('.slide.active'),
				sectionToID = $(e.target).attr('href'),
				sectionTo = $('div'+sectionToID);

			if ( sectionFrom.attr('id') !== sectionTo.attr('id') ) {
				scrollToSection(sectionFrom, sectionTo);
			}


			e.preventDefault();
		});

		function scrollToSection(sectionFrom, sectionTo) {

			let heading = sectionTo.find('h1'),
				subHeading = sectionTo.find('p'),
				bcg = sectionTo.find('.bcg'),
				bcgFrom = sectionFrom.find('.bcg'),
				tlDown = new TimelineLite({ onComplete: setActiveSection(sectionFrom, sectionTo) }),
				tlUp = new TimelineLite();

			if ( sectionFrom.index() < sectionTo.index() ) {

				// console.log('going down');
				tlDown
					.to(sectionFrom, 1.2, { y: '-=100%', ease: Power4.easeInOut, clearProps: 'all' }, '0')
					.to(sectionTo, 1.2, { y: '0%', ease: Power4.easeInOut }, '0')
					.to(bcgFrom, 1.2, { y: '30%', ease: Power4.easeInOut, clearProps: 'all' }, '0')
					.from(bcg, 1.2, { y: '-30%', ease: Power4.easeInOut, clearProps: 'all' }, '0')
					.from(heading, 0.7, {autoAlpha: 0, y: 40, ease: Power4.easeInOut }, '-=1')
					.from(subHeading, 0.7, {autoAlpha: 0, y: 40, ease: Power4.easeInOut }, '-=0.6');

			} else {

				// console.log('going up');

			}

		}

		function setActiveSection(sectionFrom, sectionTo) {
			// Add active class to the current slide
			sectionFrom.removeClass('active');
			sectionTo.addClass('active');

			// Add a body class highlighting the current slide
			$wrapper.removeAttr('class').addClass( $(sectionTo).attr('id') + '-active' );

			// Highlight current slide in the navigation
			let currentSlideIndex = parseInt($(sectionTo).attr('id').slice(-2)) - 1;
			$navLi.removeAttr('class');
			$navLi.eq(currentSlideIndex).addClass('active');
		}

	}
}
