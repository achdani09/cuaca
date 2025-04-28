import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jadian from'./app/screens/jadian';
import DetailCuacaScreen from'./app/screens/DetailCuacaScreen';
import TentangScreen from './app/screens/TentangScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen name="Beranda" component={jadian} />
        <Stack.Screen name="Detail Cuaca" component={DetailCuacaScreen} />
        <Stack.Screen name="Tentang" component={TentangScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
