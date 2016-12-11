import $ from 'jquery';
import { TimelineMax } from 'gsap';
import 'gsap/src/uncompressed/plugins/TextPlugin.js';

/*
    Colors before reset
    Green #73C996, Red - #F8876E, Yellow - #F8AD43

    Meter bcg -  #c6d7df to #5AB783,
    Meter stroke -  #7c99a2 to #448962
*/

export default class SvgLab {

    init(element) {
        this.panel = element;

		const $body = this.panel,
			$coin = this.panel.find('#Coin'),
			path = [ { x: -90, y: 120 }, { x: -45, y: -220 }, { x: 0, y: 120 } ],
			$BulbIdea = this.panel.find('#BulbIdea'),
			$BulbIdeaLight = this.panel.find('#MainBulb2'),
			$part1 = this.panel.find('#Part1'),
			$Petr = this.panel.find('#Petr'),
			$h1 = this.panel.find('h1'),
			$MainBulb = this.panel.find('#MainBulb'),
			$Liquids = this.panel.find('.liquid'),
			$Liquid01 = this.panel.find('#Liquid1'),
			$Liquid02 = this.panel.find('#Liquid2'),
			$Liquid03 = this.panel.find('#Liquid3'),
			$Liquid04 = this.panel.find('#Liquid4'),
			$Liquid05 = this.panel.find('#Liquid5'),
			$Liquid06 = this.panel.find('#Liquid6'),
			$Liquid07 = this.panel.find('#Liquid7'),
			$Liquid08 = this.panel.find('#Liquid8'),
			$Liquid09 = this.panel.find('#Liquid9'),
			$LiquidInsideMask01 = this.panel.find('#LiquidInside1Mask'),
			$LiquidInsideMask02 = this.panel.find('#LiquidInside2Mask'),
			$LiquidInsideMask03 = this.panel.find('#LiquidInside3Mask'),
			$LiquidInsideMask04 = this.panel.find('#LiquidInside4Mask'),
			$LiquidInsideMask05 = this.panel.find('#LiquidInside5Mask'),
			$LiquidInsideMask06 = this.panel.find('#LiquidInside6Mask'),
			$LiquidInsideMask07 = this.panel.find('#LiquidInside7Mask'),
			$bulb1 = this.panel.find('#Bulb1 .bulb'),
			$bulb2 = this.panel.find('#Bulb2 .bulb'),
			$bulb3 = this.panel.find('#Bulb3 .bulb'),
			$meterBcg = this.panel.find('#meterBcg'),
			$meterStroke = this.panel.find('#meterStroke'),
			$part2light = this.panel.find('#Part2 .light'),
			$part2lightLeft = this.panel.find('#Part2 .light-left'),
			$part2lightMid = this.panel.find('#Part2 .light-mid'),
			$part2lightRight = this.panel.find('#Part2 .light-right'),
			$printerLightsTop = this.panel.find('#PrinterLIghtTop, #PrinterLIghtTop_2_'),
			$printerLightsBottom = this.panel.find('#PrinterLIghtBottom, #PrinterLIghtBottom_1_'),
			$mainLight = this.panel.find('#MainLight'),
			$paper = this.panel.find('#Paper'),
			$paperText = this.panel.find('#PaperText text'),
			$slider = this.panel.find('#slider'),
			$pointer = this.panel.find('#pointer'),
			$stage = this.panel.find('#stage'),
			$MainMask = this.panel.find('#MainMask'),
			$smile = this.panel.find('#smile'),
			mainTl = new TimelineMax();

		function clearStage() {
			const clearTl = new TimelineMax();

			clearTl
				.set($coin, { x: -90, y: 120, scale: 0.5, transformOrigin: 'center center' })
				.set($MainBulb, { fill: '#ffffff' })
				.set($Liquids, { stroke: '#ffffff' })
				.set($Petr, { autoAlpha: 1, x: '1400%', scale: 2.5, transformOrigin: 'bottom center' })
				.set($stage, { autoAlpha: 0.5 })
				.set($MainMask, { attr: { x: 932 } })
				// Clear liquid
				.set($LiquidInsideMask01, { attr: { y: 492 } }) // Y value = y+height
				.set($LiquidInsideMask02, { attr: { y: 494 } })
				.set($LiquidInsideMask03, { attr: { y: 491 } })
				.set($LiquidInsideMask04, { attr: { y: 650 } })
				.set($LiquidInsideMask05, { attr: { y: 654 } })
				.set($LiquidInsideMask06, { attr: { y: 651 } })
				.set($LiquidInsideMask07, { attr: { y: 651 } })
				.set($pointer, { rotation: -45, transformOrigin: 'bottom center' })
				.set($paper, { y: '+55' })
			;

			return clearTl;
		}

		function getIntroTl() {
			const introTl = new TimelineMax();

			introTl
				.set($h1, { y: '-=40px' })
				.to($Petr, 0.8, { x: '1000%', ease: Power4.easeInOut })
				.fromTo($h1, 0.5, { x: '-46%', autoAlpha: 0 }, { x: '-50%', autoAlpha: 1 }, '-=0.4')
				.fromTo($smile, 0.4, { scale: 0.4, transformOrigin: 'center center' }, { scale: 1, ease: Power4.easeInOut }, '+=1.2')
				.add('zoom out')
				.to($Petr, 1, { x: '0%', scale: 1, ease: Power4.easeInOut }, 'zoom-out+=1') // One second later
				.to($h1, 0.5, { autoAlpha: 0 }, 'zoom-out+=1')
				.to($MainMask, 1, { attr: { x: 131 }, ease: Power4.easeInOut }, 'zoom-out+=1')
				.set($body, { className: '+=is-active' }, 'zoom-out+=1')
				.set($h1, { y: '-=60px', text: 'and this is my Greensock lab!' }) // Update heading text
				.add('text-in')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, 'text-in')
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2.5')
				.set($h1, { y: '-=30px', text: 'Lets have some fun...' })
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.to($stage, 0.2, { autoAlpha: 1, ease: Power0.none }, '-=0.2')
			;

			return introTl;
		}

