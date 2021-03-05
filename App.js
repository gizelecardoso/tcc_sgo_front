import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Roles from './src/Views/Role/Roles'
import UpdateRole from './src/Views/Role/UpdateRole';
import CreateRole from './src/Views/Role/CreateRole';
import { NavigationContainer, StackActions } from "@react-navigation/native"

// const navigator = createStackNavigator({
//   Roles :{screen: Roles},
//   UpdateRole :{screen: UpdateRole}
// })

// const AppContainer = createAppContainer(navigator)

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen />

      </Stack.Navigator>
    </NavigationContainer>
    //<Roles />
    //<CreateRole />
    //<UpdateRole />
  );
}

export default App;