import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

const OnBoardScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          alert('navigate to...')
        }}>
        <Text>Onboard screen</Text>
      </TouchableOpacity>
      <FastImage
        style={{ width: 200, height: 200 }}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  )
}

export default OnBoardScreen
