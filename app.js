const toggleBtn = document.getElementById('toggle');

const monthlyPrices = [19.99, 24.99, 39.99];
const annualPrices = [199.99, 249.99, 399.99];

const changePrices = () => {
    toggleBtn.checked ? updateUI(monthlyPrices) : updateUI(annualPrices);
}

const updateUI = (prices) => {
    const cardEls = document.querySelectorAll('.card');
    let i = 0;
    for (const element of cardEls) {
        element.querySelector('.price').textContent = prices[i];
        i++;
    }
}

const toggleBtnHandler = () => {
    changePrices();
}

toggleBtn.addEventListener('click', toggleBtnHandler);