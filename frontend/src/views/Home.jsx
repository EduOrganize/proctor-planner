import React, {useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('Loading...');

  // Call the backend API endpoint to fetch the "Hello World" message
  const getHello = () => {
    fetch('/api/hello')
      .then(response => {
        console.log('Response:', response);
        return response.text();
      })
      .then(data => {
        console.log('Response.text() (After Promise Returns):', data);
        return setMessage(data);
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
