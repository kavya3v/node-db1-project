const router=require('express').Router();
const dbModel=require('./accounts-model');
const {validateId,validateBody}= require('./middleware');

router.get('/',async (req,res,next)=>{
    //query string eg ?limit=3&?sort=desc
    const limit= req.query.limit;
    const sort = req.query.sort;
    const sortBy=req.query.sortBy;
 try {
    const accountList= await dbModel.get(limit,sort,sortBy);
    res.status(200).json(accountList);
 } catch (err) {
     next(err)
 }
})

router.get('/:id', validateId, async (req,res,next)=>{
    try {
        const account= req.account;
        res.status(200).json(account);
    } catch (err) {
        next(err)
    }
})

router.post('/',validateBody,async(req,res,next)=>{
    const body=req.body;
 try {
     const post = await dbModel.insert(body);
     res.status(201).json(post);
 } catch (err) {
     next(err)
 }
})

router.put('/:id', validateId, async(req,res,next)=>{
    const id=req.params.id;
    const changes=req.body;
try {
    const update= await dbModel.update(id,changes)
    res.status(200).json(update);
} catch (err) {
    next(err)
}
})

router.delete('/:id',validateId, async(req,res,next)=>{
    const id= req.params.id;
    try {
        const deleteCount= await dbModel.remove(id);
        if(deleteCount ===1){
            res.status(200).json({message: 'delete Success!'})
        }else{
            const err=new Error('unable to delete');
            err.statusCode=400;
            next(err)
        }
    } catch (err) {
        next(err)
    }
})

// router.get('/limit',async (req,res,next)=>{
//     const limit= req.params.limit;
//     console.log('limit',limit);
// try {
//     const list= dbModel.get(limit);
//     res.status(200).json(list);
// } catch (err) {
//     next(err)
// }
// })
module.exports=router;