import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class SectionSwipes {

    constructor() {
        this.panel;
    }

    init(element) {
        this.panel = element;

        this.animateContent();
    }

    animateContent() {
        const controller = new ScrollMagic.Controller();

        const wipeAnimation = new TimelineMax()
            .fromTo('section.sw-panel.turqoise', 1, { x: '-100%' }, { x: '0%', ease: Linear.easeNone })  // in from left
            .fromTo('section.sw-panel.green',    1, { x:  '100%' }, { x: '0%', ease: Linear.easeNone })  // in from right
            .fromTo('section.sw-panel.bordeaux', 1, { y: '-100%' }, { y: '0%', ease: Linear.easeNone }); // in from top

        const scene = new ScrollMagic.Scene({
                triggerElement: '#swipeContainer',
                triggerHook: 'onLeave',
                duration: '300%'
            })
            .setPin('#swipeContainer')
            .setTween(wipeAnimation)
            .addTo(controller);
    }

}
