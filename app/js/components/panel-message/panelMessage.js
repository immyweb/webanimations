import data from '../../../data/data.json';
import YouTubePlayer from 'youtube-player';
import enquire from 'enquire.js';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class PanelMessage {

    constructor() {
        this.panel;
        this.player;
        this.data;
    }

    init(element) {
        this.panel = element;
        this.data = data;
        this.videoEl = this.panel.find('#videoMessage')[0].id;
        this.messageContent = this.panel.find('.message-panel__content');

        this.checkBreakpoint();
        this.animateContent();
    }

    checkBreakpoint() {
        enquire.register('screen and (min-width: 768px)', {
            match: () => {
                // Tablet and desktop
                this.loadVideo();
            },
            unmatch: () => {
                // Mobile
                this.stopVideo();
            }
        });
    }

    loadVideo() {
        this.player = YouTubePlayer(this.videoEl, {
            videoId: this.data.messagePanel.videoId,
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'rel': 0,
                'iv_load_policy': 3
            }
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

    stopVideo() {
        if (this.player) {
            this.player.stopVideo();
            this.player.destroy();
        }
    }

    animateContent() {
        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            triggerElement: this.panel[0],
            reverse: false
        })
        .setTween(this.messageContent, 1, { opacity: 1, top: 0 })
        .addTo(controller);
    }

}
