interface Room {
  room_id: string
  name: string
  time: string
  occupancy: number
  capacity: number
  location: string
}

type RoomList = Record<string, Room[]>

interface GetRoomListResponse {
  rooms: Room[]
}

interface GetRoomDateListResponse {
  dates: string[]
}

export type {
  Room,
  RoomList,
  GetRoomListResponse,
  GetRoomDateListResponse
}
