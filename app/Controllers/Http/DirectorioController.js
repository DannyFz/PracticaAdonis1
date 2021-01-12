'use strict'

const Directorio = use('App/Models/Directorio')

class DirectorioController {
  
  async index ({ request, response}) {
    return await Directorio.all();
  }

  async store ({ request, response}) {
  }

  async show ({ params, request, response}) {
    return await Directorio.findOrFail(params.id)
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = DirectorioController
