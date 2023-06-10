import { modeloRenta } from "../models/modeloRenta.js";

export class ServicioRentas{

    constructor(){}

    async registrarRenta(datosRenta){
        let nuevarenta= new modeloRenta(datosRenta)
        return await nuevarenta.save()
    }

    async buscarTodasRentas(){
        let rentasConsultadas=await modeloRenta.find()
        return rentasConsultadas
    }

    async buscarRenta(idRenta){
        let rentasConsultada= await modeloRenta.findById(idRenta)
        return rentasConsultada
    }

    async editarRenta(idRenta,datosRenta){
        return await modeloRenta.findByIdAndUpdate(idRenta,datosRenta)
    }

    async eliminarRenta(idRenta,datosRenta){
        return await modeloRenta.findByIdAndDelete(idRenta,datosRenta)
    }

    async activo(id){
        return await modeloRenta.find({"estado":1,"idCarro":id})
    }
}
