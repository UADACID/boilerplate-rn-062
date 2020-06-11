import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/cart_style'
import authHOC from '../../../utils/auth_middleware'


const CartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ height: 52 }}>
                <Appbar.BackAction
                    onPress={() => navigation.pop()}
                />
                <Appbar.Content
                    title="Cart"
                    style={{ alignItems: 'flex-start' }}
                />
            </Appbar.Header>
            <View style={styles.contentContainer}>
                <Text>Cart screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default authHOC(CartScreen, true)


