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

router.get('/:id/tasks',(req,res) => {
    const {id} = req.params;

    Projects.findTasks(id)
    .then(tasks => {
        if(tasks.length) {
            res.json(tasks)
        }
        else {
            res.status(404).json({message: "Could not find tasks for given project"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Failed to retrieve tasks"})
    });
})

router.post('/:id/tasks', (req,res) => {
    const taskData = req.body;
    Projects.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        res.status(400).json({message:"Failed to create new task"})
    })
})

module.exports = router;