const db = require('../data/db-config.js')

module.exports = {
    find
};

function find() {
    return db('projects')
    .then(projects => {
        return projects
    })
};

