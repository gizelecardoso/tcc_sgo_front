import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Officials from '../Views/Official/Officials';
import UpdateOfficial from '../Views/Official/UpdateOfficial';
import CreateOfficial from '../Views/Official/CreateOfficial';

const Stack = createStackNavigator();

const RoutesOfficial = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Officials" component={Officials} options={{headerShown:false}}/>
      <Stack.Screen name="UpdateOfficial" component={UpdateOfficial} options={{headerShown:false}}/>
      <Stack.Screen name="CreateOfficial" component={CreateOfficial} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default RoutesOfficial;