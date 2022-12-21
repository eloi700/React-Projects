import React, { useState } from 'react';
import ReviewsData from './Components/data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = ReviewsData[index];

  const checkIndexNumber = (indexNumber) => {
    if (indexNumber > ReviewsData.length - 1) { // last index of data
      return 0;
    }
    if (indexNumber < 0) {
      return ReviewsData.length - 1;
    }
    return indexNumber; // return whatever comes in the above condition
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndexNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * ReviewsData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndexNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Ramdom
      </button>
    </article>
  );
}
