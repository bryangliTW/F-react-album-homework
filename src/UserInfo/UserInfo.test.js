import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

describe('Render User Information', () => {
  const user = {
    name: 'Leanna Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
    },
  };

  it('Should render the name in the user info block', () => {
    render(<UserInfo user={user} />);
    expect(screen.getByText('Leanna Graham')).toBeTruthy();
  });

  it('Should render the email in the user info block', () => {
    render(<UserInfo user={user} />);
    expect(screen.getByText('Sincere@april.biz')).toBeTruthy();
  });

  it('Should render the phone number in the user info block', () => {
    render(<UserInfo user={user} />);
    expect(screen.getByText('1-770-736-8031 x56442')).toBeTruthy();
  });

  it('Should render the website address in the user info block', () => {
    render(<UserInfo user={user} />);
    expect(screen.getByText('hildegard.org')).toBeTruthy();
  });

  it('Should render the company address in the user info block', () => {
    render(<UserInfo user={user} />);
    expect(screen.getByText('Romaguera-Crona')).toBeTruthy();
  });
});
