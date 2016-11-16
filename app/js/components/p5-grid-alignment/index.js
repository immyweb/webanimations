import $ from 'jquery';
import P5 from 'p5';
import p5Grid from './p5-grid-alignment';

export default {

    init: () => {

        let $p5Grid = $('#p5grid');

        if ( $p5Grid && $p5Grid.length ) {
            let p5GridEl = $p5Grid[0].id;
            new P5(p5Grid, p5GridEl);
        }
    }
};
