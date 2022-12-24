/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import color from '../../../assets/themes/color';

export const Input = ({
  onChange,
  value,
  style,
  icon,
  label,
  iconPosition,
  error,
  props,
  placeholder,
  secure,
  onChangeText,
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
    return;
  };

  const getBorderColor = () => {
    if (focused) {
      return color.primary;
    }
    if (error) {
      return color.danger;
    }
    return color.grey;
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            flexDirection: getFlexDirection(),
            borderColor: getBorderColor(),
            alignItems: icon ? 'center' : 'baseline',
          },
        ]}>
        {icon && <View style={{paddingHorizontal: 5}}>{icon}</View>}
        <TextInput
          value={value}
          onChange={onChange}
          onChangeText={onChangeText}
          style={[styles.textInput, style]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
          placeholder={placeholder}
          secureTextEntry={secure}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
