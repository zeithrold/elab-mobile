import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableRipple, Text, useTheme } from 'react-native-paper'
import { ticket } from 'store'

const SubmitButton = observer(() => {
  const {
    colors: {
      primary,
      onPrimary
    }
  } = useTheme()
  return (
    <TouchableRipple
      disabled={ticket.loading}
      style={[
        styles.item,
        {
          backgroundColor: primary
        }
      ]}
      onPress={() => {}}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='content-save'
          color={onPrimary}
          size={30}
          style={styles.icon}
        />
        <Text
          variant='headlineSmall'
          style={[styles.label, {
            color: onPrimary
          }]}
        >
          保存
        </Text>
      </View>
    </TouchableRipple>
  )
})

export default SubmitButton

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    borderRadius: 16
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  label: {
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 8
  }
})
