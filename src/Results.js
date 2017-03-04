import lockr from 'lockr'

export default class Results {
  constructor () {
    this.previousDraws = []
  }
  init () {
    if (lockr.get('results') != null) {
      this.previousDraws = lockr.get('results')
    } else {
      lockr.set('results', [])
    }
  }
  saveResults () {
    let drawResults = lockr.get('drawResults')
    this.previousDraws.push(drawResults)
    lockr.rm('drawResults')
    lockr.set('results', this.previousDraws)
  }
}
