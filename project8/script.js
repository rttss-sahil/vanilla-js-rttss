const search = document.querySelector(".search"),
    submit = document.querySelector(".submit"),
    random = document.querySelector(".random"),
    container = document.querySelector(".container"),
    single = document.querySelector(".single");
// Search Api
function searchApi(e) {
    single.innerHTML = "";
    container.innerHTML = "";
    container.style.display = "grid";
    e.preventDefault();
    let term = search.value;
    const res = fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        )
        .then((res) => res.json())
        .then((data) => {
            data.meals.forEach((item) => {
                const li = document.createElement("div");
                li.classList = "item";
                li.innerHTML = `<div class='it'><p>${item.strMeal}</p></div>`;
                container.appendChild(li);
                li.style.backgroundImage = `url('${item.strMealThumb}')`;
            });
        });
}

// Single Meal
function singleMeal(e) {
    container.style.display = "none";
    const mealName = e.target.firstElementChild.textContent;
    const res = fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        )
        .then((res) => res.json())
        .then((data) => {
            const meal = data.meals[0];
            generate(meal);
        });
}

function randomMeal(e) {
    single.innerHTML = "";
    container.style.display = "none";
    const res = fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => res.json())
        .then((data) => {
            const meal = data.meals[0];
            generate(meal);
        });
}

function generate(data) {
    const el = document.createElement("div");
    el.innerHTML = `<h2>${data.strMeal}</h2>
        <img src="${data.strMealThumb}">
        <p class="area"><strong>Area :</strong>${data.strArea}</p>
        <p class="instructions"><strong>Instructions :</strong>${data.strInstructions}</p>
        <div class="ingredients"></div>`;
    const ingredients = document.querySelector(".ingredients");
    let ingredient = [];
    let measure = [];
    single.appendChild(el);
    single.style.display = "flex";
}

search.addEventListener("keyup", searchApi);
submit.addEventListener("click", searchApi);
container.addEventListener("click", singleMeal);
random.addEventListener("click", randomMeal);