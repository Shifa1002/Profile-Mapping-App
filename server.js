// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Example route for profiles
app.get('/profiles', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', location: 'New York' },
    { id: 2, name: 'Jane Smith', location: 'London' },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
