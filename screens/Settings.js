import React, { Component } from 'react';
import { Button, Text, SafeAreaView, View } from 'react-native';


export default class HighScoresScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Settings</Text>
        </View>
      </SafeAreaView>
    );
  }
}