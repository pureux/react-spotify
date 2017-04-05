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
        // hard-coded artist ID to get us started
        
        id: '1w5Kfo2jwwIPruYS2UWh56', 
        name: 'Pearl Jam'
        
        // id: '1dfeR4HaWDbWqFHLkxsg1d',
        // name: 'Queen'

        // id: '22bE4uQ6baNwSHPVcDxLCe',
        // name: 'The Rolling Stones'

        // id: '711MCceyCBcFnzjGY4Q7Un',
        // name: 'AC/DC'

        // id: '4KWTAlx2RvbpseOGMEmROg',
        // name: 'R.E.M.'

        // NO, NO NO...

        // id: '0SdiiPkr02EUdekHZJkt58',
        // name: 'Hanson'
        
        // id: '5YGY8feqx7naU7z4HrwZM6',
        // name: 'Miley Cyrus'
        
        // id: '6sFIWsNpZYqfjUpaCgueju',
        // name: 'Carly Rae Jepsen'
      },
      albums: [],
      selectedAlbum: null,
      tracks: [],
      selectedTrack: null
    };

    this.isAlbumSelected = this.isAlbumSelected.bind(this);
    this.isTrackSelected = this.isTrackSelected.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickPreview = this.onClickPreview.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.stopTrack = this.stopTrack.bind(this);
  }

  componentDidMount() {
    // Get albums
    spotifyApi.getArtistAlbums(this.state.artist.id, { album_type : 'album', country : 'US' })
      .then((data) => {
        console.log('Albums', data.body);
        this.setState({ albums: data.body.items });
      }, (err) => {
        console.error(err);
      });
  }

  onClickPreview(albumId) {
    if (this.isAlbumSelected(albumId)) {
      this.onClickClose();
    }
    else {
      // Get album
      spotifyApi.getAlbum(albumId)
        .then((data) => {
          console.log('Selected album', data.body);
          this.setState({ selectedAlbum: data.body });
        }, (err) => {
          console.error(err);
        });
    }
  }

  onClickClose() {
    this.setState({ selectedAlbum: null });
  }

  isAlbumSelected(id) {
    const { selectedAlbum } = this.state;
    return (selectedAlbum && selectedAlbum.id === id);
  }

  isTrackSelected(id) {
    const { selectedTrack } = this.state;
    return (selectedTrack && selectedTrack.id === id);
  }

  stopTrack() {
    const { selectedTrack } = this.state;

    if (selectedTrack) {
      selectedTrack.audio.pause();
    }

    this.setState({ selectedTrack: null });
  }

  playTrack(id, url) {
    this.stopTrack();

    this.setState({
      selectedTrack: {
        id: id,
        audio: new Audio(url)
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedAlbum, selectedTrack } = this.state;

    if (selectedAlbum !== prevState.selectedAlbum && selectedTrack) {
      this.stopTrack();
    }
    else if (selectedTrack && selectedTrack !== prevState.selectedTrack) {
      selectedTrack.audio.play();
    }
  }

  renderAlbumPreviews() {
    const { albums } = this.state;

    if (albums && albums.length) {

      const elements = albums.map(
        (album) => {
          return <AlbumPreview key={album.id} 
                   album={album}
                   selected={this.isAlbumSelected(album.id)}
                   onClickPreview={this.onClickPreview} />
        }
      );

      return (
        <div className="albums">{elements}</div>
      );
    }

    return (
      <h4>No albums found</h4>
    );
  }

  render() {
    const { artist, selectedAlbum } = this.state;

    return (
      <div className="App">
        <Header />
        <h1>{artist.name}</h1>
        { (selectedAlbum)
          ? <AlbumFull key={selectedAlbum.id} 
              album={selectedAlbum}
              isTrackSelected={this.isTrackSelected}
              onClickClose={this.onClickClose}
              playTrack={this.playTrack}
              stopTrack={this.stopTrack} />
          : null
        }
        { this.renderAlbumPreviews() }
      </div>
    );
  }
}

export default App;
