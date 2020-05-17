exports.up = function (knex) {
    return knex.schema.createTable('folder_content', function (table) {
        table.increments()
        table.integer('folder_id').notNullable()
        table.integer('recipe_id').notNullable()

        table.foreign('folder_id').references('id').inTable('folders')
        table.foreign('recipe_id').references('id').inTable('recipes')
    })


};

exports.down = function (knex) {
    return knex.schema.dropTable('follow_list')
};