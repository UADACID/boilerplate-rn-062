import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { connect } from 'react-redux'

import { ScreenName } from '../utils/constan'

const authHOC = (DestinationScreen, isRoot = false) => {
  const AuthMiddleware = props => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
      if (!props.isAuthenticated) {
        if (isRoot) {
          props.navigation.dispatch(
            StackActions.replace(ScreenName.loginScreen)
          )
        } else {
          props.navigation.navigate(ScreenName.loginScreen)
        }
      } else {
        setIsLogin(true)
      }
    }, [props.isAuthenticated, props.navigation])

    if (isLogin) {
      return <DestinationScreen {...props} />
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
  })

  return connect(mapStateToProps)(AuthMiddleware)
}

export default authHOC
