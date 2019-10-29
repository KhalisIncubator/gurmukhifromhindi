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


const SettingsScreen = () => {
    const theme = useContext(ThemeContext);
    return (
      <SafeAreaView style={{backgroundColor: theme.bgColor, flex: 1}}>
        <View>
          {/* <Picker selectedValue={this.state.language} */}
            {/* style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }/>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" /> */}
        </View>
      </SafeAreaView>
    );
}
export default SettingsScreen;