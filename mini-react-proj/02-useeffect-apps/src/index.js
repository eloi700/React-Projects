import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index-tour.css';
// import './index-reviews.css';
// import './index-accordion.css';
import './index-menu.css';

// import TourApp from './projects/Tour/TourApp'
// import ReviewsApp from './projects/Reviews/ReviewsApp'
// import QAApp from './projects/Accordion/QAApp'
import MenuApp from './projects/Menu/MenuApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TourApp /> */}
    {/* <ReviewsApp /> */}
    {/* <QAApp /> */}
    <MenuApp />
  </React.StrictMode>
);
