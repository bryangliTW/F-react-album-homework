import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

test('Should render the name in the user info block', () => {
  render(<UserInfo />);
  expect(screen.getByText('Leanna Graham')).toBeTruthy();
});

test('Should render the email in the user info block', () => {
  render(<UserInfo />);
  expect(screen.getByText('Sincere@april.biz')).toBeTruthy();
});

test('Should render the phone number in the user info block', () => {
  render(<UserInfo />);
  expect(screen.getByText('1-770-736-8031 x56442')).toBeTruthy();
});

test('Should render the website address in the user info block', () => {
  render(<UserInfo />);
  expect(screen.getByText('hildegard.org')).toBeTruthy();
});

test('Should render the company address in the user info block', () => {
  render(<UserInfo />);
  expect(screen.getByText('Romaguera-Crona')).toBeTruthy();
});
