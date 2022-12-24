import React, {useState} from 'react';
import {View} from 'react-native';
import {Container} from '../components/common/Container';
import SignUpComponent from '../components/common/SignUp/SignUp';

export const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'Password should be more than 5 characters',
            };
          });
        } else {
          setError(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setError(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      if (name === 'email') {
        setError(prev => {
          return {...prev, [name]: `Please add an ${name}`};
        });
      } else if (name === 'username' || name === 'password') {
        setError(prev => {
          return {...prev, [name]: `Please add a ${name}`};
        });
      } else {
        setError(prev => {
          return {...prev, [name]: `Please add your ${name}`};
        });
      }
    }
  };

  const onSubmit = () => {
    // validations
    if (!form.username) {
      setError(prev => {
        return {...prev, username: 'Please enter a username'};
      });
    } else {
      setError({...errors, username: null});
    }
    if (!form.firstname) {
      setError(prev => {
        return {...prev, firstname: 'Please enter your firstname'};
      });
    }
    if (!form.lastname) {
      setError(prev => {
        return {...prev, lastname: 'Please enter your lastname'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'Please enter an email'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'Please enter a password'};
      });
    }
  };
  console.log(errors, form);

  return (
    <Container>
      <View>
        <SignUpComponent
          onChange={onChange}
          onSubmit={onSubmit}
          form={form}
          errors={errors}
        />
      </View>
    </Container>
  );
};
