import { ServicioRentas } from "../services/ServicioRentas.js";
import { ServicioCarros } from "../services/ServicioCarros.js";

//para Rentar exista Carro

export class ControladorRentas{

    constructor(){}

    async registrandoRenta(peticion,respuesta){

        let datosRenta=peticion.body

        let servicioRenta=new ServicioRentas()
	    let servicioCarros = new ServicioCarros()

        try{
		// Validacion que la Carro existe para poder hacer la Renta.
		
	    let carro = await servicioCarros.buscarCarro(datosRenta.idCarroRenta);


        console.log('Info carro:', carro);//traemos la info de la Carro, guardamos Carro y se pregunta, sí existe entra a recibir los datos para obtener la fecha y calcular cuantos días se quedo.

      // Guardar la Renta en la base de datos
           

      if (await servicioRentas.activo(datosRenta.idCarro) == null) { //verificamos y confirmamos los datos de la Carro y en caso contrario que no existan  // if(carro){

        //definimos las peticiones para con ellas tener las respuestas
        //en este caso iniciamos con las fechas de Renta se validen las fechas y estas no queden menor a la fecha final

        let fechaInicio = datosRenta.fechaInicio
        let fechaFin = datosRenta.fechaFinal
        let diferencia = new Date(fechaFin) - new Date(fechaInicio) //como pasar una resta de fechas a dias en js


        if (fechadias >= 0) { // si esto es inferior si la fecha da menos dias hacemos lo siguiente: 

          let fechadias = diferencia / (1000 * 60 * 60 * 24) ///obtenemos la diferencia en dias

          let costo = carro.precioRenta * fechadias //que por los dias calcule el costo por Renta

          datosRenta.costo = costo;

          console.log("El precio del carro según la cantidad de personas es de " + datosRenta.costoRenta);//llamemos el precio del Carro

          await servicioRentas.registrarRenta(datosRenta)
          respuesta.status(200).json({
            "mensaje": "Se ha registrado los datos exitosamente"
          })
        } else {
          respuesta.status(400).json({
            mensaje: "Fecha invalida, No tenemos maquina de tiempo para volver al pasado :("
          })
        }
      } else {
        respuesta.status(400).json({
          "mensaje": "No podemos Rentar un carro que no existe"
        })
      }
      /*respuesta.status(200).json({
        inicio: fechaInicio, 
        final: fechaFin,
        mensaje: costo,
      })*/

    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la Renta " + errorPeticion
      })
    }

  }

  async buscarRenta(peticion, respuesta) {
    let idRenta = peticion.params.idrenta //params es de express, 
    let servicioRenta = new ServicioRentas()
    // console.log("La Carro a buscar es: "+idRenta) para probar por consola
    try {
      respuesta.status(200).json({
        mensaje: "Success search the rent",
        "renta": await servicioRenta.buscarRenta(idRenta)
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async buscarRentaciones(peticion, respuesta) {
    let servicioRenta = new ServicioRentas()
    try {
      respuesta.status(200).json({
        mensaje: "Success search the rents",
        "rentas": await servicioRenta.buscarTodasRentas()
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async editarRenta(peticion, respuesta) {
    let idRenta = peticion.params.idrenta
    let datosRenta = peticion.body
    let servicioRenta = new ServicioRentas()
    try {
      await servicioRenta.editarRenta(idRenta, datosRenta)
      respuesta.status(200).json({
        mensaje: "Success editing the rent",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async eliminarRenta(peticion, respuesta) {
    let idRenta = peticion.params.idrenta
    let datosRenta = peticion.body
    let servicioRenta = new ServicioRentas()
    try {
      await servicioRenta.eliminarRenta(idRenta, datosRenta)
      respuesta.status(200).json({
        mensaje: "Success delete the rent",
      });
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }

  }


}
