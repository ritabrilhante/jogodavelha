// Declarar os dois jogadores;
// Declarar quem começa;
// Fazer a função de trocar o jogador;
// Mostrar no verificador de quem é a vez;
// Marcar o field com a imagem correspondente;
// Verificar linha horizontal, vertical e diagonal;
// Se houver ganhador, mostrar a imagem do respectivo;
// Se for empate, as duas imagens;
// Armazenar vencedor em memória, mostrar no placar (até a página ser atualizada);


// Jogadores
const player1 = "xis";
const player2 = "ball";

//Default Start
var turnOf = player1; //sempre vai começar;
var gameOver = false;

//Modal
var btnRefresh = document.getElementById("restart");
var winner = '';

const winStates = [

    //Posições

    [0, 1, 2], //horizontal
    [3, 4, 5], //horizontal
    [6, 7, 8], //horizontal
    [0, 3, 6], //vertical
    [1, 4, 7], //vertical
    [2, 5, 8], //vertical
    [0, 4, 8], //diagonal
    [2, 4, 6]  //diagonal
]

// Função para definir vez do jogador, e mostrar a respectiva imagem.
wichPlayer()

function wichPlayer() {
    const playerImage = document.getElementById("wich-player")

    if (gameOver) return

    if (turnOf == player1) {
        playerImage.setAttribute("src", "imagens/xis.svg")
    } else {
        playerImage.setAttribute("src", "imagens/ball.svg")
    }
}

//Função que mostra a imagem no campo clicado
setFields();

function setFields() {
    //Pegou todos os elementos com a classe "field" e atribuiu a um array
    const fieldsbyClass = document.getElementsByClassName("field")

    console.log(fieldsbyClass)

    //Para todo field do array fieldByClass;
    for (let field of fieldsbyClass) {

        field.addEventListener("click", function(){

            //Verifiquei se o field está vazio.
            if (field.innerHTML != "") return

            if (turnOf == player1) {
                field.innerHTML = "<img src='imagens/xis.svg'>"
                //colocar o verifyWinner
                turnOf = player2
            }else {
                field.innerHTML = "<img src='imagens/ball.svg'>"

                turnOf = player1
            } wichPlayer()
        })
    }
    // verifyWinner()
}

//verificar quem ganhou

function verifyWinner(field){

    const fieldsbyClass = document.getElementsByClassName("field")

    //[a1,a2,a3,b1,b2,b3,c1,c2,c3]

    for(let winState of winStates) {
        console.log(winState)

    }

}

    //Winner Modal


    // btnRefresh.addEventListener("click", function() {
    //     location.reload();
    // })

    whoWins ()

    function whoWins() {
        const winnerImage = document.getElementById("winner-image")

        if (winner === player1) {
            winnerImage.setAttribute("src", "imagens/xis.svg")
        } else if (winner === player2) {
            winnerImage.setAttribute("src", "imagens/ball.svg")
        } else {
            let textModal = document.getElementById("text-modal")

            textModal.innerHTML = "Empatou"

            winnerImage.setAttribute("src", "imagens/draw.svg")
        }
    }



