import $ from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class CrossReveal {

    init(element) {
        this.panel = element;

		// Init ScrollMagic
		const controller = new ScrollMagic.Controller();

		// Scene 1 - pin the second section
		const pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: '100%'
		})
			.setPin('#slide01 .pin-wrapper')
			.addTo(controller)
		;

		// Scene 2 - pin the second section
		const pinScene02 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: '200%'
		})
			.setPin('#slide02 .pin-wrapper')
			.addTo(controller)
		;

		// Scene 3 - pin the fourth section
		const pinScene03 = new ScrollMagic.Scene({
			triggerElement: '#slide02',
			triggerHook: 0,
			duration: '200%'
		})
			.setPin('#slide03 .pin-wrapper')
			.addTo(controller)
		;

		// Scene 3 - pin the fourth section
		const pinScene04 = new ScrollMagic.Scene({
			triggerElement: '#slide03',
			triggerHook: 0,
			duration: '100%'
		})
			.setPin('#slide04 .pin-wrapper')
			.addTo(controller)
		;
	}
}
