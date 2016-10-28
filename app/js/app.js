import $ from 'jquery';
import globalHeader from './components/global-header/index';
import panelHero from './components/panel-hero/index';

// run scripts on DOM ready
$(document).ready(() => {

    globalHeader.init();
    panelHero.init();

});
