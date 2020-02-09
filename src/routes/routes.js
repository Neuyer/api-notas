const { Router } = require('express');
const NotasController = require('../controllers/NotasController');
const ADMController = require('../controllers/ADMController');
const Verify = require('../services/VerifyService');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const routes = Router();

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/notas', Verify.verify, NotasController.index);

routes.get('/notas/:id', Verify.verify, NotasController.findById);

routes.post('/notas', Verify.verify, NotasController.create);

routes.put('/notas/:id', Verify.verify, NotasController.update);

routes.delete('/notas/:id', Verify.verify, NotasController.delete);

routes.post('/signin', ADMController.signIn);

routes.post('/login', ADMController.logIn);


module.exports = routes;