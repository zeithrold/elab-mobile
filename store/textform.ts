import { makeAutoObservable } from 'mobx'

class TextForm {
  answer = ''
  id = ''
  accessTokenLoading = false
  textFormLoading = false
  modified = false
  constructor () {
    makeAutoObservable(this)
  }

  setModified (modified: boolean) {
    this.modified = modified
  }

  setAccessTokenLoading (loading: boolean) {
    this.accessTokenLoading = loading
  }

  setTextFormLoading (loading: boolean) {
    this.textFormLoading = loading
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
