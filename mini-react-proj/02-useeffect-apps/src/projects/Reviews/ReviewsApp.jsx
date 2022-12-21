import React from 'react';
import Review from './Review';

export default function ReviewsApp() {
  return (
    <section className='container'>
      <div className='title'>
        <h2>our reviews</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
  );
}
