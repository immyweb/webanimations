import $ from 'jquery';
import { TimelineMax } from 'gsap';

export default class SvgLab {

    init(element) {
        this.panel = element;

		const $coin = this.panel.find('#Coin'),
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
			mainTl = new TimelineMax();

		function clearStage() {
			const clearTl = new TimelineMax();

			clearTl
				.set($coin, { x: -90, y: 120, scale: 0.5, transformOrigin: 'center center' })
				.set($MainBulb, { fill: '#ffffff' })
				.set($Liquids, { stroke: '#ffffff' })
				.set($LiquidInsideMask01, { attr: { y: 492 } }) // Y value = y+height
				.set($LiquidInsideMask02, { attr: { y: 494 } })
				.set($LiquidInsideMask03, { attr: { y: 491 } })
				.set($LiquidInsideMask04, { attr: { y: 650 } })
				.set($LiquidInsideMask05, { attr: { y: 654 } })
				.set($LiquidInsideMask06, { attr: { y: 651 } })
				.set($LiquidInsideMask07, { attr: { y: 651 } })
			;

			return clearTl;
		}

		function init() {
			mainTl.add(clearStage);
		}
		init();

    }
}
