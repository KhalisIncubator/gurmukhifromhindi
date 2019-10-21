import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

class Placeholder extends React.Component{
  static navigationOptions = {
    title: 'Placeholder',
   };
  render() {
    return(
      <View style={styles.parentView}>
        <Text>Ur computer dumb</Text>
        <Button title='What we do here is go back'
        onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default Placeholder;