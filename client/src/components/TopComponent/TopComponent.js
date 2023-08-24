import React from 'react';
import Categories from './Categories';

export default function TopComponent(props) {

  return (
    <header className="header">
      <Categories
        allCategories={props.allCategories}
      />
      <span className="logo">
        <img
          className="brand-logo"
          src="logo.png"
          alt="logo"
        />
      </span>
      
    </header>
  );
}
