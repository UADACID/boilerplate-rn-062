import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
/**
 * SCREEN TAB MENU
 */
import BerandaScreen from '../containers/beranda_container'

import { ScreenName } from '../../../utils/constan'

/**
 * Component
 */

enableScreens()
const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const BerandaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.berandaScreen}
        component={BerandaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const DashboardScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenName.berandaScreen} component={BerandaStack} />
    </Tab.Navigator>
  )
}

export default DashboardScreen
