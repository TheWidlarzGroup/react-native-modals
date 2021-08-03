import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme/theme';

import SlideScreen from '../screens/SlideScreen';
import FadeScreen from '../screens/FadeScreen';
import RotateScreen from '../screens/RotateScreen';
import UtilsScreen from '../screens/UtilsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        adaptive: true,
        activeTintColor: 'black',
        labelStyle: {fontSize: theme.fontSizes.bottomTab},
      }}>
      <Tab.Screen
        name="Slide"
        component={SlideScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons
                name={focused ? 'trail-sign' : 'trail-sign-outline'}
                size={theme.iconSizes.bottomTab}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Fade"
        component={FadeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons
                name={focused ? 'eye-off' : 'eye-off-outline'}
                size={theme.iconSizes.bottomTab}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Rotate"
        component={RotateScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons
                name={focused ? 'refresh-circle' : 'refresh-circle-outline'}
                size={theme.iconSizes.bottomTab}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Utils"
        component={UtilsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons
                name={focused ? 'construct' : 'construct-outline'}
                size={theme.iconSizes.bottomTab}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
