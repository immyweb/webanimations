import $ from 'jquery';
import P5 from 'p5';
import sketch from './p5';

export default {

    init: () => {

        let $p5 = $('#p5stage');
        let p5el = $p5[0].id;

        if ( $p5 ) {
            new P5(sketch, p5el);
        }
    }
};
