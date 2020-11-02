import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should render a title in the header section', () => {
  const mockUser = { name: 'Bryan', userName: 'bryannnnn' };
  render(<Header user={mockUser} />);

  expect(screen.getByText("Bryan's Album")).toBeTruthy();
});

test('should render a welcome message in the header section', () => {
  const mockUser = { name: 'Bryan', username: 'bryannnnn' };
  render(<Header user={mockUser} />);

  expect(screen.getByText('Hi, bryannnnn')).toBeTruthy();
});
