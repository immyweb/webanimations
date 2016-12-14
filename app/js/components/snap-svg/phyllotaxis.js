import Snap from 'snapsvg';
import mapRange from '../../utils/mapRange';

const s = Snap('#phyllotaxis');

const wW = window.innerWidth;
const wH = window.innerHeight;

let n = 0;
let c = 20;

let start = 0;

// let group;

export default class ScrollingGrid {

	init(element) {
		this.container = element;

		this.draw();
    }

	draw() {

		for ( let i = 0; i < 800; i++ ) {
			let a = n * 137.5; // 137.3, 137.5, 137.6
			let r = c * Math.sqrt(n);
			let x = r * Math.cos(a) + wW/2;
			let y = r * Math.sin(a) + wH/2;
			let hu = Math.sin(start + i * 0.5);
			hu = mapRange(hu, -1, 1, 0, 360);

			let circle = s.circle(x, y, 10);

			circle.attr({
				fill: Snap.hsb(hu, 1, 0.5),
				// fill: colors,
				strokeWidth: 1,
				stroke: '#ffffff'
			});

			n++;
		}


	}

}
