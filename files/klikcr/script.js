const app = document.getElementById('app')
const timerShow  = app.querySelector('[data-type="timer"]')
const button = app.querySelector('[data-type="button"]')
const counter = app.querySelector('[data-type="counter"]')

let TIMEOUT = 5000

let isStart = false
let clicks = 0

button.addEventListener('click', buttonHandler)

function buttonHandler() {
    if (!isStart) {
        isStart = true
        startGame()
    } else {
        clickHandler()
    }
}

function startGame() {
    const startTime = Date.now()

    const interval = setInterval(() => {
        const delta = Date.now() - startTime
        timerShow.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        clearInterval(interval)
        clearTimeout(timeout)
        gameOver()
    }, TIMEOUT)
}

function clickHandler() {
    clicks += 1
    counter.textContent = clicks
}

function gameOver() {
    button.removeEventListener('click', buttonHandler)
    timerShow.textContent = 'Game over';
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2) 
}