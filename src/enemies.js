'use strict';

function Enemy (canvas, y , speed) {
	this.canvas = canvas;
	this.ctx =canvas.getContext('2d');
	this.size = 100;
	this.x = y;
	this.y =0;
	this.speed = speed;
	this.enemy1;

}

Enemy.prototype.draw = function () {
	// this.ctx.fillstyle = 'blue';
	// this.ctx.fillRect(this.x, this.y, this.size, this.size);
	this.enemy1 = new Image();   // Create new <img> element
	this.enemy1.src = 'images/Tie Advanced.png'; // Set source path
	this.ctx.drawImage(this.enemy1, this.x, this.y, this.size, this.size);
};


Enemy.prototype.updatePosition = function () {
	this.y = this.y + this.speed;
};


Enemy.prototype.isInsideScreen = function () {
	// if y plus half of its size is smaller than 0 return
	//
	// whats going on here?????
	//HELP!
	//
	return this.y + this.size / 2 > 0;
};