import Snap from 'snapsvg';
import { TimelineMax } from 'gsap';
import 'gsap/src/uncompressed/plugins/TextPlugin.js';
import colourJson from '../../../data/colours.json';
import { random } from 'lodash';

const colors = colourJson;
const wW = window.innerWidth;
const wH = window.innerHeight;

const s = Snap('#scrollingGrid');
let shapesArray = [];

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

		const myLoadList = [ '../../images/svgs/design1.svg' ];

		loadMulti(myLoadList);
	}

	draw(shapesArray) {

		for ( let i = 0; i < 175; i++) {

			let randomIndex1 = random(colors.length-1);
			let randomIndex2 = random(colors.length-1);
			let randomAlpha = random(0.25, 0.75);
			let randomShapeIndex = random(shapesArray.length-1);
			let randomSize = random(0.25, 1.75);
			let randomX = random(wW);
			let randomY = random(wH);
			// let randomAngle = random(4) * 90;

			let shape = shapesArray[randomShapeIndex].select('g');

			const clone = shape.clone();

			clone.transform(new Snap.Matrix()
				.scale(randomSize)
				.translate(randomX, randomY));

			let layer1 = clone.select('.cls-1');
			let layer2 = clone.select('.cls-2');

			layer1.attr({
				fill: colors[randomIndex1],
				stroke: colors[randomIndex2],
				strokeWidth: 1,
				fillOpacity: randomAlpha
			});

			layer2.attr({
				fill: colors[randomIndex2],
				stroke: colors[randomIndex1],
				strokeWidth: 1,
				fillOpacity: randomAlpha
			});
			clone.addClass('shape');

			s.append(clone);
		}
	}

}
