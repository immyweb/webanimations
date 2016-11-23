import mojs from 'mo-js';
import colourJson from '../../../data/colours.json';

const smallCircles = [];
const colors = colourJson;

let circleRadius = 150;

let w = window.innerWidth;
let h = window.innerHeight;

export default class BubbleLayout {

    init(element) {
		this.container = element;
		this.draw();
    }

	draw() {

		for ( let i = 0; i < 5; i++ ) {
			smallCircles.push(
				new mojs.Shape({
					shape:          'circle',
					fill:           'none',
				    radius:         circleRadius,
					stroke:			colors[i % colors.length],
					left:			`rand(0, ${w})`,
					top:			`rand(0, ${h})`,
					isShowStart:    true
				})
			);
		}

		document.addEventListener( 'click', (e) => {

			smallCircles.forEach(smallCircle => {
				smallCircle
					.generate() // Regenerate randoms that the shape had on initialization
					.replay();
			});
		});
	}

}
