import React from 'react';
import Value from './Value';

function ValueAttributes(props) {
  const { atributes } = props;
  return (
    <div className="values">
      {atributes?.map((el, id) => (
        <Value key={id} value={el.value} />
      ))}
    </div>
  );
}
export default ValueAttributes;
