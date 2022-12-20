// import React, { useState, useEffect } from 'react';

// export default function UseEffect() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Call Message');
//     if (value >= 0) {
//       document.title = `New Message (${value})`;
//     }
//   },[value]);

//   console.log('Render Message');

//   return (
//     <div>
//       <h1 className='value'>{value}</h1>
//       <button onClick={() => setValue(value + 1)} className='btn'>
//         Click Me
//       </button>
//     </div>
//   );
// }

// Another Example: useEffect( ) Hook with Clean-Up
import React, { useEffect, useState } from 'react';

function UseEffectPosts() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // SIDE-EFFECT
    return () => { // CLEAN-UP
      window.removeEventListener('resize', handleResize);
    };
  }, []); // RE-INITIALIZING THE VALUE

  return (
    <div>
      <h3>Window Size</h3>
      <div className='window-size'>{windowWidth}px</div>
    </div>
  );
}

export default UseEffectPosts;
