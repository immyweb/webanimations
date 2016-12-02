import { TimelineMax } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

export default class PanelHero {

    init(element) {
        this.panel = element;

		this.projects = this.panel.find('.projects');
		this.project = this.panel.find('.project');
		this.projectImageBefore = CSSRulePlugin.getRule('.project-image:before');
		this.projectImageAfter = CSSRulePlugin.getRule('.project-image:after');

		this.tlProjects = new TimelineMax();

		this.tlProject = new TimelineMax({
			repeat: -1,
			repeatDelay: 2
			// paused: true
		});

		this.projectClasses = this.project.attr('class').split(' ');
		this.projectClass = this.projectClasses[1];

		this.pixel = this.project.find('.pixel');
		this.pixels = this.project.find('.project-pixels');
		this.projectTitle = this.project.find('.project-title');
		this.projectSubtitle = this.project.find('.project-subtitle');
		this.projectImage = this.project.find('.project-image');

		// Project CTA
		this.tlProjectsCTA = new TimelineMax();
		this.projectLink = this.project.find('.button-container');
		this.projectLinkButton = this.projectLink.find('.button');
		this.projectLinkSpan = this.projectLink.find('.bp');
		this.projectLinkText = this.projectLink.find('.bp-text');

		this.animate();

		console.log(this);
    }

	animate() {

		// Main project timeline
		this.tlProjects
			.set(this.projects, { autoAlpha: 1 });

		// CTA timeline
		this.tlProjectsCTA
			.to(this.projectSubtitle, 0.3,
				{ autoAlpha: 0, yPercent: 100, ease: Back.easeOut })
			.staggerFrom(this.projectLinkSpan, 0.7,
				{ autoAlpha: 0, yPercent: '-100', ease: Back.easeOut }, 0.1)
			.from(this.projectLinkText, 0.3,
				{ autoAlpha: 0, x: '-100%', ease: Power4.easeInOut }, '-=0.2')
		;

		// Create project timeline
		this.tlProject
			.set([this.projectTitle, this.projectSubtitle, this.pixel], { autoAlpha: 0 })
			.fromTo(this.projectImage, 0.4,
				{ autoAlpha: 0, xPercent: '-200' },
				{ autoAlpha: 1, xPercent: '-10', ease: Power4.easeInOut })
			.add('imageIn')
			.staggerFromTo(this.pixel, 0.3,
				{ autoAlpha: 0, x: '-=10' },
				{ autoAlpha: 1, x: '0', ease: Power4.easeInOut }, 0.02, '-=0.2')
			.add('pixelsIn')
			.fromTo(this.projectTitle, 0.7,
				{ autoAlpha: 0, xPercent: '-50' },
				{ autoAlpha: 1, xPercent: '-5', ease: Power4.easeInOut }, '-=0.4')
			.fromTo(this.projectSubtitle, 0.7,
				{ autoAlpha: 0, xPercent: '-50' },
				{ autoAlpha: 1, xPercent: '-2', ease: Power4.easeInOut }, '-=0.5')
			.add('titleIn')
			.add(this.tlProjectsCTA, '+=2') // Add button animation timeline
			.to(this.projectTitle, 4.3,
				{ xPercent: '+=5', ease: Linear.easeNone }, 'titleIn-=0.1')
			.to(this.projectSubtitle, 4.3,
				{ xPercent: '+=2', ease: Linear.easeNone }, 'titleIn-=0.2')
			.add('titleOut')
			.to(this.projectImage, 5,
				{ xPercent: '0', ease: Linear.easeNone }, 'imageIn')
			.add('imageOut')
			.to(this.pixels, 4.1,
				{ xPercent: '-5', ease: Linear.easeNone }, 'pixelsIn')
			.to([this.projectTitle, this.projectSubtitle, this.projectLink], 0.5,
				{ autoAlpha: 0, xPercent: '+=10', ease: Power4.easeInOut }, 'titleOut')
			.to(this.projectImage, 0.4,
				{ autoAlpha: 0, xPercent: '+=80', ease: Power4.easeInOut }, 'imageOut')
		;
	}


}
