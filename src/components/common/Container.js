/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

export const Container = ({children, style}) => {
  return (
    <ScrollView style={{marginTop: 20}}>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};
