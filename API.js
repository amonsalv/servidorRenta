import express from 'express'
import cors from 'cors' 
import {rutas} from './routes/rutas.js'
import { establecerConexion } from './database/conexion.js'

export class API{
    constructor(){
        this.app = express() //app es express
        this.connectDB()
        this.routingRequests()
    }

    serverAwakeing(){
        this.app.listen(3000,()=>console.log("Servidor encendido...")) //variable de entorno
    }
    routingRequests(){
        this.app.use(cors())//enrutamos las peticiones
        this.app.use(express.json())//Habilitamos la recepcion de datos desde el body
        this.app.use('/',rutas) //habilitamos las rutas o end points
    }
    connectDB(){
        establecerConexion()
    }

}
