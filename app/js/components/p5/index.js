import $ from 'jquery';
import P5 from 'p5';
import sketch from './p5';

export default {

    init: () => {

        let $p5 = $('#p5stage');

        if ( $p5 && $p5.length ) {
            let p5el = $p5[0].id;
            new P5(sketch, p5el);
        }
    }
};
