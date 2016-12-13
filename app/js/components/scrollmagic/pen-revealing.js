import $ from 'jquery';
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
		// TweenMax.set('.parts h2, .parts p', { autoAlpha: 0 });

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
			// .addIndicators()
			.addTo(controller);



		// Move part 6 to connect with body
		TweenMax.set('.part6', { y: -846 });

		// Move 4 and 5 down, to connect with part 6
		TweenMax.set('.part5', { y: -726 });
		TweenMax.set('.part4', { y: -557 });

		let p6ToStart = TweenMax.to('.part6', 1, { y: 0, ease: Linear.easeNone });

		const p6ToStartScene = new ScrollMagic.Scene({
			triggerElement: '.part1',
			triggerHook: 1,
			duration: 846,
			offset: 1250
		});

		p6ToStartScene
			.setTween(p6ToStart)
			// .addIndicators()
			.addTo(controller);



		let p5ToStart = TweenMax.to('.part5', 1, { y: 0, ease: Linear.easeNone });

		const p5ToStartScene = new ScrollMagic.Scene({
			triggerElement: '.part1',
			triggerHook: 1,
			duration: 726,
			offset: 1250
		});

		p5ToStartScene
			.setTween(p5ToStart)
			// .addIndicators()
			.addTo(controller);



		let p4ToStart = TweenMax.to('.part4', 1, { y: 0, ease: Linear.easeNone });

		const p4ToStartScene = new ScrollMagic.Scene({
			triggerElement: '.part1',
			triggerHook: 1,
			duration: 557,
			offset: 1200
		});

		p4ToStartScene
			.setTween(p4ToStart)
			// .addIndicators()
			.addTo(controller);


		// Loop through all parts and add a class .fade-in
		$('.parts li').each((index, element) => {

			// Build a scene
			const scene = new ScrollMagic.Scene({
				triggerElement: element,
				triggerHook: 0.55
			});

			scene
				.setClassToggle(element, 'fade-in')
				.addIndicators()
				.addTo(controller);
		});
	}
}
