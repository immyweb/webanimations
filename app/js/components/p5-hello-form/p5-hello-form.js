let ranColour;
let ranStroke;
let colours = [];

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		p5.smooth();
		p5.noFill();
		p5.background('#1e1e20');

		colours = [p5.color('#ffffff'), p5.color('#e6e2d2'), p5.color('#52616d'), p5.color('#2c343b'), p5.color('#c44740'), p5.color('#fd6e5e')];
    };

    p5.draw = () => {

    };

	p5.mouseDragged = () => {
		p5.push();
			// p5.translate(p5.width/2, p5.height/2);
			p5.translate(p5.mouseX, p5.mouseY);

			let circleResolution = Math.floor(p5.map(p5.mouseY + 100, 0, p5.height, 2, 10));
			let radius = p5.mouseX-p5.width/2;
			let angle = p5.TWO_PI/circleResolution;

			let index = p5.floor(p5.random(colours.length));
            ranColour = colours[index];

			let hue = p5.hue(ranColour);
			let saturation = p5.saturation(ranColour);
			let bright = p5.brightness(ranColour);

			ranStroke = Math.floor(p5.random(1, 7));

			p5.strokeWeight(ranStroke);
			p5.stroke(hue, saturation, bright, 30);

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
