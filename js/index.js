const divBox = document.querySelector('.boxs-container');

const global = {
  currentPage: window.location.pathname,
};

async function getData() {
  showspinner();
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  const data = await response.json();

  const items = data.meals;
  items.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('box');

    div.innerHTML = `
    <a href="./details.html?id=${element.strMeal}">
    <img src="${element.strMealThumb}" alt="">
  </a>
    <div class="title">
      <h2>name: ${element.strMeal}</h2>
      <h2>country: ${element.strArea}</h2>
    </div>
    `;
    divBox.appendChild(div);
  });
  hideSpinner();
}

async function detailsData() {
  showspinner();
  const value = window.location.search.split('=')[1];
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
  );
  const data = await response.json();

  const items = data.meals;
  items.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('detailbox');
    div.innerHTML = `
    <div class="title">
            <h1>${item.strMeal}</h1>
          </div>
          <img
            class="img"
            src="${item.strMealThumb}"
            alt=""
          />  

    `;
    document.querySelector('.divbox').appendChild(div);

    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div2.classList.add('box');
    div2.innerHTML = ` 
    <h3>${item.strIngredient1}<h3>
    <h3>${item.strIngredient2}<h3>
    <h3>${item.strIngredient3}<h3>
    <h3>${item.strIngredient4}<h3>
    <h3>${item.strIngredient5}<h3>
    <h3>${item.strIngredient6}<h3>
    <h3>${item.strIngredient7}<h3>
    <h3>${item.strIngredient8}<h3>
    <h3>${item.strIngredient9}<h3>
    <h3>${item.strIngredient10}<h3>
    <h3>${item.strIngredient11}<h3>
    <h3>${item.strIngredient12}<h3>
    <h3>${item.strIngredient13}<h3>
    <h3>${item.strIngredient15}<h3>
    <h3>${item.strIngredient16}<h3>
    <h3>${item.strIngredient17}<h3>
    <h3>${item.strIngredient18}<h3>
    <h3>${item.strIngredient19}<h3>
    <h3>${item.strIngredient20}<h3>
    `;

    document.querySelector('.detailbox2').appendChild(div2);

    div3.innerHTML = `
    <a class="a" target="blank" href="${item.strYoutube}">Watch tutorial</a>

    `;
    div2.appendChild(div3);

    const p = document.createElement('p');
    p.innerHTML = `

    ${item.strInstructions}
    `;
    document.querySelector('.detailbox2').appendChild(p);
  });
  hideSpinner();
}

async function search() {
  const value = window.location.search.toLowerCase().split('=')[1];
  console.log(value);
  showspinner();
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
  );
  const data = await response.json();
  const items = data.meals;
  items.forEach((item) => {
    const imgdivs = document.createElement('div');
    imgdivs.classList.add('detailbox');
    imgdivs.innerHTML = `
    <div class="title">
            <h1>${item.strMeal}</h1>
          </div>
          <a class="aa" href="./details.html?id=${item.strMeal}">
    <img class="img" src="${item.strMealThumb}">
    click here for more details
  </a>  
    `;
    document.querySelector('.divbox').appendChild(imgdivs);
  });
  hideSpinner();
}

function showspinner() {
  const spine = document.querySelector('.spinner');
  spine.classList.add('show');
}
function hideSpinner() {
  const spine = document.querySelector('.spinner');
  spine.classList.remove('show');
}

function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      getData();
      detailsData();
      break;
    case '/details.html':
      detailsData();
      break;
    case '/search.html':
      search();
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);
