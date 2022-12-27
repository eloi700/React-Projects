import React, { useState } from 'react';
import data from '../assets/01-data';
import { nanoid } from 'nanoid';

export default function Iteration() {
  const [questAns, setQuestAns] = useState(data);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () =>{
    setIsActive(current => !current)
  }

  return (
    <div>
      {questAns.map((quest) => {
        const { id, question, correct_answer, incorrect_answers } = quest;
        const choices = [correct_answer, ...incorrect_answers];
        const sortedOptions = choices.sort(() => Math.random() - 0.5);
        return (
          <div key={id}>
            <p className='quest-para'>{question}</p>
            {sortedOptions.map((option) => (
              <button key={nanoid(8)} onClick={handleClick} className={isActive ? 'btn selected' : 'btn'}>
                {option}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}

