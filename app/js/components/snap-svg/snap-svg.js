import $ from 'jquery';
import Snap from 'snapsvg';
import { TweenMax, TimelineMax } from 'gsap';
import colourJson from '../../../data/colours.json';
import { random } from 'lodash';

const colors = colourJson;
const w = window.innerWidth;
const h = window.innerHeight;

const s = Snap('#snap-svg');
let index = 0;

export default class SnapSvg {

    init(element) {
		this.container = element;
		this.draw();
    }

	draw() {

		Snap.load('../../images/svgs/design1.svg', (f) => {
			let poly1 = f.select('#poly1');

			// let layer1 = poly1.select('.cls-1');
			// let layer2 = poly1.select('.cls-2');

			for ( let gridY = 0; gridY < 100; gridY+=51 ) {
				for ( let gridX = 0; gridX < w; gridX+=57 ) {

					index = index + 1;
					let randomIndex = random(colors.length-1);
					let randomAlpha = random(0.25, 0.75);

					const clone = poly1.clone();
					clone.transform(new Snap.Matrix().translate(gridX, gridY));
					clone.addClass(`shape shape${index}`);
					clone.attr({
					    fill: colors[randomIndex],
					    stroke: colors[randomIndex],
					    strokeWidth: 1,
						fillOpacity: randomAlpha
					});

					s.append(clone);
				}
			}

			this.animate();
		});
	}

	animate() {

		// Play button triggers rain fall
		// When rain fall finishes, reset button appears

		let svgGroup = s.selectAll('g'),
			$shapes = this.container.find('.shape');

		TweenMax.staggerTo($shapes, 1.25, { y: h-100, ease: Bounce.easeOut, onComplete: bounceUp, onCompleteParams: ["{self}"] }, -0.1);

		function bounceUp(tween) {
			// console.log(tween.target);

		}
	}

}
