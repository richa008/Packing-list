import React from 'react';
import { render, screen } from '@testing-library/react';
import PackingList from './packing-list';

test('renders learn react link', () => {
  render(<PackingList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
