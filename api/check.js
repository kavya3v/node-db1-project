const router=require('express').Router();
const db=require('../data/dbConfig');

router.get('/',async (req,res,next)=>{
    try {
        const accounts= await db("accounts");
        res.status(200).json(accounts);
    } catch (err) {
      next(err)
    }
})

router.get('/:id',async (req,res,next)=>{
  try {
    const account = await db("accounts").where('id',req.params.id).limit(1);
    res.status(200).json(account)
  } catch (err) {
    next(err)
  }
})

//insert new record
router.post('/',async (req,res,next)=>{
  if(!req.body.name || !req.body.budget){
    res.status(400).json({message: "Provide name and budget property to add account"})
  }else{
  try {
    const [postedId]=await db.insert({
      name:req.body.name,
      budget:req.body.budget
    }).into("accounts")

    const [newPost] = await db("accounts").where('id',postedId)
    res.status(201).json(newPost);
  } catch (err) {
    next(err)
  }}
})

//update a record
router.put('/:id',async (req,res,next)=>{
  if(!req.body.name || !req.body.budget){
    res.status(400).json({message: "Provide name and budget property to update account"})
  }else{
  try {
    const updatedId= await db("accounts")
                    .update({name:req.body.name,
                            budget:req.body.budget
                          })
                    .where ('id',req.params.id)
    const [updatedAccount]=await db("accounts")
                              .where('id',req.params.id)
    res.status(200).json(updatedAccount)
  } catch (err) {
    next(err)
  }
}
})

//delete a record

router.delete('/:id',async (req,res,next)=>{
 try {
   const deleted= await db("accounts").where('id',req.params.id).del();
   if(deleted === 1){
    res.status(204).json({message: 'successfully deleted'});
   }else {res.status(400).json({message: 'unable to delete'});}
   
 } catch (err) {
   next(err)
 }
})
module.exports=router;
