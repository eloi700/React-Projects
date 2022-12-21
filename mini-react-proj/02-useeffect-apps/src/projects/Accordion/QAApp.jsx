// import React, {useState} from 'react';
import React from 'react';
import QAData from './Components/data';
import Question from './Question';

export default function QAApp() {
  // const [questions, setQuestions] = useState(QAData);
  const questionsData = QAData;
  return (
    <main>
      <div className='container'>
        <h3>Frequently Ask Questions</h3>
        <section className='info'>
          {questionsData.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}
