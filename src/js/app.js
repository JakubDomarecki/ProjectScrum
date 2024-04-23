const dodajPrzepis = document.querySelector('#left')
const dodajPlan = document.querySelector('#right')
const pokazPrzepis = document.querySelector('#przepis')
const pokazPlan = document.querySelector('#plan')
const pokazDashboard = document.querySelector('#recipes_button')
const pokazGuziki = document.querySelector('#middle')
const schowajWelcome = document.querySelector('#recipes_form')
dodajPrzepis.addEventListener('click',function (event) {

pokazPrzepis.classList.toggle('ukrytePrzepis')
} )

pokazDashboard.addEventListener('click', function (event) {
schowajWelcome.classList.add('ukrtyeForm')
    pokazGuziki.classList.toggle('ukryteMiddle')

})



dodajPlan.addEventListener('click', function (event) {
pokazPlan.classList.toggle('ukrytePlan')
})

