'use strict'

/*
|--------------------------------------------------------------------------
| DirectorioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class DirectorioSeeder {
static  async run () {

  await Database.table('directorios').insert([
       {
        'nombre' : 'Daniel',
        'Apellido Paterno' : 'Escajeda',
        'Apellido Materno' : 'Calvillo',
        'direccion' : 'free fire',
        'telefono' : 1435412,
       },
       {
        'nombre' : 'Jose Luis',
        'Apellido Paterno' : 'Ibarra',
        'Apellido Materno' : 'Llamas',
        'direccion' : 'Forcho',
        'telefono' : 9865512,
       }

    ])
  }
}

module.exports = DirectorioSeeder
