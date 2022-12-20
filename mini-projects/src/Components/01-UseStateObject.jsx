import React, { useState } from 'react';

export default function UseStateObject() {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'hello',
  });

  function handleClick() {
    setPerson({ ...person, message: 'How are you' });
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={handleClick} className='btn'>
        Change Message
      </button>
    </>
  );
}
