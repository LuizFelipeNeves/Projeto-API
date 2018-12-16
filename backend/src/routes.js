const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

// Users
routes.get('/users', UserController.user_list);
routes.get('/users/:id', UserController.user_getbyid);
routes.post('/users', UserController.user_create);
routes.patch('/users/:id', UserController.user_update);
routes.delete('/users/:id', UserController.user_delete);

// Phone
routes.get('/users/:id/phone', UserController.phone_list);
routes.post('/users/:id/phone/:number', UserController.phone_create);
routes.patch('/users/:id/phone', UserController.user_update);
routes.delete('/users/:id/phone/:number', UserController.phone_delete);

module.exports = routes;


