const priceTag = document.querySelector('h1')
const spanTag = document.querySelector('span')
let currency = 'usd'

const checkPrice = () => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${currency}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      priceTag.innerText = data.ethereum[currency].toFixed(2)
    })
}

checkPrice()

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    currency = link.getAttribute('data-currency')
    checkPrice()
    navLinks.forEach((link) => link.classList.remove('selected'))

    link.classList.add('selected')

    spanTag.innerText = currency
  })
})

setInterval(() => {
  checkPrice()
}, 60000)
