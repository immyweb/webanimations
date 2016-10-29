import $ from 'jquery';
import PanelMessage from './panelMessage';

module.exports = {

    init: function(){

        let $panelMessage = $('[data-panel-message]');
        let panelMessage;

        if ( $panelMessage && $panelMessage.length ) {

            $panelMessage.each(function(index, element){
                panelMessage = new PanelMessage();
    			panelMessage.init( $panelMessage );
            });
        }
    }
};
