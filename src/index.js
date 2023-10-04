import  express  from "express";
import morgan from "morgan";
import cors from 'cors';
import path from 'path';
import { PORT } from "./config.js";


import syscomRoutes  from './routes/syscom.routes.js';


const app = express()
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(syscomRoutes);


app.listen(PORT);

console.log('Server on port', PORT);
// console.log(`environment: ${process.env.NODE_ENV}`);
