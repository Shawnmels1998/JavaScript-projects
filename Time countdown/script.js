const PROMO_DURATION_IN_MINUTES = 15;
const PROMO_DURATION_IN_SECONDS = PROMO_DURATION_IN_MINUTES * 60;
const countdownElement = document.getElementById("countdown");

function startCountdown() {
    let remainingTimeInSeconds = PROMO_DURATION_IN_SECONDS;

    const countdownInterval = setInterval(() => {
        remainingTimeInSeconds--;

        if (remainingTimeInSeconds <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Promotion has ended";
        } else {
            const remainingTimeInMinutes = Math.floor(remainingTimeInSeconds / 60);
            const remainingTimeInSecondsFormatted = format(remainingTimeInSeconds % 60);

            countdownElement.textContent = `TIME: ${remainingTimeInMinutes}min : ${remainingTimeInSecondsFormatted}s`;
        }
    }, 1000);
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

startCountdown();






































    
