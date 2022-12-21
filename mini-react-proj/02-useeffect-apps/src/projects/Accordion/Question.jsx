import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function QAApp({ title, info }) {
  const [toggleInfo, setToggleInfo] = useState(false);
  return (
    <article>
      <header className='q-header'>
        <h4 className='q-title' >{title}</h4>
        <button onClick={() => setToggleInfo(!toggleInfo)} className='btn'>
          {toggleInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggleInfo && <p>{info}</p>}
    </article>
  );
}
