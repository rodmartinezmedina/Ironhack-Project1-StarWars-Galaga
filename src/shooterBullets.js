function ShooterBullet(canvas, shooterX, source){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 80;
    this.x = shooterX;
    this.y = 0;    
    this.speed = 6;
    this.direction = 1;  
    this.shooterLaserShotImg = new Image();  
    this.shooterLaserShotImg.src = source;
    // this.image = new Image();
    // this.sound = new Audio("./sounds/laser2.mp3")
}

ShooterBullet.prototype.draw = function() {    
    this.ctx.drawImage(this.shooterLaserShotImg, this.x, this.y, this.size, this.size);
}

ShooterBullet.prototype.update = function() {
    this.y = (this.y + this.speed * this.direction);
}

ShooterBullet.prototype.isInsideScreen = function (){
    // return this.y >= 0;
    return (this.y + this.size > 0) && (this.x + this.size < this.canvas.width);
};



//add shooterBullet vs player into the checkCollisions