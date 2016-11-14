import $ from 'jquery';
import ImageScroll from './pp-image-scroll';

export default {

    init: () => {

        let $imageScroll = $('.js-imagescroll');
        let imageScroll;

        if ( $imageScroll && $imageScroll.length ) {

            $imageScroll.each((index, element) => {
                imageScroll = new ImageScroll();
    			imageScroll.init( $(element) );
            });
        }
    }
};
