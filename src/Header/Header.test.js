import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should render a title in ht header section', () => {
  const mockUser = { name: 'Bryan', userName: 'bryannnnn' };
  render(<Header user={mockUser} />);

  expect(screen.getByText("Bryan's Album")).toBeTruthy();
});
