import Phaser from 'phaser';
import Store from '../../store/';
import settings from './settings';

export default class extends Phaser.State {
	init() {
		this._initStore();
		this._initSettings();
	}

	preload() {

	}

	_initStore() {
		window.game.Store = new Store(window.game);
		this.Store = window.game.Store;
	}

	_initSettings() {
		const game = this.Store.game;
		const paths = [
			game,
			game.input,
			game.stage,
			game.scale,
			game.renderer,
			game.renderer.renderSession,
			game.time,
		];

		Object.keys(settings).forEach(key => {
			paths.forEach(path => {
				if (path[key] !== undefined) {
					path[key] = settings[key];
				}
			});
		});
	}

	_stretchCanvas() {
		const $content = jQuery('#content');
		const $contentWidth = $content.width();
    const $contentHeight = $content.height();
		const isCanvasWider = $contentWidth > window.innerWidth;
    const isCanvasTaller = $contentHeight > window.innerHeight;
	}
}
