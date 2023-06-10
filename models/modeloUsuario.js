import mongoose from 'mongoose';

const Schema = mongoose.Schema; //voy a definir un esquema de datos

//construimos el esquema personalizando la informacion
const Usuario=new Schema ({
    usuario: {
        type:String,
        required:true
    }, //otro objeto para poner el tipo de dato
    nombre:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:Boolean,
        required:true
    },
    reservword:{
        type:String,
        required:true
    }
}) //

export const modeloCarro=mongoose.model('carro',Carro)