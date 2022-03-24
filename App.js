import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import LinkingScreen from './screens/LinkingScreen';

const Stack = createStackNavigator();

export default function App() {
  const config = {
    screens: {
      ScreenA: 'a',
      ScreenB: {
        path: 'b/:message',
        parse: {
          message: message => `${message}`,
        },
      },
      ScreenC: 'c',
    },
  };

  return (
    <NavigationContainer
      linking={{
        prefixes: ['rndeeplinking1://app'],
        config,
      }}>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
        <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
