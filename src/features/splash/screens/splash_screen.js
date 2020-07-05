import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native'
import Config from 'react-native-config'

import { connect } from 'react-redux'
import { ScreenName } from '../../../utils/constan'

const SplashScreen = ({ navigation, todos, add }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
      }}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate(ScreenName.onboardScreen)

          /**
           * REPLACE EXAMPLE
           */
          navigation.dispatch(
            StackActions.replace(ScreenName.onboardScreen, {
              // user: 'jane',
            })
          )

          /**
           * RESET EXAMPLE
           */
          // navigation.reset({
          //     index: 1,
          //     routes: [
          //         {
          //             name: ScreenName.dashboardScreen,
          //             params: { user: 'jane', screen: ScreenName.transactionStack },
          //         },
          //         {
          //             name: ScreenName.loginScreen,
          //             // params: { user: 'jane', screen: ScreenName.transactionStack },
          //         },
          //     ],
          // })

          // add()
        }}>
        <Text>Splash screen {Config.BASE_API_URL}</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.dummyReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: 'Add' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)
