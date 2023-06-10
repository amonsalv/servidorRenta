import mongoose from 'mongoose';

export async function establecerConexion(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("Exito conectandonos a la base de datos")
    }catch(error){
        console.log("Fallamos a la conexion a BD"+error)
    }
}