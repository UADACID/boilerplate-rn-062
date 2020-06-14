import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-paper'
import { CommonActions } from '@react-navigation/native'
import { ActionType, ScreenName } from '../../../utils/constan'
import styles from '../styles/account_style'

const AccountScreen = ({ setAuth, isAuthenticated, navigation }) => {
  return (
    <View style={styles.contentContainer}>
      <Text>AccountScreen {isAuthenticated ? 'Loged In' : null}</Text>
      {isAuthenticated && (
        <Button
          mode="contained"
          color="red"
          onPress={() => {
            setAuth()
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: ScreenName.berandaStack,
                  params: { screen: ScreenName.berandaScreen }
                }
              ]
            })
          }}>
          log out
        </Button>
      )}
    </View>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  setAuth: () => dispatch({ type: ActionType.SET_AUTH, payload: false })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountScreen)
