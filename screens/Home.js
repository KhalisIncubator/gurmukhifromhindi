import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Card, Header, Tile} from 'react-native-elements';
import globalStyle from '../config/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Courses = require ('../config/courses.json');
const CourseList = Courses.courses;

import CourseCard from '../components/CourseCard';
import Flashcard from '../components/Flashcard';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: "Title",
    headerRight: (
      <View style={globalStyle.iconContainer}>
        <Icon 
          name="chart-line" 
          size={20} 
          style={globalStyle.icon}
          onPress={ ()=> {  
            alert('Hi!')
          }}
        />
      </View>
    )
  };
  render() {
    return(
       <View style={globalStyle.container}>
        <View>
           <CourseCard title={CourseList[0].title} img={CourseList[0].Image} desc={CourseList[0].Description}/>
        </View>
      </View>
    );
  }
}


export default HomeScreen;