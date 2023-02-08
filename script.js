console.log('Script Vinculado')
var state = {
    board: [],
    currentGame: [],
    savedGames: []
}

function start () {
    addNumberToGame(2)
    addNumberToGame(13)
    addNumberToGame(35)
    addNumberToGame(44)
    addNumberToGame(45)
    addNumberToGame(60)
    console.log(state.currentGame)
    removeNumberFromGame(13)
    console.log(state.currentGame)
}


function addNumberToGame(numberToAdd){
    if (numberToAdd < 1 || numberToAdd > 60){
       return console.error ('Número inválido.', numberToAdd)    
    }
    if (state.currentGame.length >= 6){
        return console.error('O jogo está completo.')
    }
    if (isNumberInGame(numberToAdd)){
       return console.error('Esse número já esta no jogo', numberToAdd)
    }
    state.currentGame.push (numberToAdd)
}
function removeNumberFromGame (numberToRemove){
    var newGame = []
    for (var i=0; i < state.currentGame.length; i++){
        var currentNumber = state.currentGame[i]
        if (currentNumber === numberToRemove){
            continue;
        }
        newGame.push(currentNumber)
    }
    state.currentGame = newGame
}

function isNumberInGame (numberToCheck){
   // if (state.currentGame.includes(numberToCheck)){
   //     return true}
  //  return false
  return state.currentGame.includes(numberToCheck)
}

start()
