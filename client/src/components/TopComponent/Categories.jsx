import React from 'react';

function Categories(props) {
  return (
          <div className="categories">
            { props?.allCategories?.map(({ name }, index) => (
            <div
              className="element"
              key={index}
              >
              <label>{name}</label>
            </div>
          ))}
        </div>
  )
}
export default Categories;
