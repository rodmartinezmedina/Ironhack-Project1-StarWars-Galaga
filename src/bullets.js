function Bullet(canvas, playerX){
    this.canvas = canvas;
    this.size = 20;
    this.x = playerX;
    this.y = canvas.height - 70;
    this.ctx = canvas.getContext("2d");
    this.speed = 4;
    this.direction = 1;    
    // this.image = new Image();
    // this.sound = new Audio("./sounds/laser2.mp3")
}

Bullet.prototype.draw = function(){
    
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

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
