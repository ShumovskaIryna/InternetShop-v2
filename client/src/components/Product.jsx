import React, { useState } from 'react';
import FullProduct from './FullProduct/FullProduct';

const Product = (props) => {
  const [shouldShowProductDetails, toggleProductDetails] = useState(false);
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
          {/* <div className="add-to-cart" onClick={() => props.onAdd(props.)}>
            +
          </div> */}
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
