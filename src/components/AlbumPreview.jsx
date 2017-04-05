import React, { Component } from 'react';
import '../css/AlbumPreview.css';

class AlbumPreview extends Component {
  
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClickPreview, album } = this.props;
    onClickPreview(album.id);
  }

  render() {
    const { album, selected } = this.props;
    const { id, name, images } = album;

    const thumb = images.sort((a, b) => { return a.width - b.width; })[1]; // get medium sized image

    return (
      <div className={'AlbumPreview' + (selected ? ' selected' : '')} id={'preview-' + id} onClick={this.onClick}>
        <span>{name}</span>
        <img src={thumb.url} alt={id} />
      </div>
    );
  }
}

export default AlbumPreview;
