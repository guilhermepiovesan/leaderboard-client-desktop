import * as React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Leaderboard from './Leaderboard';
import { API_HOST } from '../../../api';

const server = setupServer(
  rest.get(`${API_HOST}/api/players`, (req, res, ctx) => {
    return res(
      ctx.json([
        { id: '3tJMEPrQl77MYQzSM4wl', name: 'Mylena', wins: 6 },
        { id: 'NihEKxwEbeE5JsjWvi3e', name: 'John', wins: 8 },
        { id: 'VnV6IgjQEQlkqOr4te9d', name: 'Guilherme', wins: 4 },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays loading', async () => {
  render(<Leaderboard />);

  expect(screen.getByText('Loading')).toBeVisible();
});

test('loads and displays the three players', async () => {
  render(<Leaderboard />);

  await waitForElementToBeRemoved(screen.getByText('Loading'));

  expect(screen.getByText('Mylena')).toBeVisible();
  expect(screen.getByText('John')).toBeVisible();
  expect(screen.getByText('Guilherme')).toBeVisible();
});
