const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const selectPlanButtons = document.querySelectorAll('.plan button')

// console.dir(backdrop)
console.dir(selectPlanButtons)


for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.style.display = 'block'
    backdrop.style.display = 'block'
  })
}
