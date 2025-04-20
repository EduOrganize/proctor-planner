import React, {useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('Loading...');

  // Call the backend API endpoint to fetch the "Hello World" message
  const getHello = () => {
    axios.get('/api/hello')
      .then(({ data }) => {
        console.log('Data:', data);
        return setMessage(data.message);
      })
      .catch(err => {
        console.error("Failed to getHello: ", err);
        setMessage("Error loading message.");
      });
  };

  useEffect(() => {
    getHello();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Home;
