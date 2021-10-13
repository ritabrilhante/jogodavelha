// const player1 = "X";
// const player2 = "0";

// var turn = player1;
// var gameOver = false;


// playerTurn ();
clickField ();

// function playerTurn () {
//     if (gameOver) {return;}
//     if (turn == player1) {
//         var player = document.getElementById ("wich-player")
//         player.setAttribute ("src", "imagens/xis.svg")
//     } else {
//         var player = document.getElementById ("wich-player")
//         player.setAttribute ("src", "imagens/ball.svg")
//     }
// }

function clickField () {
    var fields = document.getElementsByClassName("field");

    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("click", function(){

            if (gameOver) {return;}

            if (this.getElementsByTagName("img").length == 0){

                if (turn == player1){
                    this.innerHTML = "<img src='imagens/xis.svg'>";
                    // this.setAttribute ("result", player1);
                    turn = player2;
                } else {
                    if (turn == player2){
                        this.innerHTML = "<img src='imagens/ball.svg'>";
                        // this.setAttribute ("result", player2);
                        turn = player1;

                    }
                }

                playerTurn ();
                verifyResult ();
            }
        });
    }
}


function verifyResult (){

    var a1 = document.getElementById("a1").getAttribute("result");
    var a2 = document.getElementById("a2").getAttribute("result");
    var a3 = document.getElementById("a3").getAttribute("result");

    var b1 = document.getElementById("b1").getAttribute("result");
    var b2 = document.getElementById("b2").getAttribute("result");
    var b3 = document.getElementById("b3").getAttribute("result");

    var c1 = document.getElementById("c1").getAttribute("result");
    var c2 = document.getElementById("c2").getAttribute("result");
    var c3 = document.getElementById("c3").getAttribute("result");

    var winner = "";

    if ((a1 == b1 && a1 ==c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 !="") || (a1 == b2 && a1 == c3 && a1 !="")) {

        winner=a1;
    }else if ((b2 == b1 && b2 == b3 && b2 !="") || (b2 == a2 && b2 ==c2 && b2 !="") || (b2 == a3 && b2 == c1 && b2 !="")){
        winner = b2;
    }else if ((c3 == c2 && c3 == c1 !="" ) || (c3 == a3 && c3 ==b3 !="")) {
        winner = c3;
    }

    if (winner != "") {
        gameOver = true;
        alert("O ganhador foi o: '" + winner + "'");
    }
}




