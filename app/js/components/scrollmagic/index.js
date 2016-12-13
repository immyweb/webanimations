import $ from 'jquery';
import ScrollMagic1 from './cross-reveal';
import ScrollMagic2 from './pen-revealing';
import ScrollMagic3 from './one-pager';

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

		let $scrollmagic3 = $('.js-onepager');
        let scrollmagic3;

        if ( $scrollmagic3 && $scrollmagic3.length ) {

            $scrollmagic3.each((index, element) => {
                scrollmagic3 = new ScrollMagic3();
    			scrollmagic3.init( $(element) );
            });
        }
    }
};
