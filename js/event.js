// 🔁 Redémarrage
restartBtn.addEventListener('click', resetGame)

// 🤖 Changement de mode (Bot / 2 joueurs)
vsBotBtn.addEventListener('click', () => {
  vsBot = !vsBot
  vsBotBtn.textContent = vsBot ? 'Mode 2 Joueurs 👥' : 'Jouer vs Bot 🤖'
  resetGame()
})

// 🌙 Changement de thème
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night')
  themeToggle.textContent = document.body.classList.contains('night') ? '🟣' : '🌙'
})
