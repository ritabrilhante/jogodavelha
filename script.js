//Global Variables
const player1 = "xis";
const player2 = "ball";

let round = 0;
let player1Wins = 0;
let player2Wins = 0;

var turnOf = player1;
var btnRefresh = document.getElementById("refresh");
var winner = '';

const winState = [
    ['a1','a2','a3'],
    ['b1','b2','b3'],
    ['c1','c2','c3'],

    ['a1','b1','c1'],
    ['a2','b2','c2'],
    ['a3','b3','c3'],

    ['a1','b2','c3'],
    ['c1','b2','a3']
]
//Clean fields;
function setRefreshBtn() {

        const fieldByClass = [].slice.call(document.getElementsByClassName("field"))

        fieldByClass.forEach(field => field.innerHTML = "");
        document.getElementById("active").style.visibility = 'hidden';

        round = 0;
}
// Show wich player;
showPlayerTurn()

function showPlayerTurn() {
    const playerImage = document.getElementById("wich-player")

    playerImage.setAttribute("src", `imagens/${turnOf}.svg`);
}

function setFields() {
    const fieldsbyClass = document.getElementsByClassName("field")

    //For all fields from array fieldByClass;
    for (let field of fieldsbyClass) {

        field.addEventListener("click", function(){

            round++;

            //Verify if the field is empty;
            if (field.innerHTML !== "") return

            if (turnOf === player1) {
                field.innerHTML = "<img src='imagens/xis.svg'>"

                const resultWinner = verifyWinner(player1,field)

                //verify if there's not a winner, then change the turnOf value.

                if (!resultWinner) turnOf = player2;
            }else {
                field.innerHTML = "<img src='imagens/ball.svg'>"

                const resultWinner = verifyWinner(player2,field)

                //verify if there's not a winner, then change the turnOf value.
                if (!resultWinner) turnOf = player1;
            }
            if (round === 9) setWinner(null);

            showPlayerTurn()
        })
    }
}
//Verify who wins
function verifyWinner(player,field){
    const fields = document.getElementsByClassName("field"); //get all fields from html;
    const groupsToCheck = winState.filter(state => state.includes(field.id));
    //.filter cria um novo array de arrays dos caso de vitória que possuem o id do campo clicado;
    //.include verifica se o array possui um id, e retorna o array.

    //iterate the new array
    for(let group of groupsToCheck) {
        //descontroi o array que possuem os 3ids
        const [id1,id2,id3] = group;

        if (fields[id1].innerHTML === fields[id2].innerHTML && fields[id1].innerHTML === fields[id3].innerHTML) {
            setWinner(player)
            return true; //return of resultWinner
        };
    }

    return false;
}

function setWinner(player) {
    const winnerImage = document.getElementById("winner-image")

    let textModal= document.getElementById("text-modal")

    if (player === player1) {
        winnerImage.setAttribute("src", "imagens/xis.svg")

        textModal.innerHTML = "O vencedor foi"

        player1Wins++

    } else if (player === player2) {
        winnerImage.setAttribute("src", "imagens/ball.svg")

        textModal.innerHTML = "O vencedor foi"

        player2Wins++

    } else {
        textModal.innerHTML = "Empatou"

        winnerImage.setAttribute("src", "imagens/draw.svg")
    }

    document.getElementById("active").style.visibility = 'visible';

    round = 0;
    turnOf = player1;
    showPlayerTurn()
    updateScoreboard()
}

function updateScoreboard() {
    const resultXis = document.getElementById("result-xis");
    const resultBall = document.getElementById("result-ball");

    resultXis.innerHTML = player1Wins;
    resultBall.innerHTML = player2Wins;
}

function resetScoreboard() {
    player1Wins = 0;
    player2Wins = 0;
    turnOf = player1;

    setRefreshBtn();
    updateScoreboard();
    showPlayerTurn();
}

setFields();
setRefreshBtn();
updateScoreboard();

