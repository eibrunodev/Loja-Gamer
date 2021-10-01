import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Pages/Home/index.js';
import Detail from './Pages/Detail/index.js';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
