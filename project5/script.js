currencyOne = document.querySelector('.currency-one');
currencyTwo = document.querySelector('.currency-two');
inputOne = document.querySelector('.value-one');
inputTwo = document.querySelector('.value-two');
swap = document.querySelector('.swap');
rate = document.querySelector('.rate');

// Calculate and update 
var calculate = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`)
    .then(res => res.json())
    .then(data => {
        inputTwo.value = (data.rates[currencyTwo.value].toFixed(2) * inputOne.value);
        rate.textContent = `1 ${currencyOne.value} = ${data.rates[currencyTwo.value]} ${currencyTwo.value} `;
    })
};

// Event Listeners
currencyOne.addEventListener('click', calculate);
currencyTwo.addEventListener('click', calculate);
inputOne.addEventListener('change', calculate);
inputTwo.addEventListener('change', calculate);
swap.addEventListener('click', () => {
    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});
calculate();
setTimeout(calculate ,500);
