import $ from 'jquery';
import PanelVideo from './panelVideo';

export default {

    init: () => {

        let $panelVideo = $('[data-panel-video]');
        let panelVideo;

        if ( $panelVideo && $panelVideo.length ) {

            $panelVideo.each((index, element) => {
                panelVideo = new PanelVideo();
    			panelVideo.init( $(element) );
            });
        }
    }
};
