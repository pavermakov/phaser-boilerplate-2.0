import Phaser from 'phaser';
import WebFont from 'webfontloader';
import { data } from './settings';

export default class extends Phaser.State {
	init() {
		this.fontsReady = false;
		this.assetsReady = false;
		this.apiReady = false;

		this._initPreloadBar();
	}

	preload() {
		this._loadAssets();
	}

	_initPreloadBar() {
		const $preloadBar = jQuery('.preloader');
		const $content = jQuery('#content');

		const props = {
			y: Math.ceil(window.innerHeight * 0.6),
			width: Math.ceil($content.width() * 0.6),
		};

		$preloadBar.css({
			top: `${props.y}px`,
			left: '50%',
			width: `${props.width}px`,
			transform: 'translate(-50%)',
			'-webkit-transform': 'translate(-50%)',
		});
	}

	_loadAssets() {

	}
}
