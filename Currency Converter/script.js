// Map - https://www.worldometers.info/geography/flags-of-the-world/

const fromCurrency = document.querySelector(".cur-1");
const toCurrency = document.querySelector(".cur-2");
const fromAmount = document.querySelector(".cur-1-input");
const toAmount = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchButton = document.querySelector(".switch-cur");

const countries = [
  {
    name: "AED",
    flagURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
];

const apiURL = "https://v6.exchangerate-api.com/v6/";
const apiKey = "093352694b431c8342cff984";

async function fetchExchangeRate(baseCurrency, targetCurrency) {
  const response = await fetch(`${apiURL}${apiKey}/latest/${baseCurrency}`);
  const data = await response.json();
  return data.conversion_rates[targetCurrency];
}

function formatRate(baseCurrency, targetCurrency, rate) {
  return `1 ${baseCurrency} = ${rate.toFixed(2)} ${targetCurrency}`;
}

function switchCurrencies() {
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
  switchButton.classList.toggle("rotate");
  getExchangeRate();
  getFlags();
}

async function getExchangeRate() {
  const baseCurrency = fromCurrency.value;
  const targetCurrency = toCurrency.value;
  const rate = await fetchExchangeRate(baseCurrency, targetCurrency);
  baseRate.textContent = formatRate(baseCurrency, targetCurrency, rate);
  toAmount.value = (fromAmount.value * rate).toFixed(2);
}

function getFlags() {
  countries.forEach((country) => {
    if (fromCurrency.value === country.name) {
      const fromFlag = document.querySelector(".from img");
      fromFlag.setAttribute("src", country.flagURL);
    }
    if (toCurrency.value === country.name) {
      const toFlag = document.querySelector(".to img");
      toFlag.setAttribute("src", country.flagURL);
    }
  });
}

// Add Event Listeners
fromCurrency.addEventListener("change", () => {
  getExchangeRate();
  getFlags();
});
toCurrency.addEventListener("change", () => {
  getExchangeRate();
  getFlags();
});
fromAmount.addEventListener("input", getExchangeRate);
toAmount.addEventListener("input", getExchangeRate);
switchButton.addEventListener("click", switchCurrencies);

// Initial setup
getExchangeRate();
getFlags();
