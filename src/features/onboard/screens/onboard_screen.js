import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const OnBoardScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          alert('navigate to...')
        }}>
        <Text>Onboard screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnBoardScreen
