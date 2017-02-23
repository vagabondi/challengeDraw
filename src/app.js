import Challengers from './Challengers'
import Form from './Form'

document.addEventListener('DOMContentLoaded', function () {
  let challenge = new Challengers()
  let form = new Form()
  challenge.displayChallengers()

  form.addBtn.addEventListener('click', () => {
    challenge.addNewChallenger(form.input.value)
    form.input.value = ''
  })
})
