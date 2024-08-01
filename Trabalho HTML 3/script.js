const exchangeRates = {
    USD: { BRL: 5.25, EUR: 0.85 },
    BRL: { USD: 0.19, EUR: 0.16 },
    EUR: { USD: 1.18, BRL: 6.15 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Por favor, insira um valor válido.';
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Resultado: ${amount.toFixed(2)} ${toCurrency}`;
        return;
    }

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * exchangeRate;
    document.getElementById('result').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}