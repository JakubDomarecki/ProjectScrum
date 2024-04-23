const dodajPrzepis = document.querySelector('#left')
const dodajPlan = document.querySelector('#right')
const pokazPrzepis = document.querySelector('#przepis')
const pokazPlan = document.querySelector('#plan')
dodajPrzepis.addEventListener('click',function (event) {

pokazPrzepis.classList.toggle('ukrytePrzepis')
} )






dodajPlan.addEventListener('click', function (event) {
pokazPlan.classList.toggle('ukrytePlan')
})

