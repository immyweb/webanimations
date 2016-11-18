import $ from 'jquery';
import P5 from 'p5';
import p5HelloForm from './p5-hello-form';

export default {

    init: () => {

        let $p5HelloForm = $('#p5HelloForm');

        if ( $p5HelloForm && $p5HelloForm.length ) {
            let p5HelloFormEl = $p5HelloForm[0].id;
            new P5(p5HelloForm, p5HelloFormEl);
        }
    }
};
