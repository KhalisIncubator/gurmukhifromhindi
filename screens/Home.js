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
import Icon from 'react-native-vector-icons/FontAwesome5';

const Courses = require ('../config/courses.json');
const CourseList = Courses.courses;

import CourseCard from '../components/CourseCard';

const HomeScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);
  const  navigationOptions = {

  }
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

HomeScreen.navigationOptions = ({navigation}) => {
  return{
  title: "Home",
  headerRight: (
        <View style={globalStyle.iconContainer}>
          <Icon 
            name="chart-line" 
            size={20} 
            style={globalStyle.icon}
            onPress={ ()=> {  
              navigation.navigate('Dashboard');
            }}
          />
        </View>
      )
          }
}
export default HomeScreen;