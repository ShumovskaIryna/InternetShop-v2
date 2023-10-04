import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteItem, addItem, deleteAllItems } from '../redux/actions/index';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deleteItem(item));
  };
  const addProduct = (product) => {
    dispatch(addItem(product));
  };
  const deleteProduct = (product) => {
    dispatch(deleteAllItems(product));
  };
  return (
    <div className="item" key={props.item.id}>
      <img className="gallery_cart" src={props.item.gallery[0]} alt={props.item.name} />
      <p className="title">{props.item.name}</p>
      <b className="price">
        {props.item.prices[0].amount}
        {props.item.prices[0].currency.symbol}
      </b>
      <b className="qty">
        <button className="plus" onClick={() => addProduct(props?.item)}>
          +
        </button>
        {props.item.qty}
        <button className="minus" onClick={() => handleClose(props?.item)}>
          -
        </button>
      </b>
      <FaTrash role="delete_button" className="delete" onClick={() => deleteProduct(props.item)} />
    </div>
  );
};

export default CartItem;
