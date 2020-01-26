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
	this.player = new Player (this.canvas, 3);


	// Add event listener for moving the player.Event listener callback function
	this.handleKeyDown = function(event) {
		if (event.key === 'ArrowRight') {
			console.log('RIGHT');
			this.player.setDirection('right');
		}
		else if (event.key === 'ArrowLeft') {
			console.log('LEFT');
			this.player.setDirection('left');
		}
		else if (event.key === 'ArrowDown') {
			console.log('STOP');
			this.player.setDirection('stop');
		}
	};

	// NO REBOUNDS ON SIDES
	// this.handleKeyDown = function(event) {
	// 	if (event.key === 'ArrowRight') {
	// 		console.log('RIGHT');
	// 		this.player.move('right');
	// 	}
	// 	else if (event.key === 'ArrowLeft') {
	// 		console.log('LEFT');
	// 		this.player.move('left');
	// 	}
	// 	else if (event.key === 'ArrowDown') {
	// 		console.log('STOP');
	// 		this.player.move('stop');
	// 	}
	// };


	document.body.addEventListener (
		'keydown',
		this.handleKeyDown.bind(this));


	// Start the canvas requestAnimationFrame loop
	this.startLoop();
};


Game.prototype.startLoop = function() {
		var loop = function() {
		console.log('in loop');

		
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

		this.updateGamesStats();
		
	}.bind(this);

	  // As loop function will be continuously invoked by
  // the `window` object- `window.requestAnimationFrame(loop)`
  // we have to bind the function so that value of `this` is
  // pointing to the `game` object, like this:
  // var loop = (function(){}).bind(this);

	window.requestAnimationFrame(loop);
};

Game.prototype.checkCollisions = function() {
	
	this.enemies.forEach (function (enemy) {

		if (this.player.didCollide(enemy) ) {
		
			this.player.removeLife();
			console.log('lives', this.player.lives);

			//Move the enemy offscreen
			enemy.x = 0 - enemy.size;

			if (this.player.lives === 0) {
				this.gameOver();
			}
		}
	}, this)
	  // We have to pass `this` value as the second argument
  // as array method callbacks have a default `this` of undefined.
};

Game.prototype.updateGamesStats = function() {
	this.score += 1;
	this.livesElement.innerHTML = this.player.lives;
	this.scoreElement.innerHTML = this.score;
};

Game.prototype.passGameStats = function() {};

Game.prototype.gameOver = function() {
	this.gameIsOver = true;

	// console.log('GAME OVER');
	this.onGameOverCallback();
};

Game.prototype.removeGameScreen = function() {
	this.gameScreen.remove();
	// remove() is the DOM method which removes the DOM Node 
};

Game.prototype.passGameOverCallback = function(gameOver) {
	this.onGameOverCallback = gameOver;
};




