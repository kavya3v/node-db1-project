const db=require('../data/dbConfig');

async function get(limit,sort,sortBy){
    if(!limit && !sort){
    const accountList= await db('accounts');
    return accountList; 
    }else if (!sort){
        //if limit in query
        // localhost:5000/api/accounts/?limit=3&sort=desc
        const limitedList = await db('accounts').limit(limit);
        return limitedList;
    }else {
        const sorted= await db('accounts').limit(limit).orderBy(sortBy,sort);
        return sorted;
    }
   
}

async function getId(id){
 const account= await db('accounts').where('id',id)
 return account;
}

async function insert(changes){
    const [postId]= await db('accounts').insert(changes);
    const [post]= await getId(postId);
    return post;
}

async function update(id,changes){
    const updateCount= await db('accounts').where('id',id).update(changes);
    const [updated]= await getId(id);
    return updated;
}

async function remove(id){
    const deleteCount = await db('accounts').where('id',id).del();
    return deleteCount;
}

module.exports={get,
    getId,
    insert,
    update,
    remove}

