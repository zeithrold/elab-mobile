import { makeAutoObservable } from 'mobx'

class TextForm {
  answer = ''
  id = ''
  loading = false
  modified = false
  constructor () {
    makeAutoObservable(this)
  }

  setModified (modified: boolean) {
    this.modified = modified
  }

  setLoading (loading: boolean) {
    this.loading = loading
  }

  setAnswer (answer: string) {
    this.answer = answer
    this.modified = true
  }

  setId (id: string) {
    this.id = id
  }
}

const textForm = new TextForm()

export default textForm
