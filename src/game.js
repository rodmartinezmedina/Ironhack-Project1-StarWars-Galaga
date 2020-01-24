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
	this.player = {};

	// Add event listener for moving the player
	// ..

	// Start the canvas requestAnimationFrame loop
	this.start

};

Game.prototype.startLoop = function() {};

Game.prototype.checkCollisions = function() {};

Game.prototype.updateGamesStats = function() {};

Game.prototype.passGameStats = function() {};

Game.prototype.gameOver = function() {};

Game.prototype.removeGameScreen = function() {};







