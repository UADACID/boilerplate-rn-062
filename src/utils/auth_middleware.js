import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux'


import { ScreenName } from '../utils/constan'

const authHOC = (DestinationScreen, isRoot = false) => {
    class AuthMiddleware extends Component {

        state = {
            isLogin: false
        }

        componentDidMount() {
            const { isAuthenticated } = this.props
            if (!isAuthenticated) {
                if (isRoot) {
                    this.props.navigation.dispatch(
                        StackActions.replace(ScreenName.loginScreen)
                    )
                } else {
                    this.props.navigation.navigate(ScreenName.loginScreen)
                }

            } else {
                this.setState({
                    isLogin: true
                })
            }
        }
        render() {
            if (this.state.isLogin) {
                return <DestinationScreen {...this.props} />
            }
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.authReducer.isAuthenticated
    })

    return connect(mapStateToProps)(AuthMiddleware)
}

export default authHOC
