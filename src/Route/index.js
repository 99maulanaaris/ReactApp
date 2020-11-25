import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailKontak, EditKontak, Home, Splash, Tambah} from '../Pages';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tambah Kontak" component={Tambah} />
      <Stack.Screen name="Detail Kontak" component={DetailKontak} />
      <Stack.Screen name="Edit Kontak" component={EditKontak} />
    </Stack.Navigator>
  );
};

export default Route;
