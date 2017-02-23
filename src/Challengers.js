import lockr from 'lockr'

export default class Challengers {
  constructor () {
    this.challengers = this.setChallengers()
    this.challengersList = document.querySelector('#challengers_list ul')
  }

  setChallengers () {
    if (lockr.get('challengers') != null) {
      let challengers = lockr.get('challengers')
      return challengers
    }
    let allLamas = ['Michał K', 'Bartek', 'Kamil', 'Błażej', 'Filip']
    return allLamas
  }

  displayChallengers () {
    let challengers = this.challengers
    for (let i = 0, length = challengers.length; i < length; i++) {
      this.createListItem(challengers[i])
    }
  }

  addNewChallenger (challenger) {
    this.challengers.push(challenger)
    lockr.set('challengers', this.challengers)
    this.createListItem(challenger)
  }

  createListItem (challenger) {
    let listItem = document.createElement('li')
    listItem.innerHTML = challenger
    this.challengersList.appendChild(listItem)
  }

  clearStorage () {
    if (lockr.get('challengers') != null) {
      lockr.rm('challengers')
      this.challengers = []
      while (this.challengersList.firstChild) {
        this.challengersList.removeChild(this.challengersList.firstChild)
      }
    }
  }
}
