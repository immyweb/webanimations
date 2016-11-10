const s = ( sk ) => {

    sk.setup = () => {
        sk.createCanvas(sk.windowWidth, sk.windowHeight);
        sk.background(0, 0, 0);
        sk.smooth();

        let xstart = sk.random(10),
            xnoise = xstart,
            ynoise = sk.random(10);

        for (let y = 0; y <= sk.height; y+=5) {
            ynoise += 0.05;
            xnoise  = xstart;
            for (let x = 0; x <= sk.width; x+=5) {
                xnoise += 0.05;
                sk.drawPoint(x, y, sk.noise(xnoise, ynoise));
            }
        }
    };

    sk.drawPoint = (x, y, noiseFactor) => {
        sk.push();
            sk.translate(x, y);
            sk.rotate(noiseFactor * sk.radians(360));
            sk.colorMode(sk.HSB);
            sk.stroke(71, 0, 100);
            sk.line(0, 0, 9, 0);
        sk.pop();
    };

    sk.draw = () => {
        // sketch.background(51);
    };
};

export default s;
