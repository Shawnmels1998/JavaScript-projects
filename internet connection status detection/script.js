const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const main = document.getElementById("main");

function setColor() {
  main.classList.add("online");
}

async function checkConnection() {
  try {
    const response = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
    image.src = "./images/online.jpg";
    setColor();
    return response.status >= 200 && response.status < 300;
  } catch (error) {
    console.error(error);
    statusDisplay.textContent = "OH NO😲😲!!! Looks like your Internet Connection is Down.";
    image.src = "./images/offline.png";
    main.classList.remove("online");
    return false;
  }
}

// Monitor the connection
setInterval(async () => {
  const result = await checkConnection();
  if (result) {
    statusDisplay.textContent = "Yay 🎊🎊🎊 you are now ONLINE";
    setColor(); 
  } 
}, 5000);

// Check connection when page loads
window.addEventListener("load", async () => {
  const result = await checkConnection();
  statusDisplay.textContent = result ? "Online" : "Offline";
});
