import mojs from 'mo-js';
import colourJson from '../../../data/colours.json';
import randomInt from '../../utils/randomInt';

import Poly1 from '../../shapes/poly1';
import Poly2 from '../../shapes/poly2';
import Poly3 from '../../shapes/poly3';
import Poly4 from '../../shapes/poly4';

const smallCircles = [];
const colors = colourJson;

const w = window.innerWidth;
const h = window.innerHeight;

mojs.addShape( 'poly1', Poly1 );
mojs.addShape( 'poly2', Poly2 );
mojs.addShape( 'poly3', Poly3 );
mojs.addShape( 'poly4', Poly4 );

export default class BubbleLayout {

    init(element) {
		this.container = element;
		this.draw();
    }

	draw() {

		for ( let gridY = 0; gridY < w; gridY+=55 ) {
			for ( let gridX = 0; gridX < 350; gridX+=65 ) {
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

	}

}
