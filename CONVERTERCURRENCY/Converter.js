document.addEventListener('DOMContentLoaded', () => {
    const ratesContainer = document.querySelector('.rates');
    const currencies = ['USD', 'EUR', 'CAD', 'CNY', 'CHF', 'SGD'];
    const apiKey = '24d7b7d756msh09fd24a70ecef20p11a39fjsnaf372193855d';
    const apiUrl = 'https://currency-exchange.p.rapidapi.com/exchange';


    
    const fetchExchangeRates = async () => {
        try {
            ratesContainer.innerHTML = '';
            const requests = currencies.map(currency => 
                axios.get(apiUrl, {
                    params: { from: currency, to: 'RUB' },
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'currency-exchange.p.rapidapi.com'
                    }
                })
            );
            const responses = await Promise.all(requests);
            responses.forEach((response, index) => {
                const rate = response.data;
                const currency = currencies[index];
                const rateElement = document.createElement('div');
                rateElement.classList.add('rate');
                rateElement.innerHTML = `
                    <span>${currency}</span>
                    <span>${rate.toFixed(2)} RUB</span>
                `;
                ratesContainer.appendChild(rateElement);
            });
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    };

    fetchExchangeRates();
    setInterval(fetchExchangeRates, 15 * 60 * 1000); 
});
