const express = require('express')

const ProjectRouter = require('../projects/projectRouter.js');
const ResourceRouter = require('../resources/resourceRouter.js')

const server = express();

server.use(express.json());
server.use('/api/projects',ProjectRouter);
server.use('/api/resources',ResourceRouter)

server.get("/",(req,res) => {
    res.status(200).json({message: "up"})
})

module.exports = server;