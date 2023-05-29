import mongoose, { type ConnectOptions } from "mongoose";


interface Opt extends ConnectOptions {
  useNewUrlParser: boolean
  useUnifiedTopology: boolean
  useCreateIndex?: boolean,
  useFindAndModify?: boolean
}



const dbConnection = async () => {
  const options: Opt = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // Permite desactivar el modo estricto en las consultas
  // mongoose.set('strictQuery', false)

  try {
    await mongoose.connect(process?.env?.MONGO_CNN as string, options);
    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error("Error iniciando base de datos")
  }

}

export {
  dbConnection
}