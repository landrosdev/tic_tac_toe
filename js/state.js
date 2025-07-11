// 🧠 Variables d'état du jeu
let cells = []
let boardState = Array(9).fill('')
let currentPlayer = 'X'
let isGameOver = false
let vsBot = false
let timer
let timeLeft = 10
let score = { X: 0, O: 0 }
