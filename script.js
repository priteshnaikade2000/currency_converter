const convertBtn = document.getElementById("convert-btn");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const resultText = document.getElementById("result-text");

// Define exchange rates
const exchangeRates = {
  USD: 1,
  EUR: 0.83,
  GBP: 0.71,
  INR: 74.83,
  CAD: 1.27,
  AUD: 1.32,
  JPY: 109.41,
  CHF: 0.91,
};

// Function to convert currencies
const convertCurrency = () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultText.textContent = "Please enter a valid amount.";
    return;
  }

  const conversionRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
  const convertedAmount = (amount * conversionRate).toFixed(2);

  resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
};

// Add event listener to convert button
convertBtn.addEventListener("click", convertCurrency);

// Add event listener to currency selects
fromCurrencySelect.addEventListener("change", () => {
  if (fromCurrencySelect.value !== toCurrencySelect.value) {
    convertCurrency();
  }
});

toCurrencySelect.addEventListener("change", () => {
  if (fromCurrencySelect.value !== toCurrencySelect.value) {
    convertCurrency();
  }
});

// Set default exchange rate
convertCurrency();