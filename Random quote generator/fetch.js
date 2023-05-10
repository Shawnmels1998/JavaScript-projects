const btn = document.querySelector(".get-quotes");
const numberInput = document.getElementById("number");
const quotesContainer = document.querySelector(".quotes");

btn.addEventListener("click", handleGetQuotesClick);

function handleGetQuotesClick(event) {
  event.preventDefault();

  const numberOfQuotes = Number(numberInput.value);

  if (!numberOfQuotes) {
    alert("Please enter a valid number");
    return;
  }

  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      const randomQuotes = getRandomQuotes(data, numberOfQuotes);
      const quotesHtml = randomQuotes
        .map(quote => `
          <li>
            <b>Quote</b>: ${quote.text}<br>
            <b>Author</b>: ${quote.author}
          </li>
          <hr>
        `)
        .join('');

      quotesContainer.innerHTML = quotesHtml;
    })
    .catch(error => {
      console.error("Error getting quotes", error);
      alert("Error getting quotes");
    });
}

function getRandomQuotes(quotes, numberOfQuotes) {
  const shuffledQuotes = quotes.sort(() => 0.5 - Math.random());
  return shuffledQuotes.slice(0, numberOfQuotes);
}
