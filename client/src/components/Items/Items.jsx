import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Items(props) {
  const {
    items
  } = props;

  return (
    <div className="">
      {items?.map((el) => (
        <Item
          key={el.id}
          item={el}
        />
      ))}
    </div>
  );
}

Items.propTypes = {
  items: PropTypes.shape(
    {
      products: PropTypes.arrayOf(PropTypes.shape(
        { name: PropTypes.string },
      )),
    },
  ).isRequired,
  onShowProduct: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,

};

export default Items;
