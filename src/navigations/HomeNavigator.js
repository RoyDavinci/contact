import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ABOUT, HOME, SETTINGS} from '../constants/routeName';
import {About} from '../screens/About';
import {Home} from '../screens/Home';
import {Settings} from '../screens/Settings';

export const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen name={ABOUT} component={About} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};
