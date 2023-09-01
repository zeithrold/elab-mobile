import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useStatus } from 'lib/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { List, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { home } from 'store'

const description = {
  complete: '您已完成科中报名，请点击下方查看二维码以备面试时进行核验。',
  incomplete: '您未完成科中报名，请查看下方科中报名清单，完成报名后这里会开放面试二维码入口。'
}

function QrCodeViewListItem () {
  return (
    <List.Item
      title="查看面试二维码"
      left={
        props => <MaterialCommunityIcons {...props} name='qrcode' size={24} />
      }
      onPress={() => {}}
      description='点击查看面试二维码，以备查验。'
    />
  )
}

function Icon ({ complete }: { complete: boolean }) {
  const {
    colors: {
      onPrimaryContainer,
      onErrorContainer
    }
  } = useTheme()
  return (
    <MaterialCommunityIcons
      style={styles.icon}
      name={complete ? 'check-circle' : 'alert-circle'}
      color={complete ? onPrimaryContainer : onErrorContainer}
      size={24}
    />
  )
}

function TextContainer ({ complete }: { complete: boolean }) {
  const {
    colors: {
      onPrimaryContainer,
      onErrorContainer
    }
  } = useTheme()
  const textColorStyle = { color: complete ? onPrimaryContainer : onErrorContainer }
  return (
    <View
      style={styles.textContainer}
    >
      <Text
        variant='titleLarge'
        style={[
          textColorStyle,
          styles.title
        ]}
      >{complete ? '您已完成报名' : '您未完成报名'}</Text>
      <Text variant='bodyMedium' style={[textColorStyle]}>
        {complete ? description.complete : description.incomplete}
      </Text>
    </View>
  )
}

// eslint-disable-next-line complexity
export default function TotalStatus () {
  const { data, isLoading, error } = useStatus()
  const totalStatus =
    data?.room_selection &&
    data.textform &&
    data.ticket
  React.useEffect(() => {
    home.setTotalLoading(isLoading)
  }, [isLoading])
  React.useEffect(() => {
    if (error) console.error({ error })
  }, [error])
  const {
    colors: {
      primaryContainer,
      errorContainer
    }
  } = useTheme()
  return (
    <View>
      {totalStatus !== undefined
        ? <TouchableRipple
            style={[styles.root,
              { backgroundColor: totalStatus ? primaryContainer : errorContainer }
            ]}
          >
          <View style={styles.container}>
            <Icon complete={totalStatus} />
            <TextContainer complete={totalStatus} />
          </View>
        </TouchableRipple>
        : null}
      {
        totalStatus
          ? <QrCodeViewListItem />
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 12,
    margin: 12,
    borderRadius: 12
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  icon: {
    marginRight: 8
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4
  }
})
