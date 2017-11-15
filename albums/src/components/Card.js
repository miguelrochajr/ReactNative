import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
//  Any time we pass a component that will write another component, that
// one will show up as the props.children. So, props.children will render
// any component we pass to it.
// NOTE: In this case, everything inside the <Card> tag at Album Detail is
// being passed to this Card component so it is being displayed here.
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  //containerStyle is an arbitrary name
  containerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width :0, height:2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default Card;
