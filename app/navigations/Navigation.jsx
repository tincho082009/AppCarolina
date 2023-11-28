import React, { useState, useEffect } from "react";
import Mapas from "../screens/Mapas";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Icon } from "react-native-elements";
import Creditos from "../screens/Creditos";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Audios",
            tabBarActiveBackgroundColor: "#f4f0d4",
            tabBarInactiveBackgroundColor: "#f4f0d4",
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "#666f2d",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  type="material-community"
                  size={size}
                  color={"#666f2d"}
                  name="volume-high"
                ></Icon>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="mapa"
          component={Mapas}
          options={{
            title: "Mapa",
            tabBarActiveBackgroundColor: "#f4f0d4",
            tabBarInactiveBackgroundColor: "#f4f0d4",
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "#666f2d",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  type="material-community"
                  size={size}
                  color={"#666f2d"}
                  name="map-marker"
                ></Icon>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Créditos"
          component={Creditos}
          options={{
            title: "Créditos",
            tabBarActiveBackgroundColor: "#f4f0d4",
            tabBarInactiveBackgroundColor: "#f4f0d4",
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "#666f2d",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  type="material-community"
                  size={size}
                  color={"#666f2d"}
                  name="comment-text-outline"
                ></Icon>
              );
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
