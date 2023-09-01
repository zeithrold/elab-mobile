interface Status extends Record<string, boolean> {
  ticket: boolean
  room_selection: boolean
  textform: boolean
}

export type {
  Status
}
