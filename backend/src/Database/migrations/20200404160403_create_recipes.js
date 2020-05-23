exports.up = function (knex) {
    return knex.schema.createTable('recipes', function (table) {
        table.increments()
        table.string('name').notNullable()

        table.string('description').notNullable()
        table.string('prepare').notNullable()

        table.string('image').notNullable()
        table.string('video').notNullable()
        table.integer('category_id').notNullable()
        table.integer('prepTime').notNullable()
        table.string('prepUnit').notNullable()
        table.integer('rating')

        table.foreign('category_id').references('id').inTable('categories')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('recipes')
};