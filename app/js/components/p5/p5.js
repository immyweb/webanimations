const s = ( sketch ) => {

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight/2);
    };

    sketch.draw = () => {
        sketch.rect(100, 200, 75, 150);
    };
};

export default s;
