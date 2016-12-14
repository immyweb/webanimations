import $ from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class OnePager {

    init(element) {
        this.panel = element;

		let controller,
			$navItems = $('.nav-items li').not('.active'),
			$navTrigger = $('.nav-trigger'),
			getTriggersDown = $('.slide-pos'),
			triggersDown = [],
			getTriggersUp = $('.slide-pos-reverse'),
			triggersUp = [],
			$slideIn = $('.slide.active'),
			$logo = $('.logo'),
			$body = this.panel,
			$slide = $('.slide'),
			$nav = $('nav');


		// Triggers on the way down
		$.each(getTriggersDown, (key, value) => {

			let id = '#' + value.id;
			triggersDown.push(id);

		});

		// Triggers on the way up
		$.each(getTriggersUp, (key, value) => {

			let id = '#' + value.id;
			triggersUp.push(id);

		});

		controller = new ScrollMagic.Controller();

		// Scene 1  - pin our main section
		const pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#main',
			triggerHook: 0,
			duration: '900%'
		});

		pinScene01
			.setPin('#main .pin-wrapper', { pushFollowers: false })
			.addTo(controller);


		// Navigation timeline
		let navTl = new TimelineMax();

		// Move navigation right by 26px for each item
		$navItems.each((index, item) => {
			let slideHREF = $(item).find('a').attr('href'),
				slideID = slideHREF.substr(slideHREF.length -7),
				moveNav = TweenMax.to($('.nav-active'), 1, { x: '+=26', ease: Linear.easeNone });

			// Add individual tweens to the timeline
			navTl.add(moveNav, slideID);
		});

		// Scene 2 - move navigation
		const navScene = new ScrollMagic.Scene({
			triggerElement: $navTrigger,
			duration: '800%'
		});

		navScene
			.setTween(navTl)
			.addTo(controller);

		// Scene 3 - trigger the right animation on the way DOWN
		triggersDown.forEach((triggerDown) => {

			let triggerTransitionToNext = new ScrollMagic.Scene({
				triggerElement: triggerDown,
				triggerHook: 0.6
			});

			triggerTransitionToNext
				.on('enter', (e) => {
					// console.log('crossfade to next ' + triggerDown);

					let $slideOut = $('.slide.active'),
						slideIndex = triggerDown.substring(6, 8),
						$slideIn = $('#slide' + slideIndex),
						direction = e.scrollDirection;

					// console.log(e.scrollDirection);

					crossFade($slideOut, $slideIn, direction);
				})
				// .addIndicators({
				// 	name: 'triggerDown',
				// 	indent: 520,
				// 	colorStart: 'yellow',
				// 	colorTrigger: 'yellow'
				// })
				.addTo(controller);
		});

		// Scene 4 - trigger the right animation on the way DOWN
		triggersUp.forEach((triggerUp) => {

			let triggerTransitionToPrev = new ScrollMagic.Scene({
				triggerElement: triggerUp,
				triggerHook: 0.49
			});

			triggerTransitionToPrev
				.on('leave', () => {
					// console.log('crossfade to previous ' + triggerUp);
				})
				// .addIndicators({
				// 	name: 'triggerUp',
				// 	indent: 110,
				// 	colorStart: 'black',
				// 	colorTrigger: 'black'
				// })
				.addTo(controller);
		});

		function initPage() {
			setTimeout(() => {
				// Prevents body from flickering
				TweenMax.set($body, { autoAlpha: 1 });

				// Animate first slide in
				animationIn($slideIn);
			}, 500);
		}

		initPage();

		function crossFade($slideOut, $slideIn, direction) {

		}

		// Animate slide IN
		function animationIn($slideIn) {
			let $slideInNumber = $slideIn.find('.number'),
				$slideInTitle = $slideIn.find('.fade-txt'),
				$primaryBcg = $slideIn.find('.primary .bcg'),
				$whiteBcg = $slideIn.find('.bcg-white'),
				transitionInTl = new TimelineMax();

			transitionInTl
				.set([$slide, $slideInNumber, $nav, $logo], { autoAlpha: 0 })
				.set($slideIn, { autoAlpha: 1 })
				.set($whiteBcg, { scaleX: 1 })
				.set($primaryBcg, { scaleX: 0 })
				.to($whiteBcg, 0.4, { scaleX: 0.63, ease: Power2.easeIn })
				.to($primaryBcg, 0.4, { scaleX: 1, ease: Power2.easeIn, clearProps: 'all' })
				.add('fadeInLogo')
				.to($whiteBcg, 0.6, { scaleX: 0, ease: Power4.easeIn }, 'fadeInLogo+=0.3')
				.to([$logo, $slideInNumber], 0.2, { autoAlpha: 1, ease: Linear.easeNone }, 'fadeInLogo-=0.2')
				.staggerFrom($slideInTitle, 0.3, { autoAlpha: 0, x: '-=60', ease: Power1.easeOut }, 0.1, 'fadeInLogo+=0.9')
				.fromTo($nav, 0.3, { y: -15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: Power1.easeOut }, 'fadeInLogo+=1.5')
			;
		}
	}
}
