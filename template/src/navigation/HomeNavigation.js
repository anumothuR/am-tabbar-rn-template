import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" options={{ headerShown: false, gestureEnabled: true }} component={Dashboard} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
