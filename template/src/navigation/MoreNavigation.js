import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Morepage from '../screens/MorePage';

const Stack = createStackNavigator();

function MoreNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Morepage" options={{ headerShown: false, gestureEnabled: true }} component={Morepage} />
    </Stack.Navigator>
  );
}

export default MoreNavigation;
