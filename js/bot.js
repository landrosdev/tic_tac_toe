// 🤖 Le bot joue automatiquement au premier endroit libre
function botPlay() {
    let move = boardState.findIndex(cell => cell === '')
    if (move !== -1) handleClick(cells[move])
  }
  