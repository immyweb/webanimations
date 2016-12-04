import $ from 'jquery';
import { TimelineMax } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

export default class SvgLab {

    init(element) {
        this.panel = element;

		console.log(this.panel);
    }
}
