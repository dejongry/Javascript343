/**
 * Board
 * Defines a board "class" for an Othello game.
 */

module.exports = class Board {
	/**
	 * Construct the object with required state
	 */
	constructor(height, width){
		this.height = height;
		this.width = width;
		this.board = [];
		let h2 = this.height/2, w2 = this.width/2;		//used to insert starting pieces
		for(let i=0; i<this.height; ++i){
			let tmp = [];
			for(let j=0; j<this.width; ++j){
				if(i == h2 && j == w2 || i == h2-1 && j == w2-1)	//place discs in correct starting location
				{
					tmp.push('b');
				}
				if(i == h2-1 && j == w2-1 || i == h2 && j == w2-1)
				{
					tmp.push('w');
				}
				else
				{
					tmp.push(-1);
				}
			}
			this.board.push(tmp);
		}
	}

	/**
	 * Print a representation of the board to the terminal.
	 */
	printBoard(){
		for(let i=0; i<this.height; ++i){
			for(let j=0; j<this.width; ++j){
				if(this.board[i][j] == -1){
					process.stdout.write('.\t')
				} else {
					process.stdout.write(this.board[i][j] + "\t")
				}
			}
			console.log();
		}
	}

	/**
	 * isValidMove
	 * @param row An integer row number.
	 * @param col An integer column number.
	 * @param disc A character for the disc color.
	 * @return A boolean indicating whether the move is valid.
	 */

	isValid(row, col, disc){
		let i = 0, j = 0;
		console.log(row + ", " + col);
		if(disc == 'w')
		{
							console.log('\n(ENTRANCE)WE HERE\n');
			if(this.board[row][col] != -1)
				return false;
			if(row>0 && col>0)
			{
				console.log('\n9WE HERE\n');
				if(this.board[row-1][col-1] == 'w')				//check each direction
				{							//diagonnally up and left
					for(i = row-1, j = col-1; i--, j--; i>0, j>0)
					{
						if(this.board[i][j] == 'b')
						{
							console.log('\n1WE HERE\n');
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;				//stop looping
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row>0)
			{
				console.log('\n8WE HERE\n');
				if(this.board[row-1][col] == 'w')				//straight up
				{
					for(i = row-1; i--; i>0)
					{
						if(this.board[i][col] == 'b')
						{
							return true;
						}
						else if(this.board[i][col] == -1)
						{
							i=-1;
						}
						else
						{
							continue;			//piece must be white
						}
					}
				}
			}
			if(row > 0 && col < this.width)
			{
				console.log('\n7WE HERE\n');
				if(this.board[row-1][col+1] == 'w')				//diagonally up and right
				{
					for(i = row-1, j = col+1; i--, j++; i>0, j < this.width)
					{
						if(this.board[i][j] == 'b')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(col>0)
			{
				console.log('\n6WE HERE\n');
				if(this.board[row][col-1] == 'w')				//straight left
				{
					for(j = col-1; j--; j>0)
					{
						if(this.board[row][j] == 'b')
						{
							return true;
						}
						else if(this.board[row][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(col < this.width)
			{
				console.log('\n5WE HERE\n');
				if(this.board[row][col+1] == 'w')				//straight right
				{
					console.log('\n5WE HERE5\n');
					for(j = col+1; j++; j<this.width)
					{
						if(this.board[row][j] == 'b')
						{
							return true;
						}
						else if(this.board[row][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row<this.height && col>0)
			{
				if(this.board[row+1][col-1] == 'w')				//diagonally down and left
				{
					console.log('\n10WE HERE\n');
					for(i = row+1, j = col-1; i++, j--; i<this.height, j > 0)
					{
						if(this.board[i][j] == 'b')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row<this.height)
			{
				if(this.board[row+1][col] == 'w')				//straight down
				{
					console.log('\n11WE HERE\n');
					for(i = row+1; i++; i<this.height)
					{
						if(this.board[i][col] == 'b')
						{
							return true;
						}
						else if(this.board[i][col] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row<this.height && col < this.width)
			{
				console.log('\n12WE HERE\n');
				if(this.board[row+1][col+1] == 'w')				//diagonally down and right
				{
					for(i = row+1, j = col+1; i++, j++; i<this.height, j < this.width)
					{
						if(this.board[i][j] == 'b')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
		}

		//--------------------------------seperator-------------------------------//
		if(disc == 'w')
		{
			if(this.board[row][col] != -1)
				return false;
			if(row>0 && col > 0)
			{
				if(this.board[row-1][col-1] == 'b')				//check each direction
				{							//diagonnally up and left
					for(i = row-1, j = col-1; i--, j--; i>0, j>0)
					{
						if(this.board[i][j] == 'w')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;				//stop looping
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row>0)
			{
				if(this.board[row-1][col] == 'b')				//straight up
				{
					for(i = row-1; i--; i>0)
					{
						if(this.board[i][col] == 'w')
						{
							return true;
						}
						else if(this.board[i][col] == -1)
						{
							i=-1;
						}
						else
						{
							continue;			//piece must be white
						}
					}
				}
			}
			if(row>0 && col<this.width)
			{
				if(this.board[row-1][col+1] == 'b')				//diagonally up and right
				{
					for(i = row-1, j = col+1; i--, j++; i>0, j < this.width)
					{
						if(this.board[i][j] == 'w')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(col>0)
			{
				if(this.board[row][col-1] == 'b')				//straight left
				{
					for(j = col-1; j--; j>0)
					{
						if(this.board[row][j] == 'w')
						{
							return true;
						}
						else if(this.board[row][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(col<this.width)
			{
				if(this.board[row][col+1] == 'b')				//straight right
				{
					for(j = col+1; j++; j<this.width)
					{
						if(this.board[row][j] == 'w')
						{
							return true;
						}
						else if(this.board[row][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row<this.height && col>0)
			{
				if(this.board[row+1][col-1] == 'b')				//diagonally down and left
				{
					for(i = row+1, j = col-1; i++, j--; i<this.height, j > 0)
					{
						if(this.board[i][j] == 'w')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row<this.height)
			{
				if(this.board[row+1][col] == 'b')				//straight down
				{
					for(i = row+1; i++; i<this.height)
					{
						if(this.board[i][col] == 'w')
						{
							return true;
						}
						else if(this.board[i][col] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
			if(row<this.height && col<this.width)
			{
				if(this.board[row+1][col+1] == 'b')				//diagonally down and right
				{
					for(i = row+1, j = col+1; i++, j++; i<this.height, j < this.width)
					{
						if(this.board[i][j] == 'w')
						{
							return true;
						}
						else if(this.board[i][j] == -1)
						{
							i=-1;
						}
						else
						{
							continue;
						}
					}
				}
			}
		}
	}

	/**
	 * placeDiscAt
	 * @param row An integer number for row.
	 * @param col An integer number for column.
	 * @param disc A character standing for disc color.
	 */
	placeDiskAt(row, col, disc){
		let i = 0, j = 0;				//used in loops
		if(this.isValid(row, col, disc))			//check if its a valid move
		{
			this.board[row][col] = disc;			//need to flip discs
			if(disc == 'b')
			{
				if(this.board[row-1][col-1] == 'w')	//up and left
				{
					for(i = row-1, j = col-1; i--, j--; i>0, j>0)
					{
						if(this.board[i][j] == 'b')
						{
							for(i = i+1, j = j+1; i++, j++; i<row, j<col)
							{
								this.board[i][j] = 'b';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row-1][col] == 'w')		//straight up
				{
					for(i = row-1; i--; i>0)
					{
						if(this.board[i][col] == 'b')
						{
							for(i = i+1; i++; i<row)
							{
								this.board[i][col] = 'b';
							}
							i = -1;
						}
						else if(this.board[i][col] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row-1][col+1] == 'w')		//up and right
				{
					for(i = row-1, j = col+1; i--, j++; i>0, j<this.width)
					{
						if(this.board[i][j] == 'b')
						{
							for(i = i+1, j = j-1; i++, j--; i<row, j>col)
							{
								this.board[i][j] = 'b';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row][col-1] == 'w')		//straight left
				{
					for(j = col-1; j--;j>0)
					{
						if(this.board[row][j] == 'b')
						{
							for(j = j+1; j++; j<col)
							{
								this.board[row][j] = 'b';
							}
							i = -1;
						}
						else if(this.board[row][j] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row][col+1] == 'w')		//straight right
				{
					for(j = col+1; j++; j>this.width)
					{
						if(this.board[row][j] == 'b')
						{
							for(j = j-1; j--; j>col)
							{
								this.board[row][j] = 'b';
							}
							i = -1;
						}
						else if(this.board[row][j] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row+1][col-1] == 'w')		//down and left
				{
					for(i = row+1, j = col-1; i++, j--; i<this.height, j>0)
					{
						if(this.board[i][j] == 'b')
						{
							for(i = i-1, j = j+1; i--, j++; i>row, j<col)
							{
								this.board[i][j] = 'b';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row+1][col] == 'w')		//straight down
				{
					for(i = row+1; i++; i<this.height)
					{
						if(this.board[i][col] == 'b')
						{
							for(i = i-1; i--; i>row)
							{
								this.board[i][col] = 'b';
							}
							i = -1;
						}
						else if(this.board[i][col] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row+1][col+1] == 'w')		//down and right
				{
					for(i = row+1, j = col+1; i++, j++; i<this.height, j<this.width)
					{
						if(this.board[i][j] == 'b')
						{
							for(i = i-1, j = j-1; i--, j--; i>row, j>col)
							{
								this.board[i][j] = 'b';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'w')
							continue;
						else
							i = -1;		//stop looping
					}
				}
			}
			//--------------------------------seperator-------------------------------//
			if(disc == 'w')
			{
				if(this.board[row-1][col-1] == 'b')	//up and left
				{
					for(i = row-1, j = col-1; i--, j--; i>0, j>0)
					{
						if(this.board[i][j] == 'w')
						{
							for(i = i+1, j = j+1; i++, j++; i<row, j<col)
							{
								this.board[i][j] = 'w';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row-1][col] == 'b')		//straight up
				{
					for(i = row-1; i--; i>0)
					{
						if(this.board[i][col] == 'w')
						{
							for(i = i+1; i++; i<row)
							{
								this.board[i][col] = 'w';
							}
							i = -1;
						}
						else if(this.board[i][col] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row-1][col+1] == 'b')		//up and right
				{
					for(i = row-1, j = col+1; i--, j++; i>0, j<this.width)
					{
						if(this.board[i][j] == 'w')
						{
							for(i = i+1, j = j-1; i++, j--; i<row, j>col)
							{
								this.board[i][j] = 'w';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row][col-1] == 'b')		//straight left
				{
					for(j = col-1; j--;j>0)
					{
						if(this.board[row][j] == 'w')
						{
							for(j = j+1; j++; j<col)
							{
								this.board[row][j] = 'w';
							}
							i = -1;
						}
						else if(this.board[row][j] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row][col+1] == 'b')		//straight right
				{
					for(j = col+1; j++; j>this.width)
					{
						if(this.board[row][j] == 'w')
						{
							for(j = j-1; j--; j>col)
							{
								this.board[row][j] = 'w';
							}
							i = -1;
						}
						else if(this.board[row][j] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row+1][col-1] == 'b')		//down and left
				{
					for(i = row+1, j = col-1; i++, j--; i<this.height, j>0)
					{
						if(this.board[i][j] == 'w')
						{
							for(i = i-1, j = j+1; i--, j++; i>row, j<col)
							{
								this.board[i][j] = 'w';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row+1][col] == 'b')		//straight down
				{
					for(i = row+1; i++; i<this.height)
					{
						if(this.board[i][col] == 'w')
						{
							for(i = i-1; i--; i>row)
							{
								this.board[i][col] = 'w';
							}
							i = -1;
						}
						else if(this.board[i][col] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
				if(this.board[row+1][col+1] == 'b')		//down and right
				{
					for(i = row+1, j = col+1; i++, j++; i<this.height, j<this.width)
					{
						if(this.board[i][j] == 'w')
						{
							for(i = i-1, j = j-1; i--, j--; i>row, j>col)
							{
								this.board[i][j] = 'w';
							}
							i = -1;
						}
						else if(this.board[i][j] == 'b')
							continue;
						else
							i = -1;		//stop looping
					}
				}
			}
		}
	}

	/**
	 * isValidMoveAvailable
	 * @param disc A character pertaining to a disc color.
	 * @return bool A boolean telling the user whether there are
	 *	 	valid moves availabe for that disc.
	 */
	isValidMoveAvailable(disc){
		let i = 0, j = 0;
		console.log("Height is " + this.height + " Width is " + this.width);
		for(i; i<this.height; i++)
		{
			for(j; j<this.width; j++)
			{
				console.log(i + ", " + j);
				if(this.isValid(i,j,disc))
				{
					console.log("MOVE AVAILABLE!");
					return true;
				}
				console.log("I IS = " + i + " AND HEIGHT IS " + this.height);
			}
		}
		console.log("Done.");
		return false;
	}

	/**
	 * isBoardFull
	 * @return boolean Whether or not the board is full.
	 */
	isBoardFull(){
		let i = 0, j = 0;
		for(i; i<=this.height; i++)
		{
			for(j; j<=this.width;j++)
			{
				if(this.board[i][j] == -1)
				{
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * isGameOver
	 * @return bool Whether or not the game is over.
	 */
	isGameOver(){
		if(this.isBoardFull() || (!(this.isValidMoveAvailable('b')) && !(this.isValidMoveAvailable('w'))))
			return true;
		return false;
	}

	/**
	 * checkWinner
	 * @return char Which player has won.  Return null if
	 * 		a tie exists.
	 */
	checkWinner(){
		let black = 0, white = 0, i = 0, j = 0;
		for(i; i<this.height; i++)
		{
			for(j; j<this.width;j++)
			{
				if(this.board[i][j] == 'b')
					black++;
				if(this.board[i][j] == 'w')
					white++;
			}
		}
		if(black>white)
			return 'b';
		if(white>black)
			return 'w';
		return null;
	}
}

//let board = new Board(10, 10);
//board.printBoard();
