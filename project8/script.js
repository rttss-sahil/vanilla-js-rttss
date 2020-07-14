const search = document.querySelector('.search'),
    submit = document.querySelector('.submit'),
    random = document.querySelector('.random'),
    container = document.querySelector('.container');

// Search Api
function searchApi(e) {
    container.innerHTML = '';
    e.preventDefault();
    let term = search.value;
    const res = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.meals.forEach(item => {
            const li = document.createElement('div');
            li.classList = 'item';
            li.innerHTML = `<div class='it'></div>`;
            container.appendChild(li);
            li.style.backgroundImage = `url('${item.strMealThumb}')`;
            document.querySelector('.it::after').style.content = `${item.strMeal}`
            console.log(item);
        });
    })
    
}

search.addEventListener('keyup', searchApi);
submit.addEventListener('click', searchApi);