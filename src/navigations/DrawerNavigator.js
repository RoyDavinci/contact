import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HomeNavigator} from './HomeNavigator';

export const DrawerNavigator = () => {
  const DrawerStack = createDrawerNavigator();

  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Navigator" component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};
