interface Room {
  id: string
  name: string
  time: string
  occupancy: number
  capacity: number
  location: string
}

type RoomList = Record<string, Room[]>

interface RoomListItemProps {
  room: Room
}

interface GetRoomListResponse {
  rooms: Room[]
}

interface GetRoomDateListResponse {
  dates: string[]
}

interface GetRoomSelectionResponse {
  id: string
}

export type {
  Room,
  RoomList,
  RoomListItemProps,
  GetRoomListResponse,
  GetRoomSelectionResponse,
  GetRoomDateListResponse
}
