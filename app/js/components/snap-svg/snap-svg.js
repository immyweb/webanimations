import Snap from 'snapsvg';
import { TimelineMax } from 'gsap';
import 'gsap/src/uncompressed/plugins/TextPlugin.js';
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
		this.playBtn = element.find('.snap-svg__btn');
		this.shapesStartPos = [];

		this.setup();
    }

	setup() {

		Snap.load('../../images/svgs/design1.svg', (f) => {
			let poly1 = f.select('#poly1');

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
					this.shapesStartPos.push({ x: gridX, y: gridY });

					s.append(clone);
				}
			}

			this.playHandler();
		});
	}

	playHandler() {
		this.shapes = this.container.find('.shape');

		this.playBtn.on('click', (e) => {

			if ( !this.container.hasClass('completed') ) {
				this.playSequence();
			} else {
				this.reverseSequence();
			}

			e.preventDefault();
		});
	}

	rainShapesTl() {
		const tlRainShapes = new TimelineMax();

		// Reverse loop so animation starts at last item
		for ( let i = this.shapes.length-1; i >= 0; i-- ) {
			tlRainShapes.to(this.shapes[i], 1.25, { y: h-100, ease: Bounce.easeOut }, '-=1.1');
		}

		return tlRainShapes;
	}

	reverseShapesTl() {
		const tlReverseShapes = new TimelineMax();

		for ( let i = 0; i < this.shapes.length; i++ ) {
			tlReverseShapes.to(this.shapes[i], 1.25, { y: this.shapesStartPos[i].y, ease: Elastic.easeOut.config(1, 0.4) }, '-=1.2');
		}

		return tlReverseShapes;
	}

	playSequence() {
		const tlPlaySeq = new TimelineMax();

		tlPlaySeq
			.to(this.playBtn, 0.25, { autoAlpha: 0 })
			.add(this.rainShapesTl())
			.set(this.playBtn, { text: 'Reset' })
			.set(this.container, { className: '+=completed' })
			.to(this.playBtn, 0.25, { autoAlpha: 1 })
		;
	}

	reverseSequence() {
		const tlRevSeq = new TimelineMax();

		tlRevSeq
			.to(this.playBtn, 0.25, { autoAlpha: 0 })
			.add(this.reverseShapesTl())
			.set(this.playBtn, { text: 'Start' })
			.set(this.container, { className: '-=completed' })
			.to(this.playBtn, 0.25, { autoAlpha: 1 })
		;
	}

}
