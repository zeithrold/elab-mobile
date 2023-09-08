import React from 'react'
import { useAuth0 } from 'react-native-auth0'
import { View, StyleSheet } from 'react-native'
import { Appbar, TouchableRipple, useTheme, Text, ActivityIndicator } from 'react-native-paper'
import { authorizeErrorHandler } from 'context/auth'
import { useRouter } from 'expo-router'
import AuthTitle from 'components/AuthTitle'
import { useAccessTokenMutation } from 'lib/hooks'

export default function SignInPage () {
  const { authorize, isLoading } = useAuth0()
  const { trigger } = useAccessTokenMutation()
  const {
    colors: {
      primary,
      onPrimary
    }
  } = useTheme()
  const router = useRouter()
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title='登陆' />
      </Appbar.Header>
      <AuthTitle />
      <TouchableRipple
        style={[
          styles.item,
          {
            backgroundColor: primary
          }
        ]}
        onPress={() => {
          authorize({
            audience: process.env.EXPO_PUBLIC_AUTH0_AUDIENCE,
            additionalParameters: {
              prompt: 'login'
            }
          }, {
            ephemeralSession: true
          })
            .then((credential) => {
              if (credential) {
                trigger().then(() => {
                  router.replace('/')
                })
                  .catch((err) => {
                    console.warn(err)
                  })
              }
            })
            .catch(authorizeErrorHandler)
        }}
      >
        <View style={styles.container}>
          {
          isLoading
            ? <ActivityIndicator color={onPrimary} style={{ marginRight: 8 }} />
            : null
        }
          <Text
            variant='headlineSmall'
            style={[styles.label, {
              color: onPrimary
            }]}
          >
            登录
          </Text>
        </View>
      </TouchableRipple>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    margin: 8,
    borderRadius: 16
  },
  container: {
    // flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  label: {
    fontWeight: 'bold'
  }
})
