import $ from 'jquery';
import { TweenLite } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

export default class GsapSlideshow {

    init(element) {
        this.panel = element;

		// Variables
		let sectionForm,
			$slide = this.panel.find('.slide'),
			$slideActive = this.panel.find('.slide.active'),
			$navLink = this.panel.find('.nav a'),
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

			if ( sectionFrom.index() < sectionTo.index() ) {
				console.log('going down');
			} else {
				console.log('going up');
			}

		}

	}
}
