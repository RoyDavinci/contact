import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

export const Input = ({setValue, value, style}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChange={setValue}
        style={[styles.textInput, style]}
      />
    </View>
  );
};
