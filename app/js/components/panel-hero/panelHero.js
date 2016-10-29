import data from '../../../data/data.json';
import enquire from 'enquire.js';
import YouTubePlayer from 'youtube-player';
import { TweenMax, TimelineLite } from 'gsap';

export default class PanelHero {

    constructor() {
        this.panel;
        this.player;
        this.data;
    }

    init(element) {

        this.panel = element;
        this.data = data;
        this.videoEl = this.panel.find('#videoPlayerHero')[0].id;

        this.checkBreakpoint();
        this.animateContent();
    }

    checkBreakpoint() {
        enquire.register('screen and (min-width: 768px)', {
            match: () => {
                // Tablet and desktop
                this.loadHeroVideo();
            },
            unmatch: () => {
                // Mobile
                this.stopHeroVideo();
            }
        });
    }

    loadHeroVideo() {
        this.player = YouTubePlayer(this.videoEl, {
            videoId: this.data.heroPanel.videoId,
            playerVars: { 'autoplay': 0, 'controls': 0, 'rel': 0, 'iv_load_policy': 3 }
        });

        this.player.mute();

        this.player.on('stateChange', (event) => {
            // Loop video
            if ( event.data === 0 ) {
                this.player.playVideo();
                this.player.mute();
            }
        });
    }

    stopHeroVideo() {
        if (this.player) {
            this.player.stopVideo();
            this.player.destroy();
        }
    }

    animateContent() {
        const panelHeading = this.panel.find('.hero-panel__h1');
        const panelCta = this.panel.find('.hero-panel__cta');
        const panelLabel = this.panel.find('.hero-panel__p');

        const animation = new TimelineLite();

        TweenMax.delayedCall(1.75, startAnim);

        function startAnim() {
            animation
                .to(panelHeading, 0.5, { right: 0, ease: Power1.easeOut })
                .to(panelCta, 0.5, { right: 0, ease: Power1.easeOut })
                .to(panelLabel, 0.25, { left: 0, ease: Power1.easeOut });
        }
    }

}
