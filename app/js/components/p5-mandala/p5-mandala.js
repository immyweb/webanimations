import colourJson from '../../../data/colours.json';

let ranStroke;
let randomWidth;
let colours = [];

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		p5.smooth();
		p5.noFill();
		p5.background('#1e1e20');
		p5.ellipseMode(p5.CENTER);
		p5.rectMode(p5.CENTER);
		p5.angleMode(p5.DEGREES);

		colourJson.forEach((colour) => {
			colours.push(p5.color(colour));
		});
    };

    p5.draw = () => {

		for ( let i = 0; i < 20; i++) {
			randomWidth = p5.random(20, p5.height);
			ranStroke = Math.floor(p5.random(1, 5));

            let index = p5.floor(p5.random(colours.length));
            let ranColour = colours[index];

			let hue = p5.hue(ranColour);
			let saturation = p5.saturation(ranColour);
			let bright = p5.brightness(ranColour);

			p5.push();
				p5.translate(p5.width/2, p5.height/2);

				p5.strokeWeight(ranStroke);
				p5.stroke(hue, saturation, bright, 90);
				p5.fill(hue, saturation, bright, 5);

				p5.ellipse(0, 0, randomWidth);
				p5.rect(0, 0, randomWidth, randomWidth);

			p5.pop();
		}

		p5.noLoop();
    };
};

export default s;
