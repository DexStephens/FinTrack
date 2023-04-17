  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.up = function(knex) {
    return knex.schema.createTable('incomes', function (table) {
        table.increments('income_id').primary();
        table.integer('amount').notNullable();
        table.date('date').notNullable();
        table.string('description').notNullable();
        table.string('category').notNullable();
        table.string('notes').notNullable();
        table.integer('user_id').unsigned().references('id').inTable('users');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('incomes');
};
