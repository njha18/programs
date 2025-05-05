//currency converter

const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 82,
};

const currencyConverter = (amount, fc, tc) => {
  let amountInUSD = 0;
  let convertedAmount = 0;
  if (fc !== "USD") {
    amountInUSD = amount / rates[fc];
  } else if (fc === "USD") {
    amountInUSD = amount;
  }
  if (tc !== "USD") {
    convertedAmount = amountInUSD * rates[tc];
  } else if (tc === "USD") {
    convertedAmount = amountInUSD;
  }

  return convertedAmount;
};
console.log(currencyConverter(100, "INR", "EUR"));
