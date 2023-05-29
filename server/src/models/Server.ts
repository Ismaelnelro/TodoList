import express, { Application } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from '../databas/config.mongoose';
import MainRoute from '../routes/Main.routes';

dotenv.config();

class Server {
  private app: Application

  constructor() {
    this.app = express();
    //Conection
    this.conectDB();
    //Middlewares
    this.middlewares();
    //Routes
    this.routes();
  }

  async conectDB() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private routes(): void {
    this.app.use('/api/v1/todolist', MainRoute)
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`)
    })
  }
}

export default Server