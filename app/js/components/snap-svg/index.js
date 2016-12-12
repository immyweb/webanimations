import $ from 'jquery';
import SnapSvg from './raining-shapes';
import ScrollingGrid from './scrolling-grid';
import Phyllotaxis from './phyllotaxis';

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

		let $scrollingGrid = $('.js-scrolling-grid');
        let scrollingGrid;

        if ( $scrollingGrid && $scrollingGrid.length ) {

            $scrollingGrid.each((index, element) => {
                scrollingGrid = new ScrollingGrid();
    			scrollingGrid.init( $(element) );
            });
        }

		let $phyllotaxis = $('.js-phyllotaxis');
        let phyllotaxis;

        if ( $phyllotaxis && $phyllotaxis.length ) {

            $phyllotaxis.each((index, element) => {
                phyllotaxis = new Phyllotaxis();
    			phyllotaxis.init( $(element) );
            });
        }
    }
};
