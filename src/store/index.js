class Store {
	constructor(game) {
		this.game = game;

		this.init();
	}

	init() {
		this._initStates();
	}

	_initStates() {
		this.states = this.game.state.states;
	}
}

export default Store;
