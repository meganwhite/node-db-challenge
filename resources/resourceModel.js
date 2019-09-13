const db = require("../data/db-config.js")

module.exports = {
    findResources,
    addResource
}

function findResources() {
    return db("resources")
}

function addResource(resource) {
    return db("resources").insert(resource)

}