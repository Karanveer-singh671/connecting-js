exports.up = function(knex) {
  return knex.schema.table("milestones", (table) => {
    table.integer("id").reference();
  });
};
exports.down = function(knex) {
  return knex.schema.table('milestones', (table) => {
    table.dropColumn("id");
  });
};