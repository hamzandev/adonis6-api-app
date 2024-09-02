import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('name')
      table.integer('price')
      table.text('description').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('category_id').defaultTo(null)

      table.foreign('category_id')
        .references('categories.id')
        .onUpdate('cascade')
        .onDelete('set null')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}