import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// this whenPressed is the same as the one on AlbumDetail.js
const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    //When TouchableOpacity is pressed, it runs the function from the prop
    <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, // NOTE: the button expands as much as possible
    alignSelf: 'stretch', // stretch to fill the limits of the container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button;
