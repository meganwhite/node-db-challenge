const db = require("../data/db-config.js")

module.exports = {
    findTasks,
    addTask
}

function findTasks() {
    return db("tasks as t")
    .join("projects as p","p.id",'=',"t.project_id")
    .select(
        "t.id",
        "t.project_id",
        "t.description",
        "t.notes",
        "t.completed as task_completed",
        "p.name as project_name",
        "p.description as project_description"
    )
};

function addTask(task) {
    return db("tasks")
    .insert(task)
}