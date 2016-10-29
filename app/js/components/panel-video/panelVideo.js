import data from '../../../data/data.json';
import YouTubePlayer from 'youtube-player';
import { TweenMax } from 'gsap';

export default class PanelVideo {

    constructor() {
        this.panel;
        this.player;
        this.data;
    }

    init(element) {
        this.panel = element;
        this.data = data;
        this.videoEl = this.panel.find('#videoPlayerVideo')[0].id;
        this.videoContent = this.panel.find('.video-panel__content');
        this.videoCta = this.panel.find('.video-panel__cta');

        this.loadVideo();
    }

    loadVideo() {
        this.player = YouTubePlayer(this.videoEl, {
            videoId: this.data.videoPanel.videoId,
            playerVars: {
                'modestbranding': 1,
                'autoplay': 0,
                'controls': 0,
                'showinfo': 1,
                'rel': 0,
                'iv_load_policy': 3
            }
        });

        this.player.mute();

        this.player.on('stateChange', (event) => {
            // If paused
            if ( event.data === 2 ) {
                TweenMax.to(this.videoContent, 0.75, { opacity: 1, display: "block" });
            }

            // if playing
            if ( event.data === 1 ) {
                TweenMax.to(this.videoContent, 0.75, { opacity: 0, display: "none" });
            }
        });

        this.videoCta.on('click', (e) => {
            TweenMax.to(this.videoContent, 0.75, { opacity: 0, display: "none" });
            this.player.playVideo();
            e.preventDefault();
        });
    }

}
