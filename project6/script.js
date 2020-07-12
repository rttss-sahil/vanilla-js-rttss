const addBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const millionBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const totalBtn = document.querySelector('#calculate-wealth');
const main = document.querySelector('.main');
let users = [];
// Generate user Function
generate();
generate();
generate();
async function generate () {
    const res = await fetch('https://www.randomuser.me/api');
    const data = await res.json();
    user = {
        name: data.results[0].name.first +" "+ data.results[0].name.last,
        money: Math.floor(Math.random() * 1000000 )
    }
    addToUsers(user);
}
var addToUsers = (obj) => {
    users.push(obj);
    updateDOM(users);
}
var updateDOM = (data = users) => {
    main.innerHTML = `<h3 class="heading"><strong>Person</strong> Wealth</h3>
    <ol class="list"></ol>`;
    data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<h3><strong>${item.name}</strong>$${item.money.toLocaleString('en')}</h3>`;
        document.querySelector('.main ol').appendChild(li);
    })
}
// Add User Button
addBtn.addEventListener('click', generate);
doubleBtn.addEventListener('click', () => {
    users = users.map((user) => {
        return {...user, money: user.money * 2}

    })
    updateDOM();
});
// Show only Millionaire
millionBtn.addEventListener('click', () => {
    users = users.filter(item => item.money > 1000000);
    updateDOM();
});
// Sort 
sortBtn.addEventListener('click', () => {
    users = users.sort((a, b) => b.money - a.money );

    updateDOM();
});
// Total Wealth
totalBtn.addEventListener('click', () => {
    const wealth = users.reduce((acc, num) => (acc += num.money), 0);
    const wealthElement = document.createElement('div');
    wealthElement.classList.add('heading');
    wealthElement.innerHTML = `<h3><strong>Total Wealth</strong>$${wealth.toLocaleString('en')}</h3>`;
    main.appendChild(wealthElement);
})
