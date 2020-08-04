import React from 'react';
import { render } from '@testing-library/react';
import { UnauthenticatedApp } from './UnauthenticatedApp';

test('renders learn react link', () => {
  const { getByText } = render(<UnauthenticatedApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
