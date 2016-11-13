import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class SectionWipes {

    init(element) {
        this.panel = element;

        this.animateContent();
    }

    animateContent() {
        const controller = new ScrollMagic.Controller();

        const wipeAnimation = new TimelineMax()
                // in from left
      			.fromTo('.section-wipes__panel.turqoise', 1, { x: '-100%' }, { x: '0%', ease: Linear.easeNone })
                // in from right
      			.fromTo('.section-wipes__panel.green',    1, { x: '100%' }, { x: '0%', ease: Linear.easeNone })
                // in from top
      			.fromTo('.section-wipes__panel.bordeaux', 1, { y: '-100%' }, { y: '0%', ease: Linear.easeNone });

            // create scene to pin and link animation
    		new ScrollMagic.Scene({
    				triggerElement: '#pinContainer',
    				triggerHook: 'onLeave',
    				duration: '300%'
    			})
    			.setPin('#pinContainer')
    			.setTween(wipeAnimation)
    			.addTo(controller);
    }

}
