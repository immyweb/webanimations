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

		function loadSVG(url) {
			return new Promise((resolve) => {
				Snap.load(url, resolve);
			});
		}

		const myLoadList = [ loadSVG('../../images/svgs/design1.svg') ];

		Promise.all(myLoadList).then((results) => {
			this.draw(results);
		});

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
