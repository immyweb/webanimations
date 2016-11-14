import $ from 'jquery';
import Parallax from './parallax';

export default {

    init: () => {

        let $parallax = $('.js-parallax');
        let parallax;

        if ( $parallax && $parallax.length ) {

            $parallax.each((index, element) => {
                parallax = new Parallax();
    			parallax.init( $(element) );
            });
        }
    }
};
