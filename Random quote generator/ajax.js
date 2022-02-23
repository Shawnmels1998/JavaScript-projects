const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");


function getQuotes(e) {
    e.preventDefault();

    if (number.value.length === 0) {
        return alert("Please enter a number");

    } else {
        const https = new XMLHttpRequest();

    https.open("GET", "https://type.fit/api/quotes", true);

    https.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const response = randomQuote(JSON.parse(this.responseText));

            let output = "";
            // response.forEach(function(quote) {
            //     output += `
            //     <li>Quote: ${quote.text}</li>
            //     <li>Author: ${quote.author}</li>
            //     <hr>
            //     `;
            // });

            for (let i = 0; i < response.length; i++) {
                 if (i == number.value) {break;}

                output += `
                 <li>Quote: ${response[i].text}</li>
                 <li>Author: ${response[i].author}</li>
                 <hr>
                `;

            }
         document.querySelector(".quotes").innerHTML = output;

        }

    }

    https.send();

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