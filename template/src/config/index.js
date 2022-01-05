/* eslint-disable max-len */
// This is i am doing for time being. please change this to env and delete this file once we are stable the project.
// https://medium.com/differential/managing-configuration-in-react-native-cd2dfb5e6f7b
const AppConfig = {
    dev: {
      baseURL:
        '',
      
    },
    prod: {
      baseURL: '',
    },
  };
  
  const ENV = 'dev';
  // const ENV = "prod"
  
  const getConfig = (keyName) => {
    const envVariable = AppConfig[ENV];
    return envVariable[keyName];
  };
  
  export default getConfig;
  