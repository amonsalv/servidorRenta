import mongoose from 'mongoose';

const Schema = mongoose.Schema; //voy a definir un esquema de datos

//construimos el esquema persdonalizando la informacion

const Renta =new Schema({
	usuario:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    idCarroRenta:{
        type:String,
        required:true
    },
    costoRenta: {
        type: Number,
        required: false
    }
})

export const modeloRenta = mongoose.model('renta',Renta)