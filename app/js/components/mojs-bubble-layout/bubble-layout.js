import mojs from 'mo-js';
import colourJson from '../../../data/colours.json';
import randomInt from '../../utils/randomInt';

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

		for ( let i = 0; i < 35; i++ ) {
			let randomIndex = randomInt(0, colors.length);
			let randomIndex2 = randomInt(0, colors.length);

			smallCircles.push(
				new mojs.Shape({
					parent:			this.container,
					shape:          'circle',
					fill:           colors[randomIndex2],
					fillOpacity:    'rand(0.25, 0.75)',
				    radius:         'rand(25, 125)',
					stroke:			colors[randomIndex],
					strokeWidth:    'rand(1, 3)',
					left:			`rand(0, ${w})`,
					top:			`rand(0, ${h})`,
					isShowStart:    true,

					scale:          { 1: 1.5 },
					duration:       500
				})
			);
		}

		smallCircles.forEach(smallCircle => {

			smallCircle.el.addEventListener('mouseover', (e) => {
				smallCircle
					.play()
					// .generate();
					// .replay();
			});

		});

	}

}
