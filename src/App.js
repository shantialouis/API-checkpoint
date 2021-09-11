import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setListOfUSer(res.data))
      .catch(err => setError(err));
  }, []);
  return (
    <>
      <div className='title'><h1>FUGITIVE LIST</h1></div>
      <div className="App-header">
      {error? 
      (<h2>YOU HAVE AN ERROR</h2>) 
      : 
      (listOfUSer.map(user => {
        return(
          <UserList key={user.id} user={user} />
        )
      }))}
      
    </div>
    </>
  );
  
}

export default App;