import getTotalQty from '../../helpers/NavbarHelper'

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
          amount: 700,
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

describe('getTotalQty', () => {

  it('should get TotalQty', () => {
    expect(getTotalQty(state)).toEqual(2);
  });
});
