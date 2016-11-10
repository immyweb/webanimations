const s = ( sketch ) => {

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight/2);
        sketch.background(142, 46, 139);
        sketch.smooth();

        let xstart = sketch.random(10),
            xnoise = xstart,
            ynoise = sketch.random(10);

        console.log(xnoise);
        console.log(ynoise);

        for (let y = 0; y <= sketch.height; y+=5) {
            ynoise += 0.05;
            xnoise  = xstart;
            for (let x = 0; x <= sketch.width; x+=5) {
                xnoise += 0.05;
                sketch.drawPoint(x, y, sketch.noise(xnoise, ynoise));
            }
        }
    };

    sketch.drawPoint = (x, y, noiseFactor) => {
        sketch.push();
            sketch.translate(x, y);
            sketch.rotate(noiseFactor * sketch.radians(360));
            sketch.colorMode(sketch.HSB);
            sketch.stroke(x*0.1 + 20, 50, 138);
            sketch.line(0, 0, 7, 0);
        sketch.pop();
    };

    sketch.draw = () => {
        // sketch.background(51);
    };
};

export default s;
