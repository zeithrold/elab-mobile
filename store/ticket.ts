import { makeAutoObservable } from 'mobx'
import { type Ticket } from 'type'

class TicketStore implements Ticket {
  name = ''
  student_id = ''
  contact = ''
  group = 'software'
  class_name = ''

  modified = false

  loading = false

  setLoading (loading: boolean) {
    this.loading = loading
  }

  setTicket (ticket: Ticket) {
    this.name = ticket.name
    this.student_id = ticket.student_id
    this.contact = ticket.contact
    this.group = ticket.group
    this.class_name = ticket.class_name
    this.modified = false
    this.loading = false
  }

  setModified (modified: boolean) {
    this.modified = modified
  }

  setName (name: string) {
    this.name = name
    this.modified = true
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  setStudentId (student_id: string) {
    this.student_id = student_id
    this.modified = true
  }

  setContact (contact: string) {
    this.contact = contact
    this.modified = true
  }

  setGroup (group: string) {
    this.group = group
    this.modified = true
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  setClassName (class_name: string) {
    this.class_name = class_name
    this.modified = true
  }

  constructor () {
    makeAutoObservable(this)
  }
}

const ticket = new TicketStore()

export default ticket
