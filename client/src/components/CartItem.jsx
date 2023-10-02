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
    <div className="item container py-2" key={props.item.id}>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img
            className="gallery"
            src={props.item.gallery[0]}
            alt={props.item.name}
            height="200px"
            width="180px"
          />
        </div>
        <div className="col-md-2 mt-4">
          <p className="title">{props.item.name}</p>
        </div>
        <div className="col-md-2 mt-4">
          <b className="price">
            {props.item.prices[0].amount}
            {props.item.prices[0].currency.symbol}
          </b>
        </div>
        <div className="col-md-1 mt-4">
          <b className="price">{props.item.qty}</b>
        </div>
        <div className="col-md-1 mt-5">
          <FaTrash
            role="delete_button"
            className="delete"
            onClick={() => handleClose(props.item)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
