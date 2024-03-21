const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express to Unity!');
});

// app.post('/addCube', (req, res) => {
//   console.log('Cube addition requested!');
//   // Simulate sending data to Unity (replace with actual communication)
//   res.send('Cube added successfully!');
// });

// app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
