const countTo = new Date("18 Feb 2022").getTime();

const countdown = setInterval(() => {
  const currentDate = new Date().getTime();
  const totalSeconds = Math.floor((countTo - currentDate) / 1000);

  if (totalSeconds < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").textContent = "Happy Birthday to me";
    return;
  }

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("countdown").textContent = `${days} Days ${format(hours)} Hrs : ${format(minutes)} Min : ${format(seconds)} Sec`;
}, 1000);

function format(time) {
  return time < 10 ? `0${time}` : time;
}
