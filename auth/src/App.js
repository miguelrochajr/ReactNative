import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzlCNDfsn2tkSn19miQXRaCziuQXG6zhg',
      authDomain: 'authentication-13380.firebaseapp.com',
      databaseURL: 'https://authentication-13380.firebaseio.com',
      projectId: 'authentication-13380',
      storageBucket: 'authentication-13380.appspot.com',
      messagingSenderId: '196897110535'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button whenPressed={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authetication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
