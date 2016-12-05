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
			$slider = this.panel.find('#slider'),
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

		function init() {
			mainTl
				.add(clearStage())
				.add(getIntroTl(), 'scene-intro');
		}
		init();

    }
}
