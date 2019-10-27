import React from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';

import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import globalStyle, {courseCard} from '../config/styles';
import {courseImages} from '../config/images';

export default class CourseCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      img: courseImages[`${this.props.img}`],
    };
  }
  render(){
    return(
      <View>
        <Card
        containerStyle={courseCard.container}
        imageStyle={courseCard.imgStyle}
        imageProps={courseCard.imageProps}
        title={this.props.title}
        image={this.state.img}>
            <Text style={courseCard.text}>{this.props.desc}</Text>
            <Button style={courseCard.button} title="Click!"/>
        </Card>
      </View>
    );
  }
}