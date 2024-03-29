exports.up = knex => knex.schema.createTable("movieNotes", table => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description");
    table.integer("rating");
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("movieNotes");
