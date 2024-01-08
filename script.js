const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".amount-one");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const calculate = () => {
	const API_KEY = "fca_live_iNqy0n6SE4j28k1ABfSrsXoj8oPy3YySkMa54qIF";
	const URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${currencyTwo.value}&base_currency=${currencyOne.value}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;

			const rate = data.data[currency2];
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);

calculate();
