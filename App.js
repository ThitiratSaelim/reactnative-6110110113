import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen}
          options={{
            headerTitleStyle: { alignSelf: 'center' , fontWeight: 'bold'},
            headerStyle: {backgroundColor : '#ffaa80' } , headerTintColor: 'white' }}
        />
        <Stack.Screen name="Weather" component={WeatherScreen}
          options={{
            headerTitleStyle: { fontWeight: 'bold'},
            headerStyle: {backgroundColor : '#ff6699'} , headerTintColor: 'white' }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
