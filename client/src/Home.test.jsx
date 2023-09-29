import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './components/Home';

describe('With React Testing Library', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store;

  it('Another test', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MockedProvider mocks={[]} addTypename={false}>
            <Home />
          </MockedProvider>
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(`LET'S GO SHOPPING`)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
