import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading  from 'expo-app-loading';
import {useFonts,Roboto_100Thin,Roboto_700Bold } from '@expo-google-fonts/roboto';

import Routes from './src/router.js';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes/>
    </>
  );
}

