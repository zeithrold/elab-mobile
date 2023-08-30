import React from 'react'
import { StyleSheet, View } from 'react-native'
import { List, useTheme } from 'react-native-paper'

export default function UserStatus () {
  const {
    colors: {
      tertiary,
      primary,
      error
    }
  } = useTheme()
  return (
    <View style={styles.container}>
      <List.Subheader>科中报名清单</List.Subheader>
      {/* <Divider /> */}
      <List.Item
        title="基本信息填报（已完成）"
        description="填写姓名、学号等基本信息。"
        left={props => <List.Icon {...props} icon="check-circle" color={primary} />}
        onPress={() => {}}
      />
      {/* <Divider /> */}
      <List.Item
        title="表单填报（未完成）"
        description="填写一些问题的回答。"
        left={props => <List.Icon {...props} icon="close-circle" color={error} />}
        onPress={() => {}}
      />
      {/* <Divider /> */}
      <List.Item
        title="面试场次选择（未完成）"
        description="选择面试场次。"
        left={props => <List.Icon {...props} icon="close-circle" color={error} />}
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // margin: 12
  },
  button: {
    // flex: 1,
    marginHorizontal: 4
  }
})
