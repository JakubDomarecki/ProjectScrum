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

// | "pulpit" >
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
});
