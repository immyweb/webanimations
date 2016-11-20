import colourJson from '../../../data/colours.json';

let circWidth = 125;
let circRadius = circWidth/2;

let colours = [];

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		p5.ellipseMode(p5.CENTER);
		p5.smooth();
		p5.noFill();
		p5.background(0, 0, 9);

		colourJson.forEach((colour) => {
			colours.push(p5.color(colour));
		});
    };

    p5.draw = () => {
		p5.strokeWeight(2);

		for ( let gridY = 0; gridY < p5.height; gridY+=circRadius ) {
            for ( let gridX = 0; gridX < p5.width; gridX+=circRadius ) {
				let index = p5.floor(p5.random(colours.length));
	            let ranColour = colours[index];

				let hue = p5.hue(ranColour);
				let saturation = p5.saturation(ranColour);
				let bright = p5.brightness(ranColour);

				p5.push();
					p5.translate(gridX, gridY);

					p5.stroke(hue, saturation, bright, 100);

					let flower = new Flower(p5, circWidth);
					flower.draw();
				p5.pop();
			}
		}

		p5.noLoop();
    };
};

class Flower {

	constructor(p5, circWidth) {
		this.p5 = p5;
		this.circWidth = circWidth;
		this.circRadius = this.circWidth/2;
	}

	draw() {
		this.p5.ellipse(0, 0, this.circWidth); // center
		this.p5.ellipse(0 + this.circRadius, 0, this.circWidth); // right
		this.p5.ellipse(0 - this.circRadius, 0, this.circWidth); // left
		this.p5.ellipse(0, 0 + this.circRadius, this.circWidth); // bottom
		this.p5.ellipse(0, 0 - this.circRadius, this.circWidth); // top
	}
}

export default s;
