'use strict';

function Player(canvas, lives) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.lives = lives;
	this.size = 50;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.direction = 0;
	this.speed = 5;
}

Player.prototype.setDirection = function(direction) {

	// +1 down -1 up
	if (direction ==='right') this.direction = 1;
	else if(direction === 'left') this.direction = -1;
};


Player.prototype.didCollide = function(enemy) {};


Player.prototype.handleScreenCollision = function() {
	//
	//
	//check step 14 for precise instructions
	//
	//HELP 
	//Should I write here this.x or this.y????
	this.x = this.x + this.direction * this.speed;
	var screenLeft = 0;
	var screenRight = this.canvas.width;
	
	if (this.x > screenLeft) this.direction = 1;
	else if (this.x < screenRight) this.direction = -1;
};


Player.prototype.removeLife = function() {
	this.lives -= 1;
};


Player.prototype.draw = function () {
	
// check how to insert image in file 
// step 14 of tutorial;
	this.ctx.fillStyle = 'red';
	// fillRect(x, y, width, height)
	this.ctx.fillRect(
		this.x,
		this.y,
		this.size,
		this.size,
	);
};