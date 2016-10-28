import data from '../../../data/data.json';
import enquire from 'enquire.js';
import { TweenMax } from 'gsap';
import YouTubePlayer from 'youtube-player';
import ScrollMagic from 'scrollmagic';

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

        console.log(data);

        this.checkBreakpoint();
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

}
