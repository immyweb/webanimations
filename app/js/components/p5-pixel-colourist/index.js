import $ from 'jquery';
import P5 from 'p5';
import p5PixelColourist from './pixel-colourist';

export default {

    init: () => {

        let $p5PixelColourist = $('#p5pixelColourist');

        if ( $p5PixelColourist && $p5PixelColourist.length ) {
            let p5PixelEl = $p5PixelColourist[0].id;
            new P5(p5PixelColourist, p5PixelEl);
        }
    }
};
