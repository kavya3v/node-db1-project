import axios from 'axios';
export const FETCH_ACCOUNT_START= 'FETCH_ACCOUNT_START';
export const FETCH_ACCOUNT_SUCCESS= 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILURE= 'FETCH_ACCOUNT_FAILURE';

export const ADD_ACCOUNT_START= 'ADD_ACCOUNT_START';
export const ADD_ACCOUNT_SUCCESS= 'ADD_ACCOUNT_SUCCESS';
export const ADD_ACCOUNT_FAILURE= 'ADD_ACCOUNT_FAILURE';

//get accounts
export const fetchAccount=()=>(dispatch)=>{
    console.log('to fetch in action!!')
dispatch({type:FETCH_ACCOUNT_START})
axios.get('http://localhost:5000/api/accounts')
    .then(res=>{
        console.log('res in fetch',res)
        dispatch({type:FETCH_ACCOUNT_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:FETCH_ACCOUNT_FAILURE,payload:err.data})
    })
}

//post accounts
export const addAccount=(newAccount)=>(dispatch)=>{
  
dispatch({type:ADD_ACCOUNT_START})
axios.post('http://localhost:5000/api/accounts',newAccount)
    .then(res=>{
        console.log('res in add',res)
        dispatch({type:ADD_ACCOUNT_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:ADD_ACCOUNT_FAILURE,payload:err.data})
    })
}