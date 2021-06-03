import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Activities from '../Views/Activity/Activities'
import UpdateActivity from '../Views/Activity/UpdateActivity';
import CreateActivity from '../Views/Activity/CreateActivity';
import ButtonsUpdateActivity from '../Views/Activity/ButtonsUpdateActivity';

const Stack = createStackNavigator();

const RoutesActivity = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
      <Stack.Screen name="CreateActivity" component={CreateActivity} options={{ headerShown: false }} />
      <Stack.Screen name="UpdateActivity" component={UpdateActivity} options={{ headerShown: false }} />
      <Stack.Screen name="ButtonsUpdateActivity" component={ButtonsUpdateActivity} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RoutesActivity;