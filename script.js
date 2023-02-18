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
  render()

}
function renderBoard(){
    var divBoard = document.querySelector ('#megasena-numbers')
    divBoard.innerHTML = '';
    var ulNumbers = document.createElement('ul')
    ulNumbers.classList.add('numbers')
    for (var i=0; i < state.board.length; i++){
       
        var currentNumber = state.board[i] 
        var liNumber = document.createElement('li')   
        liNumber.classList.add('number')     
        liNumber.textContent = currentNumber
        liNumber.addEventListener ('click', handleNumberClick)
       
        if(isNumberInGame(currentNumber)){
        liNumber.classList.add('selected-number')
    }
        ulNumbers.appendChild(liNumber)   

    }
    divBoard.appendChild(ulNumbers)

}
function renderButtons (){
    var divButtons = document.querySelector('#megasena-buttons')
    divButtons.innerHTML = ''
    var buttonNewGame = createNewGameButton()
    var buttonRandomGame = createRandomGameButton()
    var buttonSaveGame = createSaveGameButton()
    divButtons.appendChild(buttonNewGame)
    divButtons.appendChild(buttonRandomGame)
    divButtons.appendChild(buttonSaveGame)

}
function createSaveGameButton(){
            var button = document.createElement('button')
    button.textContent = 'Salvar Jogo'
    button.addEventListener ('click', saveGame)
    return button
}

function createRandomGameButton(){
        var button = document.createElement('button')
    button.textContent = 'Jogo Aleatório'
    button.addEventListener ('click', randomGame)
    return button
} 

function createNewGameButton(){
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
    newGame()
    console.log(state.savedGames)
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

function randomGame() {
    resetGame()
   
   while(!isGameComplete()){
       var randomNumber =  Math.ceil(Math.random() * 60)
       addNumberToGame(randomNumber)
     }
   console.log(state.currentGame)

}

start()
render()


