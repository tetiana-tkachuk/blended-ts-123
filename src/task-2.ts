type Currency = "USD" | "EUR" | "UAH";

interface CurrencyParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: CurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

console.log(convertCurrency({ amount: 300, currency: "EUR" }));
