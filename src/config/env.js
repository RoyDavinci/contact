import {DEV_URL, PROD_URL} from '@env';

const devEnvironmentVariables = {
  DEV_URL,
};
const prodEnvironmentVariables = {
  PROD_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
