const dodajPrzepis = document.querySelector('#left');
const dodajPlan = document.querySelector('#right');
const pokazPrzepis = document.querySelector('#przepis');
const pokazPlan = document.querySelector('#plan');
const pokazDashboard = document.querySelector('#recipes_button');
const pokazGuziki = document.querySelector('#middle');
const schowajWelcome = document.querySelector('#recipes_form');
const warning = document.querySelector('.recipes_p');
const recipesInput = document.querySelector('.recipes_input');
const prevBtn = document.querySelector('#prev__dni');
const nextBtn = document.querySelector('#next__dni');
const nrTyg = document.querySelector('#nr__tygodnia');
const infoText = document.querySelector('.info_text');
const recipesOverlay = document.querySelector('.app_container_hide');
const recipesHide = document.querySelector('#app_containerHide');
const addRecipesOverlay = document.querySelector('.add_recipes');
const schedulesAdd = document.querySelector('.icon__add');
const scheduleList = document.querySelector('.lista_planow_display');
const newSchedule = document.querySelector('.new-plan-display');
const closeBtn1 = document.querySelector('.info_btn');
const closeBtn2 = document.querySelector('.alert_btn');
const closeBtn3 = document.querySelector('.check_btn');
const info = document.querySelector('#right__31');
const warr = document.querySelector('#right__32');
const check = document.querySelector('#right__33');
const selects = document.querySelectorAll('.food');
const SavePlan = document.querySelector('.schedules_form_header_buttton');
const addRecipe = document.querySelector('.plus_icon');
const addIngridientsToList = document.querySelector('.plus_icon2');
const newRecipePlace =document.querySelector('.instruction_list_ul');
const newIngridientsPlace = document.querySelector('.ingridients__list_ul');
const instructionsInput = document.querySelector('.instructions__input');
const ingridientsInput = document.querySelector('.ingridients__input');
const saveRecipe = document.querySelector('.togglerRecipes');
const hideRecipeCreator = document.querySelector('.container__recipes');
const tabela = document.querySelector('#recipeList');
const recipeName = document.querySelector('.recipes_input');
const recipeDescription = document.querySelector('.recipes_input2');
const recipeInTable = document.querySelector('.newRecipe');
const headerName = document.querySelector(".header_name");

// logowanie //
// Sprawda czy wartość jest już w localStorage i ustaia ją
window.addEventListener('load', function() {
  const savedValue = localStorage.getItem('recipesInputValue');
  if (savedValue) {
    headerName.innerText = savedValue;
    schowajWelcome?.classList.add('ukrtyeForm');
    pokazGuziki?.classList.remove('ukryteMiddle');
  }
});
// Zapisz wartość recipesInput.value do localStorage przy kliknięciu na pokazDashboard
pokazDashboard?.addEventListener("click", function(e){
  if(recipesInput.value === "") {
    const errorMsg = document.getElementById('errorMsg').style.display = "block";
  } else {
    localStorage.setItem('recipesInputValue', recipesInput.value);
    headerName.innerText = recipesInput.value;
    schowajWelcome?.classList.add('ukrtyeForm');
    pokazGuziki?.classList.remove('ukryteMiddle');
  }
});


// pasek nawigacji, jak spada niżej to przestaje działać //
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

// dodawanie przepisu logika (w srodku przepisów)

