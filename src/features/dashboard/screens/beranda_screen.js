import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenName } from '../../../utils/constan'
import styles from '../styles/beranda_style'

const BerandaScreen = ({ navigation, setAuth, isAuthenticated }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ height: 52 }}>
                <Appbar.Content
                    title="Alfamind"
                />
                <Appbar.Action icon='cart' onPress={() => {
                    navigation.navigate(ScreenName.cartScreen)
                }} />
            </Appbar.Header>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    !isAuthenticated ? <Text>Anda belum login, dan tidak bisa mengakses cart</Text> : <TouchableOpacity onPress={() => setAuth()}>
                        <Text>Log out</Text>

                    </TouchableOpacity>
                }

            </View>
        </SafeAreaView>
    )
}


export default BerandaScreen
