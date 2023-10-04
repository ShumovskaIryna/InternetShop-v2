import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import getTotalQty from '../helpers/NavbarHelper';
import getTotalPrice from '../helpers/CheckoutHelper';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    dispatch(addName(e.target.value));
    setInputValue(e.target.value);
  };
  const itemList = (item) => {
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <span className="qtyItem">{item.qty} x</span>
          <h6 className="my-0">{item.name}</h6>
        </div>
        <span className="text-muted">
          {item.prices[0].amount}
          {item.prices[0].currency.symbol}
        </span>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{getTotalQty(state)}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong className="qtyItem">
                  {getTotalPrice(state)}
                  {state[0]?.prices[0].currency.symbol}
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing information</h4>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value={inputValue}
                  onChange={handleChange}
                  required=""
                />
                <div className="invalid-feedback">Valid first name is required.</div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address htmlFor shipping updates.
                </div>
              </div>
            </div>
            <Link to="/submit" className="w-100 btn btn-primary btn-lg mt-5" type="submit">
              Continue to checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
