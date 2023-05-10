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

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://type.fit/api/quotes", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const quotes = JSON.parse(xhr.responseText);
      const randomQuotes = getRandomQuotes(quotes, numberOfQuotes);
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
    }
  };
  xhr.send();
}

function getRandomQuotes(quotes, numberOfQuotes) {
  const shuffledQuotes = quotes.sort(() => 0.5 - Math.random());
  return shuffledQuotes.slice(0, numberOfQuotes);
}
