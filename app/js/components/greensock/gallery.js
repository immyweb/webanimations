// import $ from 'jquery';
import { TweenMax } from 'gsap';
import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin.js';

let tlProjects, tlProject;

export default class PanelHero {

    init(element) {
        this.panel = element;
		this.projects = this.panel.find('.projects');
		this.project = this.panel.find('.project');
		this.projectImageBefore = CSSRulePlugin.getRule('.project-image:after');
		this.projectImageAfter = CSSRulePlugin.getRule('.box:after');
    }


}
