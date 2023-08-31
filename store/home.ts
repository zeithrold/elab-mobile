import { makeAutoObservable } from 'mobx'

class HomeStore {
  totalLoading = false
  userLoading = false
  constructor () {
    makeAutoObservable(this)
  }

  setTotalLoading (loading: boolean) {
    this.totalLoading = loading
  }

  setUserLoading (loading: boolean) {
    this.userLoading = loading
  }

  get loading () {
    return this.totalLoading || this.userLoading
  }
}

const home = new HomeStore()
export default home
