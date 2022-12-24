import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './AuthNavigator';
import {DrawerNavigator} from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
