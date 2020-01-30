'use strict';

function Shooter (canvas) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.size = 120;
	this.x = canvas.width / 2;
	this.y = 40;
	this.direction = 1;
	this.speed = 3;
	this.shooterImg; 
};

Shooter.prototype.handleScreenCollision = function() {

	var screenLeft = 0;
	var screenRight = this.canvas.width - 90;
	this.x = this.x + this.direction * this.speed;

	if (this.x < screenLeft) this.direction = 1;
	else if (this.x > screenRight) this.direction = -1;
};

Shooter.prototype.updatePosition = function () {
	this.x = this.x + this.speed;
};

Shooter.prototype.draw = function () {	

	this.shooterImg = new Image();   // Create new <img> element
	this.shooterImg.src = 'images/Imperial-star-destroyer.png'; // Set source path
	this.ctx.drawImage(this.shooterImg, this.x, this.y, this.size, this.size);
};