const player1 = "X";
const player2 = "0";

var turn = player1;
var gameOver = false; 


playerTurn ();
clickField ();

function playerTurn () {
    if (gameOver) {return;}
    if (turn == player1) {
        var player = document.getElementById ("wich-player")
        player.setAttribute ("src", "imagens/xis.svg")
    } else {
        var player = document.getElementById ("wich-player")
        player.setAttribute ("src", "imagens/ball.svg")
    }
}

function clickField () {
    var fields = document.getElementsByClassName("field");

    for (var i = 0; i < fields.length; i++) {
       
        fields[i].addEventListener("click", function(){

            if (gameOver) {return;}

            if (this.getElementsByTagName("img").length == 0){

                if (turn == player1){
                    this.innerHTML = "<img src='imagens/xis.svg'>";
                    this.setAttribute ("result", player1);
                    turn = player2;
                } else {
                    if (turn == player2){
                        this.innerHTML = "<img src='imagens/ball.svg'>";
                        this.setAttribute ("result", player2);
                        turn = player1; 

                    }
                }

                playerTurn ();
                
            }
        });
    }
}


