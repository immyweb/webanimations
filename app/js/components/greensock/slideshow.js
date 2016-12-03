import $ from 'jquery';
import { TimelineMax } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

export default class GsapSlideshow {

    init(element) {
        this.panel = element;

		console.log(this.panel);
	}
}
