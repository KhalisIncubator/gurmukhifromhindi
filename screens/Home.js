import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';
import globalStyle from '../config/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Courses = require('../config/courses.json');
const CourseList = Courses.courses;

const HomeScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[globalStyle.container, { backgroundColor: `${theme.bgColor}` }]}>
      <Text>Hello There</Text>
      <FlatList
        data={CourseList}
        renderItem={
          ({ item, index }) =>
            <View style={globalStyle.container}>
              <Text>{CourseList[index].title}</Text>
            </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
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