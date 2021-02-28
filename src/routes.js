const express = require('express')
const routes = express.Router()
const knex = require('./database/index')

const userController = require('./controllers/userController')


routes.get('/users', userController.index);

module.exports = routes