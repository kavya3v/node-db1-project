const express=require('express');

const dbModel= require('./accounts-model')

async function validateId(req,res,next){
    const id=req.params.id;
  try {
      const [account]=await dbModel.getId(id);
      if(account){
        req.account= account;
        next();
      }else{
        res.status(400).json({message: "Given id not found!"})
      }
  } catch (err) {
      next(err)
  }
}

async function validateBody(req,res,next){
const body=req.body;
if(!body.name || !body.budget){
    const err = new Error("Please provide name and budget property!");
    err.statusCode=404;
    next(err)
}else {
    next();
}
}
module.exports={validateId,validateBody};