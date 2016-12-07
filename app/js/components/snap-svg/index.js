import $ from 'jquery';
import SnapSvg from './raining-shapes';

export default {

    init: () => {

        let $snapSvg = $('.js-snap-svg1');
        let snapSvg;

        if ( $snapSvg && $snapSvg.length ) {

            $snapSvg.each((index, element) => {
                snapSvg = new SnapSvg();
    			snapSvg.init( $(element) );
            });
        }
    }
};
