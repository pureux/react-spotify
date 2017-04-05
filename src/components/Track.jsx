import React, { Component } from 'react';
import '../css/Track.css';

class Track extends Component {
  
  constructor(props) {
    super(props);
    this.formatDuration = this.formatDuration.bind(this);
  }

  formatDuration(ms) {
    let min = Math.floor(ms / 60000);
    let sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? '0' : '') + sec;
  }

  render() {
    const { track } = this.props;
    const { track_number, name, duration_ms, id } = track;

    const duration = this.formatDuration(duration_ms);

    return (
      <div className="Track" id={id}>
        <span className="number">{track_number}</span>
        <span className="duration">{duration}</span>
        <span className="title">{name}</span>
      </div>
    );
  }
}

export default Track;
