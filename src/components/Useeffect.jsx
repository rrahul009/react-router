import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material'; // Import Material-UI components

const Useeffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data); // Store the API response data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Useeffect</h1>
      {data.map((item, index) => (
        <Card key={index} style={{ margin: '10px', padding: '10px' }}>
          <CardContent>
            <Typography variant="h6" component="div">
                {item.id}
              {item.title}
              {item.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Useeffect;
