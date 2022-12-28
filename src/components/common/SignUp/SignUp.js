import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomButton} from '../button/CustomButton';
import {Input} from '../input/input';
import Logo from '../../../assets/images/logo.png';
import styles from '../login/styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../../constants/routeName';

const SignUpComponent = ({
  onChange,
  onSubmit,
  form,
  loading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Image source={Logo} style={styles.imageContainer} />
      <View>
        <Text style={styles.title}>Welcome To Contacts</Text>
        <Text style={styles.subTitle}>Register</Text>
        {error && <Text style={styles.error}>{error.data[0]}</Text>}
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username}
          />
          <Input
            label="FirstName"
            placeholder="Enter First Name"
            error={errors.firstname}
            onChangeText={value => {
              onChange({name: 'firstname', value});
            }}
          />
          <Input
            label="LastName"
            placeholder="Enter Last Name"
            error={errors.lastname}
            onChangeText={value => {
              onChange({name: 'lastname', value});
            }}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />
          <Input
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            label="Password"
            secure={true}
            error={errors.password}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            secondary
            title="Submit"
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
          />
        </View>
        <View style={styles.create}>
          <Text style={styles.createText}>Already have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.createLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpComponent;
