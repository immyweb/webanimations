let strokeColor;

const s = ( sk ) => {

    sk.setup = () => {
        sk.createCanvas(sk.windowWidth, sk.windowHeight);
		sk.colorMode(sk.HSB, 360, 100, 100, 100);
		sk.smooth();
		sk.noFill();
		sk.background('#161616');

		strokeColor = sk.color(255, 10);
    };

    sk.draw = () => {
		if (sk.mouseIsPressed) {
			sk.push();
				sk.translate(sk.width/2, sk.height/2);

				let circleResolution = Math.round(sk.map(sk.mouseY + 100, 0, sk.height, 2, 10));
				let radius = sk.mouseX-sk.width/2;
				let angle = sk.TWO_PI/circleResolution;

				sk.strokeWeight(2);
				sk.stroke(strokeColor);

				sk.beginShape();
					for ( let i = 0; i <= circleResolution; i++ ) {
						let x = 0 + sk.cos(angle*i) * radius;
						let y = 0 + sk.sin(angle*i) * radius;
						sk.vertex(x, y);
					}
				sk.endShape();

			sk.pop();
		}
    };
};

export default s;
