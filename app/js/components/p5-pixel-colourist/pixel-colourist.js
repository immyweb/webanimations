let image;
let r, g, b;

const s = ( p5 ) => {

	p5.preload = () => {
		 image = p5.loadImage('../../../images/video-panel/bg-image.png');
	};

    p5.setup = () => {
        p5.createCanvas(1024, 720);
		p5.colorMode(p5.RGB);
        p5.background('#1e1e20');
        p5.smooth();
    };

	p5.draw = () => {
		let x = p5.random(p5.width);
		let y = p5.random(p5.height);

		image.loadPixels();
		let c = image.get(x, y);

		r = p5.red(c);
		g = p5.green(c);
		b = p5.blue(c);

		p5.fill(r, g, b, 100);
		p5.ellipse(x, y, 16, 16);
	};
};

export default s;
