import $ from 'jquery';
import Greensock1 from './gallery';
import Greensock2 from './slideshow';
import Greensock3 from './svg-lab';

export default {

    init: () => {

        let $greensock1 = $('.js-greensock1');
        let greensock1;

        if ( $greensock1 && $greensock1.length ) {

            $greensock1.each((index, element) => {
                greensock1 = new Greensock1();
    			greensock1.init( $(element) );
            });
        }

		let $greensock2 = $('.js-greensock2');
        let greensock2;

        if ( $greensock2 && $greensock2.length ) {

            $greensock2.each((index, element) => {
                greensock2 = new Greensock2();
    			greensock2.init( $(element) );
            });
        }

		let $greensock3 = $('.js-greensock3');
        let greensock3;

        if ( $greensock3 && $greensock3.length ) {

            $greensock3.each((index, element) => {
                greensock3 = new Greensock3();
    			greensock3.init( $(element) );
            });
        }
    }
};
