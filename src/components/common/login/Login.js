import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomButton} from '../button/CustomButton';
import {Input} from '../input/input';
import Logo from '../../../assets/images/logo.png';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SIGNUP} from '../../../constants/routeName';

const LoginComponenet = ({}) => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Image source={Logo} style={styles.imageContainer} />
      <View>
        <Text style={styles.title}>Welcome To Contacts</Text>
        <Text style={styles.subTitle}>Please Login</Text>
        <View style={styles.form}>
          <Input label="Username" placeholder="Enter Username" />
          <Input
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            label="Password"
            secure={true}
          />
          <CustomButton
            secondary
            title="Submit"
            loading={false}
            disabled={true}
          />
        </View>
        <View style={styles.create}>
          <Text style={styles.createText}>Don't have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(SIGNUP);
            }}>
            <Text style={styles.createLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginComponenet;
