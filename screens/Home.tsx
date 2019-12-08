import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import globalStyle from '../config/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Courses = require('../config/courses.json');
const CourseList = Courses.courses;


import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from 'react-navigation-stack';

interface Props extends NavigationStackScreenProps { }

const Home: NavigationStackScreenComponent<Props> = ({ navigation }) => {
  const theme = React.useContext(ThemeContext);
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
Home.navigationOptions = ({ navigation }) => {
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
export default Home;
