'use strict';

// Creates DOM elements from a string representation
function buildDom(htmlstring) {
	var div = document.createElement('div');
	div.innerHTML = htmlstring;
	return div.children[0];
};

// Runs on initial start and contains calls all other functions that manage the game
function main() {
  var game; // instance of the Game
  var splashScreen; // Start Screen
  var gameOverScreen;
	var youWonScreen;
var splashScreenMusic = new Audio ('sounds/main-theme.mp3');
var gameOverSound = new Audio ('sounds/dark-side-power.mp3');
var gameOverMusic = new Audio ('sounds/imperial-march.mp3');

    
  // -- splash screen

  function createSplashScreen() {

		removeGameOverScreen();

		gameOverMusic.pause();
		gameOverSound.pause();

		splashScreen = buildDom(`
		<main class="splash-screen-container">
			<h1>use the force</h1>
			<img>
			<button>Start game</button>

			<div class = 'instructions-div'>
				<p class = 'instructions' >Use left/right arrows to move the player</p>
				<p class = 'instructions' >Use 's' key to shoot you enemies</p>
				<p class = 'instructions' >Use down arrow to stop the player</p>
			</div>

		</main>
	`);

		splashScreenMusic.play();
		splashScreenMusic.currentTime = 0;
		splashScreenMusic.volume = 0.4;

	

		document.body.appendChild(splashScreen);
		
		var startButton = splashScreen.querySelector('button');
		// startButton.addEventListener('click', function() {
		// 	console.log('Game started! War begins!')
		// });
		startButton.addEventListener('click', startGame);
			//Game started
			
	};


  function removeSplashScreen() {
		// remove() is the DOM element that removes the Node from the page
		splashScreen.remove();
	};

	
		// -- create game screen

  function createGameScreen() {
		
		var gameScreen = buildDom(`
			<main class="game-container">
				<header>
					<div class="lives">
						<span class="label">Lives:</span>
						<span class="value"></span>
					</div>
					<div class="score">
						<span class="label">Score:</span>
						<span class="value"></span>
					</div>
				</header>
				<div class="canvas-container">
					<canvas></canvas>
				</div>
			</main>
		`);

		document.body.appendChild(gameScreen);

		return gameScreen;
	};
	

  function removeGameScreen() {
		game.removeGameScreen();
	};

    
  // -- game over screen

  function createGameOverScreen(score) {
	  gameOverScreen = buildDom(`
			<main class= 'gameOver-screen-container'>
				<h1>Game over</h1>
				<p class= 'gameOver-score'>Your score: <span></span></p>
				<button>Restart</button>
				<p class = 'instructions'>Press button to go to the main screen</p>
			</main>			  
		`)
		
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
		gameOverMusic.volume = 0.3;

		gameOverSound.play();
		gameOverSound.currentTime = 0;
		gameOverSound.volume = 0.4;


		var button = gameOverScreen.querySelector('button');
		button.addEventListener('click', createSplashScreen);

		var span = gameOverScreen.querySelector('span');
		span.innerText = score;

		document.body.appendChild(gameOverScreen);
  };

  function removeGameOverScreen() {
	if (gameOverScreen !== undefined) {
			gameOverScreen.remove();
		}
	};


	// -- you win screen

	function createyouWinScreen(score) {};

	function removeyouWinScreen() {};

    
  // -- Setting the game state 

  function startGame() {
		removeSplashScreen();
		removeGameOverScreen();

		game = new Game();
		game.gameScreen = createGameScreen();
		// var gameScreen = createGameScreen();
		game.start()
		game.passGameOverCallback( function() {
			gameOver(game.score);
		});
  };

  function gameOver(score) {
		clearInterval(game.intervalId);
	  removeGameScreen();
	  createGameOverScreen(score);
  };

  function youWin() {};

    
  // -- initialize Splash screen on initial start
  createSplashScreen();

  splashScreenMusic.play();
  splashScreenMusic.currentTime = 0;
  splashScreenMusic.volume = 0.4;
}

// Runs the function `main` once all resources are loaded
window.addEventListener('load', main);