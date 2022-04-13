let today = new Date();

console.log(today);

function getDate(d) {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

const date = document.querySelector(".date");
date.innerHTML = getDate(today);

// show time

function showTime() {
    let today = new Date();

    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let session = "AM";

    if(hour == 0) {
        hour = 12;
    }

    if(hour > 12) {
        hour = hour - 12;
        session = "PM";
    }


    hour = hour < 10? "0" + hour : hour;
    minutes = minutes < 10? "0" + minutes : minutes;
    seconds = seconds < 10? "0" + seconds : seconds;

    let time = `${hour}:${minutes}:${seconds} ${session}`;
    document.querySelector(".time").innerHTML = time;
}

setInterval(showTime, 1000);