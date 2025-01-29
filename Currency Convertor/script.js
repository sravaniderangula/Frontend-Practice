document.addEventListener("DOMContentLoaded", function () {

    function listOfCurrencies() {
        return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
            .then(outcome => outcome.json());
    }

    function currencyValues() {
        return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
            .then(outcome => outcome.json());
    }

    function buildCurrencyOptions() {
        const fromCurrencyOption = document.getElementById("fromCurrency");
        const toCurrencyOption = document.getElementById("toCurrency");

        listOfCurrencies().then((data) => {
            const currencyList = data;
            for (let currency in currencyList) {
                const buildFromCurrency = document.createElement("option");
                buildFromCurrency.value = currency;
                buildFromCurrency.innerText = currencyList[currency];
                fromCurrencyOption.appendChild(buildFromCurrency);

                const buildToCurrency = document.createElement("option");
                buildToCurrency.value = currency;
                buildToCurrency.innerText = currencyList[currency];
                toCurrencyOption.appendChild(buildToCurrency);
            }
        });
    }

    function convertCurrency() {
        let fromCurrency = document.getElementById("fromCurrency").value;
        let toCurrency = document.getElementById("toCurrency").value;
        const money = document.getElementById("amount").valueAsNumber;
        const result = document.getElementById("result");

        if (!money || isNaN(money)) {
            result.innerText = "Please enter a valid amount.";
            return;
        }

        currencyValues().then((data) => {
            let { eur } = data;
            const selectedFromCurrencyValue = eur[fromCurrency];
            const selectedToCurrencyValue = eur[toCurrency];
            const ratio = selectedToCurrencyValue / selectedFromCurrencyValue;
            const calculated = ratio * money;

            result.innerText = `Converted Amount: ${calculated.toFixed(4)}`;
        });
    }

    document.getElementById("convert").addEventListener("click", convertCurrency);
    
    buildCurrencyOptions();
});
