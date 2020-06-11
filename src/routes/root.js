import React from 'react'
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { ScreenName } from '../utils/constan'

/**
 * SCREENS
 */

import SplashScreen from '../features/splash/screens/splash_screen'
import OnBoardScreen from '../features/onboard/screens/onboard_screen'
import LoginScreen from '../features/auth/screens/login_screen'
import RegisterScreen from '../features/auth/screens/register_screen'
import DashboardScreen from '../features/dashboard/screens/dashboard_screen'
import CartScreen from '../features/cart/screens/cart_screen'

import AuthMiddleware from '../utils/auth_middleware'

enableScreens();
const Stack = createNativeStackNavigator();

const root = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={ScreenName.splashScreen} component={SplashScreen} />
            <Stack.Screen name={ScreenName.onboardScreen} component={OnBoardScreen} />
            <Stack.Screen name={ScreenName.loginScreen} component={LoginScreen} options={{
                stackPresentation: 'modal'
            }} />
            <Stack.Screen name={ScreenName.registerScreen} component={RegisterScreen} options={{
                stackPresentation: 'modal'
            }} />
            <Stack.Screen name={ScreenName.dashboardScreen} component={DashboardScreen} />
            {/* <Stack.Screen name={ScreenName.cartScreen} component={(props) => <AuthMiddleware {...props} screen={<CartScreen {...props} />} />} options={{
                headerShown: true
            }} /> */}
            <Stack.Screen name={ScreenName.cartScreen} component={CartScreen} />
        </Stack.Navigator>
    )
}

export default root
