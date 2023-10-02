import React from 'react';
// import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from '../Cart';

jest.mock('react-redux');

const state = [
  {
    id: 'ps-5',
    name: 'PlayStation 5',
    inStock: false,
    prices: [
      {
        amount: 800,
        currency: {
          label: 'USD',
          symbol: '$',
        },
      },
      {
        amount: 600,
        currency: {
          label: 'GBP',
          symbol: '£',
        },
      },
    ],
    gallery: [
      'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
    ],
    qty: 1,
  },
  {
    id: 'Jacket',
    name: 'Jacket',
    inStock: false,
    prices: [
      {
        amount: 800,
        currency: {
          label: 'USD',
          symbol: '$',
        },
      },
      {
        amount: 600,
        currency: {
          label: 'GBP',
          symbol: '£',
        },
      },
    ],
    gallery: [
      'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
    ],
    qty: 1,
  },
];

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Cart', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store;
  it('should create cart list with empty cart', () => {
    // useSelector.mockReturnValue([]);
    mockedUseSelector.mockReturnValue([]);
    const view = render(<Cart />);
    expect(view).toMatchSnapshot();
  });

  it('should create cart list with state', () => {
    // useSelector.mockReturnValue(state);
    mockedUseSelector.mockReturnValue(state);
    store = mockStore(initialState);
    const utils = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(utils).toMatchSnapshot();
    expect(screen.getByText('PlayStation 5')).toBeInTheDocument();
  });
});
