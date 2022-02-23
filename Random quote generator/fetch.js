const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");


function getQuotes(e) {
    e.preventDefault();

    if (number.value.length === 0) {
        return alert("Please enter a number");

    } else {
        fetch("https://type.fit/api/quotes")
          .then(function(response) {
             return response.json();
          })

          .then(function(data) {
              data = randomQuote(data);

            let output = "";


            for (let i = 0; i < data.length; i++) {
                if (i == number.value) {break;}

               output += `
                <li><b>Quote</b>: ${data[i].text}</li>
                <li><b>Author</b>: ${data[i].author}</li>
                <hr>
               `;
           }

           document.querySelector(".quotes").innerHTML = output;
          })
    }
}


// function to get random quotes

function randomQuote(quotes) {
    let CI = quotes.length, tempValue, randomIndex;

    // while elements exist in an array
    
    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);

        //decrease CI by one
        CI--;
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}