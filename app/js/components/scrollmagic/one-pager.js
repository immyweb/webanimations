import $ from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class OnePager {

    init(element) {
        this.panel = element;

		const controller = new ScrollMagic.Controller();

		// Scene 1  - pin our main section
		const pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#main',
			triggerHook: 0,
			duration: '900%'
		});

		pinScene01
			.setPin('#main .pin-wrapper', { pushFollowers: false })
			.addTo(controller)
		;
	}
}
