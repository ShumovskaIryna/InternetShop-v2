import React from 'react'
import Value from './Value';

function ValueAttributes(props) {
     const {
    atributes
     } = props;
    console.log(props, 4)
    return (
      <div className="attributes">
            {atributes?.map((el, id) => (
                <Value
                 key={id}
                 value={el.displayValue}/>
            ))}
      </div>
    )
  }
export default ValueAttributes