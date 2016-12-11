import $ from 'jquery';
import ScrollMagic1 from './cross-reveal';


export default {

    init: () => {

        let $scrollmagic1 = $('.js-scrollmagic1');
        let scrollmagic1;

        if ( $scrollmagic1 && $scrollmagic1.length ) {

            $scrollmagic1.each((index, element) => {
                scrollmagic1 = new ScrollMagic1();
    			scrollmagic1.init( $(element) );
            });
        }
    }
};
