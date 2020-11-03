import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Albums from './Albums';
import { fetchAlbums, fetchPhotos } from '../apiUtil';

jest.mock('../apiUtil');

describe('should render albums on the page', () => {
  const mockAlbums = [
    {
      userId: 1,
      id: 1,
      title: 'quidem molestiae enim',
    },
    {
      userId: 1,
      id: 2,
      title: 'sunt qui excepturi placeat culpa',
    },
    {
      userId: 1,
      id: 3,
      title: 'omnis laborum odio',
    },
  ];

  const mockPhotos = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
  ];

  beforeEach(() => {
    fetchAlbums.mockResolvedValue(mockAlbums);
    fetchPhotos.mockResolvedValue(mockPhotos);
  });

  it('fetchAlbums and fetchPhotos should be called once respectively', async () => {
    render(<Albums />);
    expect(fetchAlbums).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText('omnis laborum odio')).toBeTruthy());
    expect(fetchPhotos).toHaveBeenCalledTimes(1);
  });

  it('should show album titles on the page', async () => {
    render(<Albums />);
    await waitFor(() => expect(screen.getByText('omnis laborum odio')).toBeTruthy());
    expect(screen.getByText('quidem molestiae enim')).toBeTruthy();
    expect(screen.getByText('sunt qui excepturi placeat culpa')).toBeTruthy();
    expect(screen.getByText('omnis laborum odio')).toBeTruthy();
  });

  it('should show pictures under an album when click on the album', async () => {
    render(<Albums />);
    await waitFor(() => expect(screen.getByText('omnis laborum odio')).toBeTruthy());
    fireEvent.click(screen.getByText('omnis laborum odio'));
    await waitFor(() =>
      expect(screen.getByText('officia porro iure quia iusto qui ipsa ut modi')).toBeTruthy()
    );
    expect(screen.getByAltText('img-3-1')).toBeTruthy();
    expect(screen.getByAltText('img-3-2')).toBeTruthy();
    expect(screen.getByAltText('img-3-3')).toBeTruthy();
  });
});
