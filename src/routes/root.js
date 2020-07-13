import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { ScreenName } from '../utils/constan'

/**
 * SCREENS
 */

import SplashScreen from '../features/splash/screens/splash_screen'
import OnBoardScreen from '../features/onboard/screens/onboard_screen'
import DashboardScreen from '../features/dashboard/screens/dashboard_screen'

enableScreens()
const Stack = createNativeStackNavigator()

const root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={ScreenName.splashScreen}>
      <Stack.Screen name={ScreenName.splashScreen} component={SplashScreen} />
      <Stack.Screen name={ScreenName.onboardScreen} component={OnBoardScreen} />
      <Stack.Screen
        name={ScreenName.dashboardScreen}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  )
}

export default root
