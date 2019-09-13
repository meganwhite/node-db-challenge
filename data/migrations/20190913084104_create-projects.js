
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string("name",128).notNullable();
            tbl.text("description");
            tbl.boolean("completed").notNullable().defaultTo(false)
        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("name",128).unique().notNullable();
            tbl.text("description")
        })
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.text("description");
            tbl.text("notes");
            tbl.boolean("completed").notNullable().defaultTo(false);
        })
        .createTable("project_resources",tbl => {
            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
            tbl
                .integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
            tbl.primary(["project_id","resource_id"])
        }); 
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects")
};
