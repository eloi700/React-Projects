import React from 'react';

const Book = ({ img, title, author }) => {
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='book for kids' />
      <h4>{title}</h4>
      <h6>{author}</h6>
      <button type='button' onClick={() => console.log(title)}>
        CLICK
      </button>
    </article>
  );
};

export default Book;
