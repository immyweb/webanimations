import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class ImageScroll {

    init(element) {
        this.panel = element;

        this.animateContent();
    }

    animateContent() {
        console.log('image scroll initiated');
    }

}
