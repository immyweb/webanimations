import $ from 'jquery';
import P5 from './p5';

export default {

    init: () => {

        let $p5 = $('#p5stage');
        let p5;

        if ( $p5 && $p5.length ) {

            $p5.each((index, element) => {
                p5 = new P5();
    			p5.init( $(element) );
            });
        }
    }
};
