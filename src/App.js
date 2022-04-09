/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/rootNavigator';
import { Provider } from 'react-redux';
import store from './store/configureStore'
 
 export default function App() {
   return (
    <Provider store={store}>
     <NavigationContainer>
       <RootStack />
     </NavigationContainer>
     </Provider>
   );
 }