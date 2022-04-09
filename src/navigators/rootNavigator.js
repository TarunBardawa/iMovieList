import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/home';

const Stack = createStackNavigator();

const RootStack = () => {

  // const HeaderGoBack = () => {
  //   return (
  //     <View style={{ padding: 10, paddingLeft: 0 }}>
  //       <Image
  //         style={(Platform.OS === 'ios') ? styles.backIconIos : styles.backIcon}
  //         source={require('@images/Back.png')}
  //         resizeMode={"cover"}
  //       />
  //     </View>
  //   );
  // };

  // const HeaderBackground = () => {
  //   return (
  //     <ImageBackground style={StyleSheet.absoluteFill} source={require('@images/nav_bar.png')}/>
  //   )
  // }

  return (
    <Stack.Navigator
      
      screenOptions={{
        headerShown:false,
        // headerBackground: () => <HeaderBackground />,
        // headerBackImage: () => <HeaderGoBack navigation={navigation} />,
      }}
    >
      <Stack.Screen  name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default RootStack;