import { withLayoutContext } from 'expo-router'
import { createMaterialBottomTabNavigator, type MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs'

const { Navigator } = createMaterialBottomTabNavigator()

export const MaterialTabs = withLayoutContext<
MaterialBottomTabNavigationOptions,
  typeof Navigator
>(Navigator)
