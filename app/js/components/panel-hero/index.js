import $ from 'jquery';
import PanelHero from './panelHero';

export default {

    init: () => {

        let $panelHero = $('[data-panel-hero]');
        let panelHero;

        if ( $panelHero && $panelHero.length ) {

            $panelHero.each((index, element) => {
                panelHero = new PanelHero();
    			panelHero.init( $(element) );
            });
        }
    }
};
