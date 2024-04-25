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


// logowanie //
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

// ukrywanie okna przepisu //
recipesHide?.addEventListener('click', function(event) {
  recipesOverlay.classList.add('ukryteMiddle');
  addRecipesOverlay.classList.toggle('ukryteMiddle');
});

// ukrywanie + pokazanie dodawania planu //
schedulesAdd?.addEventListener('click', function(event) {
  scheduleList?.classList.add('new-plan-display-none');
  newSchedule?.classList.remove('new-plan-display-none');
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
infoText?.addEventListener('click', function(event) {
  addRecipes();
});


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
        //do podmiany na działający przycisk jak niżej delete
        actionsCell.innerHTML = '<button class="button_clear"><img class="icon__add--table" src="../icons/pen-to-square-solid.svg" alt="Edit">';

        // przycisk delete + logika
        const deleteButton = document.createElement('buttonDelete');
        deleteButton.classList.add('button__delete');
        deleteButton.innerHTML = '<img class="icon__add--table" src="../icons/trash-can-solid.svg" alt="Delete">';
        deleteButton.addEventListener('click', function() {
          // Usuwam plan z localStorage
          dataFromLocalStorage.splice(index, 1);
          localStorage.setItem('schedules', JSON.stringify(dataFromLocalStorage));
          // Usuwam wiersz z tabeli
          schedulesList.removeChild(newRow);
        });



        //tworze wiersz z danymi z localStorage
        schedulesList.appendChild(newRow);
        // dodaje przyciski akcji (edit/delete) po dodadnie przycisku edit do usunięcia
        newRow.appendChild(actionsCell);
        // dodaje przycisk delete
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


//
// // ściąganie informacji z select option
// // Pobierz wszystkie elementy select w tabeli
//
// // let selectedOptionsValues = [];
// //
// // selects.forEach(select => {
// //   const selectedOption = select.querySelector('option:checked');
// //   if (selectedOption) {
// //     selectedOptionsValues.push(selectedOption.value);
// //   }
// // });
// //
// // localStorage.setItem('selectedOptionsValues', JSON.stringify(selectedOptionsValues));
//
// // zamyka towrzenie planu i pokazuje liste
// // SavePlan.addEventListener("click", function(e) {
// //   scheduleList.classList.remove('new-plan-display-none');
// //   newSchedule.classList.add('new-plan-display-none');
// //
// // });



