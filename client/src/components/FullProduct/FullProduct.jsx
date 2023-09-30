import React from 'react';
import { useQuery } from '@apollo/client';
import MiniGallery from './MiniGallery';
import SomeErrorScreen from '../SomeErrorScreen';
import ValueAttributes from './ValueAttributes';
import { QUERIES } from '../../constants/costants';

const FullProduct = (props) => {
  const {
    error: errorProduct,
    data: dataProduct,
    loading: loadingProduct,
  } = useQuery(QUERIES.GET_PRODUCT_BY_ID, {
    variables: { id: props.productId },
  });

  return (
    <>
      {errorProduct ? (
        <SomeErrorScreen toggleProductDetails={props.toggleProductDetails} />
      ) : (
        <>
          {loadingProduct ? (
            <></>
          ) : (
            <div className="black">
              {' '}
              <div className="white">
                {' '}
                <div
                  className="close"
                  onClick={() => {
                    props.toggleProductDetails((current) => !current);
                  }}
                >
                  Close
                </div>
                <div className="full-container">
                  <div className="full-gallery">
                    <MiniGallery photos={dataProduct.product.gallery} />
                    <img src={dataProduct.product.gallery[0]} className="image" alt="product" />
                  </div>
                  <div className="full-descrtiption">
                    <p className="brand">{dataProduct.product.brand}</p>
                    <p className="name">{dataProduct.product.name}</p>
                    <div className="description">
                      <div className="all-attributs">
                        {dataProduct.product?.attributes.map((el, id) => (
                          <div key={id}>
                            <p className="attribut">{el.name}:</p>
                            <ValueAttributes atributes={el.items} />
                          </div>
                        ))}
                      </div>
                      <b className="price">
                        <p className="attribut">Price:</p>
                        {dataProduct.product.prices[0].amount}
                        {dataProduct.product.prices[0].currency.symbol}
                      </b>
                      <div
                        className="full_add_button"
                        onClick={() => props.addProduct(dataProduct.product)}
                        title="Add to cart"
                      >
                        <label className="add-label">Add to cart</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="full-container">
                  <p
                    className="content"
                    dangerouslySetInnerHTML={{ __html: dataProduct.product.description }}
                  ></p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default FullProduct;
