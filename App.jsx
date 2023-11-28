import React, { useEffect, useState, useCallback } from "react";
import Navigations from "./app/navigations/Navigation";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    LemonMilk: require("./assets/fonts/lemon_milk/LEMONMILK-Medium.otf"),
  });

  /*const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);*/

  if (!loaded) {
    return <View></View>;
  } else {
    return <Navigations />;
  }
}
