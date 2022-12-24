import React, {useState} from 'react';
import {Container} from '../components/common/Container';
import LoginComponenet from '../components/common/login/Login';

export const Login = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      {/* <Text style={{marginVertical: 20}}>Hi from Login</Text>
      <Input value={value} onChange={text => setValue(text)} label="Username" />
      <Input
        value={password}
        onChange={text => setPassword(text)}
        icon={<Text>Hide</Text>}
        iconPosition="right"
        label="Password"
      />
      <CustomButton secondary title="Submit" loading={false} disabled={true} /> */}
      <LoginComponenet value={value} onChange={text => setValue(text)} />
    </Container>
  );
};
