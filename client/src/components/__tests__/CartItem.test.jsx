import CartItem from '../CartItem';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../../redux/actions/index';
import React from 'react';
import '@testing-library/jest-dom';

jest.mock('react-redux');

const item = {
  id: 'ps-5',
  name: 'PlayStation 5',
  inStock: false,
  prices: [
    {
      amount: 844.02,
      currency: {
        label: 'USD',
        symbol: '$',
      },
    },
    {
      amount: 606.67,
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
};

const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
describe('CartItem', () => {
  it('should create CartItem', () => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    const view = render(<CartItem item={item} />);
    expect(view).toMatchSnapshot();
  });

  it('should dispatch action deleteItem', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    const mockedAddProduct = jest.spyOn(actions, 'deleteItem');
    render(<CartItem item={item} />);
    fireEvent.click(screen.getByRole('delete_button'));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedAddProduct).toHaveBeenCalledWith(item);
  });
});
