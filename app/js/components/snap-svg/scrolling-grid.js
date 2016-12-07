import Snap from 'snapsvg';
import { TimelineMax } from 'gsap';
import 'gsap/src/uncompressed/plugins/TextPlugin.js';
import colourJson from '../../../data/colours.json';
import { random } from 'lodash';

const colors = colourJson;
const wW = window.innerWidth;
const wH = window.innerHeight;

const s = Snap('#scrollingGrid');
let index = 0;
let shapesArray = [];
let shapesStartPos = [];

export default class ScrollingGrid {

    init(element) {
		this.container = element;

		this.loadSVGs();
    }

	loadSVGs() {
		const _this = this;

		function imagesLoaded(shapesArray) {
			_this.draw(shapesArray);
		}

		function loadMulti(list) {
			let image,
				fragLoadedCount = 0,
				listLength = list.length;

			for ( let count = 0; count < listLength; count++ ) {
				(function() {
					let whichEl = count;
					image = Snap.load(list[count], (f) => {
						fragLoadedCount++;
						shapesArray[whichEl] = f;
						if ( fragLoadedCount >= listLength ) {
							imagesLoaded(shapesArray);
						}
					});
				})();
			}
		}

		const myLoadList = [ '../../images/svgs/design1.svg', '../../images/svgs/design2-2.svg' ];

		loadMulti(myLoadList);
	}

	draw(shapesArray) {
		console.log(shapesArray);
		console.log(colors);
	}

}
