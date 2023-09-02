import { makeAutoObservable } from 'mobx'

class RoomStore {
  selected: string = ''
  roomLoading = false
  forceRefresh = false

  setForceRefresh (forceRefresh: boolean) {
    this.forceRefresh = forceRefresh
  }

  setRoomLoading (loading: boolean) {
    this.roomLoading = loading
  }

  get loading () {
    return this.roomLoading || this.forceRefresh
  }

  setSelected (id: string) {
    this.selected = id
  }

  constructor () {
    makeAutoObservable(this)
  }
}

const room = new RoomStore()
export default room
