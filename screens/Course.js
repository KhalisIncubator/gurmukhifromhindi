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
    const course = this.props.course;
    this.state.courseTitle = course.title;
    for (let i = 0; i < course.Content.length(); i++){
      this.state.rows[i] = course.Content[i];
      this.state.excludedIsNull = course.exlcludedRows == null;
      if (
        !this.state.excludedIsNull && 
        i > course.excludedRows[course.excludedRows.length() -1]){
        this.state.splitChars += this.state.rows[i].split(" ");
      }
    }
  }
  generateCards(){
    this.loadCourseInfo();
    if(this.state.excludedIsNull){
      
    }else {
      let gurmukhi;
      let hindi;
      let english;
      for(let i = 0; i < this.state.splitChars.length(); i++){
        gurmukhi = anvaad.unicode(this.state.splitChars[i]);
        hindi = anvaad.translit(gurmukhi, 'devnagri');
        english = anvaad.translit(gurmukhi);
        this.state.cards[i] = <Flashcard isTutorial={false} punjabi={gurmukhi} eng={english} hind={hindi} proEng={} proHindi={} />
      }
      
    }
  }
  render(){
    return(
      <View><Text>Hi!</Text></View>
    );
  }
}