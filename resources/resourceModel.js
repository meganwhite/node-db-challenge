const db = require("../data/db-config.js")

module.exports = {
    findResources,
    addResource
}

function findResources() {
    return db("resources1")
}

function addResource(resource) {
    return db("resources1").insert(resource)

}