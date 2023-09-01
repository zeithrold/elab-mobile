import { useAuth0 } from 'react-native-auth0'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { ApplyV1 } from './v1'

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
      // console.log(status)
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
      // console.log(ticket)
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

export {
  useAccessToken,
  useStatus,
  useTicket,
  useQuestion,
  useQuestionList,
  useTextForm,
  useAnswer
}
