import express from "express"
import { config } from 'dotenv';
import indexRouter from "./routes/index.router.js";

config();
/*************
    SERVER
**************/
const server = express(); // <- Initialize Express server
const port = process.env.PORT; // <- Define the port number for the server
const ready = () => console.log("Server ready on port:" + port); //<-Callback ready to check that the server is up
server.listen(port, ready); // <- Start the server and listen on the specified port

//Directorio Público
server.use(express.static('public'));
//Lectura y parseo del bobdy
server.use(express.json());
/*************
    ROUTES
**************/
server.use("/", indexRouter);
//auth
//CRUD
