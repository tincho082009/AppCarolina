import React, { useState, useEffect } from "react";
import Mapas from "../screens/Mapas";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";


import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{ title: "LA CAROLINA", tabBarIcon: ({color, size}) => {
            return <Icon type="material-community" size={size} color={color} name="volume-high"></Icon>
          }, headerShown: false }}
        />
        <Tab.Screen
          name="mapa"
          component={Mapas}
          options={{ title: "Mapa", tabBarIcon: ({color, size}) => {
            return <Icon type="material-community" size={size} color={color} name="map-marker"></Icon>
          }, headerShown: false }}
        />
        <Tab.Screen
          name="Créditos"
          component={Home} 
          options={{ title: "Créditos", tabBarIcon: ({color, size}) => {
            return <Icon type="material-community" size={size} color={color} name="headset"></Icon>
          }, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
