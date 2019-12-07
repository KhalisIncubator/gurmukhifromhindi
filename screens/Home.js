import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';
import globalStyle from '../config/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const navigationOptions = {

  }
  return (
    <SafeAreaView style={{ backgroundColor: `${theme.bgColor}` }}>
      <ScrollView>
        <Text>Hi There</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
    headerRight: (
      <View style={globalStyle.iconContainer}>
        <Icon
          name="chart-line"
          size={20}
          style={globalStyle.icon}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        />
      </View>
    )
  }
}
export default HomeScreen;