		function getPart2Tl() {
			const part2Tl = new TimelineMax();

			part2Tl
				.add('part2-lights')
				.to($pointer, 2, { rotation: 20 })
				.staggerTo($part2light, 0.1, { fill: '#F8AD43' }, 0.1, 'part2-lights')
				.staggerTo($part2light, 0.1, { fill: '#F8876E' }, 0.1, 'part2-lights+=0.5')
				.staggerTo($part2light, 0.1, { fill: '#73C996' }, 0.1, 'part2-lights+=1')
				.to($meterBcg, 0.2, { fill: '#5AB783' }, 'part2-lights+=1.2')
				.to($meterStroke, 0.2, { fill: '#448962' }, 'part2-lights+=1.2')
				.to($slider, 1.2, { x: '-=10px', ease: Power4.easeInOut }, 'part2-lights+=1.4')
				.set($bulb1, { fill: '#5AB783' }, 'part2-lights+=2.6')
				.set($bulb2, { fill: '#F8876E' }, 'part2-lights+=3')
				.set($bulb3, { fill: '#F8AD43' }, 'part2-lights+=3.4')
			;

			return part2Tl;
		}

		function getFillTubesTl() {
			const fillTubesTl = new TimelineMax();

			// Get path length
			// const path = document.querySelector('#Liquid1');
			// const length = path.getTotalLength();

			let liquidLength = [131, 213, 228, 124, 124, 124, 101, 345, 393];

			// Reset all liquid to invisible - there a few exceptions
			$Liquids.each((index, element) => {
				TweenMax.set(element, { strokeDasharray: liquidLength[index], strokeDashoffset: liquidLength[index] });
			});

			fillTubesTl
				.set($Liquids, { stroke: '#F8876E' })
				.to($Liquid01, 2, { strokeDashoffset: 0, ease: Power0.easeNone })
				// Create a Tween
				.add('flask01')
				.set($h1, { y: '-=30px', text: 'Create a tween' })
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { y: '-=30px', text: 'and another one' })
				.to($Liquid02, 0.5, { strokeDashoffset: 0, ease: Power0.easeNone }, '-=0.2')

