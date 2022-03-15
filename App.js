import React, {useEffect, useState} from "react";
import Navigations from "./app/navigations/Navigation";
import AppLoading from 'expo-app-loading';
import { View } from "react-native";
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    LemonMilk: require('./assets/fonts/lemon_milk/LEMONMILK-Medium.otf'),
  });

  if (!loaded) {
    return <View />;
  } else {
    return <Navigations />;
  }
}
