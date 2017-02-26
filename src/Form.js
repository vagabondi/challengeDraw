// import Challengers from './Challenge'

export default class Form {
  constructor () {
    this.input = document.getElementById('input')
    this.addBtn = document.getElementById('add-btn-js')
    this.drawTechGiverBtn = document.getElementById('draw-tech-btn-js')
    this.drawChallengeGiverBtn = document.getElementById('draw-challenge-btn-js')
    this.resetBtn = document.getElementById('reset-btn-js')
    this.clearBtn = document.getElementById('clear-btn-js')
    this.addLamasBtn = document.getElementById('add-lamas-btn-js')
    this.errors = document.getElementById('errors')
    this.errorsList = []
  }
  validateInput () {
    if (this.input.value !== '') {
      return true
    }
    this.errorsList.push('Wypełnij pole')
    return false
  }
  displayErrors () {
    this.errorsList.forEach((message) => {
      let error = document.createElement('p')
      error.innerText = message
      this.errors.appendChild(error)
    })
  }
  clearErrors () {
    while (this.errors.firstChild) {
      this.errors.removeChild(this.errors.firstChild)
    }
  }
}
