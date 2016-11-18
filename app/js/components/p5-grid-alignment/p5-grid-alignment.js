// let max_distance = 500;

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, p5.width, p5.height, 100, 100);
    };

    p5.draw = () => {
        p5.background(0, 0, 9);
		// p5.noFill();

        // p5.stroke(0, 0, 100, 50);
        p5.strokeWeight(2);
		p5.ellipseMode(p5.CORNER);

        for ( let gridY = 0; gridY < p5.width; gridY+=25 ) {
            for ( let gridX = 0; gridX < p5.height; gridX+=25 ) {

                // let diameter = p5.dist(p5.mouseX, p5.mouseY, gridX, gridY);
                // diameter = (diameter/max_distance) * 40;

				let ranSat = p5.random(70, 100);
				let ranAlpha = p5.random(30, 70);

                p5.push();
					// p5.translate(gridX, gridY, diameter*5);
					p5.translate(gridX, gridY);

					p5.stroke(gridY, gridX, 100, ranAlpha);
					p5.fill(gridX, gridY, ranSat, ranAlpha);
					p5.ellipse(0, 0, 50, 50);

                    // p5.ellipse(0, 0, diameter, diameter);
                p5.pop();
            }
        }

		p5.noLoop();
    };
};

export default s;
