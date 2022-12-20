import React, { useState } from 'react';

export default function UseStateCounter() {
  const [value, setValue] = useState(0);

  function reset() {
    setValue((prevValue) => (prevValue === 0 ? value : 0));
  }
  // OR setValue(0)

  function tmIncrease() {
    setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
  }
  return (
    <section style={{ margin: '4rem 0' }}>
      <h2 className='title-counter'>Counter</h2>
      <h1 className='value-counter'>{value}</h1>
      <button onClick={() => setValue(value - 1)} className='dec-btn'>
        Decrease
      </button>
      <button onClick={reset} className='dec-btn'>
        Reset
      </button>
      <button onClick={() => setValue(value + 1)} className='inc-btn'>
        Increase
      </button>

      <h2 className='title-counter'>Counter in Time-Out</h2>
      <h1 className='valuetm-counter'>{value}</h1>
      <button onClick={tmIncrease} className='tm-btn'>
        Increase Later
      </button>
    </section>
  );
}
