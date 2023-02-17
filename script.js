console.log('Script Vinculado')
var state = {
    board: [],
    currentGame: [],
    savedGames: []
}

function start () {
createBoard()
console.log(state.board)
renderBoard()

}
function createBoard() {
    state.board = [];
    for (var i = 1; i <= 60; i++){
        state.board.push(i)
    }
}
function render (){
    renderBoard()
    renderButtons()

}
function newGame(){
    resetGame()
}
function handleNumberClick(event) {
    var value = event.currentTarget.textContent
    console.log (value)
   
    if (isNumberInGame(value)){
        removeNumberFromGame(value)
    }else{
        addNumberToGame(value)
    }
  console.log(state.currentGame)
}
function renderBoard(){
    var divBoard = document.querySelector ('#megasena-numbers')
    divBoard.innerHTML = '';
    var ulNumbers = document.createElement('ul')
    for (var i=0; i < state.board.length; i++){
       
        var currentNumber = state.board[i] 
        var liNumber = document.createElement('li')        
        liNumber.textContent = currentNumber
        liNumber.addEventListener ('click', handleNumberClick)
        ulNumbers.appendChild(liNumber)   

    }
    divBoard.appendChild(ulNumbers)

}
function renderButtons (){
    var divButtons = document.querySelector('#megasena-buttons')
    divButtons.innerHTML = ''
    var buttonNewGame = createNewGameButton()
    divButtons.appendChild(buttonNewGame)

}
function createNewGameButton (){
    var button = document.createElement('button')
    button.textContent = 'Novo Jogo'
    button.addEventListener ('click', newGame)
    return button
}
function renderSavedGames (){

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
function saveGame (){
    if(!isGameComplete()){
        console.error ('O jogo não está completo')
        return
    }
    state.savedGames.push(state.currentGame)
}

function isNumberInGame (numberToCheck){
   // if (state.currentGame.includes(numberToCheck)){
   //     return true}
  //  return false
  return state.currentGame.includes(numberToCheck)
}
function isGameComplete (){
  return state.currentGame.length === 6
}

function resetGame (){
    state.currentGame = []
}

start()
render()


