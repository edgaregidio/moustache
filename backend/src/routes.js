const express = require('express');
const UsersController = require('./controllers/UsersController');
const SessionController = require('./controllers/SessionController');
const ForgetPassController = require('./controllers/ForgetPassController');
const HairdresserController = require('./controllers/HairdresserController');

const routes = express.Router();

routes.get('/', UsersController.index);
routes.post('/register', UsersController.create);
routes.post('/', SessionController.create);

routes.get('/forgotPassword/:token/:emailHash', ForgetPassController.read);
routes.put('/forgotPassword', ForgetPassController.update);
routes.post('/forgotPassword', ForgetPassController.create);

routes.get('/cabeleireiros', HairdresserController.index);

module.exports = routes;