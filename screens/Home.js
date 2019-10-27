import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import globalStyle from '../config/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Courses = require ('../config/courses.json');
const CourseList = Courses.courses;

import CourseCard from '../components/CourseCard';

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
       <ScrollView style={globalStyle.container}>
           <FlatList 
           data={CourseList}
           renderItem={
             ({item, index}) =>
             <View style={globalStyle.container}>
              <CourseCard 
              title={CourseList[index].title} 
              desc={CourseList[index].Description} />
              </View>
             }
             keyExtractor={(item, index) => index.toString()}
             />
      </ScrollView>
    );
  }
}


export default HomeScreen;