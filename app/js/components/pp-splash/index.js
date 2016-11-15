import $ from 'jquery';
import P5 from 'p5';
import ppSplash from './pp-splash';

export default {

    init: () => {

        let $splash = $('#ppSplash');

        if ( $splash && $splash.length ) {
            let splashEl = $splash[0].id;
            new P5(ppSplash, splashEl);
        }
    }
};
