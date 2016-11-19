let randomCounts = [];
let total = 20;

// An array to keep track of how often random numbers are picked

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, 600);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);

		for (let i = 0; i < total; i++) {
		    randomCounts[i] = 0;
		}
    };

    p5.draw = () => {
		p5.background(0, 0, 9);

		let index = Math.floor(p5.random(total));
		randomCounts[index]++;

		// Draw a rectangle to graph results
		p5.stroke(0, 0, 100);
		p5.strokeWeight(2);
		p5.fill(0, 0, 9);

		let w = p5.width/randomCounts.length;

		for (let x = 0; x < randomCounts.length; x++) {
			p5.rect( x*w, p5.height-randomCounts[x], w-1, randomCounts[x] );
		}
    };
};

export default s;
