// 🔄 Réinitialise le jeu
function resetGame() {
    boardState = Array(9).fill('')
    currentPlayer = 'X'
    isGameOver = false
    statusText.textContent = `C'est au tour de ${currentPlayer}`
    board.innerHTML = ''
    cells = []
  
    for (let i = 0; i < 9; i++) {
      const div = document.createElement('div')
      div.classList.add('cell')
      div.dataset.index = i
      div.addEventListener('click', () => handleClick(div))
      board.appendChild(div)
      cells.push(div)
    }
  
    startTimer()
  }
  