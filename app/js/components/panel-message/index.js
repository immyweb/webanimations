import $ from 'jquery';
import PanelMessage from './panelMessage';

export default {

    init: () => {

        let $panelMessage = $('[data-panel-message]');
        let panelMessage;

        if ( $panelMessage && $panelMessage.length ) {

            $panelMessage.each((index, element) => {
                panelMessage = new PanelMessage();
    			panelMessage.init( $(element) );
            });
        }
    }
};
