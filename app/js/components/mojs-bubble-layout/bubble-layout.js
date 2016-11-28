import mojs from 'mo-js';
import colourJson from '../../../data/colours.json';
import randomInt from '../../utils/randomInt';

import Poly1 from '../../shapes/poly1';

const smallCircles = [];
const colors = colourJson;

let w = window.innerWidth;
let h = window.innerHeight;

export default class BubbleLayout {

    init(element) {
		this.container = element;
		this.draw();
    }

	draw() {

		// for ( let i = 0; i < 25; i++ ) {
		// 	let randomIndex = randomInt(0, colors.length);
		// 	let randomIndex2 = randomInt(0, colors.length);
		//
		// 	smallCircles.push(
		// 		new mojs.Shape({
		// 			parent:			this.container,
		// 			shape:          'poly1',
		// 			fill:           colors[randomIndex2],
		// 			fillOpacity:    'rand(0.25, 0.75)',
		// 		    radius:         'rand(25, 125)',
		// 			stroke:			colors[randomIndex],
		// 			strokeWidth:    'rand(1, 3)',
		// 			left:			`rand(0, ${w})`,
		// 			top:			`rand(0, ${h})`,
		// 			isShowStart:    true
		//
		// 			// scale:          { 1: 1.5 },
		// 			// duration:       500
		// 		})
		// 	);
		// }
		//
		// for ( let i = 0; i < 15; i++ ) {
		// 	let randomIndex = randomInt(0, colors.length);
		// 	let randomIndex2 = randomInt(0, colors.length);
		//
		// 	smallCircles.push(
		// 		new mojs.Shape({
		// 			parent:			this.container,
		// 			shape:          'poly2',
		// 			fill:           colors[randomIndex2],
		// 			fillOpacity:    'rand(0.25, 0.75)',
		// 		    radius:         'rand(25, 125)',
		// 			stroke:			colors[randomIndex],
		// 			strokeWidth:    'rand(1, 3)',
		// 			left:			`rand(0, ${w})`,
		// 			top:			`rand(0, ${h})`,
		// 			isShowStart:    true
		// 		})
		// 	);
		// }

		// smallCircles.forEach(smallCircle => {
		//
		// 	smallCircle.el.addEventListener('mouseover', (e) => {
		// 		smallCircle
		// 			.play()
		// 			// .generate();
		// 			// .replay();
		// 	});
		//
		// });

		for ( let gridY = 0; gridY < w; gridY+=55 ) {
			for ( let gridX = 0; gridX < h; gridX+=65 ) {
				let randomIndex = randomInt(0, colors.length);
				let randomIndex2 = randomInt(0, colors.length);

				smallCircles.push(
					new mojs.Shape({
						parent:			this.container,
						shape:          'poly1',
						fill:           colors[randomIndex2],
						fillOpacity:    'rand(0.25, 0.75)',
					    radius:         '50',
						stroke:			colors[4],
						strokeWidth:    '1',
						left:			gridY,
						top:			gridX,
						isShowStart:    true
					})
				);
			}
		}

	}

}



class Poly2 extends mojs.CustomShape {
	getShape() {
		return '<polygon class="cls-1" points="50 1 30.84 6.33 41.09 45.32 2.5 55.82 7.55 75.28 21.9 89.62 49.8 60.93 78.49 89.62 92.25 75.28 97.5 55.82 58.77 45.21 69.3 6.24 50 1"/><polygon class="cls-1" points="78.3 11.41 92.45 25.76 97.5 45.21 58.84 55.82 69.45 94.88 49.77 99.41 30.85 94.7 40.84 55.82 2.5 45.1 7.55 25.76 21.51 11.4 49.8 40.1 78.3 11.41"/>';
	}
}

class Poly3 extends mojs.CustomShape {
	getShape() {
		return '<polygon class="cls-1" points="36.96 25.7 33.34 39.79 22.89 50.19 33.49 60.41 36.96 74.49 50.75 71.04 64.68 74.48 68.2 60.41 78.61 50 68.69 39.59 64.73 25.7 50.75 29.15 36.96 25.7"/><polygon class="cls-1" points="50.85 1.41 40.59 11.62 36.96 25.7 50.75 29.15 64.73 25.7 61.11 11.62 50.85 1.41"/><polygon class="cls-1" points="92.5 25.7 78.61 22.23 64.73 25.7 68.69 39.59 78.61 50 89.02 39.59 92.5 25.7"/><polygon class="cls-1" points="9.2 25.7 12.67 39.59 22.89 50.19 33.34 39.79 36.96 25.7 23.08 22.23 9.2 25.7"/><polygon class="cls-1" points="9.01 74.3 12.82 60.21 22.89 50.19 33.49 60.41 36.96 74.49 23.08 77.96 9.01 74.3"/><polygon class="cls-1" points="50.85 98.59 61.26 88.18 64.68 74.48 50.75 71.04 36.96 74.49 40.43 88.18 50.85 98.59"/><polygon class="cls-1" points="92.5 74.3 88.54 60.41 78.61 50 68.2 60.41 64.68 74.48 78.61 77.96 92.5 74.3"/>';
	}
}

class Poly4 extends mojs.CustomShape {
	getShape() {
		return '<polygon class="cls-1" points="50 1 39.65 11.3 32.35 39.7 11.65 60.3 7.81 74.5 22 78.19 50 71.19 78 78.19 92 74.5 88.01 60.49 67.99 39.51 60.35 11.3 50 1"/><polygon class="cls-1" points="92 25.5 78 22 50 29 22 22 8 25.5 11.5 39.5 32.5 60.5 39.5 88.5 50 99 60.5 88.5 67.5 60.5 88.5 39.5 92 25.5"/><polygon class="cls-1" points="50 1 31.05 6.28 41.19 44.86 3 55.25 8 74.5 22.19 88.69 49.81 60.31 78.19 88.69 91.81 74.5 97 55.25 58.67 44.75 69.1 6.19 50 1"/><polygon class="cls-1" points="78 11.31 92 25.5 97 44.75 58.75 55.25 69.25 93.89 49.77 98.38 31.05 93.72 40.94 55.25 3 44.64 8 25.5 21.81 11.3 49.81 39.69 78 11.31"/><polygon class="cls-1" points="50 1 36 9.17 35.81 41.72 7.81 58.05 7.81 74.5 21.81 82.86 49.81 66.33 77.81 82.86 91.81 74.5 91.81 58.28 64.19 41.72 63.81 9.28 50 1"/><polygon class="cls-1" points="50 99 64 90.83 63.81 58.05 91.81 41.72 91.81 25.5 78.19 17.33 50.19 33.67 21.81 17.33 7.81 25.5 8 41.83 35.81 58.17 35.81 90.95 50 99"/>';
	}
}

mojs.addShape( 'poly1', Poly1 );
mojs.addShape( 'poly2', Poly2 );
mojs.addShape( 'poly3', Poly3 );
mojs.addShape( 'poly4', Poly4 );
