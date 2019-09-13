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

module.exports = router;