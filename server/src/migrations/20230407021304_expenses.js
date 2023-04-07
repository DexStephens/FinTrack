/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('expenses', function (table) {
        table.increments('expense_id').primary();
        table.string('description');
        table.integer('amount');
        table.date('date');
        table.string('category');
        table.string('location');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('expenses');
};
