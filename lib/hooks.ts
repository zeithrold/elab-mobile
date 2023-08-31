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

export { useAccessToken, useStatus, useTicket }
