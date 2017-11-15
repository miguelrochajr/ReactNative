import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Card from './Card';

class AlbumList extends Component {
  state = { albums: [] }; // by default, we have an empty state list of albums

  componentWillMount() {
    //This function is called when this component is about to be rendered
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album_data={album}/>
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
        
      </View>
    );
  }
}

export default AlbumList;
