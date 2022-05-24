function getSearchedText() {
    const searchedText = document.getElementById('inputField').value;

    if (searchedText === '') {
        document.getElementById('notify').innerText = 'Insert Food Name!';
        
    }
    // console.log(searchedText);
    else {
        document.getElementById('notify').innerText = '';
        document.getElementById('card-container').textContent = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeal(data.meals))
            .catch(err=>document.getElementById('notify').innerText=`${err}`);
        document.getElementById('inputField').value = '';
    }

}

function displayMeal(meals) {
    // console.log(meals)
    const container = document.getElementById('card-container');
    for (const meal of meals) {
        // console.log(meal.strInstructions)
        const div = document.createElement('div');
        div.classList.add('col');
        // div.classList.add('');
        div.innerHTML = ` <div class="foodCard">
        <img src="${meal.strMealThumb}" class="cardImg" alt="...">
        <div class="card-body text-light mt-2">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text mt-2">${meal.strInstructions.slice(0, 150)}</p>
        </div>
        <button class="cardBtn">Details</button>
        <button class="cardBtn">Order Now</button>
    </div>`
        container.appendChild(div);
    }

}