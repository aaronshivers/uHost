const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const selectPlanButtons = document.querySelectorAll('.plan button')
const closeModalButton = document.querySelector('.modal__action--negative')

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.style.display = 'block'
    backdrop.style.display = 'block'
  })
}

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none'
  backdrop.style.display = 'none'
})