				// add another one
				.add('flask02')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { y: '-=30px', text: 'add them to a timeline' })
				.to($Liquid03, 0.5, { strokeDashoffset: 0, ease: Power0.easeNone }, '-=0.1')

				// add them to the timeline
				.add('flask03')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { y: '-=30px', text: 'create multiple timelines' })
				.to($Liquid04, 0.5, { strokeDashoffset: 0, ease: Power0.easeNone })
				.to($Liquid05, 0.5, { strokeDashoffset: 0, ease: Power0.easeNone })

				// Create multiple timelines
				.to($Liquid06, 0.7, { strokeDashoffset: 0, ease: Power0.easeNone })
				.add('flask04')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { y: '-=30px', text: 'fine tune easing' })

				// dont't fill main flask yet
				.to($Liquid07, 1.4, { strokeDashoffset: 0, ease: Power0.easeNone })

				// fine tune easing
				.to($Liquid08, 1.5, { strokeDashoffset: 0, ease: Power0.easeNone })
				.add('flask06')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { y: '-=30px', text: 'master Greensock animations' })

				.to($Liquid09, 0.6, { strokeDashoffset: 0, ease: Power0.easeNone })
				.add('flask07')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { scale: 0.9, y: '-=30px', text: 'and most importantly' })

				// and most importantly + have fun
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 2, { scale: 1, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false }) })
				.to($h1, 0.3, { scale: 1.1, autoAlpha: 0, ease: Power0.easeNone })
				.set($h1, { scale: 0.9, text: 'have some fun' })
				.to($h1, 0.3, { scale: 1, autoAlpha: 1, ease: Power4.easeInOut }, '+=0.3')
				.to($h1, 0.2, { autoAlpha: 0, ease: Power4.easeInOut }, '+=1')
				.set($h1, { y: '-=30px', text: 'Want to learn Greensock from scratch?' })

				.add('main-flask')

				// fill in all the flasks
				.to($LiquidInsideMask01, 6, { attr: { y: 415, ease: Power0.easeNone } }, 'flask01')
				.to($LiquidInsideMask02, 8.4, { attr: { y: 451, ease: Power0.easeNone } }, 'flask02')
				.to($LiquidInsideMask03, 5, { attr: { y: 452, ease: Power0.easeNone } }, 'flask03')
				.to($LiquidInsideMask04, 4, { attr: { y: 602, ease: Power0.easeNone } }, 'flask04')
				.to($LiquidInsideMask06, 1.7, { attr: { y: 608, ease: Power0.easeNone } }, 'flask06')
				.to($LiquidInsideMask07, 1.7, { attr: { y: 608, ease: Power0.easeNone } }, 'flask07')
				.to($LiquidInsideMask05, 3, { attr: { y: 563, ease: Power0.easeNone } }, 'main-flask')
			;

			return fillTubesTl;
		}

		function getIdeaTl() {
			const ideaTl = new TimelineMax();

			ideaTl
				// Got idea
				.set($BulbIdea, { autoAlpha: 1, immediateRender: false })
				.from($BulbIdea, 0.5, { y: '+=40px', ease: Bounce.easeOut })
				.set($h1, { y: '-=30px', text: 'You have a cool idea, right?' })
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
				.set($h1, { y: '-=30px', text: 'And now what?' })
				.fromTo($BulbIdeaLight, 0.3, { fill: '#ffffff' }, { fill: '#73C996', repeat: 3, yoyo: true })
				.fromTo($BulbIdeaLight, 0.3, { fill: '#ffffff' }, { fill: '#F8876E', repeat: 3, yoyo: true })
				.fromTo($BulbIdeaLight, 0.8, { fill: '#ffffff' }, { fill: '#F8AD43' })
				.to($BulbIdea, 0.6, { y: '-=20px', scale: 1.1, transformOrigin: 'center bottom', ease: Power4.easeOut })
				.to($BulbIdea, 0.2, { y: '+=120px', scale: 0.8, ease: Back.easeIn })

				// Idea out of head
				.set($coin, { autoAlpha: 1 }, '+=0.3')
				.to($coin, 6, { rotation: 720, bezier: { curviness: 0.3, values: path }, ease: SlowMo.ease.config(0.9, 0.7, false) })
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, '-=5.5')
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '-=3.5')
				.set($h1, { y: '-=30px', text: 'Let Greensock do the rest' }, '-=3.5')
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, '-=3.2')
				.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '-=1.2')
				.to($part1, 0.06, { rotation: 5, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo: true })
			;

			return ideaTl;
		}

		function getFinalCTATl() {
			const finalCTATl = new TimelineMax();

			const lightBlinkTl = new TimelineMax({ repeat: -1, yoyo: true });

			lightBlinkTl
				.fromTo($printerLightsTop, 0.1, { fill: '#5AB783' }, { fill: '#F8AD43', immediateRender: false })
				.fromTo($printerLightsBottom, 0.1, { fill: '#5AB783' }, { fill: '#F8AD43', immediateRender: false }, '+=0.2')
				.fromTo($printerLightsTop, 0.1, { fill: '#F8AD43' }, { fill: '#F8876E', immediateRender: false }, '-=0.2')
				.fromTo($printerLightsBottom, 0.1, { fill: '#F8AD43' }, { fill: '#F8876E', immediateRender: false }, '+=0.2')
				.fromTo($printerLightsTop, 0.1, { fill: '#F8876E' }, { fill: '#5AB783', immediateRender: false }, '-=0.2')
				.fromTo($printerLightsBottom, 0.1, { fill: '#F8876E' }, { fill: '#5AB783', immediateRender: false }, '+=0.2')
			;

			const hideAndSeekTl = new TimelineMax({ repeat: -1, repeatDelay: 5 });

			hideAndSeekTl
				.to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) })
				.set($paperText, { text: 'YES SIR!' })
				.to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
				.to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5')
				.set($paperText, { text: 'SURE MAN!' })
				.to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
				.to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5')
				.set($paperText, { text: 'OK BABY!' })
				.to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
				.to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5')
				.set($paperText, { text: 'LETS GO!' })
				.to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
				.to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5')
				.set($paperText, { text: 'SIGN UP!' })
				.to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
				.to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5')
				.set($paperText, { text: 'START HERE!' })
				.to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
			;

			finalCTATl
				.fromTo($MainBulb, 0.05, { fill: '#ffffff' }, { fill: '#F8AD43', repeat: 10, yoyo: true })
				.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, '+=0.3')
				.add(lightBlinkTl, '2')
				.to($paper, 3, { y: 0, ease: SteppedEase.config(10) }, '2.5')
				.add(hideAndSeekTl, '5.6')
			;

			return finalCTATl;
		}

		function init() {
			mainTl
				.add(clearStage())
				.add(getIntroTl(), 'scene-intro')
				.add(getIdeaTl(), 'scene-idea')
				.add(getPart2Tl(), 'scene-part2')
				.add(getFillTubesTl(), 'scene-tubes')
				.add(getFinalCTATl(), 'scene-final')
			;

			// mainTl.seek('scene-final');
		}
		init();

    }
}
