import React from 'react';
import { useQuery } from '@apollo/client';
import MiniGallery from './MiniGallery';
import ValueAttributes from './ValueAttributes';
import { QUERIES } from '../../constants/costants';

const FullProduct = (props) => {
  const {
    error: errorProduct,
    data: dataProduct,
    loading: loadingProduct,
  } = useQuery(QUERIES.GET_PRODUCT_BY_ID, {
    variables: {id: props.productId}
  });
  console.log(errorProduct)
  return (
    <> 
    {loadingProduct ? <div> Loading...</div>
    :
      <div className="full-item">
        {' '}
        <div className="full-product-card">
          {' '}
          <div className="close" 
              onClick={() => {
                props.toggleProductDetails(current => !current)
              }}>
            Close
          </div>
          <MiniGallery photos={dataProduct.product.gallery} />
          <img src={dataProduct.product.gallery[0]} className="full-gallery" alt="product" />
          <div className="full-descrtiption">
            <p className="brand">{dataProduct.product.brand}</p>
            <p className="name">{dataProduct.product.name}</p>
            <div className="description">
              <div className="all-attributs">
                {dataProduct.product?.attributes.map((el, id) => (
                  <div className="attribut" key={id}>
                    {el.name}:
                    <ValueAttributes atributes={el.items} />
                  </div>
                ))}
              </div>
              <b className="price">
                <p className="atribut">Price:</p>
                {dataProduct.product.prices[0].amount}
                {dataProduct.product.prices[0].currency.symbol}
              </b>
              <div
                className="full-add-to-cart"
                // onClick={() => this.props.onAdd(dataProduct.product)}
                title="Add to cart"
              >
                <label className="cart-label">Add to cart</label>
              </div>
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: dataProduct.product.description }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}
export default FullProduct;
