import React from 'react';

import {
  View,
  Text,
  SafeAreaView
} from 'react-native';

export interface Props { }
const Dashboard: React.FC<Props> = (props) => {
  return (
    <View>
      <Text>
        Dashboard
      </Text>
    </View>
  );
}
export default Dashboard;
