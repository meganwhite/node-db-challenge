const db = require('../data/db-config.js')

module.exports = {
    find,
    add,
};

function find() {
    return db('projects')
    .then(projects => {
        return projects.map(project => {
            project.completed = project.completed ? true : false;
            return project;
        })
    })
};

function add(project) {
    return db('projects')
    .insert(project)
    .then(() => {
        return find()
    })
}
