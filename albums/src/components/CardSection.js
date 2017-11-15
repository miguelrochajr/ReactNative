import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
// When looking at the Card.js, we see that it is receving a component from
// somewhere. Actually, AlbumDetail is seding a CardSection to Card and the
// Card will render it. So, in the Card, when it calls the props.children,
// actually renders this  component. Then, the sequence is:
// AlbumDetail -> Card -> CardSection
// Also, note that this will render a Text tag from the AlbumDetail.
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
