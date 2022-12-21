import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LOGIN, SIGNUP} from '../constants/routeName';
import {Login} from '../screens/Login';
import {SignUp} from '../screens/SignUp';

export const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};
