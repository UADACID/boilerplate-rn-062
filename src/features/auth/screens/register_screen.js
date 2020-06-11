import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {
                navigation.popToTop()
            }}>
            <Text>Register Screen back to dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen
