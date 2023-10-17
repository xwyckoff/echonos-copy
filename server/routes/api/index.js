const Router = require('express').Router();
const userRoutes = require('./userRoutes');
const partRoutes = require('./partRoutes');

Router.use('/user', userRoutes);
Router.use('/parts', partRoutes);