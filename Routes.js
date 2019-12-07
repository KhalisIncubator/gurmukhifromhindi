import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5';

import Homescreen from './screens/Home';
import Dashboard from './screens/Dashboard';
;

const HomeNavigator = createStackNavigator(
  {
    Home: Homescreen,
    Dashboard: Dashboard,
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
    navigationOptions: {
      tabBarIcon: ({ tintColor }) =>
        <Icon name="home" size={20} color={tintColor} />
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: '#f4511e',
      labelStyle: {
        fontSize: 12,
      },
    }
  }
);

export default createAppContainer(AppNavigator);
