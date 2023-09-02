import {
  type Room,
  type RoomList,
  type RoomListItemProps,
  type GetRoomListResponse,
  type GetRoomSelectionResponse,
  type GetRoomDateListResponse
} from './room'
import {
  type Status
} from './status'
import {
  type Question,
  type TextForm,
  type UpdateTextFormRequest,
  type GetQuestionListResponse,
  type GetTextFormResponse
} from './textform'
import {
  type Ticket
} from './ticket'

interface Config {
  applyBeginTime: string
  applyEndTime: string
}

export type {
  Room,
  RoomList,
  RoomListItemProps,
  GetRoomListResponse,
  GetRoomDateListResponse,
  GetRoomSelectionResponse,
  Status,
  Question,
  TextForm,
  UpdateTextFormRequest,
  GetQuestionListResponse,
  GetTextFormResponse,
  Ticket,
  Config
}
