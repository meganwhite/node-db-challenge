const express = require('express')

const ProjectRouter = require('../projects/projectRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects',ProjectRouter);

server.get("/",(req,res) => {
    res.status(200).json({message: "up"})
})

module.exports = server;