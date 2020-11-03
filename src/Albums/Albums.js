import React, { Component } from 'react';
import './Albums.scss';
import { fetchAlbums, fetchPhotos } from '../apiUtil';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      mode: 0,
      photos: [],
    };
  }

  componentDidMount = async () => {
    const mode = 1;
    const albums = await fetchAlbums();
    const photos = await fetchPhotos(mode).then((photo) => photo.slice(0, 3));
    this.setState({ mode, albums, photos });
  };

  changeMode = (id) => async (event) => {
    event.persist();

    const photos = await fetchPhotos(id).then((data) => data.slice(0, 3));
    this.setState({
      mode: event.target.id,
      photos,
    });
  };

  render() {
    const { albums, photos } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <section
            className="album"
            key={album.id}
            id={album.id}
            onClick={this.changeMode(album.id)}
          >
            <h3 className="title" id={album.id}>
              {album.title}
            </h3>
            {parseInt(this.state.mode, 10) === album.id && (
              <div className="photo-container">
                {photos.map((photo) => (
                  <div className="image-caption" key={photo.id}>
                    <img
                      src={photo.url}
                      alt={`img-${album.id}-${photo.id}`}
                      className="image-random"
                    />
                    <span>{photo.title}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </section>
    );
  }
}

export default Albums;
