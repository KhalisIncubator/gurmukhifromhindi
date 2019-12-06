import React, { useContext, useState } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import globalStyle from '../config/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Courses = require('../config/courses.json');
const CourseList = Courses.courses;
import LessonSelector from '../components/Flashcard';

import CourseCard from '../components/CourseCard';

const HomeScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const [overlayVis, changeVis] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: `${theme.bgColor}` }}>
      <ScrollView>
        <FlatList
          data={CourseList}
          renderItem={
            ({ item, index }) =>
              <View style={{ flex: 1 }}>
                <CourseCard
                  title={CourseList[index].title}
                  desc={CourseList[index].Description} />
              </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <LessonSelector />
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
    headerRight: (
      <View style={globalStyle.iconContainer}>
        <Icon
          name="chart-line"
          size={20}
          style={globalStyle.icon}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        />
      </View>
    )
  }
}
export default HomeScreen;