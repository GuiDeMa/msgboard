/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id");

    table.string("tx_id", 255).notNullable();

    table.integer("tx_index", 255).notNullable();

    table.string("app_id", 255).notNullable();

    table.string("key", 255).notNullable();

    table.text("value").notNullable();

    table.string("nonce").nullable();

    table.string("author").nullable();

    table.unique(["tx_id", "tx_index"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("events");
};
