import $ from 'jquery';
import PanelHero from './panelHero';

module.exports = {

    init: function(){

        let $panelHero = $('[data-panel-hero]');
        let panelHero;

        if ( $panelHero && $panelHero.length ) {

            $panelHero.each(function(index, element){
                panelHero = new PanelHero();
    			panelHero.init( $panelHero );
            });
        }
    }
};
