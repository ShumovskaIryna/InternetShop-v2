import React from 'react';

function Categories(props) {
  return (
    <div className="categories">
      { props?.allCategories?.map(({ name }, index) => (
        <div
          className="element"
          key={index}
          onClick={() => {
            props?.setCategory(`${name}`);
            props.refetchProducts( { categoryInput: {title: name}  });
          }}
          >
          <label>{name}</label>
        </div>
      ))}
    </div>
  )
}
export default Categories;
