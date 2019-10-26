import React, {Component} from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {Card, Divider, Button} from 'react-native-elements';
import globalStyle, {flashCardStyle} from '../config/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Flashcard extends React.Component{
  render(){
    return(
      <View style={flashCardStyle.container}>
        <Text style={flashCardStyle.text}>Hi</Text>
        <Divider />
        <Text style={flashCardStyle.text}>Hi</Text>
        <Divider />
        <Text style={flashCardStyle.text}>Hi</Text>
        <TouchableOpacity>
          <Icon 
          name="chevron-circle-right"
          style={flashCardStyle.button}
          onPress={ ()=> {  
            alert('Hi!')
          }}/>
        </TouchableOpacity> 
      </View> 
    );
  }
}