document.addEventListener('DOMContentLoaded', function() {  // Czy aktualny URL strony to "app.html"?
  if (window.location.pathname.includes('recipes.html')) {

    function addInstructions(node) {
      // Create list item and buttons
      let li = document.createElement('li');
      let btn1 = document.createElement('button');
      let btn2 = document.createElement('button');

      // Retrieve ingredient text from the input field
      const text2 = instructionsInput.value;

      // Set styles for buttons
      btn1.style.width = '15px';
      btn1.style.height = '15px';
      btn2.style.width = '15px';
      btn2.style.height = '15px';
      btn1.style.marginLeft = '5px'
      btn2.style.marginLeft = '5px'


      btn1.addEventListener('click', function (event) {
        console.log(20)
      })
      btn2.addEventListener('click', function (event) {
        console.log(10)
      })


      // Add CSS class to the list item
      li.classList.add("list-ingridients-item");

      // Set the text for the list item
      li.innerText = text2;

      // Append buttons to the list item
      li.appendChild(btn1);
      li.appendChild(btn2);

      // Append the list item to the specified node
      node.appendChild(li);


    }

    function addIngridients(node) {
      // Create list item and buttons
      let li = document.createElement('li');
      let btn1 = document.createElement('button');
      let btn2 = document.createElement('button');

      // Retrieve ingredient text from the input field
      const text2 = ingridientsInput.value;

      // Set styles for buttons
      btn1.style.width = '15px';
      btn1.style.height = '15px';
      btn2.style.width = '15px';
      btn2.style.height = '15px';
      btn1.style.marginLeft = '5px'
      btn2.style.marginLeft = '5px'


    btn1.addEventListener('click', function (event) {
      console.log(20)
    })
   btn2.addEventListener('click', function (event) {
      console.log(10)
    })


      // Add CSS class to the list item
      li.classList.add("list-ingridients-item");

      // Set the text for the list item
      li.innerText = text2;

      // Append buttons to the list item
      li.appendChild(btn1);
      li.appendChild(btn2);

      // Append the list item to the specified node
      node.appendChild(li);


    }


addIngridientsToList.addEventListener('click', function (event){
  addIngridients(newIngridientsPlace)
  ingridientsInput.value = ''
});

addRecipe.addEventListener('click', function (event) {
  addInstructions(newRecipePlace)
  instructionsInput.value = ''


});


// ukrywanie okna przepisu //
recipesHide?.addEventListener('click', function(event) {
  recipesOverlay.classList.toggle('ukryteMiddle');
  addRecipesOverlay.classList.toggle('ukryteMiddle');
});
// dodawanie przepisu + ukrywanie //
saveRecipe?.addEventListener('click', function (event){
recipesOverlay?.classList.toggle('ukryteMiddle')
  addRecipesOverlay?.classList.toggle('ukryteMiddle')

  saveRecipeValueToLocalStorage(tabela)



})

    function saveRecipeValueToLocalStorage(newObject) {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem('recipes')) || [];
      dataFromLocalStorage.push(newObject);
      localStorage.setItem('recipes', JSON.stringify(dataFromLocalStorage));

    }

    function loadRecipeValuesFromLocalStorage() {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem('recipes')) || [];
      const recipeList = document.getElementById('recipeList');

      recipeList.innerHTML = '';  // Czyszczenie tabeli przed dodaniem nowych danych

      dataFromLocalStorage.forEach((recipes, index) => {
        const newRow = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = (index + 1).toString();
        newRow.appendChild(idCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = recipeName.title;
        newRow.appendChild(titleCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = recipeDescription.description;
        newRow.appendChild(descriptionCell);



        const actionsCell = document.createElement('td');
        actionsCell.innerHTML = '<button>Edit</button><button>Delete</button>';
        newRow.appendChild(actionsCell);
        recipeList.appendChild(newRow);
      });
    }
    window.addEventListener('load', loadRecipeValuesFromLocalStorage);


// Dodanie obsługi zdarzenia dla przycisku "Zapisz i zamknij"
    saveRecipe?.addEventListener('click', function(e) {
      e.preventDefault();
      const newScheduleValue = {
        title: saveRecipe.value,
        description: saveRecipe.value,
        number: saveRecipe.value,
      };
      saveRecipeValueToLocalStorage(newScheduleValue);
      console.log('Zapisano: ', newScheduleValue);
      window.location.href = 'recipes.html'; // Przekierowanie do strony schedules.html
    });


// ukrywanie + pokazanie dodawania planu //
schedulesAdd?.addEventListener('click', function(event) {
  scheduleList?.classList.add('new-plan-display-none');
  newSchedule?.classList.remove('new-plan-display-none');
});
  }
});



// dodawanie ilości przepisów -test counter coś tam
//
// console red!!!
//
// function addRecipes() {
//   // Pobierz aktualną liczbę przepisów z Local Storage
//   let liczbaPrzepisow = localStorage.getItem('liczbaPrzepisow');
//
//   // Jeśli liczba przepisów nie istnieje, ustaw ją na 0
//   if (!liczbaPrzepisow) {
//     liczbaPrzepisow = 0;
//   } else {
//     // Jeśli istnieje, przekonwertuj ją na liczbę
//     liczbaPrzepisow = parseInt(liczbaPrzepisow);
//   }

// // Dodaj nowy przepis
//
// // console red!!!
//
//   liczbaPrzepisow++;
//
//   // Zapisz aktualną liczbę przepisów do Local Storage
//   localStorage.setItem('liczbaPrzepisow', 'liczbaPrzepisow');
//
//   // Ustaw tekst informacyjny
//   infoText.innerText = `Masz już ${liczbaPrzepisow} przepisów, nieźle!`;
//
//   return liczbaPrzepisow;
// }

// Dodaj obsługę zdarzenia "click" dla elementu infoText
// infoText?.addEventListener('click', function(event) {
//   addRecipes();
// });


//
// // Wywołaj funkcję addRecipes() podczas załadowania strony
//
// // console red!!!
//
// window.onload = function() {
//   addRecipes();
// };

