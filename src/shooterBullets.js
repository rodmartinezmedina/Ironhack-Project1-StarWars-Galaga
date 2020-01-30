function ShooterBullet(canvas, playerX){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 40;
    this.x = shooterX;
    this.y = 0;    
    this.speed = 8;
    this.direction = -1;  
    this.shooterLaserShot;  
    // this.image = new Image();
    // this.sound = new Audio("./sounds/laser2.mp3")
}

ShooterBullet.prototype.draw = function() {    
    // this.ctx.fillStyle = 'blue';
    // this.ctx.fillRect(this.x, this.y, this.size, this.size);

    this.shooterLaserShot = new Image();   // Create new <img> element
	this.shooterLaserShot.src = 'images/laserShotBlue.png'; // Set source path
    this.ctx.drawImage(this.shooterLaserShot, this.x, this.y, this.size, this.size);
    
    // this.image.src = "./images/AT-AT.png";
    // this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // this.sound.volume = 0.2;
    // this.sound.play();
}

ShooterBullet.prototype.update = function() {
    this.y = (this.y + this.speed * this.direction);
}

ShooterBullet.prototype.isInsideScreen = function (){
    return this.y <= 0;
};
ShooterBullet.prototype.didCollide = function(enemy) {
	var shooterBulletLeft = this.x;
	var shooterBulletRight = this.x + this.size;
	var shooterBulletTop = this.y;
	var shooterBulletBottom = this.y + this.size;


	var playerLeft = player.x;
	var playerRight = player.x + player.size;
	var playerTop = player.y;
	var playerBottom = player.y + player.size;


// Check if the player intersects any of the player's sides
var crossRight = playerLeft <= shooterBulletRight && playerRight >= shooterBulletLeft;
var crossLeft = playerRight >= shooterBulletLeft && playerLeft <= shooterBulletRight;
var crossTop = playerBottom >= shooterBulletTop && playerTop <= shooterBulletBottom;
var crossBottom = playerBottom <= shooterBulletBottom && playerBottom >= shooterBulletTop;

if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
	return true;
}

return false;
};


//add shooterBullet vs player into the checkCollisions