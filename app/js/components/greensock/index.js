import $ from 'jquery';
import Greensock1 from './gallery';

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
    }
};
