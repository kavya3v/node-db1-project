const express=require('express');
const server=express();
var cors = require('cors');

const helmet = require('helmet');
const accountsRouter=require('./accounts-router');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/accounts',accountsRouter);

server.get('/',(req,res)=>{
   res.status(200).json({message: "Server Up!"})
})

server.use((error,req,res,next)=>{
   error.statusCode= error.statusCode ? error.statusCode : 500
   res.status(error.statusCode).json(error.message);
})

module.exports=server;
