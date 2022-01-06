import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Image } from 'react-native';
import HomeNavigation from './HomeNavigation';
import MoreNavigation from './MoreNavigation';

const Tab = createBottomTabNavigator();

const TabbarNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
   /* screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let imageName;
        if (route.source === 'Dashboard') {
          imageName = focused
            ? require('../assets/dashboard.png')
            : require('../assets/dashboardtwo.png')
        } else if (route.source === 'Activity') {
          imageName = focused ? require('../assets/list.png') :require('../assets/listtwo.png');
        }else if (route.source === 'Report') {
          imageName = focused ? require('../assets/report.png') :require('../assets/reporttwo.png');
        }else if (route.source === 'More') {
          imageName = focused ? require('../assets/more.png') :require('../assets/moretwo.png');
        }

        return <Image source={imageName} size={size} color={color} />;
      },
    })} */
      tabBarOptions={{
        activeTintColor: '#FD4893', inactiveTintColor: '#FF85D399', labelStyle: { fontSize: 12.5 }, style: { height: 80 },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeNavigation}
        options={{

          tabBarIcon: ({ focused, size }) => (
            <Image
              source={
                  focused
                    ? require('../assets/images/dashboard.png')
                    : require('../assets/images/dashboardtwo.png')
                }
              style={{
                width: size,
                height: size,

              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNavigation}
        options={{

          tabBarIcon: ({ focused, size }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/more.png')
                  : require('../assets/images/moretwo.png')
              }
              style={{
                width: size,
                height: size,

              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default TabbarNavigation;
