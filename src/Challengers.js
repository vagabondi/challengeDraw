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
    this.notices = document.getElementById('list_notices')
    this.noticesList = []
  }
  init (allLamas) {
    let storage = lockr.get('challengers')
    if (storage != null) {
      this.challengers = storage
    } else {
      this.challengers = allLamas
      lockr.set('challengers', this.challengers)
    }
  }
  updateList () {
    this.challengersList.innerHTML = ''
    let challengers = this.challengers
    if (challengers.length > 0) {
      for (let i = 0, length = challengers.length; i < length; i++) {
        this.createListItem(challengers[i])
      }
    } else {
      this.challengersList.innerHTML = ''
    }
    this.updateStorage()
  }
  createListItem (item) {
    let listItem = document.createElement('li')
    listItem.innerHTML = item
    listItem.id = item.replace(/\s+/g, '-').toLowerCase()
    this.challengersList.appendChild(listItem)
  }
  updateStorage () {
    lockr.set('challengers', this.challengers)
  }
  add (item) {
    this.createListItem(item)
    this.challengers.push(item)
    this.updateStorage()
  }
  clearStorage () {
    this.challengers = []
    this.updateStorage()
  }
  addLamas (lamas) {
    let fails = 0
    for (let i = 0, length = lamas.length; i < length; i++) {
      if (this.challengers.indexOf(lamas[i]) === -1) {
        this.challengers.push(lamas[i])
        this.updateList()
        this.updateStorage()
      } else {
        fails++
      }
    }
    if (fails > 0 && fails !== lamas.length) {
      this.noticesList.push('Jedna lub więcej lam nie została dodana')
    } else if (fails === lamas.length) {
      this.noticesList.push('Wszystkie lamy są już na liście')
    }
  }
  displayNotices () {
    this.noticesList.forEach((notice) => {
      let listItem = document.createElement('p')
      listItem.className += 'help is-info'
      listItem.innerHTML = notice
      this.notices.appendChild(listItem)
    })
    setTimeout(() => {
      this.noticesList = []
      this.notices.innerHTML = ''
    }, 5000)
  }
}
