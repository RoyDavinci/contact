import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 4,
  },
  textInput: {
    flex: 1,
    width: '100%',
    padding: 6,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: color.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
