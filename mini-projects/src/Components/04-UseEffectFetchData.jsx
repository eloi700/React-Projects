import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  // behind async await is a promises e.g., fetch returns promise
  // if there's reject - try and catch must be used
  const getUsers = async () => {
    const response = await fetch(url); // fetch a the response
    const users = await response.json(); // turn the resp into json/obj.
    setUsers(users);
  };

  // const getUsers = () => {
  //   fetch(url)
  //   .then((resp)=> resp.json())
  //   .then(users => setUsers(users))
  // }

  //   Re-render
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
