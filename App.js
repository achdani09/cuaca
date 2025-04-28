import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from'./app/screens/HomeScreen';
import DetailCuacaScreen from'./app/screens/DetailCuacaScreen';
import TentangScreen from './app/screens/TentangScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen name="Beranda" component={HomeScreen} />
        <Stack.Screen name="Detail Cuaca" component={DetailCuacaScreen} />
        <Stack.Screen name="Tentang" component={TentangScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
