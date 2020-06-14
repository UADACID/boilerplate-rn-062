import React from 'react'
import { ScrollView, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScreenName } from '../../../utils/constan'
import styles from '../styles/beranda_style'
import ResponsiveScreen from 'react-native-auto-responsive-screen'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const BerandaScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ height: ResponsiveScreen.fontSize(52) }}>
        <Appbar.Content
          title="Alfamind"
          titleStyle={{ fontSize: ResponsiveScreen.fontSize(20) }}
        />
        <Appbar.Action
          icon="cart"
          size={ResponsiveScreen.fontSize(24)}
          onPress={() => {
            navigation.navigate(ScreenName.cartScreen)
          }}
        />
      </Appbar.Header>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Berandabanner />
        <BerandaFooterbanner />
        <View style={{ height: ResponsiveScreen.fontSize(23) }} />
        <BerandaMenu />
        <HorizontalListProduct />
      </ScrollView>
    </SafeAreaView>
  )
}

const Berandabanner = () => {
  return (
    <ShimmerPlaceHolder
      style={{
        width: ResponsiveScreen.fontSize(436),
        height: ResponsiveScreen.fontSize(176)
      }}
    />
  )
}

const BerandaFooterbanner = () => {
  return (
    <ShimmerPlaceHolder
      style={{
        width: ResponsiveScreen.fontSize(414),
        height: ResponsiveScreen.fontSize(145),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
      }}
    />
  )
}

const BerandaMenu = () => {
  const menuItem = (
    <View>
      <ShimmerPlaceHolder
        style={{
          width: ResponsiveScreen.fontSize(35),
          height: ResponsiveScreen.fontSize(35),
          marginHorizontal: 30
        }}
      />
      <View style={{ height: ResponsiveScreen.fontSize(45) }} />
      {/* <ShimmerPlaceHolder
        style={{
          width: ResponsiveScreen.fontSize(35),
          height: ResponsiveScreen.fontSize(15),
          marginHorizontal: 30,
          marginBottom: ResponsiveScreen.fontSize(15),
        }}
      /> */}
    </View>
  )

  return (
    <View>
      <ShimmerPlaceHolder
        style={{
          width: ResponsiveScreen.fontSize(114),
          height: ResponsiveScreen.fontSize(19),
          marginLeft: 15
        }}
      />
      <View style={{ height: ResponsiveScreen.fontSize(20) }} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
        {menuItem}
        {menuItem}
        {menuItem}
        {menuItem}
        {menuItem}
        {menuItem}
        {menuItem}
        {menuItem}
      </View>
    </View>
  )
}

const HorizontalListProduct = () => {
  return (
    <View>
      <ShimmerPlaceHolder
        style={{
          width: ResponsiveScreen.fontSize(178),
          height: ResponsiveScreen.fontSize(19),
          marginLeft: 15
        }}
      />
      <View style={{ height: ResponsiveScreen.fontSize(20) }} />
      <ScrollView horizontal>
        <ShimmerPlaceHolder
          style={{
            width: ResponsiveScreen.fontSize(135),
            height: ResponsiveScreen.fontSize(248),
            marginLeft: ResponsiveScreen.fontSize(15),
            borderRadius: 5
          }}
        />
        <ShimmerPlaceHolder
          style={{
            width: ResponsiveScreen.fontSize(135),
            height: ResponsiveScreen.fontSize(248),
            marginLeft: ResponsiveScreen.fontSize(8),
            borderRadius: 5
          }}
        />
        <ShimmerPlaceHolder
          style={{
            width: ResponsiveScreen.fontSize(135),
            height: ResponsiveScreen.fontSize(248),
            marginLeft: ResponsiveScreen.fontSize(8),
            borderRadius: 5
          }}
        />
      </ScrollView>
    </View>
  )
}

export default BerandaScreen
