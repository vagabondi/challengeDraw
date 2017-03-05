import Challengers from './Challengers'
import Form from './Form'
import Draw from './Draw'
import Results from './Results'

document.addEventListener('DOMContentLoaded', function () {
  const allLamas = ['Michał K', 'Bartek', 'Kamil', 'Błażej', 'Filip']
  let challengers = new Challengers()
  let form = new Form()
  let draw = new Draw()
  let results = new Results()
  challengers.init(allLamas)
  challengers.updateList()
  results.init()

  form.addBtn.addEventListener('click', () => {
    form.clearErrors()
    form.validateInput(form.input.value, challengers.challengers)
    if (form.errorsList.length === 0) {
      challengers.add(form.input.value)
      form.input.value = ''
    } else {
      form.displayErrors()
    }
  })
  form.input.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      form.addBtn.click()
    }
  })
  form.clearBtn.addEventListener('click', () => {
    challengers.clearStorage()
    challengers.updateList()
  })
  form.addLamasBtn.addEventListener('click', () => {
    challengers.updateList()
    challengers.addLamas(allLamas)
    challengers.displayNotices()
  })
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.className === 'delete is-small remove-challenger-btn') {
      let toRemove = document.getElementById(e.target.dataset.remove)
      challengers.delete(toRemove)
    }
  })
  form.drawChallengeGiverBtn.addEventListener('click', () => {
    draw.drawChallengeGiver(challengers.challengers)
    form.drawChallengeGiverBtn.disabled = 'true'
  })
  form.drawTechGiverBtn.addEventListener('click', () => {
    draw.drawTechnologyGiver(challengers.challengers)
    form.drawTechGiverBtn.disabled = 'true'
  })
  form.challengeSubmit.addEventListener('click', () => {
    draw.setChallenge(form.challengeText.value)
    form.challengeText.disabled = 'true'
    form.challengeSubmit.disabled = 'true'
  })
  form.technologySubmit.addEventListener('click', () => {
    draw.setTechnology(form.technologyText.value)
    form.technologyText.disabled = 'true'
    form.technologySubmit.disabled = 'true'
  })
  form.saveBtn.addEventListener('click', () => {
    results.saveResults()
    form.saveBtn.disabled = 'true'
  })
})
