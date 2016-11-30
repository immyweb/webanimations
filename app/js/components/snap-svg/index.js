import $ from 'jquery';
import SnapSvg from './snap-svg';

export default {

    init: () => {

        let $snapSvg = $('#snap-svg');
        let snapSvg;

        if ( $snapSvg && $snapSvg.length ) {

            $snapSvg.each((index, element) => {
                snapSvg = new SnapSvg();
    			snapSvg.init( $(element) );
            });
        }
    }
};
