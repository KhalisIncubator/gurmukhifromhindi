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
    if(this.props.isTutorial == false){
      return(
        <View style={flashCardStyle.container}>
        <View style={flashCardStyle.rowContainer}>
            <Text style={flashCardStyle.text}>{this.props.punjabi}</Text>
            <Text style={Flashcard.prounounciationEng}>{this.props.sideTitle}</Text>
        </View>
        <Divider />
        <View style={flashCardStyle.rowContainer}>
            <Text style={flashCardStyle.text}>{this.props.eng}</Text>
            <Text style={Flashcard.prounounciationHindi}>{this.props.proHindi}</Text>
        </View>
        <Divider />
        <View style={flashCardStyle.rowContainer}>
            <Text style={flashCardStyle.text}>{this.props.hindi}</Text>
            <Text style={Flashcard.prounounciationEng}>{this.props.proEng}</Text>
        </View>
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
    } else {
      return(
        <View style={flashCardStyle.container}>
          <Text style={flashCardStyle.textTutorial}>{this.props.text}</Text>
        </View>
      );
    }
       
  }
}
