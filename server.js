const express = require('express');

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

const configureMiddleware = require('./configureMiddleware.js');

const server = express();

configureMiddleware(server);

server.get('/', (req, res) => {
    res.json({ api: "It's alive" });
  });

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;
