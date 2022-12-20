import React, { useState } from 'react';

export default function Tour ({ id, image, info, name, price, removeTour }){
    const [readMore, setReadMore] = useState(false);
    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
          {/* The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied. */}
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    );
  };

