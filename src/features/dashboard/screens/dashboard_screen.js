import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
/**
 * SCREEN TAB MENU
 */
import BerandaScreen from '../containers/beranda_container'
import TransactionScreen from '../../transaction/screens/transaction_screen'
import NetworkingScreen from '../../network/screens/network_screen'

import NotificationScreen from '../../notification/screens/notification_screen'
import AccountScreen from '../../account/screens/account_screen'

import { ScreenName } from '../../../utils/constan'

/**
 * Component
 */
import TabDashboardComponent from '../components/tab_dashboard_component'

enableScreens();
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BerandaStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ScreenName.berandaScreen} component={BerandaScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const TransactionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ScreenName.transactionScreen} component={TransactionScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const NetworkStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ScreenName.networkScreen} component={NetworkingScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const NotificationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ScreenName.notificationScreen} component={NotificationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ScreenName.accountScreen} component={AccountScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


const dashboardConfig = [
    {   
        title: 'Beranda',
        stackName: BerandaStack,
        screenName: ScreenName.berandaStack
    },
    {
        title: 'Transaksi',
        stackName: TransactionStack,
        screenName: ScreenName.transactionStack,
        needAuth: true
    },
    {
        title: 'Jaringan',
        stackName: NetworkStack,
        screenName: ScreenName.networkStack,
        needAuth: true
    },
    {
        title: 'Notifikasi',
        stackName: NotificationStack,
        screenName: ScreenName.notificationStack
    },
    {
        title: 'Akun saya',
        stackName: AccountStack,
        screenName: ScreenName.accountStack,
        needAuth: true
    },
]

const DashboardScreen = () => {
    return (
        <Tab.Navigator tabBar={props => <TabDashboardComponent {...props} dashboardConfig={dashboardConfig} />}>
            {
                dashboardConfig.map((item, index) => {
                    return <Tab.Screen key={index} name={item.screenName} component={item.stackName} />
                })
            }
        </Tab.Navigator>
    )
}

export default DashboardScreen

