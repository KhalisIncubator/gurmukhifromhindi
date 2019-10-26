import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';


class CourseCard extends React.Component{
  
  constructor(props){
    super(props);
    const jsonFile = this.props.jsonFile;

    const courseName = jsonFile.title;
  }

  render(){
    return(
      <View>
        <Text>{this.courseName}</Text>
      </View>
    );
  }
}

export default CourseCard;