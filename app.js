const express = require('express');
const app = express();

const morgan = require('morgan');

const globalErrorHandler = require('./controllers/error');

const tourRouter = require('./routes/tour');
const userRouter = require('./routes/user');
const AppError = require('./utils/appError');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) =>
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
);

app.use(globalErrorHandler);

module.exports = app;
