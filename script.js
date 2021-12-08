let field_content = [];
let currentPlayer = 'cross';
let winner;
let endGame = false;

function fillShape(id) {
    if (!field_content[id] && !endGame) {
        field_content[id] = currentPlayer;
        changePlayer();
        draw();
        checkWin();
    }
}
function changePlayer() {

    if (currentPlayer == 'cross') {
        currentPlayer = 'circle';
        document.getElementById('player-1').classList.remove('player-inactive');
        document.getElementById('player-2').classList.add('player-inactive');
    } else {
        currentPlayer = 'cross';
        document.getElementById('player-1').classList.add('player-inactive');
        document.getElementById('player-2').classList.remove('player-inactive');
    }
}
function draw() {
    for (let i = 0; i < field_content.length; i++) {
        if (field_content[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (field_content[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}
function checkWin() {
    // First Line
    if (field_content[0] == field_content[1] && field_content[1] == field_content[2] && field_content[0]) {
        winner = field_content[0];
        document.getElementById('line-1').style.transform = 'scaleX(1.0)';
    }

    if (field_content[3] == field_content[4] && field_content[4] == field_content[5] && field_content[3]) {
        winner = field_content[3];
        document.getElementById('line-2').style.transform = 'scaleX(1.0)';
    }

    if (field_content[6] == field_content[7] && field_content[7] == field_content[8] && field_content[6]) {
        winner = field_content[6];
        document.getElementById('line-3').style.transform = 'scaleX(1.0)';
    }

    if (field_content[0] == field_content[3] && field_content[3] == field_content[6] && field_content[0]) {
        winner = field_content[0];
        document.getElementById('line-4').style.transform = 'scaleX(1.0) rotate(90deg)';
    }

    if (field_content[1] == field_content[4] && field_content[4] == field_content[7] && field_content[1]) {
        winner = field_content[1];
        document.getElementById('line-5').style.transform = 'scaleX(1.0) rotate(90deg)';
    }

    if (field_content[2] == field_content[5] && field_content[5] == field_content[8] && field_content[2]) {
        winner = field_content[2];
        document.getElementById('line-6').style.transform = 'scaleX(1.0) rotate(90deg)';
    }

    if (field_content[0] == field_content[4] && field_content[4] == field_content[8] && field_content[0]) {
        winner = field_content[0];
        document.getElementById('line-7').style.transform = 'scaleX(1.0) rotate(45deg)';
    }

    if (field_content[2] == field_content[4] && field_content[4] == field_content[6] && field_content[2]) {
        winner = field_content[2];
        document.getElementById('line-8').style.transform = 'scaleX(1.0) rotate(315deg)';
    }

    if (winner) {
        console.log('GEWONNEN', winner);
        endGame = true;
        setTimeout(function () {
            document.getElementById('endgame').style.transform = 'scaleX(0.8) scaleY(0.8)';
            document.getElementById('restart').classList.remove('d-none');
        }, 1000)

    }
}
function restart(){
    endGame = false;
    field_content = [];
    currentPlayer = 'cross';
    winner = undefined;
    document.getElementById('endgame').style.transform = 'scaleX(0.0) scaleY(0.0)';
    document.getElementById('restart').classList.add('d-none');
    for (let i=1; i < 8; i++){
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let i=0; i < 9; i++){
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }
}
