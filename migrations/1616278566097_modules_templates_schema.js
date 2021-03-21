'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TemplateTesteSchema extends Schema {
  up () {
    this.table('templates', (table) => {
      table.string('itu_code').nullable().after('description');
    })
  }

  down () {
    this.table('templates', (table) => {
      // reverse alternations
      table.dropColumn('itu_code')
    })
  }
}

module.exports = TemplateTesteSchema
