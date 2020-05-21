exports.up = function (knex) {
    return knex.schema.createTable('folders', function (table) {
        table.increments()
        table.string('folder_name').notNullable()
        table.integer('user_id').notNullable()

        table.foreign('user_id').references('id').inTable('users')
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('folders')

};