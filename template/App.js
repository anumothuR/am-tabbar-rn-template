/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Linking, 
  Alert 
} from 'react-native';

import { updateAppInstalledDate } from './src/service/AsyncStorage'
import VersionCheck from 'react-native-version-check';
import TabbarNavigation from './src/navigation/TabbarNavigation';

const App = () => {

  useEffect(() => {
    forceUpdateCheck();

    updateAppInstalledDate();
  }, []);


  const forceUpdateAlert = (checkversion) => {
    Alert.alert(
      'App Update',
      `Please update the latest version ${checkversion.latestVersion} for seamless experience`,
      [
        {
          text: 'Update',
          onPress: () => {
            Linking.openURL(checkversion.storeUrl);
          },
        },
      ],
    );
  };

  const forceUpdateCheck = async () => {
    try {
      const checkversion = await VersionCheck.needUpdate({
        forceUpdate: true,
      });

      if (checkversion && checkversion.isNeeded) {
        if (Linking.canOpenURL(checkversion.storeUrl)) {
          forceUpdateAlert(checkversion);
        }
      }
    } catch (e) {
      // eslint-disable-next-line
      console.log('checkversion error', e);
    }
  };

  return (
    <TabbarNavigation></TabbarNavigation>
  );
};


export default App;
