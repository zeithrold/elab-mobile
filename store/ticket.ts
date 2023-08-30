import { makeAutoObservable } from 'mobx'
import { type Ticket } from 'type'

class TicketStore implements Ticket {
  name = ''
  student_id = ''
  contact = ''
  group = 'software'
  class_name = ''

  setName (name: string) {
    this.name = name
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  setStudentId (student_id: string) {
    this.student_id = student_id
  }

  setContact (contact: string) {
    this.contact = contact
  }

  setGroup (group: string) {
    this.group = group
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  setClassName (class_name: string) {
    this.class_name = class_name
  }

  constructor () {
    makeAutoObservable(this)
  }
}

const ticket = new TicketStore()
export default ticket
