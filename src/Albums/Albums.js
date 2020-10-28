import React, { Component } from 'react';
import './Albums.scss';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        { id: 0, title: 'quidem molestiae enim' },
        { id: 1, title: 'sunt qui excepturi placeat culpa' },
        { id: 2, title: 'omnis laborum odio' },
        { id: 3, title: 'non esse culpa molestiae omnis sed optio' },
        { id: 4, title: 'eaque aut omnis a' },
      ],
      mode: 0,
    };
  }

  changeMode = (event) => {
    this.setState({ mode: event.target.id });
  };

  render() {
    const { albums } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album" key={album.id} id={album.id} onClick={this.changeMode}>
            <h3 className="title" id={album.id}>
              {album.title}
            </h3>
            {parseInt(this.state.mode, 10) === album.id && (
              <div className="photo-container">
                <div className="image-caption">
                  <img className="image-random" />
                  <span>some random stuff</span>
                </div>
                <div className="image-caption">
                  <img className="image-random" />
                  <span>some random stuff</span>
                </div>
                <div className="image-caption">
                  <img className="image-random" />
                  <span>some random stuff</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
