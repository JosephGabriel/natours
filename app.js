const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    resulst: tours.length,
    data: {
      tours,
    },
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
