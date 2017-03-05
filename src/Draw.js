import lockr from 'lockr'

export default class Draw {
  constructor () {
    this.drawResults = {
      challengeGiver: this.challengeGiver = '',
      technologyGiver: this.technologyGiver = '',
      challenge: this.challenge = '',
      technology: this.technology = ''
    }
  }
  drawChallengeGiver (challengers) {
    let id = Math.floor(Math.random() * challengers.length)
    this.drawResults.challengeGiver = challengers[id]
    this.updateResults()
  }
  drawTechnologyGiver (challengers) {
    let id = Math.floor(Math.random() * challengers.length)
    this.drawResults.technologyGiver = challengers[id]
    this.updateResults()
  }
  setChallenge (text) {
    this.drawResults.challenge = text
    this.updateResults()
  }
  setTechnology (text) {
    this.drawResults.technology = text
    this.updateResults()
  }
  updateResults () {
    lockr.set('drawResults', this.drawResults)
  }
  displayResults () {
    const container = document.getElementById('drawResults')
    for (let prop in this.drawResults) {
      let listItem = document.createElement('li')
      listItem.innerHTML = prop + ': ' + this.drawResults[prop]
      container.appendChild(listItem)
    }
  }
}
