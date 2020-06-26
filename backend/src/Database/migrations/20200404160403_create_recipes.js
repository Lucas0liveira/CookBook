exports.up = function (knex) {
    return knex.schema.createTable('recipes', function (table) {
        table.increments()
        table.string('name').notNullable()

        table.string('description').notNullable()
        table.string('prepare').notNullable()

        table.blob('image').notNullable()
        table.string('videourl').notNullable()
        table.integer('category_id').notNullable()
        table.integer('prepTime').notNullable()
        table.string('prepUnit').notNullable()
        table.integer('user_id').notNullable()
        table.string('author').notNullable()
        table.integer('rating')

        table.foreign('category_id').references('id').inTable('categories')
        table.foreign('user_id').references('id').inTable('users')
        table.foreign('author').references('name').inTable('users')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('recipes')
};