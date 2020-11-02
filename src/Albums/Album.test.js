import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Albums from './Albums';

test('should render albums on the page', () => {
  render(<Albums />);
  expect(screen.getByText('sunt qui excepturi placeat culpa')).toBeTruthy();
  expect(screen.getByText('eaque aut omnis a')).toBeTruthy();
});

test('should display three images when clicking on section', () => {
  render(<Albums />);

  fireEvent.click();
});
