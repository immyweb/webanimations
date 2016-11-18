const s = ( p5 ) => {

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.background(0, 0, 0);
        p5.smooth();

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
        p5.push();
            p5.translate(x, y);
            p5.rotate(noiseFactor * p5.radians(360));
            p5.colorMode(p5.HSB);
            p5.stroke(71, 0, 100);
            p5.line(0, 0, 9, 0);
        p5.pop();
    };

    p5.draw = () => {
        // sketch.background(51);
    };
};

export default s;
