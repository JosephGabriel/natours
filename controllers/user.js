const User = require('../models/user');
const factory = require('./handlerFactory');

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'This route is not defined!, Please use /signup',
  });
};

exports.getAllUsers = factory.getAll(User);

exports.getUser = factory.updateOne(User);

exports.updateUser = factory.updateOne(User);

exports.deleteUser = factory.deleteOne(User);
