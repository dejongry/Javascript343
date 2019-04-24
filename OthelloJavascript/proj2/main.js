/**
 * Othello
 * Javascript project for CIS 343.
 * Command-line version of Othello.
 */

// Import our board definitions
const board = require('./board.js');
// Import a synchronous prompt library
const prompt = require('prompt-sync')();

/**
 * saveFile
 * SYNCHRONOUS (blocking) file save function.
 * @param file - The full filename path we want to save to.
 * @param contents - The object we wish to save as a JSON file.
 */
function saveFile(file, contents){
	let fs = require('fs');
	fs.writeFileSync(file, JSON.stringify(contents));
}

/**
 * loadFile
 * SYNCHRONOUS (blocking) file read function.
 * @param file - The full filename path we wish to load an object from.
 * @return contents - The object converted from JSON.
 */
function loadFile(file){
	let fs = require('fs');
	let content = fs.readFileSync(file);
	let obj = JSON.parse(content);
	return obj;
}

/**
 * Driver function.  "main" method, if you will.
 */
function start(){
 	// Local variables
	let height = prompt('What height for your board? ');
	let width = prompt('What width for your board? ');

	// SYNCHRONOUSLY read from keyboard
	console.log('Creating a board with size ' + height + ' x ' + width + '.');
	// Create new board object
	let myBoard = new board(height, width);

	// Print board

	// Loop, asking user input, calling appropriate functions.
	console.log('\nWelcome to Othello\n');
	console.log('Player 1 is black(b), Player 2 is white(w)');
	let turn = 1;
	while(!(myBoard.isGameOver()))
	{

		myBoard.printBoard();
		if(turn == 1 && myBoard.isValidMoveAvailable('b'))
		{
			console.log('\nPlayer 1(b) turn\n');
			let row = prompt('\nEnter row: ');
			if(row == -1)
			{
				break; 			//for debugging
			}
			let col = prompt('\nEnter column: ');
			while(!(myBoard.isValid(row,col,'b')))
			{
				console.log('Not a valid move');
				let row = prompt('\nEnter row: ');
				let col = prompt('\nEnter column: ');
			}
			myBoard.placeDiscAt(row,col,'b');
			turn++;
		}
		else if(turn == 1 && !(myBoard.isValidMoveAvailable('b')))
		{
			console.log('No Valid Moves. Turn is skipped\n');
			turn++;
		}
		if(turn == 2 && myBoard.isValidMoveAvailable('w'))
		{
			console.log('\nPlayer 2(w) turn\n');
			let row = prompt('\nEnter row: ');
			if(row == -1)
			{
				break; 			//for debugging
			}
			let col = prompt('\nEnter column: ');
			console.log('\nPlayer 2(w) turn\n');
			while(!(myBoard.isValid(row,col,'w')))
			{
				console.log('Not a valid move');
				let row = prompt('\nEnter row: ');
				let col = prompt('\nEnter column: ');
			}
			myBoard.placeDiscAt(row,col,'w');
			turn--;
		}
		else if(turn == 2 && !(myBoard.isValidMoveAvailable('w')))
		{
			console.log('No Valid Moves. Turn is skipped\n');
			let cont = prompt('Infinite Loop??????????? Enter -1 to exit\n');
			if(cont == -1)
			{
				break;
			}
			turn--;
		}
	}
	console.log('Game Over');

	if(myBoard.checkWinner() != null)
	{
		console.log('Winner is color: ' + myBoard.checkWinner());
	}
	else
		console.log('The game ended in a tie');
	// Save board example code.
	saveFile("test.json", myBoard);
}

console.clear();
start();
