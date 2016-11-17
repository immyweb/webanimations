let ranColour;
let ranStroke;

const s = ( sk ) => {

    sk.setup = () => {
        sk.createCanvas(sk.windowWidth, sk.windowHeight);
		sk.colorMode(sk.HSB, 360, 100, 100, 100);
		sk.smooth();
		sk.noFill();
		sk.background(0, 0, 9);
    };

    sk.draw = () => {

    };

	sk.mouseDragged = () => {
		sk.push();
			// sk.translate(sk.width/2, sk.height/2);
			sk.translate(sk.mouseX, sk.mouseY);

			let circleResolution = Math.round(sk.map(sk.mouseY + 100, 0, sk.height, 2, 10));
			let radius = sk.mouseX-sk.width/2;
			let angle = sk.TWO_PI/circleResolution;

			ranColour = Math.round(sk.random(0, 100));
			ranStroke = Math.round(sk.random(1, 7));

			sk.strokeWeight(ranStroke);
			sk.stroke(ranColour, 100, 100, 10);

			sk.beginShape();
				for ( let i = 0; i <= circleResolution; i++ ) {
					let x = 0 + sk.cos(angle*i) * radius;
					let y = 0 + sk.sin(angle*i) * radius;
					sk.vertex(x, y);
				}
			sk.endShape();

		sk.pop();
	};
};

export default s;
