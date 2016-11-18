let ranColour;
let ranStroke;
let randomWidth;
let ranRotate;

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		p5.smooth();
		// p5.noFill();
		p5.background(0, 0, 9);
		p5.ellipseMode(p5.CENTER);
		p5.rectMode(p5.CENTER);
		p5.angleMode(p5.DEGREES);
    };

    p5.draw = () => {

		for ( let i = 0; i < 20; i++) {
			randomWidth = p5.random(20, p5.height);
			ranColour = Math.round(p5.random(0, 50));
			ranStroke = Math.round(p5.random(1, 5));
			ranRotate = Math.round(p5.random(1, 360));

			p5.push();
				p5.translate(p5.width/2, p5.height/2);

				p5.strokeWeight(ranStroke);
				p5.stroke(ranColour, 100, 100, 100);
				p5.fill(ranColour, 100, 100, 5);

				// p5.rotate(ranRotate);
				p5.ellipse(0, 0, randomWidth);
				p5.rect(0, 0, randomWidth, randomWidth);

			p5.pop();
		}

		p5.noLoop();
    };
};

export default s;
