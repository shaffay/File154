import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import Profile from './screens/Profile';
import CreateEmployee from './screens/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
      
    {/* <Home /> */}
    {/* <Profile /> */}
      <CreateEmployee />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
     marginTop:Constants.statusBarHeight,
    //alignItems: 'center',
    // justifyContent: 'center',

  },
});
