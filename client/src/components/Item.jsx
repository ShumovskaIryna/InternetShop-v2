import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="good">
          <img
            src={this.props?.item.gallery[0]}
            className="gallery"
            alt="product"
            onClick={() => this.props?.onShowProduct(this.props.item)}
          />
          <div className="descrtiption">
            <p className="title">{this.props?.item.name}</p>
            <b className="price">
              {this.props?.item.prices[0].amount }
              {this.props?.item.prices[0].currency.symbol}
            </b>
          </div>
          <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    );
  }
}
export default Item;
