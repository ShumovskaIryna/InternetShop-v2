import React, { useState } from 'react';
import FullProduct from './FullProduct/FullProduct';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/index';

const Product = (props) => {
  const [shouldShowProductDetails, toggleProductDetails] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addItem(product));
  };
  return (
    <>
      <div className="product-card">
        <div className="good">
          <img
            src={props?.product.gallery[0]}
            className="gallery"
            alt="product"
            onClick={() => {
              toggleProductDetails((current) => !current);
            }}
          />
          <div className="descrtiption">
            <p className="title">{props?.product.name}</p>
            <b className="price">
              {props?.product.prices[0].amount}
              {props?.product.prices[0].currency.symbol}
            </b>
          </div>
          <div className="add-to-cart" onClick={() => addProduct(props?.product)}>
            +
          </div>
        </div>
      </div>
      {shouldShowProductDetails ? (
        <FullProduct
          shouldShowProductDetails={shouldShowProductDetails}
          toggleProductDetails={toggleProductDetails}
          productId={props?.product.id}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default Product;
