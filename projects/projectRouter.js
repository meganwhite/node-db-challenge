const express = require('express')
const Projects = require('./projectModel.js');
const router = express.Router();

router.get('/',(req,res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to retrieve projects"})
    })
});

router.post('/', (req,res) => {
    const projectData = req.body;

    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        res.status(500).json({message: "Failed to create new project"})
    })
})


module.exports = router;