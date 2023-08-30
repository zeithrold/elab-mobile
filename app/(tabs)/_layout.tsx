import React from 'react'
import { MaterialTabs } from 'components/MaterialTabs'

export default function TabLayout () {
  return (
    <MaterialTabs
      screenOptions={{
        title: '首页'
      }}
    >
      <MaterialTabs.Screen
        name='index'
        options={{
          title: '首页',
          tabBarIcon: 'home'
        }}
      />
      <MaterialTabs.Screen
        name='form'
        options={{
          title: '报名',
          tabBarIcon: 'fountain-pen-tip'
        }}
      />
      <MaterialTabs.Screen
        name='interview'
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
