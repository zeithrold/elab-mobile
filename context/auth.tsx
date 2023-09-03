import { router, useRootNavigationState, useSegments } from 'expo-router'
import React from 'react'
import { Alert } from 'react-native'
import { useAuth0, type User } from 'react-native-auth0'

const AuthContext = React.createContext(null)

// // This hook can be used to access the user info.
// export function useAuth () {
//   return React.useContext(AuthContext)
// }

// This hook will protect the route access based on user authentication.
function useProtectedRoute (user: User | null, isLoading: boolean) {
  const segments = useSegments()
  const navigationState = useRootNavigationState()
  // eslint-disable-next-line complexity
  React.useEffect(() => {
    // console.log(user)
    if (!navigationState?.key || isLoading) return
    // const inAuthGroup = segments[0] === '(auth)'
    const inAuthGroup = segments[0] === 'signin'
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/signin')
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/textform/tempredirect')
    }
  }, [user, segments, navigationState])
}

function authorizeErrorHandler (error: Error) {
  console.debug('context.auth.authorizeErrorHandler: 登录失败', error)
  Alert.alert('很抱歉，登录失败。', '请稍后再试，或联系科中。')
}

function logOutErrorHandler (error: Error) {
  console.debug('context.auth.logOutErrorHandler: 登出失败', error)
  Alert.alert('很抱歉，登出失败。', '请稍后再试，或联系科中。')
}

export function Provider ({ children }: {
  children: React.ReactNode
}) {
  const { user, isLoading } = useAuth0()
  useProtectedRoute(user, isLoading)
  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  authorizeErrorHandler,
  logOutErrorHandler
}
