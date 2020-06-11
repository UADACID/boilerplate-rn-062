import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native';

import { ScreenName } from '../../../utils/constan'

const OnBoardScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => {
                // navigation.navigate(ScreenName.dashboardScreen)
                navigation.dispatch(
                    StackActions.replace(ScreenName.dashboardScreen)
                )
            }}>
                <Text>Onboard screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoardScreen
