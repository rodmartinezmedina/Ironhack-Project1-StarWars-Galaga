'use strict';

function Game() {
	this.canvas = null;
	this.ctx = null;
	this.bullets = [];
	this.enemies = [];
	this.bigEnemies = [];
	this.player = null;
	this.gameIsOver = false;
	this.gameScreen = null;
	this.score = 0;
	this.backImg1 = new Image();   // Create new <img> element
	this.backImg1.src = './images/background-space4.jpg'; // Set source path
	this.printBigEnemy = true;
	this.counter = 0;
}

Game.prototype.start = function() {

	// Save reference to canvas and container. Create ctx
	this.canvasContainer = document.querySelector('.canvas-container');
	this.gameContainer = document.querySelector('.game-container');

	this.canvas = this.gameScreen.querySelector('canvas');
	this.ctx = this.canvas.getContext('2d');
	
	// Save reference to the score and lives elements
	this.livesElement = this.gameContainer.querySelector('.lives .value');
	this.scoreElement = this.gameContainer.querySelector('.score .value');


	// Set the canvas dimensions to match the parent
	this.containerWidth = this.canvasContainer.offsetWidth;
	this.containerHeight = this.canvasContainer.offsetHeight;
	this.canvas.setAttribute('width', this.containerWidth);
	this.canvas.setAttribute('height', this.containerHeight);


	// Create a new player for the current game
	this.player = new Player (this.canvas, 5);

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
		else if (event.key === 's') {
			console.log("SHOOT");
			this.createBullet();
		}
	};

	document.body.addEventListener (
		'keydown',
		this.handleKeyDown.bind(this));


	// Start the canvas requestAnimationFrame loop
	this.startLoop();
};

Game.prototype.createBigEnemy = function (source) {
	var randomX = this.canvas.width * Math.random();
	var newBigEnemy = new BigEnemy(this.canvas, randomX, 1, source);
	this.bigEnemies.push(newBigEnemy);
}

Game.prototype.createEnemy = function (source) {
	var randomX = this.canvas.width * Math.random();
	var newEnemy = new Enemy(this.canvas, randomX, 1, source);
	this.enemies.push(newEnemy);
}

Game.prototype.startLoop = function() {
		var loop = function() {


					// 1. Create new Big enemies with set time intervals
			this.counter++;
			
			if (this.counter % 600 === 0) {
				console.log(this.counter)
				this.createBigEnemy('/images/Death Star - 1st.png');;
			}
			else if (this.counter % 900 === 0) {
				console.log(this.counter);
				this.createBigEnemy('/images/Death Star - 2nd.png');
			}
			else if (this.counter % 1500 === 0 ) {
				this.createBigEnemy('/images/Trade Federation Battleship.png');
			}

			//Another set time approach for the enemies with fixed times

				// if (this.printBigEnemy) {
				// 	this.createBigEnemy('/images/Death Star - 1st.png');
				// 	this.printBigEnemy = false;

				// 	setTimeout(function () {
				// 		this.printBigEnemy = true;
				// 	}.bind(this), 5000);


		if (Math.random() > 0.998) {
			this.createEnemy('/images/Y-Wing.png')
		} 
		else if (Math.random() > 0.995) {
			this.createEnemy('/images/Slave I.png')
		}
		else if (Math.random() > 0.992) {
		this.createEnemy('/images/Tie Fighter - 02.png')
		}
		else if (Math.random() > 0.99) {
		this.createEnemy('/images/Tie Bomber.png');
		};	



		// HELP post MVP
		//how to randomly locate the enemies in the delimited waiting zone in the top of the screen

		//Checks if enemies hit the player
		this.checkCollisions();

		if (this.bullets.length > 0 && this.enemies.length > 0) {
			this.checkbulletEnemyCollisions();
		};
	
		this.player.handleScreenCollision();

	    // 4. Move existing enemies
		// 5. Check if any enemy is going off the screen
		this.enemies = this.enemies.filter(function(enemy) {
			enemy.updatePosition();
			return enemy.isInsideScreen();
		});


		this.bigEnemies = this.bigEnemies.filter(function(bigEnemy) {
		bigEnemy.updatePosition();
		return bigEnemy.isInsideScreen();
		});


		this.bullets = this.bullets.filter(function(bullet) {
			bullet.update();
			// return bullet;
			return bullet.isInsideScreen();
		});

	// 2. CLEAR CANVAS
		this.ctx.clearRect(0 ,0, this.canvas.width, this.canvas.height);


	// 3. UPDATE CANVAS

		//draw background
		this.ctx.drawImage(this.backImg1,0, 0);
		// Draw the player
		this.player.draw();
		// Draw the enemies
		this.enemies.forEach(function(enemy) {
			enemy.draw();
		});
		//Draw big enemies
		this.bigEnemies.forEach(function(bigEnemy) {
			bigEnemy.draw();
		});

		//Draw the bullets
		this.bullets.forEach(function (bullet) {
			bullet.draw()
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

	this.bigEnemies.forEach (function (bigEnemy) {
		if (this.player.didCollideBig(bigEnemy) ) {
			this.player.removeLife();
			console.log('lives', this.player.lives);

			//Move the enemy offscreen
			bigEnemy.x = 0 - bigEnemy.size;
			if (this.player.lives === 0) {
				this.gameOver();
			}
		}
	}, this)
	  // We have to pass `this` value as the second argument
  // as array method callbacks have a default `this` of undefined.
};



// 6. Check if bullets hit enemies
Game.prototype.checkbulletEnemyCollisions = function() {
	
	this.enemies.forEach (function (enemy) {
		this.bullets.forEach (function (bullet) {
			if (bullet.didCollide(enemy) ) {
				enemy.y = this.canvas.height + 2000;
				bullet.y = 0 - 2000;
				this.score = this.score +10;		
				console.log('this is the', this.score);		
			}
		}, this);
	}, this);
};

Game.prototype.updateGamesStats = function() {
	// this.score += 1;
	this.livesElement.innerHTML = this.player.lives;
	this.scoreElement.innerHTML = this.score;
};


Game.prototype.createBullet = function () {
	if (this.player.canShootBullet) {
		var playerPositionX = this.player.x;
		var newBullet = new Bullet(this.canvas, playerPositionX);
		this.bullets.push(newBullet);

		//can shoot or not 
		this.player.canShootBullet = false;
		
		//timeout for shooting
		setTimeout
			(function() {
				this.player.canShootBullet = true;
			}.bind(this),
			300)
	};
		// console.log("bullet created");
};


Game.prototype.passGameStats = function() {};


Game.prototype.gameOver = function() {
	this.gameIsOver = true;

	this.onGameOverCallback();
};

Game.prototype.removeGameScreen = function() {
	this.gameScreen.remove();
	// remove() is the DOM method which removes the DOM Node 
};

Game.prototype.passGameOverCallback = function(gameOver) {
	this.onGameOverCallback = gameOver;
};




