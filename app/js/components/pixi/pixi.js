import $script from 'scriptjs';

export default class Pixi {

    constructor() {
    }

    init(element) {

        this.canvas = document.getElementById(element[0].id);

        $script('https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.1.1/pixi.min.js', () => {
            this.initCanvas();
        });
    }

    initCanvas() {
        // 1. Create a Pixi renderer and define size and a background color
        this.renderer = PIXI.autoDetectRenderer(400, 400, {
            transparent: true,
            antialias: true,
            resolution: 1
        });

        // 2. Append canvas element to the body
        this.canvas.appendChild(this.renderer.view);

        // 3. Create a container that will hold your scene
        this.stage = new PIXI.Container();

        this.drawLine();
        this.drawCircle();

        this.render();
    }

    drawLine() {
        // 4a. Create a line
        let line = new PIXI.Graphics();

        // Define line style (think stroke)
        // width, color, alpha
        line.lineStyle(10, 0xD5402B, 1);

        // Define line position - this aligns the top left corner of our canvas
        line.position.x = this.renderer.width / 2;
        line.position.y = this.renderer.height / 2;

        // Define pivot to the center of the element (think transformOrigin)
        line.pivot.set(0,140);
        line.rotation = 0.785398; // in radiants - use google to convert degrees to radiants

        // Draw line
        line.moveTo(5,0);
        line.lineTo(5, 280);

        this.stage.addChild(line);
    }

    drawCircle() {
        // 4b. Create a circle
        let circle = new PIXI.Graphics();

        // define outline = stroke
        circle.lineStyle(20, 0x91CF46, 1);

        // draw circle (x, y, radius)
        circle.drawCircle(this.renderer.width / 2, this.renderer.height / 2, 100);

        this.stage.addChild(circle);
    }

    render() {
        this.renderer.render(this.stage);
    }

}
