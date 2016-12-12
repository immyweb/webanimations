import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class PenRevealing {

    init(element) {
        this.panel = element;

		// Move the pen body up to connect with the first part
		TweenMax.set('.part3', { y: -572 });

		// Hide all headings and text
		TweenMax.set('.parts h2, .parts p', { autoAlpha: 0 });

		// Create a tween that will move the pen body back to its original css position
		let bodyToStart = TweenMax.to('.part3', 1, { y: 0, ease: Linear.easeNone });

		// Init Scrollmagic controller
		const controller = new ScrollMagic.Controller();

		const bodyToStartScene = new ScrollMagic.Scene({
			triggerElement: '.part1',
			triggerHook: 1,
			offset: 287,
			duration: 572
		});

		bodyToStartScene
			.setTween(bodyToStart)
			.addIndicators()
			.addTo(controller);
	}
}
