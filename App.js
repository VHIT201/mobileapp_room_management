import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Import screens
import Login from './src/views/accounts/Login';
import Register from './src/views/accounts/Register';

import Home from './src/views/main/Home';
import Areas from './src/views/main/Areas';
import Manage from './src/views/main/Manage';
import Notification from './src/views/main/Notification';
import RE from './src/views/main/R&E';
import BoardingHouse from './src/views/main/InformationAreas/BoardingHouse';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#3fb950',
          tabBarStyle: { backgroundColor: '#30363d' },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = 'home';
            } else if (route.name === 'Khu') {
              iconName = 'home-city-outline';
            } else if (route.name === 'Thông báo') {
              iconName = 'bell';
            } else if (route.name === 'R & E') {
              iconName = 'book';
            } else if (route.name === 'Quản lý') {
              iconName = 'cog';
            }

            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Trang chủ" component={Home} />
        <Tab.Screen name="Khu" component={Areas} />
        <Tab.Screen name="Thông báo" component={Notification} />
        <Tab.Screen name="R & E" component={RE} />
        <Tab.Screen name="Quản lý" component={Manage} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        <Stack.Screen name="BoardingHouse" component={BoardingHouse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
