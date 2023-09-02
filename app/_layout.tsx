import React, { useEffect, Suspense } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useColorScheme, AppState, type AppStateStatus } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import Colors from 'constants/Colors'
import { SWRConfig } from 'swr'
import { Auth0Provider } from 'react-native-auth0'
import { Provider } from 'context/auth'
import { CountDownProvider } from 'context/countdown'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout () {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...MaterialCommunityIcons.font
  })
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => { return true },
        initFocus (callback) {
          let appState = AppState.currentState

          const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* 如果正在从后台或非 active 模式恢复到 active 模式 */
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
              callback()
            }
            appState = nextAppState
          }

          // 订阅 app 状态更改事件
          const subscription = AppState.addEventListener('change', onAppStateChange)

          return () => {
            subscription.remove()
          }
        },
        initReconnect (callback) {
          const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected) {
              callback()
            }
          })
          return () => {
            unsubscribe()
          }
        }
      }}
    >
      <Suspense>
        <CountDownProvider>
          <RootLayoutNav />
        </CountDownProvider>
      </Suspense>
    </SWRConfig>
  )
}

function RootLayoutNav () {
  const colorScheme = useColorScheme()
  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: Colors.dark }
      : { ...MD3LightTheme, colors: Colors.light }

  return (
    <Auth0Provider
      domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID as string}
    >
      <PaperProvider theme={paperTheme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Provider>
            <Stack
              screenOptions={{
                headerShown: false
              }}
            >
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <Stack.Screen
                name='signin'
                options={{ headerShown: false, presentation: 'modal' }}
              />
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
              />
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <Stack.Screen
                name="notavailable"
                options={{ headerShown: false, presentation: 'modal' }}
              />
            </Stack>
          </Provider>
        </ThemeProvider>
      </PaperProvider>
    </Auth0Provider>
  )
}
