// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // center vertical position
    alignItems: 'center', // center horizontal position
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 }, // Shadow positiion
    shadowOpacity: 0.2, //ranges from 1 to 0
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
