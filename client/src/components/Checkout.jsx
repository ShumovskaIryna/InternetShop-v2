import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  let total = 0;
  const itemList = (item) => {
    total = Math.round((total + item.prices[0].amount) * 100) / 100;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
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
              <span className="badge bg-primary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>
                  {total}
                  {state[0]?.prices[0].currency.symbol}
                </strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing information</h4>
            <form className="needs-validation" novalidate="">
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
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">Valid first name is required.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">Valid last name is required.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div className="invalid-feedback">Your username is required.</div>
                  </div>
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
              <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
