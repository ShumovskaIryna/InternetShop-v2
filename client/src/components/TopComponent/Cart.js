import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export class Cart extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={this.props.item.gallery[0]}
          className="gallery"
          alt="product"
        />
        <p className="title">{this.props.item.name}</p>
        <b className="price">
          {this.props.item.prices[0].amount}
          {this.props.item.prices[0].currency.symbol}
        </b>
        <FaTrash className="delete" onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    );
  }
}

export default Cart;
