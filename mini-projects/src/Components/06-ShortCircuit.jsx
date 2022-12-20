import React, { useState } from 'react';

export default function ShortCircuit() {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  //   const firstValue = text || 'Hello World';
  //   const secondValue = text && 'Hello World';

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      {/* {text && <h1>Hello World</h1>}
    {!text && <h1>Hello World</h1>} */}
      <button onClick={() => setIsError(!isError)} className='btn'>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>There's an Error</h1> : <h1>No Error</h1> }
    </>
  );
}
