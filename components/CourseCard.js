import React from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';

import {Card, Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import globalStyle, {courseCard} from '../config/styles';


export default class CourseCard extends React.Component{
  render(){
    return(
      <View>
        <Card
        containerStyle={courseCard.container}
        imageStyle={courseCard.imgStyle}
        imageProps={courseCard.imageProps}
        title={this.props.title}>
            <Text style={courseCard.text}>{this.props.desc}</Text>
            <Button style={courseCard.button} 
            type="outline"
            title="Start this course!" 
            onPress={() => {
              
            }}/>  
        </Card>
      </View>
    );
  }
}