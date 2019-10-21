import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons';

import Homescreen from './screens/Home';
import Placeholder from './screens/Placeholder';
import SettingsScreen from './screens/Settings';

const HomeNavigator = createSwitchNavigator(
  {
    Home: Homescreen, 
    Placeholder: Placeholder,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Placeholder: {
    screen: Placeholder,
  },
  Settings: {
    screen: SettingsScreen,
  },
});

export default createAppContainer(AppNavigator);
