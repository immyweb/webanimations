import $ from 'jquery';
import SectionWipes from './sectionWipes';

export default {

    init: () => {

        let $sectionWipes = $('.js-section-wipes');
        let sectionWipes;

        if ( $sectionWipes && $sectionWipes.length ) {

            $sectionWipes.each((index, element) => {
                sectionWipes = new SectionWipes();
    			      sectionWipes.init( $(element) );
            });
        }
    }
};
