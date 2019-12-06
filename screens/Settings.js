import React, { useContext } from 'react';
import { 
  Button, 
  Text, 
  SafeAreaView, 
  View, 
  Picker,
  Slider, 
  StyleSheet 
} from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import settings from '../config/Settings.json';
import {settingsStyle} from '../config/styles';
import {Card, Image, Divider} from 'react-native-elements';

const SettingsScreen = () => {
    const theme = useContext(ThemeContext);

    return (
      <SafeAreaView style={{backgroundColor: theme.bgColor, flex: 1}}>
        <View>
        <Card
        imageStyle={settingsStyle.imgStyle}
        imageProps={settingsStyle.imageProps}
        containerStyle={settingsStyle.card}
        title={'Developed By'}
        image={require('../config/img/logo.png')}>
        </Card>
          <Card containerStyle={settingsStyle.card}>
            <Text style={settingsStyle.title}>YO!</Text>
            <Text>Preey much</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
}
export default SettingsScreen;