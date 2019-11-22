const express = require('express');
const users = require('../routes/users');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const returns = require('../routes/returns');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
   app.use(express.json());
   app.use('/api/auth', auth);
   app.use('/api/rentals', rentals);
   app.use('/api/movies', movies);
   app.use('/api/genres', genres);
   app.use('/api/customers', customers);
   app.use('/api/users', users);
   app.use('/api/returns', returns);
   app.use(error);
}