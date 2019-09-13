const db = require('../data/db-config.js')

module.exports = {
    find,
    add
};

function find() {
    return db('projects')
    .then(projects => {
        return projects
    })
};

function add(project) {
    return db('projects')
    .insert(project)
    .then(([id]) => {
        return find()
    })
}