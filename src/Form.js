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
  validateInput (value, challengers) {
    if (value === '') {
      this.errorsList.push('Uzupełnij powyższe pole!')
    }
    for (let i = 0, length = challengers.length; i < length; i++) {
      if (challengers[i] === value) {
        this.errorsList.push('Ten ziomeczek już jest na liście')
        break
      }
    }
  }
  displayErrors () {
    this.errorsList.forEach((error) => {
      let listItem = document.createElement('p')
      listItem.className += 'help is-danger'
      listItem.innerHTML = error
      this.errors.appendChild(listItem)
    })
  }
  clearErrors () {
    this.errorsList = []
    this.errors.innerHTML = ''
  }
}
