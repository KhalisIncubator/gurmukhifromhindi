import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {CoursesList} from '../config/courses.json';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home'
   };
  render() {
    return(
       <View style={styles.container}>
        <View>
          <Text>Welcome to learn _________</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Placeholder')}
            title="View Placeholder page"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default HomeScreen;