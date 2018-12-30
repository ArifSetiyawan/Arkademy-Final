'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemesSchema extends Schema {
  up () {
    this.create('memes', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('content').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('memes')
  }
}

module.exports = MemesSchema
