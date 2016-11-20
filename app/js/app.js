import $ from 'jquery';
import panelHero from './components/panel-hero/index';
import panelVideo from './components/panel-video/index';
import panelMessage from './components/panel-message/index';
import pixi from './components/pixi/index';
import p5 from './components/p5/index';
import sectionWipes from './components/section-wipes/index';
import parallax from './components/parallax/index';
import imageScroll from './components/pp-image-scroll/index';
import ppSplash from './components/pp-splash/index';
import p5HelloForm from './components/p5-hello-form/index';
import p5Grid from './components/p5-grid-alignment/index';
import p5Mandala from './components/p5-mandala/index';
import natureOfCode from './components/nature-of-code/index';
import p5PixelColourist from './components/p5-pixel-colourist/index';

// run scripts on DOM ready
$(document).ready(() => {
    panelHero.init();
    panelVideo.init();
    panelMessage.init();
    pixi.init();
    p5.init();
    sectionWipes.init();
    parallax.init();
	imageScroll.init();
	ppSplash.init();
	p5HelloForm.init();
	p5Grid.init();
	p5Mandala.init();
	natureOfCode.init();
	p5PixelColourist.init();
});
