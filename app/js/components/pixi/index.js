import $ from 'jquery';
import Pixi from './pixi';

export default {

    init: () => {

        let $pixi = $('#stage');
        let pixi;

        if ( $pixi && $pixi.length ) {

            $pixi.each((index, element) => {
                pixi = new Pixi();
    			pixi.init( $(element) );
            });
        }
    }
};
