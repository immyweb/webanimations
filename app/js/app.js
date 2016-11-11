import $ from 'jquery';
import panelHero from './components/panel-hero/index';
import panelVideo from './components/panel-video/index';
import panelMessage from './components/panel-message/index';
import pixi from './components/pixi/index';
import p5 from './components/p5/index';
import sectionWipes from './components/section-wipes/index';

// run scripts on DOM ready
$(document).ready(() => {

    panelHero.init();
    panelVideo.init();
    panelMessage.init();
    pixi.init();
    p5.init();
    sectionWipes.init();
});
