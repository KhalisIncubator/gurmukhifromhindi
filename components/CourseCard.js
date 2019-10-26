import React from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CourseCard extends React.Component{
  render(){
    return(
      <View>
      <Card
      title={this.props.title}
      image={this.props.img}>
      <Text>{this.props.desc}</Text>
      </Card>
      </View>
    );
  }
}