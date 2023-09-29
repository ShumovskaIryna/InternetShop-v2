import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store;

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MockedProvider mocks={[]} addTypename={false}>
            <App />
          </MockedProvider>
        </Provider>
      </BrowserRouter>
    );

    expect(null).toBeNull();
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
