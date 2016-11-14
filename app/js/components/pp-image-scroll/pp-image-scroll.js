import $ from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class ImageScroll {

    init(element) {
        this.panel = element;
		this.images = [];

        this.createImageArray();
    }

	createImageArray() {

		for ( let i = 0; i < 209; i++) {
			if ( i < 10 ) {
				this.images.push( "../../images/pp-imagescroll/stoc000" + i + ".jpg" );
			} else if ( i < 100 ) {
				this.images.push( "../../images/pp-imagescroll/stoc00" + i + ".jpg" );
			} else if ( i < 1000 ) {
				this.images.push( "../../images/pp-imagescroll/stoc0" + i + ".jpg" );
			}
		}

		this.animateContent();

	}

    animateContent() {

		// TweenMax can tween any property of any object. We use this object to cycle through the array
		const obj = { curImg: 0 };

		const tween = TweenMax.to(obj, 0.5, {
				curImg: this.images.length,		// animate propery curImg to number of images
				roundProps: 'curImg',			// only integers so it can be used as an array index
				repeat: 0,
				immediateRender: true,			// load first image automatically
				ease: Linear.easeNone,
				onUpdate: () => {
					$('.imagescroll__images').attr('src', this.images[obj.curImg]);
				}
			}
		);

		const controller = new ScrollMagic.Controller();

		new ScrollMagic.Scene({ triggerElement: '.imagescroll', duration: 600 })
			.setTween(tween)
			.addTo(controller);
    }

}
