import $ from 'jquery';
import PanelVideo from './panelVideo';

module.exports = {

    init: function(){

        let $panelVideo = $('[data-panel-video]');
        let panelVideo;

        if ( $panelVideo && $panelVideo.length ) {

            $panelVideo.each(function(index, element){
                panelVideo = new PanelVideo();
    			panelVideo.init( $panelVideo );
            });
        }
    }
};
