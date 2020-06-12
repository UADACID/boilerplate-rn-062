import React from 'react'
import { View, Text, TouchableOpacity, PixelRatio } from 'react-native'
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenName } from '../../../utils/constan'
import styles from '../styles/beranda_style'
import ResponsiveScreen from 'react-native-auto-responsive-screen'

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
                    !isAuthenticated ? <Text style={{
                        fontSize: ResponsiveScreen.normalize(14)
                        // fontSize: 14
                    }}>Anda belum login, dan tidak bisa mengakses cart</Text> : <TouchableOpacity onPress={() => setAuth()}>
                            <Text style={{
                                fontSize: ResponsiveScreen.normalize(20)
                                // fontSize: 20
                            }}>Log out {PixelRatio.getFontScale()} {PixelRatio.get()}</Text>

                        </TouchableOpacity>
                }
                {/* 
                    width of 414 is mean fullwidth base on init width on root app
                */}
                <TouchableOpacity style={{
                    height: ResponsiveScreen.normalize(40),
                    // height: 40,
                    width: ResponsiveScreen.normalize(180),
                    // width: 180,
                    backgroundColor: '#CD3438',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: ResponsiveScreen.normalize(5)
                    // borderRadius: 5
                }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: ResponsiveScreen.normalize(14)
                        // fontSize: 14
                    }}>Bayar (4)</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}


export default BerandaScreen
