// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; // If it is a .js file, no need to put .js
import AlbumList from './src/components/AlbumList';
import Card from './src/components/Card';

// Create a component
const App = () => (
  //Flex 1 menas: "pleas expand this component to fill the entire area of the device "
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>

);

// Render it to the device
AppRegistry.registerComponent('albums', () => App); // The AppRegistry is only used at the root App.js

export default App;
