import { makeAutoObservable } from 'mobx'

class RoomStore {
  selected = ''
  setSelected (id: string) {
    this.selected = id
  }

  constructor () {
    makeAutoObservable(this)
  }
}

const room = new RoomStore()
export default room
