import express from "express";
import {ControladorCarro} from '../controllers/ControladorCarro.js'//traemos el controlador de Carro y llamamos el constructor
import { ControladorRentas } from '../controllers/ControladorRentas.js'//traemos el controlador de Rentas y llamamos el constructor

let controladorCarro = new ControladorCarro()
let controladorRentas = new ControladorRentas()

//para separar las rutas de la logica de negocio
//Utilizare un metodo especial de express

//tarea de hacer las Rentas

export let rutas = express.Router();

rutas.post("/registrarcarro",controladorCarro.registrarCarro) //debemos de llamar el controlador para que procese esa informacion
rutas.get("/buscarcarros",controladorCarro.buscarabitaciones)
rutas.get("/buscarcarro/:idcarro",controladorCarro.buscarCarro) //para buscar la Carro tenemos que mandar el dato, el id va a hacer una variable que va a cambiar
rutas.put("/actualizarcarro/:idcarros",controladorCarro.editandoCarro) //recomendacion tener esto en minusculas


//Tarea cree un nuevo controlador, llamado controlador de Rentas
//agregamos los faltantes, Rentar Carro 
rutas.post('/registrarrenta', controladorRentas.registrandoRenta)
rutas.get('/buscarrentas', controladorRentas.buscandoTodasRentas)
rutas.get('/buscarrenta/:idrenta', controladorRentas.buscandoRenta)
rutas.put('/actualizarrenta/:idrenta', controladorRentas.editandoRenta)
rutas.delete('/eliminarrenta/:idrenta', controladorRentas.eliminandoRenta)