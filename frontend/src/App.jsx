import React, {useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  // Call the backend API endpoint to fetch the "Hello World" message
  const getHello = () => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
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

export default App;
