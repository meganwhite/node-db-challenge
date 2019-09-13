exports.up = function(knex) {
    return knex.schema
        .createTable("projects1", tbl => {
            tbl.increments();
            tbl.string("name",128).notNullable();
            tbl.text("description");
            tbl.boolean("completed").notNullable().defaultTo(false)
        })
        .createTable("resources1", tbl => {
            tbl.increments();
            tbl.string("name",128).unique().notNullable();
            tbl.text("description")
        })
        .createTable("tasks1", tbl => {
            tbl.increments();
            tbl.text("description");
            tbl.text("notes");
            tbl.boolean("completed").notNullable().defaultTo(false);
            tbl
                .integer("project_id")
                .notNullable()
                .references("id")
                .inTable("projects");
        })
        .createTable("project_resources1",tbl => {
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
        .dropTableIfExists("project_resources1")
        .dropTableIfExists("tasks1")
        .dropTableIfExists("resources1")
        .dropTableIfExists("projects1")
};
