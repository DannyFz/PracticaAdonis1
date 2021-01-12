'use strict'

const Directorio = use('App/Models/Directorio')
const {validateAll} = use('Validator')

class DirectorioController {
  //GET
  async index ({ request}) {
    return await Directorio.all();
  }
  //POST
  async store ({ request, response}) {
    const input = request.all()

  const validation = await validateAll(input, {
    
    'telefono' : 'required|unique:directorios,telefono'
  })
  if(validation.fails()){
    return validation.messages();
  }

    await Directorio.create(input)

    return response.json({
      rer:true,
      message: "Se a insertado correctamente"
    })
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
