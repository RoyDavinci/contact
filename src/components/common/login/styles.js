import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';

export default StyleSheet.create({
  imageContainer: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    paddingTop: 20,
    fontSize: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
  subTitle: {
    paddingTop: 20,
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  form: {
    paddingTop: 20,
  },
  createText: {
    fontSize: 17,
  },
  createLink: {
    paddingLeft: 17,
    color: color.primary,
    fontSize: 16,
  },
  create: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
