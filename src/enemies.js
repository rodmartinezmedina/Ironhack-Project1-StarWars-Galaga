'use strict';

function Enemy (canvas, y , speed) {
	this.canvas = canvas;
	this.ctx =canvas.getContext('2d');
	this.size = 75;
	this.x = y;
	this.y =0;
	this.speed = speed;
	this.enemy1;
	this.enemy2;
	this.enemy3;
}


Enemy.prototype.draw = function () {
	// this.ctx.fillstyle = 'blue';
	// this.ctx.fillRect(this.x, this.y, this.size, this.size);
	this.enemy1 = new Image();   // Create new <img> element
	this.enemy1.src = '/images/Imperial Shuttle - 01.png'; // Set source path

	this.enemy2 = new Image();   // Create new <img> element
	this.enemy2.src = '/images/Tie Fighter - 02.png'; // Set source path

	this.enemy3 = new Image();   // Create new <img> element
	this.enemy3.src = '/images/Tie Bomber.png'; // Set source path
	
	// this.enemiesArray = [this.enemy1, this.enemy2, this.enemy3];
	// this.randomEnemy = this.enemiesArray[Math.floor(Math.random()*this.enemiesArray.length)];

	this.ctx.drawImage(this.enemy2, this.x, this.y, this.size, this.size);
};


Enemy.prototype.updatePosition = function () {
	this.y = this.y + this.speed;
};

Enemy.prototype.isInsideScreen = function () {
	// if y plus half of its size is smaller than 0 return
	// whats going on here?????
	return this.y + this.size / 2 > 0;
};


// function BigEnemy (canvas, y , speed) {
// 	this.canvas = canvas;
// 	this.ctx =canvas.getContext('2d');
// 	this.size 110;
// 	this.x = y;
// 	this.y =0;
// 	this.speed = speed;
// 	this.bigEnemy1;
// 	this.bigEnemy2;
// 	this.bigEnemy3;
// }



// BigEnemy.prototype.draw = function () {
// 	// this.ctx.fillstyle = 'blue';
// 	// this.ctx.fillRect(this.x, this.y, this.size, this.size);
// 	this.bigEnemy1 = new Image();   // Create new <img> element
// 	this.bigEnemy1.src = '/images/Death Star - 1st.png'; // Set source path

// 	this.bigEnemy2 = new Image();   // Create new <img> element
// 	this.bigEnemy2.src = '/images/Tie Fighter - 02.png'; // Set source path

// 	this.bigEnemy3 = new Image();   // Create new <img> element
// 	this.bigEnemy3.src = '/images/Tie Bomber.png'; // Set source path
	
// 	this.bigEnemiesArray = [this.bigEnemy1, this.bigEnemy2, this.bigEnemy3];
// 	this.randomBigEnemy = this.bigEnemiesArray[Math.floor(Math.random()*this.bigEnemiesArray.length)];

// 	this.ctx.drawImage(this.bigEnemy1, this.x, this.y, this.size, this.size);
// };



// BigEnemy.prototype.updatePosition = function () {
// 	this.y = this.y + this.speed;
// };


