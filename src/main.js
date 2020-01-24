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

    
  // -- splash screen

  function createSplashScreen() {
		splashScreen = buildDom(`
		<main>
			<h1>Use the force</h1>
			<button>Start game</button>
			<p>Use left/right arrows to move the player. Use space bar to shoot you enemies</p> 
		</main>
	`);

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
			<main class="game container">
				<header>
					<div class="lives">
						<span class="label">Lives:</span>
						<span class="value"></span>
					</div>
					<div="score">
						<span class="label">Score:</span>
						<span class="value"></span>
					</div="score">
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

  function createGameOverScreen(score) {};

  function removeGameOverScreen() {};


	// -- you win screen

	function createyouWinScreen(score) {};

	function removeyouWinScreen() {};

    
  // -- Setting the game state 

  function startGame() {
		removeSplashScreen();
		//later we need to add clearing of the gameOverScreen

		game = new Game();
		game.gameScreen = createGameScreen();

		// Starts the game
		// game.start()
	};

  function gameOver() {};

  function youWin() {};

    
  // -- initialize Splash screen on initial start
  createSplashScreen();
}

// Runs the function `main` once all resources are loaded
window.addEventListener('load', main);