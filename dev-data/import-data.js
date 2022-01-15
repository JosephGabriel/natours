const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });

const Tour = require('../models/tour');
const Review = require('../models/review');
const User = require('../models/user');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Banco ok');
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/data/tours.json`, 'utf8')
);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/data/users.json`, 'utf8')
);

const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/data/reviews.json`, 'utf8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
}

if (process.argv[2] === '--delete') {
  deleteData();
}
