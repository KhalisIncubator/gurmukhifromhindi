import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Card, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from '../config/styles';
const Courses = require ('../config/courses.json');
const CourseList = Courses.courses;

import {CourseCard} from '../components/CourseCard';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: "Home",
    headerRight: (
      <View style={styles.iconContainer}>
        <Icon 
          name="chart-line" 
          size={20} 
          style={styles.icon}
          onPress={ ()=> {  
            alert('Hi!')
          }}
        />
      </View>
    )
  };
  render() {
    return(
       <View style={styles.container}>
        <View>
          <Text>Welcome to learn Gurmukhi from Hindi!</Text>
        </View>
      </View>
    );
  }
}


export default HomeScreen;