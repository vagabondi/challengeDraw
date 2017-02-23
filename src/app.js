import Challengers from './Challengers'
import Form from './Form'

document.addEventListener('DOMContentLoaded', function () {
  let challenge = new Challengers()
  let form = new Form()

  form.addBtn.addEventListener('click', () => {
    if (form.validateInput()) {
      challenge.addNewChallenger(form.input.value)
      form.clearErrors()
      form.input.value = ''
    } else {
      form.displayErrors()
    }
  })

  form.clearBtn.addEventListener('click', () => {
    challenge.clearStorage()
  })

  form.addLamasBtn.addEventListener('click', () => {
    challenge.displayChallengers()
  })
})
