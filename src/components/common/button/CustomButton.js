/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import color from '../../../assets/themes/color';
import styles from './styles';

export const CustomButton = ({
  title,
  loading,
  disabled,
  secondary,
  primary,
  danger,
  onPress,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return color.grey;
    }
    if (primary) {
      return color.primary;
    }
    if (secondary) {
      return color.secondary;
    }
    if (danger) {
      return color.danger;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: getBgColor()}]}
      title={title}
      loading={loading}
      disabled={disabled}
      onPress={onPress}>
      {!loading ? (
        title && (
          <Text
            style={[styles.textContainer, {color: disabled ? '#000' : '#fff'}]}>
            {title}
          </Text>
        )
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};
