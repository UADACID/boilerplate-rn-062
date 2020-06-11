import React from 'react'
import { View, Text } from 'react-native'
import authHOC from '../../../utils/auth_middleware'

const TransactionScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>TransactionScreen</Text>
        </View>
    )
}

export default authHOC(TransactionScreen)