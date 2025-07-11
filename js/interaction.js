// 🎮 Gère le clic sur une cellule
function handleClick(cell) {
    const index = cell.dataset.index
    if (boardState[index] || isGameOver) return
  
    clickSound.play()
    boardState[index] = currentPlayer
    cell.textContent = currentPlayer
  
    let result = checkWinner()
    if (result) {
      clearInterval(timer)
      isGameOver = true
      if (result === 'Draw') {
        statusText.textContent = 'Match nul !'
      } else {
        statusText.textContent = `🎉 Joueur ${result} a gagné !`
        winSound.play()
        score[result]++
        updateScore()
      }
      return
    }
  
    switchTurn()
  }
  