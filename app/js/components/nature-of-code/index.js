import $ from 'jquery';
import P5 from 'p5';
import p5RandomWalker from './random-walker';

export default {

    init: () => {

        let $p5RandomWalker = $('#p5natureOfCode');

        if ( $p5RandomWalker && $p5RandomWalker.length ) {
            let $p5RandomWalkerEl = $p5RandomWalker[0].id;
            new P5(p5RandomWalker, $p5RandomWalkerEl);
        }
    }
};
