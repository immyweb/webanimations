let ranColour;
let ranStroke;

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		p5.smooth();
		p5.noFill();
		p5.background(0, 0, 9);
    };

    p5.draw = () => {

    };

	p5.mouseDragged = () => {
		p5.push();
			// p5.translate(p5.width/2, p5.height/2);
			p5.translate(p5.mouseX, p5.mouseY);

			let circleResolution = Math.round(p5.map(p5.mouseY + 100, 0, p5.height, 2, 10));
			let radius = p5.mouseX-p5.width/2;
			let angle = p5.TWO_PI/circleResolution;

			ranColour = Math.round(p5.random(0, 100));
			ranStroke = Math.round(p5.random(1, 7));

			p5.strokeWeight(ranStroke);
			p5.stroke(ranColour, 100, 100, 10);

			p5.beginShape();
				for ( let i = 0; i <= circleResolution; i++ ) {
					let x = 0 + p5.cos(angle*i) * radius;
					let y = 0 + p5.sin(angle*i) * radius;
					p5.vertex(x, y);
				}
			p5.endShape();

		p5.pop();
	};
};

export default s;
