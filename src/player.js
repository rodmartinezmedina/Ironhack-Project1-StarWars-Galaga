'use strict';

function Player(canvas, lives) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	this.lives = lives;
	this.size = 50;
	this.x = canvas.width / 2;
	this.y = 750;
	this.direction = 0;
	this.speed = 5;
}

Player.prototype.setDirection = function(direction) {};

Player.prototype.didCollide = function(enemy) {};

Player.prototype.handleScreenCollision = function() {};

Player.prototype.removeLife = function() {};


