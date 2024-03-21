const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; // Change port if needed
 //enable index.js from public folder 
app.use(express.static('public'));
app.use(cors()); // Enable CORS for all origins (adjust for production)

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.post('/addCube', (req, res) => {
  console.log('Cube addition requested!');
  // Simulate sending data to Unity (replace with actual communication)
  res.send('Cube added successfully!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
