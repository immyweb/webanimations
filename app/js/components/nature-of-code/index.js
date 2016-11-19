import $ from 'jquery';
import P5 from 'p5';
import p5RandomWalker from './random-walker';
import p5RandomDistribution from './random-distribution';

export default {

    init: () => {

        let $p5RandomWalker = $('#p5randomWalker');

        if ( $p5RandomWalker && $p5RandomWalker.length ) {
            let $p5RandomWalkerEl = $p5RandomWalker[0].id;
            new P5(p5RandomWalker, $p5RandomWalkerEl);
        }

		let $p5RandomDistribution = $('#p5randomDistribution');

        if ( $p5RandomDistribution && $p5RandomDistribution.length ) {
            let $p5RandomDistEl = $p5RandomDistribution[0].id;
            new P5(p5RandomDistribution, $p5RandomDistEl);
        }
    }
};
