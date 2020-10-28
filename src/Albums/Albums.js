import React, { Component } from 'react';
import './Albums.scss';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        'quidem molestiae enim',
        'sunt qui excepturi placeat culpa',
        'omnis laborum odio',
        'non esse culpa molestiae omnis sed optio',
        'eaque aut omnis a',
      ],
    };
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album">
            <h3>{album}</h3>
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
