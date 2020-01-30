'use strict';

function Enemy (canvas, y , speed, source) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.size = 65;
	this.x = y;
	this.y =0;
	this.speed = speed;
	this.enemyImg = new Image();
	this.enemyImg.src = source;
};


Enemy.prototype.draw = function () {
	this.ctx.drawImage(this.enemyImg, this.x, this.y, this.size, this.size);
};

Enemy.prototype.updatePosition = function () {
	this.y = this.y + this.speed;
};

Enemy.prototype.isInsideScreen = function () {
	// if y plus half of its size is smaller than 0 return
	// whats going on here?????
	return (this.y + this.size > 0) && (this.x + this.size < this.canvas.width);
};


function BigEnemy (canvas, y , speed, source) {
	this.canvas = canvas;
	this.ctx =canvas.getContext('2d');
	this.size = 130;
	this.x = y;
	this.y =0;
	this.speed = speed;
	this.bigEnemyImage = new Image();   
	this.bigEnemyImage.src = source;
}

BigEnemy.prototype.draw = function () {
	this.ctx.drawImage(this.bigEnemyImage, this.x, this.y, this.size, this.size);
};


BigEnemy.prototype.updatePosition = function () {
	this.y = this.y + this.speed;
};

BigEnemy.prototype.isInsideScreen = function () {
	return (this.y + this.size > 0) && (this.x + this.size < this.canvas.width);
};
