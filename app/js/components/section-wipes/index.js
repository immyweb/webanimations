import $ from 'jquery';
import SectionWipes from './sectionWipes';

module.exports = {

    init: function(){

        let $sectionSwipes = $('.js-section-swipes');
        let sectionSwipes;

        if ( $sectionSwipes && $sectionSwipes.length ) {

            $sectionSwipes.each(function(index, element){
                sectionSwipes = new SectionWipes();
    			      sectionSwipes.init( $sectionSwipes );
            });
        }
    }
};
