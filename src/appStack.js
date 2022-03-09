import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreens from '../navigation/rootStack';

const RootStack = createStackNavigator();

const RootApp = () => {
  return (
    <RootStack.Navigator >
      <RootStack.Screen
        name="StackScreens"
        component={StackScreens}
        options={{
          animationEnabled: false,
          headerShown:false
        }}
      />
    </RootStack.Navigator>
  );
};
export default RootApp;
