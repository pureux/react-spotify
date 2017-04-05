import React, { Component } from 'react';
import spotifyApi from '../constants/spotifier';
import AlbumFull from './AlbumFull';
import AlbumPreview from './AlbumPreview';
import Header from './Header';
import '../css/App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      artist: {
        id: '1w5Kfo2jwwIPruYS2UWh56', // hard-coded artist ID to get us started
        name: 'Pearl Jam'
      },
      albums: [],
      selectedAlbum: null,
      tracks: []
    };

    this.isSelected = this.isSelected.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickPreview = this.onClickPreview.bind(this);
  }

  componentDidMount() {
    // Get albums
    spotifyApi.getArtistAlbums(this.state.artist.id, { album_type : 'album', country : 'US' })
      .then((data) => {
        console.log('Albums', data.body);
        this.setState({albums: data.body.items});
      }, (err) => {
        console.error(err);
      });
  }

  onClickPreview(albumId) {
    if (this.isSelected(albumId)) {
      this.onClickClose();
    }
    else {
      // Get album
      spotifyApi.getAlbum(albumId || '5B4PYA7wNN4WdEXdIJu58a')
        .then((data) => {
          console.log('Selected album', data.body);
          this.setState({selectedAlbum: data.body});
        }, (err) => {
          console.error(err);
        });
    }
  }

  onClickClose() {
    this.setState({selectedAlbum: null});
  }

  isSelected(id) {
    const { selectedAlbum } = this.state;
    return (selectedAlbum && selectedAlbum.id === id);
  }

  renderAlbumPreviews() {
    const { albums } = this.state;

    if (albums && albums.length) {

      const elements = albums.map(
        (album) => {
          return <AlbumPreview key={album.id} album={album} selected={this.isSelected(album.id)} onClickPreview={this.onClickPreview} />
        }
      );

      return (
        <div className="container">{elements}</div>
      );
    }

    return (
      <h4>No albums found</h4>
    );
  }

  render() {
    const { selectedAlbum } = this.state;

    return (
      <div className="App">
        <Header />
        <h1>{this.state.artist.name}</h1>
        { (selectedAlbum)
          ? <AlbumFull key={selectedAlbum.id} album={selectedAlbum} onClickClose={this.onClickClose} />
          : null
        }
        { this.renderAlbumPreviews() }
      </div>
    );
  }
}

export default App;
