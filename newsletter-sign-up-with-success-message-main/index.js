const form = document.getElementById('form');
const email = document.getElementById('email');
const subscribeEmail = document.querySelector('#subscribeEmail')
const button = document.querySelector('#button');
const firstPage = document.querySelector('.main-content.first-page')
const confirmedMessageEl = document.querySelector('.main-content.suces')
const containerEl = document.querySelector('main')
const userEmailEl = document.getElementById('userEmail')
const invalidEmailEl = document.getElementById('invalid-email')
const rightEl = document.querySelector('.desktop-img')
const right = document.querySelector('.right')
const rightEls = document.querySelector('.mobile-img')
const dismissMessageEl = document.getElementById('dismiss-message')
function formSuccess() {
    confirmedMessageEl.classList.add('active')
    containerEl.classList.add('.success-page')
    firstPage.style.display = "none";
    right.style.display = 'none'


}
function validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    const inputEmail = email.value.trim();
    if(validateEmail(inputEmail)) {
        formSuccess()
        userEmailEl.innerText = inputEmail
        email.value = ''

        invalidEmailEl.classList.remove('active')
        email.classList.remove('active')


    }
    else {
        invalidEmailEl.classList.add('active')
        email.classList.add('active')
    }

})

dismissMessageEl.addEventListener('click', (e) => {
    firstPage.style.display = "block";
    right.style.display = 'block'
    containerEl.classList.remove('.success-page')
    confirmedMessageEl.classList.remove('active')
})
/*
const containerEl = document.getElementById('container')
const leftEl = document.getElementById('left')
const rightEl = document.getElementById('right')
const userEmailEl = document.getElementById('user-email')

const emailInput = document.getElementById('email')
const submitBtnEl = document.getElementById('submit-btn')

const dismissMessageEl = document.getElementById('dismiss-message')
const leftEl = document.getElementById('left')
const leftEl = document.getElementById('left')

*/




