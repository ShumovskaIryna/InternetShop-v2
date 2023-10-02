import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      {state.length ? (
        <>
          <div className="white_cart">
            {state.map((el) => (
              <CartItem key={el.id} item={el} />
            ))}
            <div className="container">
              <div className="row">
                <Link to="/checkout" className="btn btn-outline-primary mt-2 cheackout_btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="px-5 my-5 rounded-3 py-3">
          <div className="container py-2">
            <div className="row">
              <h3 className="title">Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
