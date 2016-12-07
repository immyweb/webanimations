import Snap from 'snapsvg';
import { TimelineMax } from 'gsap';
import 'gsap/src/uncompressed/plugins/TextPlugin.js';
import colourJson from '../../../data/colours.json';
import { random } from 'lodash';

const colors = colourJson;
const w = window.innerWidth;
const h = window.innerHeight;

export default class SnapSvg {

    init(element) {
		this.container = element;

		console.log(element);
    }

}
