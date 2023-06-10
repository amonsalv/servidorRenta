import mongoose from 'mongoose';

const Schema = mongoose.Schema; //voy a definir un esquema de datos

//construimos el esquema personalizando la informacion
const Carro=new Schema ({
    placa: {
        type:String,
        required:true
    }, //otro objeto para poner el tipo de dato
    marca:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    },
    valordia:{
        type:Number,
        required:true
    }
}) //

export const modeloCarro=mongoose.model('carro',Carro)