import Snap from 'snapsvg';
import TweenMax from 'gsap';
import colourJson from '../../../data/colours.json';
import { random } from 'lodash';

const colors = colourJson;
const w = window.innerWidth;
const h = window.innerHeight;

export default class SnapSvg {

    init() {
		this.draw();
    }

	draw() {
		const s = Snap('#snap-svg');

		Snap.load('../../images/svgs/design1.svg', (f) => {
			let poly1 = f.select('#poly1');

			// let layer1 = poly1.select('.cls-1');
			// let layer2 = poly1.select('.cls-2');

			for ( let gridX = 0; gridX < w; gridX+=57 ) {
				for ( let gridY = 0; gridY < h; gridY+=51 ) {

					let randomIndex = random(colors.length-1);
					let randomAlpha = random(0.25, 0.75);

					const clone = poly1.clone();
					clone.transform(new Snap.Matrix().translate(gridX, gridY));
					clone.attr({
					    fill: colors[randomIndex],
					    stroke: colors[randomIndex],
					    strokeWidth: 1,
						fillOpacity: randomAlpha
					});

					s.append(clone);
				}
			}
		});


	}

}
