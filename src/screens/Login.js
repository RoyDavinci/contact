/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Container} from '../components/common/Container';
import {Input} from '../components/common/input/input';

export const Login = () => {
  const [value, setValue] = useState('placeholder');

  return (
    <Container>
      <Input
        value={value}
        onChange={text => setValue(text)}
        style={{height: 40, borderColor: 'gray', borderRadius: 5}}
      />
    </Container>
  );
};
