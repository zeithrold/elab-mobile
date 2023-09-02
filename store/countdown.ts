import { makeAutoObservable } from 'mobx'

class CountDownStore {
  currentDate = new Date()

  constructor () {
    makeAutoObservable(this)
  }

  update () {
    this.currentDate = new Date()
  }
}

const countdown = new CountDownStore()

export default countdown
