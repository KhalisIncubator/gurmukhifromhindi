import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CourseCard from '../components/CourseCard';
import Flashcard from '../components/Flashcard';
const anvaad = require('anvaad-js');

export default class Course extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      courseTitle: "",
      rows: [],
      excludedIsNull: false, 
      exlcludedRows: [],
      splitChars: [],
      cards: [],
      quizes: [],

    };
  }
  loadCourseInfo(){
  }
  generateCards(){
  }
  render(){
    return(
      <View><Text>Hi!</Text></View>
    );
  }
}