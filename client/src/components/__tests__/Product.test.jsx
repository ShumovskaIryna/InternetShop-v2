import Product from '../Product';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import * as reduxHooks from 'react-redux';
import * as actions from '../../redux/actions/index';

jest.mock('react-redux');
const product = {
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

describe('Product', () => {
  it('should create Product', () => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    const view = render(<Product product={product} />);
    expect(view).toMatchSnapshot();
  });

  it('should dispatch action addItem', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    const mockedAddProduct = jest.spyOn(actions, 'addItem');
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Product product={product} />
      </MockedProvider>
    );
    fireEvent.click(screen.getByRole('add_button'));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedAddProduct).toHaveBeenCalledWith(product);
  });
});
