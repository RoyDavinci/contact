import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

export const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  const Contact = () => {
    return (
      <View>
        <Text>Contact</Text>
      </View>
    );
  };
  const About = () => {
    return (
      <View>
        <Text>About</Text>
      </View>
    );
  };
  const Settings = () => {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  };

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Contact} />
      <HomeStack.Screen name="About" component={About} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};
