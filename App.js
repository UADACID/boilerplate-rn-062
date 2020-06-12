/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import ResponsiveScreen from './src/utils/responsive_screen'
import ResponsiveScreen from 'react-native-auto-responsive-screen'

import getStore from './src/redux/store'

/**
 * ROOT NAVIGATION
 */

import RootNavigation from './src/routes/root'


const { store, persistor } = getStore()
/**
 * WIDTH AND HEIGHT BASE ON MOCKUP
 */
ResponsiveScreen.init(414, 852)

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff',
    accent: '#f1c40f',
  },
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
