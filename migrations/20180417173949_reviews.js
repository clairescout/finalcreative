
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reviews', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('review');
      table.dateTime('created');
      table.integer('item_id').unsigned().notNullable().references('id').inTable('items');
    }),
  ]);

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews'),
  ]);

};
