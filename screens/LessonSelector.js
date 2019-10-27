import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {Card, Divider, ListItem} from 'react-native-elements';

export default class LessonSelector extends Component{
  render(){
    return(
      <Card >
        {
          this.props.lesson.map((item, i) => {
            <ListItem 
              key={i}
              title={item[i].Name}
              leftIcon={item[i].Icon}
              bottomDivider
              chevron
            />
          })
        }
      </Card>
    );
  }
}