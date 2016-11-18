import $ from 'jquery';
import P5 from 'p5';
import p5Mandala from './p5-mandala';

export default {

    init: () => {

        let $p5Mandala = $('#p5mandala');

        if ( $p5Mandala && $p5Mandala.length ) {
            let p5MandalaEl = $p5Mandala[0].id;
            new P5(p5Mandala, p5MandalaEl);
        }
    }
};
