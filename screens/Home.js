import React, {useContext} from 'react';
import {
  View,
  ScrollView,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';
import globalStyle from '../config/styles';
import  {ThemeContext} from '../contexts/ThemeContext';

const Courses = require ('../config/courses.json');
const CourseList = Courses.courses;

import CourseCard from '../components/CourseCard';

const HomeScreen = () => {
  const theme = useContext(ThemeContext);
  return(
    <SafeAreaView style={{backgroundColor: `${theme.bgColor}`}}>
      <ScrollView>
        <FlatList 
          data={CourseList}
          renderItem={
            ({item, index}) =>
            <View style={{flex: 1}}>
              <CourseCard 
                title={CourseList[index].title} 
                desc={CourseList[index].Description} />
              </View>
            }
            keyExtractor={(item, index) => index.toString()}
            />
      </ScrollView>
    </SafeAreaView>
    );
}


export default HomeScreen;