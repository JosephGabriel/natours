const express = require('express');
const app = express();

const morgan = require('morgan');

const tourRouter = require('./routes/tour');
const userRouter = require('./routes/user');

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
