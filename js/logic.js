// 🔄 Alterne les joueurs
function switchTurn() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    statusText.textContent = `C'est au tour de ${currentPlayer}`
    startTimer()
  
    // 🤖 Si bot activé et c'est au tour du bot
    if (vsBot && currentPlayer === 'O') {
      setTimeout(botPlay, 500)
    }
  }
  
  // ✅ Vérifie s'il y a un gagnant ou match nul
  function checkWinner() {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
  
    for (let combo of combos) {
      const [a, b, c] = combo
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return boardState[a]
      }
    }
  
    return boardState.includes('') ? null : 'Draw'
  }
  