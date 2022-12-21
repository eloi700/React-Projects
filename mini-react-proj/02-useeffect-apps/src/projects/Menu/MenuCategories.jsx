import React from 'react';

export default function MenuCategories({ categories, filterDataItems }) {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterDataItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
