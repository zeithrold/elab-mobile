import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Appbar, FAB, List, RadioButton } from 'react-native-paper'

export default function InterviewScreen () {
  const [value, setValue] = React.useState('first')
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="面试场次" />
      </Appbar.Header>
      <ScrollView>
        <List.Section>
          <List.Subheader>选择</List.Subheader>
          <List.Item
            title="First Item"
            description="Item description"
            onPress={() => {}}
            style={{
              paddingHorizontal: 8
            }}
            left={props => {
              return (
                <RadioButton.Android
                  {...props}
                  value="first"
                  status={value === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => {}}
                />
              )
            }}
          />

          <List.Item
            title="First"
            description="Item description"
            onPress={() => {}}
            style={{
              paddingHorizontal: 8
            }}
            left={props => {
              return (
                <RadioButton.Android
                  {...props}
                  value="second"
                  status='unchecked'
                  onPress={() => {}}
                />
              )
            }}
          />
        </List.Section>
      </ScrollView>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <FAB
        icon='content-save-off'
        label='保存'
        variant='tertiary'
        style={styles.fabStyle}
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  fabStyle: {
    bottom: 16,
    // right: 16,
    alignSelf: 'center',
    position: 'absolute'
  }
})
