import $ from 'jquery';
import P5 from 'p5';
import p5Flower from './p5-flower-of-life';

export default {

    init: () => {

        let $p5Flower = $('#p5flowerOfLife');

        if ( $p5Flower && $p5Flower.length ) {
            let p5FlowerEl = $p5Flower[0].id;
            new P5(p5Flower, p5FlowerEl);
        }
    }
};
