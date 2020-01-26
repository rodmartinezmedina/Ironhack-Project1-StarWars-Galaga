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
		// 1. UPDATE THE STATE OF PLAYER AND ENEMIES
  
    // 0. Our player was already created - via `game.start()`

		// 1. Create new enemies randomly
		if (Math.random() > 0.98) {
			var randomX = this.canvas.width * Math.random();
			var newEnemy = new Enemy(this.canvas, randomX, 5);
			this.enemies.push(newEnemy);
		}
			// HELP
			//how to generate enemies based on regular interval time
			//how to randomly locate the enemies in the delimited waiting
			// zone in the top of the screen

	
		// 2. Check if player had hit any enemy (check all enemies)
		this.checkCollisions();

    // 3. Check if player is going off the screen
		this.player.handleScreenCollision();

    // 4. Move existing enemies

		// 5. Check if any enemy is going of the screen
		this.enemies = this.enemies.filter(function(enemy) {
			enemy.updatePosition();
			return enemy.isInsideScreen();
		})

		//
		// 6. Check if bullets hit enemies
		//HELP how to do this? First check pablo's zombie game code!!!
		//


// 2. CLEAR THE CANVAS
		this.ctx.clearRect(0 ,0, this.canvas.width, this.canvas.height);


// 3. UPDATE THE CANVAS
		// Draw the player
		this.player.draw();
		
		// Draw the enemies
		this.enemies.forEach(function(enemy) {
			enemy.draw();
		});

// 4. TERMINATE LOOP IF GAME IS OVER

		if (!this.gameIsOver) {
			window.requestAnimationFrame(loop);
		}
	}.bind(this);

	  // As loop function will be continuously invoked by
  // the `window` object- `window.requestAnimationFrame(loop)`
  // we have to bind the function so that value of `this` is
  // pointing to the `game` object, like this:
  // var loop = (function(){}).bind(this);

	window.requestAnimationFrame(loop);
};

Game.prototype.checkCollisions = function() {};

Game.prototype.updateGamesStats = function() {};

Game.prototype.passGameStats = function() {};

Game.prototype.gameOver = function() {};

Game.prototype.removeGameScreen = function() {};




