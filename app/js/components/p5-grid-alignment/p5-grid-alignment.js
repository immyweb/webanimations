// let max_distance = 500;

const s = ( sk ) => {

    sk.setup = () => {
        sk.createCanvas(sk.windowWidth, sk.windowHeight);
		sk.colorMode(sk.HSB, sk.width, sk.height, 100, 100);
    };

    sk.draw = () => {
        sk.background(0, 0, 9);
		// sk.noFill();

        // sk.stroke(0, 0, 100, 50);
        sk.strokeWeight(2);
		sk.ellipseMode(sk.CORNER);

        for ( let gridY = 0; gridY < sk.width; gridY+=25 ) {
            for ( let gridX = 0; gridX < sk.height; gridX+=25 ) {

                // let diameter = sk.dist(sk.mouseX, sk.mouseY, gridX, gridY);
                // diameter = (diameter/max_distance) * 40;

				let ranSat = sk.random(70, 100);
				let ranAlpha = sk.random(30, 70);

                sk.push();
					// sk.translate(gridX, gridY, diameter*5);
					sk.translate(gridX, gridY);

					sk.stroke(gridY, gridX, 100, ranAlpha);
					sk.fill(gridX, gridY, ranSat, ranAlpha);
					sk.ellipse(0, 0, 50, 50);

                    // sk.ellipse(0, 0, diameter, diameter);
                sk.pop();
            }
        }

		sk.noLoop();
    };
};

export default s;
