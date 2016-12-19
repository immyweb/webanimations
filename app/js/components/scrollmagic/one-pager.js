import $ from 'jquery';
import { TweenMax } from 'gsap';
import 'gsap/src/uncompressed/plugins/TextPlugin.js';
import 'gsap/src/uncompressed/plugins/ScrollToPlugin.js';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import enquire from 'enquire.js';

export default class OnePager {

    init(element) {
        this.panel = element;

		let controller,
			$navItems = $('.nav-items li').not('.active'),
			$navTrigger = $('.nav-trigger'),
			$navItemLink = $('.nav-items a'),
			getTriggersDown = $('.slide-pos'),
			triggersDown = [],
			getTriggersUp = $('.slide-pos-reverse'),
			triggersUp = [],
			$slideIn = $('.slide.active'),
			$logo = $('.logo'),
			$body = this.panel,
			$main = $('#main'),
			$slide = $('.slide'),
			$nav = $('nav'),
			$layers = $('#layers'),
			introAnimationTl = new TimelineMax();


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

		enquire.register('screen and (min-width: 1025px)', {
			match: () => {
				initScrollMagic();
			},

			unmatch: () => {
				controller.destroy(true);
				$('*').removeAttr('style');
			}
		});

		function initScrollMagic() {

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

						crossFade($slideOut, $slideIn, direction, slideIndex);
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
					.on('leave', (e) => {
						// console.log('crossfade to previous ' + triggerUp);
						let $slideOut = $('.slide.active'),
							slideIndex = triggerUp.substring(6, 8),
							$slideIn = $('#slide' + slideIndex),
							direction = e.scrollDirection;

						// console.log(e.scrollDirection);

						crossFade($slideOut, $slideIn, direction, slideIndex);
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

			function crossFade($slideOut, $slideIn, direction, slideIndex) {

				let slideOutID = $slideOut.attr('id').substring(5, 7),
					slideInID = $slideIn.attr('id').substring(5, 7),

					// Slide out
					$slideOutBcg = $slideOut.find('.bcg-color'),
					$slideOutTitle = $slideOut.find('.title .fade-txt'),
					$slideOutNumber = $slideOut.find('.number'),

					// Slide in
					$slideInBcg = $slideIn.find('.bcg-color'),
					$slideInTitle = $slideIn.find('.title .fade-txt'),
					$slideInNumber = $slideIn.find('.number'),
					$slideInBcgWhite = $slideIn.find('.primary .bcg'),
					slideInValue = $slideInNumber.attr('data-value');

				// Update nav
				updateNav(slideOutID, slideInID);

				// remove class active from all slides
				TweenMax.set($slide, { className: '-=active' });

				// add class active to current slide
				TweenMax.set($('#slide' + slideIndex), { className: '+=active' });

				// cross fade timeline
				const crossFadeTl = new TimelineMax();

				crossFadeTl
					.set($slideIn, { autoAlpha: 1 })
					.set([$slideInTitle, $slideInNumber, $slideInBcgWhite], { autoAlpha: 0 })
					.to([$slideOutTitle, $slideOutNumber, $layers], 0.3, { autoAlpha: 0, ease: Linear.easeNone })
					.set($main, { className: 'slide' + slideInID + '-active' })
					.set($slideInNumber, { text: '0' })
					.add('countingUp')
					.fromTo($slideInBcg, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, ease: Linear.easeNone, onComplete: hideOldSlide, onCompleteParams: [$slideOut] })
					.to($slideInBcgWhite, 0.3, { autoAlpha: 1, ease: Linear.easeNone }, 'countingUp-=0.4')
					.staggerFromTo($slideInTitle, 0.3, { autoAlpha: 0, x: '-=20' }, { autoAlpha: 1, x: 0, ease: Power1.easeOut }, 0.1, 'countingUp+=1.1')
				;

				// crossFadeTl.timeScale(0.5);

				// count up or scramble text
				// if (slideInID === 09) {
				// 	// scramble text
				// 	let scrambleTextTl = new TimelineMax();
				// 	scrambleTextTl.to($slideInNumber, 1.4, { scrambleText: 'Share', autoAlpha: 1, ease: Power1.easeOut });
				//
				// 	crossFadeTl.add(scrambleTextTl, 'countingUp');
				// } else {
				// 	// count up
				// 	let countUpText = new TimelineMax({paused: true});
				//
				// 	// fade number in
				// 	countUpText.to($slideInNumber, 1.2, { autoAlpha: 1, ease: Linear.easeNone, onUpdate: updateValue, onUpdateParams: ['{self}', slideInValue, $slideInNumber] });
				//
				// 	let countUpTl = new TimelineMax();
				// 	countUpTl.to(countUpText, 1, { progress: 1, ease:Power3.easeOut });
				//
				// 	crossFadeTl.add(countUpTl, 'countingUp');
				// }

				const countUpText = new TimelineMax({ paused: true });

				// fade number in
				countUpText.to($slideInNumber, 1.2, { autoAlpha: 1, ease: Linear.easeNone, onUpdate: updateValue, onUpdateParams: [ '{self}', slideInValue, $slideInNumber ] });

				const countUpTl = new TimelineMax();
				countUpTl.to(countUpText, 1, { progress: 1, ease: Power3.easeOut });

				crossFadeTl.add(countUpTl, 'countingUp');

				// colored background tween up/down
				if (direction === 'FORWARD') {

					let tweenBcg = TweenMax.fromTo(
						$slideInBcg, 0.7,
						{ autoAlpha: 0 },
						{
							autoAlpha: 1,
							ease: Linear.easeNone,
							onComplete: hideOldSlide,
							onCompleteParams: [$slideOut]
						}
					);

					crossFadeTl.add(tweenBcg, 'countingUp-=0.3');

				} else {

					let tweenBcg = TweenMax.to(
						$slideOutBcg, 0.7,
						{
							autoAlpha: 0,
							ease: Linear.easeNone,
							onComplete: hideOldSlide,
							onCompleteParams: [$slideOut]
						}
					);

					crossFadeTl.add(tweenBcg, 'countingUp-=0.3');

				}

				// fade in svg on the first slide
				if ( slideInID === '01' ) {

					let fadeInSVG = TweenMax.to($layers, 0.3, { autoAlpha: 1, ease: Linear.easeNone });

					// make the animation faster
					introAnimationTl.timeScale(1.8);

					// include fade and intro animation
					crossFadeTl.add([fadeInSVG, introAnimationTl], 'countingUp+=1.4');

				}
			}

			function hideOldSlide($slideOut) {
				TweenMax.set($slideOut, { autoAlpha: 0 });
			}

			function updateValue(tl, slideInValue, $slideInNumber) {

				let newValue = parseInt(tl.progress() * slideInValue);

				if ( slideInValue === '100' ) {
					$slideInNumber.text(newValue);
				} else {
					$slideInNumber.text(newValue + '%'); // Not good for the first slide
				}
			}

			function updateNav(slideOutID, slideInID) {

				// remove active class from all dots
				$('.nav-items li').removeClass('active');

				// Add active class to the new active slide
				TweenMax.set($('.nav-items li.nav-item' + slideInID), { className: '+=active' });
			}

			// Animate slide IN
			function animationIn($slideIn) {

				// SVG Logo animation
				let $layer = $('.layer'),
					$svgBase = $('#base'),
					$svgPath = $('#base path'),
					$awwwLogo = $('.awww-logo');

				introAnimationTl
					.from($svgPath, 1.2, { drawSVG: '0%', ease: Power2.easeInOut })
					.from($awwwLogo, 0.3, { autoAlpha: 0}, '-=0.3')
					.from([$svgBase, $awwwLogo], 1.2, { y: -115, ease: Power4.easeInOut }, "+=0.2")
					.add('fade')
					.staggerFrom($layer, 2, { autoAlpha: 0, y: -10, ease: Power4.easeInOut }, 0.2, 'fade-=1.5')
				;


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
					.add(introAnimationTl, 'fadeInLogo+=1')
					.fromTo($nav, 0.3, { y: -15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: Power1.easeOut }, 'fadeInLogo+=1.5')
				;

				transitionInTl.timeScale(3);
			}

			$navItemLink.on('click', (e) => {

				// scroll to right position
				let slideInIndex = $(e.target).attr('href').substring(6,8),
					offset = $('div#slide' + slideInIndex + '-pos').offset().top,
					wH = window.innerHeight,
					finalOffset = offset - (wH * 0.4);

				// Move window to correct position
				TweenMax.to(window, 0.7, { scrollTo: finalOffset, ease: Power4.easeOut });

				e.preventDefault();
			});

		}
	}
}
