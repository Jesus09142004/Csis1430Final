var markers = ["X", "O"];
var whoseTurn = 0;
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var players = [];
var totals = [];
players[0] = prompt("Enter player 1");
players[1] = prompt("Enter player 2");
var gameOver;
var player1Wins = 0;
var player2Wins = 0;
var ties = 0;

var happySound = document.getElementById("happy-sound");
var sadSound = document.getElementById("sad-sound");

function startGame() {
    var innerDivs = "";
    var counter = 1; 
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            innerDivs += '<div onclick="playGame(this, ' + counter + ');"></div>';
            counter *= 2; 
        }
    }
    document.getElementById("game-board").innerHTML = innerDivs;

    totals = [0, 0];
    gameOver = false;
    document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s turn";
}

function playGame(clickedDiv, divByte) {
    if (!gameOver) {
        clickedDiv.innerText = markers[whoseTurn];
        totals[whoseTurn] += divByte;

        if (isWin()) {
            document.getElementById("game-message").innerText = players[whoseTurn] + " wins!!!";
            playSound('win');
        } else if (totals[0] + totals[1] === 511) { 
            gameOver = true;
            document.getElementById("game-message").innerText = "Tie!";
            playSound('tie');
        } else {
            whoseTurn = (whoseTurn === 0) ? 1 : 0; 
            document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s turn";
        }

        clickedDiv.onclick = null; 
    }
}

function isWin() {
    for (var i = 0; i < winCodes.length; i++) {
        if ((totals[whoseTurn] & winCodes[i]) === winCodes[i]) {
            gameOver = true;
            updateScoreboard();
            return true;
        }
    }
    return false;
}

function updateScoreboard() {
    if (whoseTurn === 0) {
        player1Wins++;
        document.getElementById("player1-wins").innerText = player1Wins;
    } else {
        player2Wins++;
        document.getElementById("player2-wins").innerText = player2Wins;
    }
}

function playSound(result) {
    if (result === 'win') {
        happySound.play();
    } else if (result === 'tie') {
        sadSound.play();
    }
}

function restartGame() {
    startGame();
    ties = 0;
    document.getElementById("ties").innerText = ties;
}
