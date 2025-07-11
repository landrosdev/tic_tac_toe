// ⏱️ Lance un compte à rebours pour chaque tour
function startTimer() {
    clearInterval(timer)
    timeLeft = 10
    timerEl.textContent = timeLeft
  
    timer = setInterval(() => {
      timeLeft--
      timerEl.textContent = timeLeft
      if (timeLeft === 0) switchTurn()
    }, 1000)
  }
  