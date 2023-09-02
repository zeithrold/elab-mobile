/* eslint-disable max-lines */
import { useAuth0 } from 'react-native-auth0'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { ApplyV1 } from './v1'
import { type Room } from 'type'

const useAccessToken = () => {
  const { getCredentials } = useAuth0()
  return useSWR('getCredential', async () => {
    const accessToken = (await getCredentials())?.accessToken
    // console.log(accessToken)
    return accessToken
  })
}

const useStatus = () => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getStatus', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const status = await applyApi.getStatus()
      return status
    }
  )
}

const useTicket = () => {
  const { data: accessToken } = useAccessToken()
  return useSWRMutation(
    () => accessToken ? ['apply.getTicket', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const ticket = await applyApi.getTicket()
      return ticket
    }
  )
}

const useQuestionList = () => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getQuestionList', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const questions = await applyApi.getQuestionList()
      return questions.questions
    }
  )
}

const useQuestion = (id: string) => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getQuestion', accessToken, id] : null,
    async ([_, accessToken, id]) => {
      const applyApi = new ApplyV1(accessToken)
      const question = await applyApi.getQuestion(id)
      return question
    }
  )
}

const useTextForm = () => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getTextForm', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const textForm = await applyApi.getTextForm()
      return textForm.textform
    }
  )
}

const useAnswer = (id: string) => {
  const { data: textform } = useTextForm()
  return useSWRMutation(
    () => textform && id ? ['apply.setTextForm', textform, id] : null,
    async ([_, textform, id]) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return textform.find((textform) => textform.id === id)!.answer
    }
  )
}

const useRoomDateList = () => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getRoomDateList', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const roomDateList = await applyApi.getRoomDateList()
      return roomDateList.dates
    }
  )
}

const getRoomListByDate = async (accessToken: string, roomDateList: string[]): Promise<Record<string, Room[]>> => {
  const applyApi = new ApplyV1(accessToken)
  const taskList: Array<Promise<Room[]>> = []
  for (const roomDate of roomDateList) {
    taskList.push((async () => {
      const roomList = await applyApi.getRoomList(roomDate)
      return roomList.rooms
    })())
  }
  const roomList = await Promise.all(taskList)
  const roomListByDate: Record<string, Room[]> = {}
  for (const [index, roomDate] of roomDateList.entries()) {
    roomListByDate[roomDate] = roomList[index]
  }
  return roomListByDate
}

const useRoomList = () => {
  const { data: accessToken } = useAccessToken()
  const { data: roomDate } = useRoomDateList()
  return useSWR(
    () => roomDate && accessToken ? ['apply.getRoomList', accessToken, roomDate] : null,
    async ([_, accessToken, roomDate]) => {
      const roomList = await getRoomListByDate(accessToken, roomDate)
      return roomList
    }
  )
}

const useRoomSelection = () => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getRoomSelection', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const roomSelection = await applyApi.getRoomSelection()
      return roomSelection.id
    }
  )
}

const useConfig = () => {
  const { data: accessToken } = useAccessToken()
  return useSWR(
    () => accessToken ? ['apply.getConfig', accessToken] : null,
    async ([_, accessToken]) => {
      const applyApi = new ApplyV1(accessToken)
      const config = await applyApi.getConfig()
      return config
    }
  )
}

const useRoom = (id: string | undefined) => {
  const { data: roomList } = useRoomList()
  return useSWR(
    () => roomList && id ? ['apply.getRoom', roomList, id] : null,
    async ([_, roomList, id]) => {
      const flattedRoomList = Object.values(roomList).flat()
      const room = flattedRoomList.find((room) => room.id === id)
      return room ?? null
    }
  )
}

export {
  useAccessToken,
  useStatus,
  useTicket,
  useQuestion,
  useQuestionList,
  useTextForm,
  useAnswer,
  useRoomDateList,
  useRoomList,
  useRoomSelection,
  useConfig,
  useRoom
}
