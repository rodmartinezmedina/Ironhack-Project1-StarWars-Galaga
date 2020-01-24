# Ironhack-Project1-StarWars-Galaga
Ironhack-Project1-StarWars-Galaga

'STAR WARS GALAGA'


//
//Description
'New Galaga' is a Galaga-like game but using star wars fighters images. 
Player will be located on the bottom on the screen and its task is to shoot their enemies located in the top part of the screen to eliminate them. 
If there are no more enemies in the screen, player Wins the game. Otherwise game is endless.
Every once and then one enemy at a time will move to the bottom part of the screen to attack the player. If the enemy collides with the player, the player looses 1 life.
Player has 3 lives. 


//
//MVP (DOM - CANVAS)
CANVAS, This is a game where the player can move horizontally only and
shoot enemies.


//
//BACKLOG


BASICS

-create files, folders, structure
-create dom function in main js file for creating
different screens.
-set canvas size / set canvas context var.
-set loop

SPLASHSCREEN
-Start Button

GAMESCREEN
//Essentials//

-player position (& update)
-Position enemies randomly in allowed space
 (&update occupied locations)
 -set player direction/controls
-track bullet parcour.
-checkCollisions & handleCollisions:
	-if (player vs enemy) { remove 1 life};
	-if (bullet vs evemy) {add 1 score, update clear enemy};


-player lives (& update &remove)// when out of, goes to restart
-score (& update)

-clear enemies that have passed the y-axis 
maximum limit.


RESETCREEN

-reset Button
-score count, lives = 0. Game over sign.

POST-LOGIC
-Define estetica
-Define tipografia
-Define player/images/bullets/background images
-Define sons/musique

EXTRAS
-Collision player/enemy extra image? (explosion)
-Level 2 with extra speed/enemies? New background/enemies img.






FICHIERS & FUNCTIONS

1-
index.html //=> will have the 3 required instances created 
								in the DOM through JS: 
                -Start screen
                -Game screen(canvas)
                -Restart screen

2-style.css


3-main.JS

	Functions:
		-buildDom();
		-main();
			-createSplasScreen();
			-removeSplashScreen();
			-createGameScreen();
			-removeGameScreen();
			-createGameOverScreen();
			-removeGameOverScreen();

			-startGame();
			-gameOver();



4-game.JS

	-Constructor Game
	-Game.Prototypes:
		-Start:
			-Canvas, ctx, Liveselement, Scoreelement, container-size
			create player, set handleKeyDown;

		-bind handleKeyDown
		-startLoop
		-update game (check lives, collisions, etc)



5-player.JS

	Constructor:
		-vars: lives,size,position,direction,speed.
	Protos:
		-check collide()
		-update position()
		-remove life()
		-draw player()



6-enemy.JS

	Constructor:
		vars: size, position, speed.
	Protos:
		-draw()
		-updatePosition()
		-insideScreen() clear when passing Max y-axis





Links
Trello
Link url

Git
URls for the project repo and deploy Link Repo Link Deploy

Slides
URls for the project presentation (slides) Link Slides.com