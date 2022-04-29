import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("users"))) {
    return await knex.schema.createTable("users", function (table) {
      table.increments('id');
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('display_name').notNullable();
      table.string('avatar');
      table.integer("created_by");
      table.timestamps(true, true);
    });
  }
}


export async function down(knex: Knex): Promise<void> {
}

