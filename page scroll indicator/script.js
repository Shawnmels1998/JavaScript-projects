window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// page scroll indicator

window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (currentState / pageHeight) * 100;

    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%"; 
}

