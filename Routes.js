import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5';

import Homescreen from './screens/Home';
import Placeholder from './screens/Placeholder';
import SettingsScreen from './screens/Settings';
import Course from './screens/Course';
import LessonSelector from './screens/LessonSelector';
import Dashboard from './screens/Dashboard';

const CourseNav = createStackNavigator(
  {
    SelectLesson: LessonSelector, 
    Course: Course,
  },
  {
    initialRouteName: 'SelectLesson',
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

const HomeNavigator = createStackNavigator(
  {
    Home: Homescreen,
    Learn: CourseNav,
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
const SearchNav = createStackNavigator(
  {
    Home: Placeholder, 
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
const SettingsNav = createStackNavigator(
  {
    Settings: SettingsScreen, 
  },
  {
    initialRouteName: 'Settings',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: 'Settings',
    },
    
  }
);
const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="home" size={20} color={tintColor} />
    }
  },
  Search : {
    screen: SearchNav,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="search" size={20} color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsNav,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="cog" size={20} color={tintColor} />
    }
  },
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
