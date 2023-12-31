import axios, { type Axios } from 'axios'
import {
  type Status,
  type GetRoomDateListResponse,
  type GetRoomListResponse,
  type GetTextFormResponse,
  type GetQuestionListResponse,
  type Question,
  type Ticket,
  type GetRoomSelectionResponse,
  type Config
} from 'type'

export interface PingResponse {
  hello: string
}

class ApiV1 {
  accessToken: string
  endpoint = process.env.EXPO_PUBLIC_API_ENDPOINT + '/v1'
  client: Axios

  constructor (accessToken: string) {
    this.accessToken = accessToken
    this.client = axios.create({
      baseURL: this.endpoint,
      headers: {
        Authorization: 'Bearer ' + this.accessToken
      }
    })
  }

  async ping (): Promise<PingResponse> {
    return (await this.client.get('')).data
  }

  async deleteUser (): Promise<void> {
    return (await this.client.delete('/auth')).data
  }
}

class ApplyV1 extends ApiV1 {
  constructor (accessToken: string) {
    super(accessToken)
    this.client.defaults.baseURL = this.endpoint + '/apply'
  }

  async getConfig (): Promise<Config> {
    return (await this.client.get('/config')).data
  }

  async getRoomList (date: string): Promise<GetRoomListResponse> {
    return (await this.client.get(`/room?date=${date}`)).data
  }

  async getRoomDateList (): Promise<GetRoomDateListResponse> {
    return (await this.client.get('/room/date')).data
  }

  async getRoomSelection (): Promise<GetRoomSelectionResponse> {
    return (await this.client.get('/room/selection')).data
  }

  async clearRoomSelection (): Promise<void> {
    return (await this.client.delete('/room/selection')).data
  }

  async setRoomSelection (id: string): Promise<void> {
    return (await this.client.post('/room/selection', {
      id
    })).data
  }

  async getStatus (): Promise<Status> {
    return (await this.client.get('/status')).data
  }

  async getTextForm (): Promise<GetTextFormResponse> {
    return (await this.client.get('/textform')).data
  }

  async setTextForm (id: string, answer: string) {
    return (await this.client.patch(`/textform/${id}`, {
      answer
    })).data
  }

  async getQuestionList (): Promise<GetQuestionListResponse> {
    return (await this.client.get('/question')).data
  }

  async getQuestion (id: string): Promise<Question> {
    return (await this.client.get(`/question/${id}`)).data
  }

  async getTicket (): Promise<Ticket> {
    return (await this.client.get('/ticket')).data
  }

  async updateTicket (ticket: Ticket): Promise<void> {
    return (await this.client.patch('/ticket', ticket)).data
  }
}

export {
  ApiV1,
  ApplyV1
}
