import $ from 'jquery';
import { TimelineMax } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

export default class PanelHero {

    init(element) {
        this.panel = element;

		const $projects = this.panel.find('.projects'),
			$project = this.panel.find('.project'),
			$projectImageBefore = CSSRulePlugin.getRule('.project-image:before'),
			$projectImageAfter = CSSRulePlugin.getRule('.project-image:after');

		const tlCircles = new TimelineMax({ repeat: -1 });
		tlCircles
			.to($projectImageBefore, 0.8, {cssRule:{top:"5px"}, ease:Linear.easeNone})
			.to($projectImageBefore, 0.8, {cssRule:{left:"5px"}, ease:Linear.easeNone})
			.to($projectImageBefore, 0.8, {cssRule:{top:"-5px"}, ease:Linear.easeNone})
			.to($projectImageBefore, 0.8, {cssRule:{left:"-5px"}, ease:Linear.easeNone})
			.to($projectImageAfter, 0.7, {cssRule:{bottom:"6px"}, ease:Linear.easeNone}, '0')
			.to($projectImageAfter, 0.7, {cssRule:{right:"6px"}, ease:Linear.easeNone}, '0.7')
			.to($projectImageAfter, 0.7, {cssRule:{bottom:"-6px"}, ease:Linear.easeNone}, '1.1')
			.to($projectImageAfter, 0.7, {cssRule:{right:"-6px"}, ease:Linear.easeNone}, '1.5');

		// Main project timeline
		const tlProjects = new TimelineMax();
		tlProjects
			.set($projects, { autoAlpha: 1 });

		const tlProject = new TimelineMax({ repeat: -1, repeatDelay: 2 });

		$project.each((index, element) => {

			const projectClasses = $(element).attr('class').split(' '),
				projectClass = projectClasses[1],
				$pixel = $(element).find('.pixel'),
				$pixels = $(element).find('.project-pixels'),
				$projectTitle = $(element).find('.project-title'),
				$projectSubtitle = $(element).find('.project-subtitle'),
				$projectImage = $(element).find('.project-image');

			// Project CTA
			const tlProjectsCTA = new TimelineMax(),
				$projectLink = $(element).find('.button-container'),
				$projectLinkButton = $projectLink.find('.button'),
				$projectLinkSpan = $projectLink.find('.bp'),
				$projectLinkText = $projectLink.find('.bp-text');

			// CTA timeline
			tlProjectsCTA
				.to($projectSubtitle, 0.3,
					{ autoAlpha: 0, yPercent: 100, ease: Back.easeOut })
				.staggerFrom($projectLinkSpan, 0.7,
					{ autoAlpha: 0, yPercent: '-100', ease: Back.easeOut }, 0.1)
				.from($projectLinkText, 0.3,
					{ autoAlpha: 0, x: '-100%', ease: Power4.easeInOut }, '-=0.2')
			;

			// Project loader
			const tlProjectLoader = new TimelineMax({ paused: true }),
				$loader = $(element).find('.loader');

			tlProjectLoader
				.to([$projectImageBefore, $projectImageAfter], 0.4, { cssRule: { opacity: '0' } })
				.fromTo($loader, 5,
					{ strokeDasharray: 547, strokeDashoffset: 547 },
					{ strokeDasharray: 547, strokeDashoffset: 0, ease: Power0.easeNone })
				.to($loader, 0.4, { autoAlpha: 0, onComplete: resumeProjects })
				.to([$projectImageBefore, $projectImageAfter], 0.4, { cssRule: { opacity: '1' }}, '-=0.4');

			// Create project timeline
			tlProject
				.set($(element), { zIndex: 1 })
				.set([$projectTitle, $projectSubtitle, $pixel], { autoAlpha: 0 })
				.fromTo($projectImage, 0.4,
					{ autoAlpha: 0, xPercent: '-200' },
					{ autoAlpha: 1, xPercent: '-10', ease: Power4.easeInOut, onStart: updateClass, onStartParams: [projectClass] })
				.add('imageIn')
				.staggerFromTo($pixel, 0.3,
					{ autoAlpha: 0, x: '-=10' },
					{ autoAlpha: 1, x: '0', ease: Power4.easeInOut }, 0.02, '-=0.2')
				.add('pixelsIn')
				.fromTo($projectTitle, 0.7,
					{ autoAlpha: 0, xPercent: '-50' },
					{ autoAlpha: 1, xPercent: '-5', ease: Power4.easeInOut }, '-=0.4')
				.fromTo($projectSubtitle, 0.7,
					{ autoAlpha: 0, xPercent: '-50' },
					{ autoAlpha: 1, xPercent: '-2', ease: Power4.easeInOut }, '-=0.5')
				.add('titleIn')
				.add(tlProjectsCTA, '+=2') // Add button animation timeline
				.to($projectTitle, 4.3,
					{ xPercent: '+=5', ease: Linear.easeNone }, 'titleIn-=0.1')
				.to($projectSubtitle, 4.3,
					{ xPercent: '+=2', ease: Linear.easeNone }, 'titleIn-=0.2')
				.add('titleOut')
				.to($projectImage, 5,
					{ xPercent: '0', ease: Linear.easeNone, onComplete: pauseProjects, onCompleteParams: [projectClass, tlProjectLoader] }, 'imageIn')
				.add('imageOut')
				.to($pixels, 4.1,
					{ xPercent: '-5', ease: Linear.easeNone }, 'pixelsIn')
				.to([$projectTitle, $projectSubtitle, $projectLink], 0.5,
					{ autoAlpha: 0, xPercent: '+=10', ease: Power4.easeInOut }, 'titleOut')
				.to($projectImage, 0.4,
					{ autoAlpha: 0, xPercent: '+=80', ease: Power4.easeInOut }, 'imageOut');

			// Add project to projects timeline
			tlProjects.add(tlProject);

		});

		// Create a function to update the body class
		function updateClass(projectClass) {
			$('body').attr('class', projectClass);
		}

		// Pausing the project timeline
		function pauseProjects(projectClass, tlProjectLoader) {
			tlProjects.pause();

			if ( projectClass !== 'project00' ) {
				tlProjectLoader.seek(0);
				tlProjectLoader.play();
			}
		}

		// resume the project timeline
		$projects.find('.project00 .button').on('click', (e) => {
			tlProjects.resume();

			e.preventDefault();
		});

		// resume projects
		function resumeProjects() {
			tlProjects.resume();
		}
    }
}
