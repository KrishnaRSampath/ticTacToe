
var filledBoxes;
var content;

var b;
var turn = 0;

var context; //must set this for canvas

var gameOver = false;
var winningMoves;

window.onload = function() {
	filledBoxes = new Array();
	content = new Array();
	winningMoves = 
		[[0,1,2],[3,4,5],[6,7,8],
		 [0,3,6],[1,4,7],[2,5,8],
		 [0,4,8],[2,4,6]];

	for (i=0; i<9; i++) {
		filledBoxes[i] = false;
		content[i] = '';
	}

}


function boxClicked(boxNumber) {
	box = "box"+boxNumber;
	b = document.getElementById(box);
	context = b.getContext("2d");

	if (gameOver == false) {
		if(filledBoxes[boxNumber] == false) {
			
			context.fillStyle = "#000";
			context.textAlign = "center";
			context.font = "bold 150px Tahoma";
			context.textBaseline = "top";
			
			if(turn%2==0) {
				context.fillText("X", 150, -20);
				content[boxNumber] = 'X';
			}
			else {
				context.fillText("O", 150, -20);
				content[boxNumber] = 'O';	
			}

			turn++;

			filledBoxes[boxNumber] = true;
		}

		checkVictory(content[boxNumber]);

	}
}

function checkVictory(playerIcon) {
	for (var i = 0; i < winningMoves.length; i++) {
		if ((content[winningMoves[i][0]]==playerIcon)&&(content[winningMoves[i][1]]==playerIcon)&&(content[winningMoves[i][2]]==playerIcon)) {
			alert(playerIcon + " wins!");
			gameOver = true;
			location.reload(true);
		} 
	}
	if ((gameOver==false)&&(turn == 9)) {
		alert("Nobody wins!");
		location.reload(true);
	}
}


