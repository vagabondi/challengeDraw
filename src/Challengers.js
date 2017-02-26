import lockr from 'lockr'

/**
 * Class responsible for displaying, adding and removing challengers
 * @module Challengers
 */
export default class Challengers {
  /**
   * Creating challengers
   */
  constructor () {
    this.challengers = []
    this.challengersList = document.querySelector('#challengers_list ul')
  }

  /**
   * Setting initial list of challengers
   */
  setChallengers () {
    let allLamas = ['Michał K', 'Bartek', 'Kamil', 'Błażej', 'Filip']
    if (lockr.get('challengers') !== null) {
      let challengers = lockr.get('challengers')
      this.challengers = challengers
    }
    if (this.challengers !== allLamas) {
      lockr.set('challengers', allLamas)
      this.challengers = allLamas
    }
  }

  /**
   * Displaying challengers on list
   */
  displayChallengers () {
    let challengers = this.challengers
    for (let i = 0, length = challengers.length; i < length; i++) {
      this.createListItem(challengers[i])
    }
  }

  /**
   * Adding new single challenger
   * @param {String} challenger
   */
  addNewChallenger (challenger) {
    this.challengers.push(challenger)
    lockr.set('challengers', this.challengers)
    this.createListItem(challenger)
  }

  /**
   * Creating new list item
   * @param challenger
     */
  createListItem (challenger) {
    let listItem = document.createElement('li')
    listItem.innerHTML = challenger
    this.challengersList.appendChild(listItem)
  }

  /**
   * Function to clear list of challengers
   */
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
