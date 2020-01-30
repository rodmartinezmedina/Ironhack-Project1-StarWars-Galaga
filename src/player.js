'use strict';

function Player(canvas, lives) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.lives = lives;
	this.size = 90;
	this.x = canvas.width / 2;
	this.y = canvas.height - 90;
	this.direction = 0;
	this.speed = 6;
	this.canShootBullet = true;
	this.imgShip1;
}

Player.prototype.setDirection = function(direction) {
	// +1 down -1 up
	if (direction ==='right') this.direction = 1;
	else if (direction === 'left') this.direction = -1;
	else if (direction ==='stop') this.direction = 0;
};


Player.prototype.didCollide = function(enemy) {
	var playerLeft = this.x;
	var playerRight = this.x + this.size;
	var playerTop = this.y;
	var playerBottom = this.y + this.size;
		
	var enemyLeft = enemy.x;
	var enemyRight = enemy.x + enemy.size;
	var enemyTop = enemy.y;
	var enemyBottom = enemy.y + enemy.size;	

	// Check if the enemy intersects any of the player's sides
	var crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
	var crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
	var crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
	var crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

	if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
		return true;
	}
		return false;	
};

Player.prototype.didCollideYoda = function(yoda) {
	var playerLeft = this.x;
	var playerRight = this.x + this.size;
	var playerTop = this.y;
	var playerBottom = this.y + this.size;
		
	var yodaLeft = yoda.x;
	var yodaRight = yoda.x + yoda.size;
	var yodaTop = yoda.y;
	var yodaBottom = yoda.y + yoda.size;	

	// Check if the yoda intersects any of the player's sides
	var yodaCrossLeft = yodaLeft <= playerRight && yodaLeft >= playerLeft;
	var yodaCrossRight = yodaRight >= playerLeft && yodaRight <= playerRight;
	var yodaCrossBottom = yodaBottom >= playerTop && yodaBottom <= playerBottom;
	var yodaCrossTop = yodaTop <= playerBottom && yodaTop >= playerTop;

	if ((yodaCrossLeft || yodaCrossRight) && (yodaCrossTop || yodaCrossBottom)) {
		return true;
	}
		return false;	
};


Player.prototype.didCollideBig = function(bigEnemy) {
	var playerLeft = this.x;
	var playerRight = this.x + this.size;
	var playerTop = this.y;
	var playerBottom = this.y + this.size;
	
	var bigEnemyLeft = bigEnemy.x;
	var bigEnemyRight = bigEnemy.x + bigEnemy.size;
	var bigEnemyTop = bigEnemy.y;
	var bigEnemyBottom = bigEnemy.y + bigEnemy.size;
	// Check if the Big enemy intersects any of the player's sides
	var bigCrossLeft = bigEnemyLeft <= playerRight && bigEnemyLeft >= playerLeft;
	var bigCrossRight = bigEnemyRight >= playerLeft && bigEnemyRight <= playerRight;
	var bigCrossBottom = bigEnemyBottom >= playerTop && bigEnemyBottom <= playerBottom;
	var bigCrossTop = bigEnemyTop <= playerBottom && bigEnemyTop >= playerTop;
	
	if ((bigCrossLeft || bigCrossRight) && (bigCrossTop || bigCrossBottom)) {
		return true;
	}
		return false; 
};


Player.prototype.handleScreenCollision = function() {

	var screenLeft = 0;
	var screenRight = this.canvas.width - 90;
	this.x = this.x + this.direction * this.speed;

	if (this.x < screenLeft) this.direction = 0;
	else if (this.x > screenRight) this.direction = 0;
};


Player.prototype.removeLife = function() {
	this.lives -= 1;
};

Player.prototype.giveLife = function() {
	this.lives += 1;
};


Player.prototype.draw = function () {	

	// this.ctx.fillStyle = 'red';
	// this.ctx.fillRect(this.x, this.y, this.size, this.size);
	this.imgShip1 = new Image();   // Create new <img> element
	this.imgShip1.src = 'images/Millenium Falcon - 02.png'; // Set source path
	this.ctx.drawImage(this.imgShip1, this.x, this.y, this.size, this.size);
};