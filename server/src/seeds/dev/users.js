/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'dexter', last_name: 'stephens', email: 'dextertest@gmail.com', password: '123456tT#', token:'1234'}
  ]);
};
