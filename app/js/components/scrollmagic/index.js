import $ from 'jquery';
import ScrollMagic1 from './cross-reveal';
import ScrollMagic2 from './pen-revealing';

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

		let $scrollmagic2 = $('.js-pen-reveal');
        let scrollmagic2;

        if ( $scrollmagic2 && $scrollmagic2.length ) {

            $scrollmagic2.each((index, element) => {
                scrollmagic2 = new ScrollMagic2();
    			scrollmagic2.init( $(element) );
            });
        }
    }
};
