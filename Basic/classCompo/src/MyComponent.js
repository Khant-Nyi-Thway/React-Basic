// src/MyComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './api'; // Adjust the path based on where your api.js is located

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData('/data', 'your query here');
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
