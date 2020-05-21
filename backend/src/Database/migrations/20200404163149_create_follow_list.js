exports.up = function (knex) {
    return knex.schema.createTable('follow_list', function (table) {
        table.increments()
        table.integer('follow_id').notNullable()
        table.integer('followed_id').notNullable()

        table.foreign('follow_id').references('id').inTable('users')
        table.foreign('followed_id').references('id').inTable('users')
    })


};

exports.down = function (knex) {
    return knex.schema.dropTable('follow_list')
};