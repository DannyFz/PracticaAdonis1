'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DirectorioSchema extends Schema {
  up () {
    this.create('directorios', (table) => {
      table.increments()
      table.string('nombre')
      table.string('Apellido Paterno')
      table.string('Apellido Materno')
      table.string('direccion')
      table.string('telefono')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('directorios')
  }
}

module.exports = DirectorioSchema