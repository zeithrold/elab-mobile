import React from 'react'
import { MaterialTabs } from 'components/MaterialTabs'
// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: 'index'
}

export default function TabLayout () {
  return (
    <MaterialTabs>
      <MaterialTabs.Screen
        name='index'
        options={{
          title: '首页',
          tabBarIcon: 'home'
        }}
      />
      <MaterialTabs.Screen
        name='ticket'
        options={{
          title: '基本信息',
          tabBarIcon: 'card-account-details'
        }}
      />
      <MaterialTabs.Screen
        name='textform'
        options={{
          title: '表单',
          tabBarIcon: 'file-document-edit'
        }}
      />
      <MaterialTabs.Screen
        name='room'
        options={{
          title: '面试场次',
          tabBarIcon: 'view-module'
        }}
      />
      <MaterialTabs.Screen
        name='profile'
        options={{
          title: '我',
          tabBarIcon: 'account'
        }}
      />
    </MaterialTabs>
  )
}
