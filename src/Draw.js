// import lockr from 'lockr'

export default class Draw {
  constructor () {
    this.challengeGiver = ''
    this.technologyGiver = ''
    this.challenge = ''
    this.technology = ''
  }
  drawChallengeGiver (challengers) {
    let id = Math.floor(Math.random() * challengers.length)
    this.challengeGiver = challengers[id]
  }
}