// zamykanie powiadomień na app.html
closeBtn1?.addEventListener('click', function(event) {
  info.classList.add('ukryteMiddle');
});
closeBtn2?.addEventListener('click', function(event) {
  warr.classList.add('ukryteMiddle');
});
closeBtn3?.addEventListener('click', function(event) {
  check.classList.add('ukryteMiddle');
});

document.addEventListener('DOMContentLoaded', function() {  // Czy aktualny URL strony to "app.html"?
  if (window.location.pathname.includes('app.html')) {
nrTyg.innerText = `Twój plan na  ten tydzień: `;
  }
});


let counter = 0;
prevBtn?.addEventListener('click', function(event) {
  if (counter <= 0) {
    alert('brak poprzednich planów');

  } else {
    counter -= 1;
  }
  nrTyg.innerText = `Twój plan na  ${counter} tydzień: `;
});
nextBtn?.addEventListener('click', function(event) {
  counter += 1;
  nrTyg.innerText = `Twój plan na  ${counter} tydzień: `;
});

//
// // // Dodawanie przepisu
// // dodajPrzepis?.addEventListener('click', function(event) {
// //   pokazPrzepis.classList.toggle('ukrytePrzepis');
// // });
// // dodajPlan?.addEventListener('click', function(event) {
// //   pokazPlan.classList.toggle('ukrytePlan');
// // });

/// Kod działa tylko dla schedules.html
document.addEventListener('DOMContentLoaded', function() {
  // Czy aktualny URL strony to "schedules.html"?
  if (window.location.pathname.includes('schedules.html')) {
    // Jeśli tak, ten kod działa.

    // Logika przepisu
    const addSchedulesTitle = document.getElementById('addSchedulesTitle');
    const addSchedulesDescription = document.getElementById('addSchedulesDescription');
    const addSchedulesNumber = document.getElementById('addSchedulesNumber');
    const addSchedulesSave = document.getElementById('addSchedulesSave');

    // Zapisywanie planu do localStorage
    function saveScheduleValueToLocalStorage(newObject) {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem('schedules')) || [];
      dataFromLocalStorage.push(newObject);
      localStorage.setItem('schedules', JSON.stringify(dataFromLocalStorage));
      alert('Plan zapisany do localStorage.');
    }

    // Ładowanie danych z localStorage i wyświetlanie ich w tabeli
    function loadScheduleValuesFromLocalStorage() {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem('schedules')) || [];
      const schedulesList = document.getElementById('schedulesList');

      schedulesList.innerHTML = '';  // Czyszczenie tabeli przed dodaniem nowych danych

      dataFromLocalStorage.forEach((schedule, index) => {
        const newRow = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = (index + 1).toString();
        newRow.appendChild(idCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = schedule.title;
        newRow.appendChild(titleCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = schedule.description;
        newRow.appendChild(descriptionCell);

        const numberCell = document.createElement('td');
        numberCell.textContent = schedule.number;
        newRow.appendChild(numberCell);

          const actionsCell = document.createElement('td');
        //przycisk edit

        const editButton = document.createElement('buttonEdit');
        editButton.classList.add('button_edit');
        editButton.innerHTML = '<img class="icon__add--table" src=../icons/pen-to-square-solid.svg alt="Edit">';
        editButton.addEventListener('click', function() {
        });
        // Przycisk usuwania
        const deleteButton = document.createElement('buttonDelete');
        deleteButton.classList.add('button__delete');
        deleteButton.innerHTML = '<img class="icon__add--table" src="../icons/trash-can-solid.svg" alt="Delete">';
        deleteButton.addEventListener('click', function() {
          // Usuwanie planu z localStorage
          dataFromLocalStorage.splice(index, 1);
          localStorage.setItem('schedules', JSON.stringify(dataFromLocalStorage));
          // Usuwanie wiersza z tabeli
          schedulesList.removeChild(newRow);
        });

        //tworze wiersz z danymi z localStorage
        schedulesList.appendChild(newRow);
        // dodaje przyciski akcji
        newRow.appendChild(actionsCell);
        // dodaje przycisk delete
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

      });
    }

    // Wywołanie funkcji ładowania danych przy ładowaniu strony
    window.addEventListener('load', loadScheduleValuesFromLocalStorage);

    // Dodanie obsługi zdarzenia dla przycisku "Zapisz i zamknij"
    addSchedulesSave?.addEventListener('click', function(e) {
      e.preventDefault();
      const newScheduleValue = {
        title: addSchedulesTitle.value,
        description: addSchedulesDescription.value,
        number: addSchedulesNumber.value,
      };
      saveScheduleValueToLocalStorage(newScheduleValue);
      console.log('Zapisano: ', newScheduleValue);
      window.location.href = 'schedules.html'; // Przekierowanie do strony schedules.html
    });


  }
});








