interface Status extends Record<string, boolean> {
  ticket: boolean
  room_selection: boolean
  text_form: boolean
}

export type {
  Status
}
