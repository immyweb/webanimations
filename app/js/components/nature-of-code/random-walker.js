let walker;

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(640, 360);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		walker = new Walker(p5);
		p5.background(0, 0, 9);
    };

    p5.draw = () => {
		walker.step();
		walker.render();
    };
};

class Walker {

	constructor(p5) {
		this.p5 = p5;
		this.x = this.p5.width/2;
		this.y = this.p5.height/2;
	}

	render() {
		this.p5.stroke(0, 0, 100);
		this.p5.point(this.x, this.y);
	}

	step() {
		let choice = Math.round(this.p5.random(4));
		// let choice = Math.round(this.p5.randomGaussian(2, 1));

		if (choice === 0) {
	     	this.x++;
	    } else if (choice === 1) {
	     	this.x--;
	    } else if (choice === 2) {
	     	this.y++;
	    } else {
	     	this.y--;
	    }

		this.x = this.p5.constrain(this.x, 0, this.p5.width-1);
    	this.y = this.p5.constrain(this.y, 0, this.p5.height-1);
	}
}

export default s;
