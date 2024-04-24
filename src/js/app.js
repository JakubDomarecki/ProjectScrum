const dodajPrzepis = document.querySelector('#left');
const dodajPlan = document.querySelector('#right');
const pokazPrzepis = document.querySelector('#przepis');
const pokazPlan = document.querySelector('#plan');
const pokazDashboard = document.querySelector('#recipes_button');
const pokazGuziki = document.querySelector('#middle');
const schowajWelcome = document.querySelector('#recipes_form');
const warning = document.querySelector('.recipes_p');
const recipesInput = document.querySelector('.recipes_input');
const headerName = document.querySelector('.header_name');
const prevBtn = document.querySelector('#prev__dni');
const nextBtn = document.querySelector('#next__dni');
const nrTyg = document.querySelector("#nr__tygodnia");
const infoText = document.querySelector(".info_text");


const recipesOverlay = document.querySelector('.app_container_hide');
const recipesHide =document.querySelector('#app_containerHide');
const addRecipesOverlay = document.querySelector('.add_recipes');


recipesHide.addEventListener('click', function (event) {
  recipesOverlay.classList.add('ukryteMiddle');
  addRecipesOverlay.classList.toggle('ukryteMiddle');
 
});

const recipesOverlay = document.querySelector('.app_container_hide');
const recipesHide =document.querySelector('#app_containerHide');
const addRecipesOverlay = document.querySelector('.add_recipes');
const schedulesAdd = document.querySelector(".icon__add");
const scheduleList = document.querySelector(".lista_planow_display");
const newSchedule = document.querySelector('.new-plan-display');

schedulesAdd.addEventListener('click', function(e) {
  scheduleList.classList.add('new-plan-display-none');
  newSchedule.classList.remove('new-plan-display-none');
});




// pasek nawigacji, jak spada niżej to przestaje działać
document.addEventListener('DOMContentLoaded', function() {
  let currentUrl = window.location.pathname.split('/').pop();
  // console.log(currentUrl);
  let links = document.querySelectorAll('.nav__sidebar__button');
  // console.log(links);
  links.forEach(function(link) {
    let href = link.getAttribute('href');
    if (href === currentUrl) {
      link.classList.add('active');
    }
  });
});

recipesHide?.addEventListener('click', function (event) {
  recipesOverlay.classList.add('ukryteMiddle');
  addRecipesOverlay.classList.toggle('ukryteMiddle');

});

function addRecipes() {
  // Pobierz aktualną liczbę przepisów z Local Storage
  let liczbaPrzepisow = localStorage.getItem('liczbaPrzepisow');

  // Jeśli liczba przepisów nie istnieje, ustaw ją na 0
  if (!liczbaPrzepisow) {
    liczbaPrzepisow = 0;
  } else {
    // Jeśli istnieje, przekonwertuj ją na liczbę
    liczbaPrzepisow = parseInt(liczbaPrzepisow);
  }

  // Dodaj nowy przepis
  liczbaPrzepisow++;

  // Zapisz aktualną liczbę przepisów do Local Storage
  localStorage.setItem('liczbaPrzepisow', 'liczbaPrzepisow');

  // Ustaw tekst informacyjny
  infoText.innerText = `Masz już ${liczbaPrzepisow} przepisów, nieźle!`;

  return liczbaPrzepisow;
}

// Dodaj obsługę zdarzenia "click" dla elementu infoText
infoText.addEventListener("click", function(event) {
  addRecipes();
});

// Wywołaj funkcję addRecipes() podczas załadowania strony
window.onload = function() {
  addRecipes();
};










const closeBtn1 = document.querySelector('.info_btn');
const closeBtn2 = document.querySelector('.alert_btn');
const closeBtn3 = document.querySelector('.check_btn');
const info = document.querySelector('#right__31');
const warr = document.querySelector('#right__32');
const check = document.querySelector('#right__33');



let counter = 0;



closeBtn1.addEventListener('click', function (event){
info.classList.add('ukryteMiddle');
});
closeBtn2.addEventListener('click', function (event){
warr.classList.add('ukryteMiddle');
});
closeBtn3.addEventListener('click', function (event){
check.classList.add('ukryteMiddle');
});


nrTyg.innerText =  `Twój plan na  ten tydzień: `
document.addEventListener('DOMContentLoaded', function() {

nrTyg.innerText =  `Twój plan na  ten tydzień: `;

prevBtn.addEventListener('click', function (event){
  if (counter <= 0) {
    alert('brak poprzednich planów');

  }  else {
    counter -= 1;
  }

  nrTyg.innerText =  `Twój plan na  ${counter} tydzień: `;
});
nextBtn.addEventListener('click', function (event){
  counter += 1;
  nrTyg.innerText =  `Twój plan na  ${counter} tydzień: `;
});

dodajPrzepis?.addEventListener('click', function(event) {
  pokazPrzepis.classList.toggle('ukrytePrzepis');
});


let savedName = localStorage.getItem('savedName');


if (savedName) {
  schowajWelcome?.classList.add('ukrtyeForm');
  pokazGuziki?.classList.remove('ukryteMiddle');
  headerName.innerText = savedName;
} else {
  warning.classList.remove('ukrtyeForm');
}


pokazDashboard?.addEventListener('click', function(event) {
  const userName = recipesInput.value;

  if (userName === '') {
    warning.classList.remove('ukrtyeForm');
  } else {

    localStorage.setItem('savedName', userName);
    savedName = userName;

    schowajWelcome.classList.add('ukrtyeForm');
    pokazGuziki.classList.remove('ukryteMiddle');
    headerName.innerText = savedName;
  }
});


dodajPlan?.addEventListener('click', function(event) {
  pokazPlan.classList.toggle('ukrytePlan');
})