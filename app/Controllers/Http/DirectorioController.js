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

  //get
  async show ({ params, request, response}) {
    return await Directorio.findOrFail(params.id)
  }

  //put
  async update ({ params, request, response }) {
    const input = request.all()

  const validation = await validateAll(input, {
    
    'telefono' : 'required|unique:directorios,telefono,id,' + params.id
  })
  if(validation.fails()){
    return validation.messages();
  }

    await Directorio.query().where('id' , params.id).update(input)

    return response.json({
      rer:true,
      message: "Se a modificado correctamente"
    })
  }

  //delete
  async destroy ({ params, response}) {
    const directorio = await Directorio.findOrFail(params.id)
    await directorio.delete()

    return response.json({
      rer:true,
      message: "El registro a sido eliminado"
    })
  }
}

module.exports = DirectorioController
