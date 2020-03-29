const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile',ProfileController.index);

//Método para listar todas as ongs
routes.get('/ongs', OngController.index);
//Fim do método para listar todas as ongs
//Método para inserir ongs no banco
routes.post('/ongs', OngController.create);
//Fim do método para inserir ongs no banco
//Método para listar incidents
routes.get('/incidents',IncidentController.index);
//Fim do método para listar incidentes
//Método para cadastrarincidents
routes.post('/incidents',IncidentController.create);
//Fim do método para cadastrar incidentes
//Método para excluir incidents
routes.delete('/incidents/:id',IncidentController.delete);
//Fim do método para excluir incidentes

module.exports = routes;
