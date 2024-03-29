import colourJson from '../../../data/colours.json';

let colours = [];

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
        p5.background('#1e1e20');
        p5.smooth();

		colourJson.forEach((colour) => {
			colours.push(p5.color(colour));
		});

        let xstart = p5.random(10),
            xnoise = xstart,
            ynoise = p5.random(10);

        for (let y = 0; y <= p5.height; y+=5) {
            ynoise += 0.05;
            xnoise  = xstart;
            for (let x = 0; x <= p5.width; x+=5) {
                xnoise += 0.05;
                p5.drawPoint(x, y, p5.noise(xnoise, ynoise));
            }
        }
    };

    p5.drawPoint = (x, y, noiseFactor) => {
		let index = p5.floor(p5.random(colours.length));
		let ranColour = colours[index];

		let hue = p5.hue(ranColour);
		let saturation = p5.saturation(ranColour);
		let bright = p5.brightness(ranColour);

        p5.push();
            p5.translate(x, y);
            p5.rotate(noiseFactor * p5.radians(360));
            p5.stroke(hue, saturation, bright);
            p5.line(0, 0, 9, 0);
        p5.pop();
    };
};

export default s;
