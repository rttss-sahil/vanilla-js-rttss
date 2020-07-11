// DOM Manipulation
const addUser = document.querySelector("#add-user");
const double = document.querySelector("#double");
const showM = document.querySelector("#show-millionaires");
const sort = document.querySelector("#sort");
const calculate = document.querySelector("#calculate-wealth");

let list = [];
// CallBack
fetchData();
fetchData();
fetchData();

// Fetch And Update
async function fetchData() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  const name = user.name.first + " " + user.name.last;
  const money = Math.floor(Math.random() * 1000000);
  // Add commas to digits
  updateDOM(name, money.toLocaleString());

}
// Update DOM
let updateDOM = (obj1, obj2) => {
    list.push(obj1, obj2);
    const li = document.createElement('li');
    li.innerHTML = `<h3><strong>${list[0]}</strong> $${list[1]}</h3>`;
    document.querySelector('.list').appendChild(li);
    list = [];
}
// Double Money
let doubleMoney = () => {
    return true;
}
let showMln = () => {
    return true;
}
let sortData = () => {
    return true;
}
let calculateW = () => {
    return true;
}
// Event LISTENER 
addUser.addEventListener('click', fetchData);
double.addEventListener('click', doubleMoney);
showM.addEventListener('click', showMln);
sort.addEventListener('click', sortData);
calculate.addEventListener('click', calculateW);