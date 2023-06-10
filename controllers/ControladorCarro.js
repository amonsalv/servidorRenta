//Estas mayusculas del proyecto es por que son clases
// tenemos que hacer 4 peticiones distintas, osea cuantos metodos distintos
import { ServicioCarros } from "../services/ServicioCarros.js";
export class ControladorCarro {

  constructor() {}

  async registrarCarro(peticion, respuesta) {//van a llegar los datos de la Carro, y revise el dato de la peticion

    let datosCarro=peticion.body //
    let servicioCarro=new ServicioCarros()
    
    try {

      if (datosCarro.precioRenta<100 && datosCarro.cantidadmaxima<1){ //podremos unas condiciones
        respuesta.status(400).json({
          "mensaje":"check the price per night and the maximum number of people admitted."
        })
      } else if(datosCarro.precioRenta<100){
        respuesta.status(400).json({
          "mensaje":"very few people in the room"
        })
      }else{
      await servicioCarro.resgistrar(datosCarro)
      respuesta.status(200).json({
        "mensaje": "Success adding the data",
      }); //dentro del objeto ponemos nuestros atributos //el try es por que funciono
      
      }

    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async buscarCarro(peticion, respuesta) {
    let idCarro=peticion.params.idcarro //params es de express, 
    let servicioCarro= new ServicioCarros()
   // console.log("La Carro a buscar es: "+idCarro) para probar por consola
    try {
      respuesta.status(200).json({
        "mensaje": "Success search the room"+idCarro,
        "carro": await servicioCarro.buscarCarro(idCarro)
      }); //dentro del objeto ponemos nuestros atributos //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }; //Buscamos el id de Carro

  async buscarabitaciones(peticion,respuesta) {
    let servicioCarro=new ServicioCarros()
    try {
      respuesta.status(200).json({
        "mensaje": "Success search the rooms",
        "carros": await servicioCarro.buscarTodasCarros()
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  } // no se necesita por que busca todas las Carros, pero debe de haber una peticion y respuesta de esto

  async editandoCarro(peticion, respuesta) {
    let idCarro=peticion.params.idcarros
    let datosCarro=peticion.body
    let servicioCarro= new ServicioCarros()
    try {
      await servicioCarro.editarCarro(idCarro,datosCarro)
      respuesta.status(200).json({
        "mensaje": "Success editing the room",         
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  } //
}
