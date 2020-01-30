function Bullet(canvas, playerX){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 40;
    this.x = playerX;
    this.y = canvas.height - 70;    
    this.speed = 8;
    this.direction = 1;  
    this.laserShot;  
    // this.image = new Image();
    // this.sound = new Audio("./sounds/laser2.mp3")
}

Bullet.prototype.draw = function() {    
    // this.ctx.fillStyle = 'blue';
    // this.ctx.fillRect(this.x, this.y, this.size, this.size);

    this.laserShot = new Image();   // Create new <img> element
	this.laserShot.src = 'images/laserShotGreen.png'; // Set source path
    this.ctx.drawImage(this.laserShot, this.x, this.y, this.size, this.size);
    
    // this.image.src = "./images/AT-AT.png";
    // this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // this.sound.volume = 0.2;
    // this.sound.play();
}

Bullet.prototype.update = function() {
    this.y = (this.y - this.speed * this.direction);
}

Bullet.prototype.isInsideScreen = function (){
    return this.y >= 0;
};
Bullet.prototype.didCollide = function(enemy) {
	var bulletLeft = this.x;
	var bulletRight = this.x + this.size;
	var bulletTop = this.y;
	var bulletBottom = this.y + this.size;

	
	var enemyLeft = enemy.x;
	var enemyRight = enemy.x + enemy.size;
	var enemyTop = enemy.y;
	var enemyBottom = enemy.y + enemy.size;


// Check if the enemy intersects any of the player's sides
var crossRight = enemyLeft <= bulletRight && enemyRight >= bulletLeft;
var crossLeft = enemyRight >= bulletLeft && enemyLeft <= bulletRight;
var crossTop = enemyBottom >= bulletTop && enemyTop <= bulletBottom;
var crossBottom = enemyBottom <= bulletBottom && enemyBottom >= bulletTop;

if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
	return true;
}

return false;
};