import Challengers from './Challengers'
import Form from './Form'
import Draw from './Draw'

document.addEventListener('DOMContentLoaded', function () {
  const allLamas = ['Michał K', 'Bartek', 'Kamil', 'Błażej', 'Filip']
  let challengers = new Challengers()
  let form = new Form()
  let draw = new Draw()
  challengers.init(allLamas)
  challengers.updateList()

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
  form.clearBtn.addEventListener('click', () => {
    challengers.clearStorage()
    challengers.updateList()
  })

  form.addLamasBtn.addEventListener('click', () => {
    challengers.updateList()
    challengers.addLamas(allLamas)
    challengers.displayNotices()
  })
  form.drawChallengeGiverBtn.addEventListener('click', () => {
    draw.drawChallengeGiver(challengers.challengers)
    console.log(draw.challengeGiver)
  })
})
