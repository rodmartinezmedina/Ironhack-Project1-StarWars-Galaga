'use strict';

function Game() {
	this.canvas == null;
	this.ctx = null;
	this.enemies = [];
	this.player = null;
	this.gameIsOver = false;
	this.gameScreen = null;
}

Game.prototype.start = function() {

	// Save reference to canvas and container. Create ctx
	this.canvasContainer = document.querySelector('.canvas-container');
	this.canvas = this.gameScreen.querySelector('canvas');
	this.ctx = this.canvas.getContext('2d');

	// Save reference to the score and lives elements
	this.livesElement = this.gameScreen.querySelector('.lives .value');
	this.scoreElement = this.gameScreen.querySelector('.score .value');

	// Set the canvas dimensions to match the parent
	this.containerWidth = this.canvasContainer.offsetWidth;
	this.containerHeight = this.canvasContainer.offsetHeight;
	this.canvas.setAttribute('width', this.containerWidth);
	this.canvas.setAttribute('height', this.containerHeight);


	// Create a new player for the current game
	// this.player = new{};
	this.player = new Player (this.canvas, 3);



	// Add event listener for moving the player
	// Event listener callback function

	this.handleKeyDown = function(event) {
		if (event.key === 'ArrowRight') {
			console.log('RIGHT');
			this.player.setDirection('right');
		}
		else if (event.key === 'arrowLeft') {
			console.log('LEFT');
			this.player.setDirection('left');
		}
	};

	document.body.addEventListener (
		'keydown',
		this.handleKeyDown.bind(this));


	// Start the canvas requestAnimationFrame loop
	this.startLoop();
};


Game.prototype.startLoop = function() {
		var loop = function() {
		console.log('in loop');

		// EVERYTHING HAPPENS HERE!

		if (!this.gameIsOver) {
			window.requestAnimationFrame(loop);
		}
	}.bind(this);

	window.requestAnimationFrame(loop);
};

Game.prototype.checkCollisions = function() {};

Game.prototype.updateGamesStats = function() {};

Game.prototype.passGameStats = function() {};

Game.prototype.gameOver = function() {};

Game.prototype.removeGameScreen = function() {};




