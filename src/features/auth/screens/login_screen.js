import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ScreenName, ActionType } from '../../../utils/constan'
import styles from '../styles/login_style'


const LoginScreen = ({ navigation, setAuth }) => {
    return (
        <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => {
                setAuth()
                navigation.pop()
            }}>
                <Text>Tekan untuk mengubah status login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate(ScreenName.registerScreen)
            }}>
                <Text>go to register screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    setAuth: () => dispatch({ type: ActionType.SET_AUTH, payload: true })
})

export default connect(null, mapDispatchToProps)(LoginScreen)
