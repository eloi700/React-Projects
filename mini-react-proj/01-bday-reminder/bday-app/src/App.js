import React, { useState } from 'react';
import {data} from '../src/data';
import List from './List';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>{people.length} Birthdays Today</h3>
        <List people = {people}/>
        <button onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
