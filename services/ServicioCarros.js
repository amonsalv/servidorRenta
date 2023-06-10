import { modeloCarro } from "../models/modeloCarro.js";
export class ServicioCarros{

    constructor(){}

    async resgistrar(datosCarro){

        let carroNuevo=new modeloCarro(datosCarro) //debo asegurarme de que cumplan el modelo de datos de Carro
        return await carroNuevo.save() //nos salve los datos

    } 
    async buscarTodasCarros(){
        let carrosConsultados=await modeloCarro.find() //el controlador responda con los datos que encontro
        return carrosConsultados
    }
    async buscarCarro(idCarro){
        let carrosConsultado=await modeloCarro.findById(idCarro) //el controlador responda con los datos que encontro
        return carrosConsultado
    }
    async editarCarro(idCarro,datosCarro){
        return await modeloCarro.findByIdAndUpdate(idCarro,datosCarro) //operacion de escritura
    }

}