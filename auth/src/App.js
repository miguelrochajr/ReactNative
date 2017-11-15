import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzlCNDfsn2tkSn19miQXRaCziuQXG6zhg',
      authDomain: 'authentication-13380.firebaseapp.com',
      databaseURL: 'https://authentication-13380.firebaseio.com',
      projectId: 'authentication-13380',
      storageBucket: 'authentication-13380.appspot.com',
      messagingSenderId: '196897110535'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authetication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
