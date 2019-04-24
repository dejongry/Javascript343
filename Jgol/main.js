/**
 *Game of Life Driver

 This will run code from gol.js file

 Author: Ryan De Jong
 CIS 343
 */

//load game of life file

var fs = require('fs')
var txtGrid = fs.readFileSync("gol.json");
var golContents = JSON.parse(txtGrid);

console.log('Height is: ' + golContents.height + '\nWidth is: ' + golContents.width);

const prompt = require('prompt-sync')();


printBoard();
//mutate();
//console.log('\n');
//printBoard();
while(true)
{
	console.log('Press q to quit,\n n to iterate multiple times,\n or any other key to continue 1 generation');
	var input = prompt();
	switch(input){
		case 'q':
			process.exit(0);
			break;
		case 'n':
			console.log('Enter number of times to iterate: ');
			let number = prompt();
			console.log('Iterating ' + number + ' times.\n');
			for(let i = 0; i < number; i++)
			{
				mutate();
				printBoard();
			}
			console.log('Done Iterating\n');
			break;
		default:
			mutate();
			printBoard();
	}
}



function printBoard()
{
	console.log('\n');
	for(let i = 0; i < golContents.height; i++)
	{
		console.log(golContents.grid[i]);
	}
}

function mutate()
{
	let tempArray = [];
	for(let i = 0;i < golContents.height; i++)
	{
		let newArray = [];
		for(let j = 0; j < golContents.width; j++)
		{
			newArray.push(0);
		}
		tempArray.push(newArray);
	}
	for(let i = 0;i < golContents.height; i++)
	{
		for(let j = 0; j < golContents.width; j++)
		{
			if(golContents.grid[i][j] == 1)
			{
				if(getNeighbors(i,j) == 2 || getNeighbors(i,j) == 3)
				{
					tempArray[i][j] = 1;
				}
				else
				{
					tempArray[i][j] = 0;
				}
			}
			else
			{
				if(getNeighbors(i,j) == 3)
				{
					tempArray[i][j] = 1;
				}
			}
		}
	}
	golContents.grid = tempArray;
}

function getNeighbors(rowLoc, colLoc)
{
	let neighbors = 0;
	if(rowLoc > 0 && colLoc > 0)
	{				//need to check every direction. Up and left.
		if(golContents.grid[rowLoc-1][colLoc-1] == 1)
		{
			neighbors++;
		}
	}
	if(rowLoc > 0)
	{				//straight up
		if(golContents.grid[rowLoc-1][colLoc] == 1)
		{
			neighbors++;
		}
	}
	if(rowLoc > 0 && colLoc<golContents.width-1)
	{				//up and right
		if(golContents.grid[rowLoc-1][colLoc+1] == 1)
		{
			neighbors++;
		}
	}
	if(colLoc > 0)
	{				//straight left
		if(golContents.grid[rowLoc][colLoc-1] == 1)
		{
			neighbors++;
		}
	}
	if(colLoc < golContents.width-1)
	{				//straight right
		if(golContents.grid[rowLoc][colLoc+1] == 1)
		{
			neighbors++;
		}
	}
	if(rowLoc < golContents.height-1 && colLoc > 0)
	{				//down and left
		if(golContents.grid[rowLoc+1][colLoc-1] == 1)
		{
			neighbors++;
		}
	}
	if(rowLoc < golContents.height-1)
	{				//straight down
		if(golContents.grid[rowLoc+1][colLoc] == 1)
		{
			neighbors++;
		}
	}
	if(rowLoc < golContents.height-1 && colLoc < golContents.width-1)
	{				//down and right
		if(golContents.grid[rowLoc+1][colLoc+1] == 1)
		{
			neighbors++;
		}
	}
	return neighbors;
}
