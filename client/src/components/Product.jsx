import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="good">
          <img
            src={this.props?.product.gallery[0]}
            className="gallery"
            alt="product"
            onClick={() => this.props?.onShowProduct(this.props.product)}
          />
          <div className="descrtiption">
            <p className="title">{this.props?.product.name}</p>
            <b className="price">
              {this.props?.product.prices[0].amount}
              {this.props?.product.prices[0].currency.symbol}
            </b>
          </div>
          <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.product)}>
            +
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
