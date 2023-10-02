import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions/index';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div className="item" key={props.item.id}>
      <img className="gallery_cart" src={props.item.gallery[0]} alt={props.item.name} />
      <p className="title">{props.item.name}</p>
      <b className="price">
        {props.item.prices[0].amount}
        {props.item.prices[0].currency.symbol}
      </b>
      <b className="price">
        <span>-</span>
        {props.item.qty}
        <span>+</span>
      </b>
      <FaTrash role="delete_button" className="delete" onClick={() => handleClose(props.item)} />
    </div>
  );
};

export default CartItem;
