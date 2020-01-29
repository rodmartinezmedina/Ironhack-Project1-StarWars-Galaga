'use strict';

function Yoda (canvas, y , speed, source) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.size = 50;
	this.x = y;
	this.y =0;
	this.speed = speed;
	this.YodaImg = new Image();
	this.YodaImg.src = source;
};


Yoda.prototype.draw = function () {
	this.ctx.drawImage(this.YodaImg, this.x, this.y, this.size, this.size);
};

Yoda.prototype.updatePosition = function () {
	this.y = this.y + this.speed;
};

Yoda.prototype.isInsideScreen = function () {
	// if y plus half of its size is smaller than 0 return
	// whats going on here?????
	return (this.y + this.size / 2 > 0) && (this.x + this.size / 2 < this.canvas.width);
};