
exports.up = function (knex) {
    return knex.schema.createTable('ingredients', function (table) {
        table.increments()
        table.integer('recipe_id').notNullable()
        table.integer('quantity').notNullable()
        table.string('measure').notNullable()
        table.string('ingredient').notNullable()

        table.foreign('recipe_id').references('id').inTable('recipes')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('ingredients')
};
