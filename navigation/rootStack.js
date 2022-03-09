import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Atelier from '../pages/Pages-1-';
import Details from '../pages/Pages-2-';


const RootStack = createStackNavigator();


const StackScreens = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Atelier" component={Atelier}/>
        <RootStack.Screen name="Details" component={Details}/>
    </RootStack.Navigator>
);

export default StackScreens;