const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
let rate;
function selectCurrency() {
  fetch('https://api.exchangerate-api.com/v5/latest')
    .then(res => res.json())
    .then(data => {
      rate =
        data.rates[currencyEl_two.value] / data.rates[currencyEl_one.value];
      calculate();
    });
}
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
  amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
}
currencyEl_one.addEventListener('change', selectCurrency);
currencyEl_two.addEventListener('change', selectCurrency);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  selectCurrency();
});
selectCurrency();
