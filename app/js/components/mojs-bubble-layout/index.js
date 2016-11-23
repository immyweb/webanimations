import $ from 'jquery';
import BubbleLayout from './bubble-layout';

export default {

    init: () => {

        let $bubbleLayout = $('.js-bubble-layout');
        let bubbleLayout;

        if ( $bubbleLayout && $bubbleLayout.length ) {

            $bubbleLayout.each((index, element) => {
                bubbleLayout = new BubbleLayout();
    			bubbleLayout.init( $(element) );
            });
        }
    }
};
