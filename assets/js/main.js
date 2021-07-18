// Menu Toggle

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Form Storage
const form = document.getElementById('form')

form.addEventListener('submit', event => {
  event.preventDefault()
  let email = document.getElementById('email').value

  let convertData = JSON.stringify(email)

  localStorage.setItem('lead', convertData)
  alert('Parabéns, seu email foi cadastrado com sucesso!')
})

// Slider
function slide1() {
  document.getElementById('id_banner').src = './assets/images/banner01.png'
  setTimeout('slide2()', 5000)
}

function slide2() {
  document.getElementById('id_banner').src = './assets/images/banner02.png'
  setTimeout('slide3()', 5000)
}

function slide3() {
  document.getElementById('id_banner').src = './assets/images/banner03.png'
  setTimeout('slide1()', 5000)
}
