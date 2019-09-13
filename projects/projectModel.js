const db = require('../data/db-config.js')

module.exports = {
    find,
    add,
    findTasks
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

function findTasks(id) {
    return db('tasks as t')
    .join("projects as p","p.id",'=',"t.project_id")
    .select(
        "t.id",
        "t.description",
        "t.notes",
        "t.completed",
        "p.name",
        "p.description"
    )
    .where("p.id",id)
};