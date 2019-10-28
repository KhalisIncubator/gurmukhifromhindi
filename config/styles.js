import React from 'react';
import {StyleSheet} from 'react-native';

export default globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
    color: 'white',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }, 

});
const courseCard = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
  button: {
    alignSelf: 'flex-start',
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    padding: 5,
  },
  imageProps: {
    resizeMode: 'contain',
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 150
  }
});
const flashCardStyle = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    margin: 15,
    borderRadius: 15,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textPunjabi: {
    fontSize: 60,
    padding: 20,
  }, 
  textHindi: {
    fontSize: 40, 
    padding: 20,
  },
  textEng: {
    fontSize: 40,
    padding: 20,
  },
  textDesc: {
    fontSize: 20,
    padding: 10,
  },
  textTutorial: {
    fontSize: 60, 
    padding: 20, 
    alignSelf: 'center',
    justifyContent: 'center'
  },
  prounounciationPun: {
    fontSize: 60,
    alignSelf:'flex-end',
  },
  pronounciationEng: {
    fontSize: 60,
    alignSelf: 'flex-end',
  },
  pronounciationHindi: {
    fontSize: 60,
    alignSelf: 'flex-end',
  },
  button: {
    borderRadius: 50,
    fontSize: 30,
    alignSelf: 'flex-end',
    paddingLeft: 10,
    color: '#f4511e',
    tintColor: '#fff',
  }
});

export {
  flashCardStyle,
  courseCard,
}