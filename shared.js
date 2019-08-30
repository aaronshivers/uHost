const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const selectPlanButtons = document.querySelectorAll('.plan button')
const closeModalButton = document.querySelector('.modal__action--negative')
const toggleNavButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.classList.add('open')
    backdrop.classList.add('open')
  })
}

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open')
  modal && modal.classList.remove('open')
  backdrop.classList.remove('open')
})

closeModalButton && closeModalButton.addEventListener('click', () => {
  modal.classList.remove('open')
  backdrop.classList.remove('open')
})

toggleNavButton.addEventListener('click', () => {
  mobileNav.classList.add('open')
  backdrop.classList.add('open')
})
