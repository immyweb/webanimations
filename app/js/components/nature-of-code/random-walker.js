import Walker from './classes/walker';

let walker;

const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		walker = new Walker(p5);
		p5.background(0, 0, 9);
    };

    p5.draw = () => {
		walker.step();
		walker.render();
    };
};

export default s;
