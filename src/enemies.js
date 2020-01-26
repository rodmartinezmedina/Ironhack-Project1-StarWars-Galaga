'use strict';

function Enemy (canvas, y , speed) {
	this.canvas = canvas;
	this.ctx =canvas.getContext('2d');
	this.size = 20;
	this.x = canvas.width / 2;
	this.y =200;
	this.speed = speed;

}

Enemy.prototype.draw = function () {
	this.ctx.fillstyle = 'blue';
	this.ctx.fillRect(
		this.x,
		this.y,
		this.size,
		this.size,
	);	
};


Enemy.prototype.updatePosition = function () {
	this.y = this.y - this.speed;
};


Enemy.prototype.isInsideScreen = function () {
	// if y plus half of its size is smaller than 0 return
	//
	// whats going on here?????
	//HELP!
	//
	return this.y + this.size / 2 > 0;
};