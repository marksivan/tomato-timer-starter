function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById("time-left");
    timeLeft.textContent = `${minutes}:${seconds}`;
}

updateTimerDisplay(15, 17);
