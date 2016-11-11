import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class Parallax {

    init(element) {
        this.panel = element;

        this.animateContent();
    }

    animateContent() {
        const controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onEnter",
                duration: "200%"
            }
        });

        // build scenes
      	new ScrollMagic.Scene({ triggerElement: "#parallax1" })
      					.setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
      					.addTo(controller);

      	new ScrollMagic.Scene({ triggerElement: "#parallax2" })
      					.setTween("#parallax2 > div", { y: "80%", ease: Linear.easeNone })
      					.addTo(controller);

      	new ScrollMagic.Scene({ triggerElement: "#parallax3" })
      					.setTween("#parallax3 > div", { y: "80%", ease: Linear.easeNone })
      					.addTo(controller);
    }

}
